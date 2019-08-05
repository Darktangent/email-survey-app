// figure out which credential to return
if (process.env.NODE_ENV === "production") {
  // return prod set
  module.exports = rquire("./prod");
} else {
  // dev keys
  module.exports = require("./dev");
}
