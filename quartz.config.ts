
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Anusha's Garden",
    pageTitleSuffix: " | Anusha's Garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "anusha.garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Arima", // headings
        body: "Montserrat", // body text
        code: "IBM Plex Mono", // code
      },
      // The whole site is coloured from this palette. custom.scss reads these
      // as CSS variables (--light, --dark, --secondary, ...) and derives every
      // other colour from them, so this is the only place to change colours.
      colors: {
        lightMode: {
          light: "#F7F4EF", // page background
          lightgray: "#DDD7D0", // borders, dividers
          gray: "#9A928A", // muted text, graph nodes
          darkgray: "#514C46", // body text
          dark: "#292622", // headings, titles
          secondary: "#80634F", // links, accents
          tertiary: "#708B7E", // link hover, tags, visited graph nodes
          highlight: "rgba(128, 99, 79, 0.12)", // internal-link background
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#522E38", // page background (burgundy)
          lightgray: "#6E4452", // borders, dividers
          gray: "#BFA0A8", // muted text, graph nodes
          darkgray: "#F3E6DD", // body text
          dark: "#FFF4EC", // headings, titles
          secondary: "#F2B880", // links, accents (orange)
          tertiary: "#E7CFBC", // link hover, sidebar text (beige)
	  highlight: "rgba(245, 222, 179, 0.12)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
