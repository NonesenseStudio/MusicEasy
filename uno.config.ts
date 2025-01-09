import { defineConfig } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    btn: "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700",
    "icon-btn":
      "inline-block cursor-pointer select-none opacity-75 transition hover:opacity-100",
    "flex-col": ["flex-col", "flex flex-col"],
    "wh-full": ["wh-full", "w-full h-full"],
  },
});
