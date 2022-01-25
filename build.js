require("esbuild").buildSync({
  entryPoints: ["./src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  loader: { ".js": "jsx" },
  outfile: "./dist/bundle.js"
});
