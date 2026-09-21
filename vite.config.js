const fs = require("fs");
const path = require("path");
const react = require("@vitejs/plugin-react");
const { transformWithEsbuild } = require("vite");

function copyIndexTo404() {
  return {
    name: "copy-index-to-404",
    closeBundle() {
      const indexFile = path.join("dist", "index.html");
      if (fs.existsSync(indexFile)) {
        fs.copyFileSync(indexFile, path.join("dist", "404.html"));
      }
    },
  };
}

/** @type {import('vite').UserConfig} */
function treatJsFilesAsJsx() {
  return {
    name: "treat-js-files-as-jsx",
    enforce: "pre",
    async transform(code, id) {
      const normalizedId = id.replaceAll("\\", "/");
      if (!normalizedId.includes("/src/") || !normalizedId.endsWith(".js"))
        return null;

      return transformWithEsbuild(code, id, {
        loader: "jsx",
        jsx: "automatic",
      });
    },
  };
}

module.exports = {
  base: process.env.NODE_ENV === "production" ? "/bryan-analytics-lab/" : "/",
  plugins: [treatJsFilesAsJsx(), react(), copyIndexTo404()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
};

