"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
const config = {
  pageSpeedRankingsAPIKey: process && process.env && process.env.PAGESPEED_API_KEY || "AIzaSyCiUkoDaUCPXJnXiPbqZCugtFy06_jW-QE"
};
exports.config = config;
debugger;

if (config.pageSpeedRankingsAPIKey === undefined) {
  throw new Error(`Please create a .env file with a variable of 'PAGESPEED_API_KEY' and assign it your google pagespeed API key.`);
}