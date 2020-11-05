module.exports = [
  "",
  {
    title: "HTML",
    icon: "html",
    collapsable: false,
    prefix: "html/",
    children: [
      "",
      {
        title: "快速上手",
        icon: "creative",
        collapsable: false,
        prefix: "guide/",
        children: ["", "tag"],
      },
      "head",
      "basic",
      "link",
      "emmet",
      "format",
      "layout",
    ],
  },
  {
    title: "CSS",
    icon: "css",
    collapsable: false,
    prefix: "css/",
    children: [
      "",
      {
        title: "快速上手",
        icon: "creative",
        collapsable: false,
        prefix: "guide/",
        children: [
          "",
          "selector",
          "declaration",
          "import",
          "cascade",
          "common",
        ],
      },
      {
        title: "CSS 布局",
        icon: "layout",
        collapsable: false,
        prefix: "layout/",
        children: ["", "box", "flex", "exercise", "grid"],
      },
      "media",
    ],
  },
  "js",
  {
    title: "jQuery",
    icon: "jQuery",
    collapsable: false,
    path: "jQuery/",
    prefix: "jQuery/",
    children: [
      "",
      "intro",
      "selector",
      "operateDOM",
      "modifyDOM",
      "event",
      "animation",
      "AJAX",
      "extend",
    ],
  },
  "https",
];
