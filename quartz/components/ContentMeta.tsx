
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  showReadingTime: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (!text) return null

    const modifiedDate = fileData.dates?.modified

    const segments: (string | JSX.Element)[] = []

    if (modifiedDate) {
      segments.push(
        <span>
          {new Date(modifiedDate).toLocaleDateString(cfg.locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>,
      )
    }

    if (options.showReadingTime) {
      const { minutes } = readingTime(text)
      segments.push(<span>{` ☀︎ ${Math.ceil(minutes)} min read`}</span>)
    }

    return (
      <div class={classNames(displayClass, "content-meta")}>
        <h3 class="last-modified-label">
  	Last modified
	</h3>
        <p>{segments}</p>
      </div>
    )
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
