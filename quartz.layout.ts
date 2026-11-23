
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import AfterBodyStars from "./quartz/components/AfterBodyStars"

// Layout only decides WHICH components appear WHERE.
// Colours live in quartz.config.ts (palette) and quartz/styles/custom.scss.

// --- reusable pieces ---------------------------------------------------------

// file tree, hiding anything tagged "explorerexclude"
const explorer = Component.Explorer({
  title: "the yards",
  filterFn: (node) => node.data?.tags?.includes("explorerexclude") !== true,
})

// search bar + dark mode toggle (+ reader mode on note pages)
const toolbar = (withReaderMode: boolean) =>
  Component.Flex({
    components: [
      { Component: Component.Search(), grow: true },
      { Component: Component.Darkmode() },
      ...(withReaderMode ? [{ Component: Component.ReaderMode() }] : []),
    ],
  })

// --- components shared across all pages --------------------------------------

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [AfterBodyStars],
  footer: Component.Footer({
    links: {
      // GitHub: "https://github.com/jackyzha0/quartz",
    },
  }),
}

// --- single pages (notes) ----------------------------------------------------

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    toolbar(true),
    explorer,
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "what's new?",
        limit: 3,
        showTags: false,
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// --- list pages (tags, folders) ----------------------------------------------

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    toolbar(false),
    explorer,
  ],
  right: [],
}
