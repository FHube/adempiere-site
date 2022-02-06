import { sidebarConfig } from "vuepress-theme-hope";

export default sidebarConfig([
  "",
  {
    title: "快速上手",
    icon: "creative",
    collapsable: false,
    prefix: "guide/",
    children: ["", "tag"],
  },
  {
    title: "介绍",
    icon: "info",
    collapsable: false,
    prefix: "intro/",
    children: [
      "history",
      "head",
      "basic",
      "link",
      "image",
      "svg",
      "media",
      "table",
      "embed",
      "format",
      "layout",
    ],
  },
  {
    title: "定义",
    icon: "info",
    prefix: "definition/",
    children: ["uri", "url", "seo", "mime"],
  },
]);
