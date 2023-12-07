import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  presets: [presetUno()],
  rules: [[["html, body", { margin: 0, padding: 0 }]]],
});
