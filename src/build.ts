import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "./dist",
  format: "esm",
  plugins: [dts()],
});
