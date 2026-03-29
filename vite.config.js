const react = require("@vitejs/plugin-react");
const { transformWithEsbuild } = require("vite");

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
  plugins: [treatJsFilesAsJsx(), react()],
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

