"use strict";

var _app = require("./app");

const PORT = process && process.env && process.env.PORT || undefined || 3000;

_app.app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});