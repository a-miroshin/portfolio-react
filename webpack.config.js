const path = require("path");

module.exports = {
  // ...existing code...
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
    extensions: [".js", ".jsx", ".json"],
  },
  // ...existing code...
};
