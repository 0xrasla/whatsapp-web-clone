const app = require("./app");

(() => {
  const PORT = process.env.port || 4080;
  app.listen(PORT, () => {
    console.log(`Server Started at 🚀, http://localhost:${PORT}`);
  });
})();
