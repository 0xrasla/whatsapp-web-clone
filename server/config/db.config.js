(() => {
  const mongoose = require("mongoose");

  const { MONGO_URL } = process.env;

  try {
    const connection = mongoose
      .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((e) => {
        console.log("Db Connected ✅");
      })
      .catch((e) => {
        console.log(e);
      });

    exports.mongoose_connection = connection;
  } catch (e) {}
})();
