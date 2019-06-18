"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageSpeedService = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PageSpeedService {
  constructor() {
    this.apiUrl = `https://www.googleapis.com/pagespeedonline/v4/runPagespeed?key=${_config.config.pageSpeedRankingsAPIKey}&url=`;
  }

  async getPageSpeedRanking(websiteUrl) {
    const response = await _axios.default.get(`${this.apiUrl}${websiteUrl}`);
    return this.mapPageSpeedResponse(response.data);
  }

  mapPageSpeedResponse(response) {
    return {
      title: response.title,
      responseCode: response.responseCode,
      speedScore: response.ruleGroups.SPEED.score,
      siteUrl: response.id
    };
  }

}

exports.PageSpeedService = PageSpeedService;