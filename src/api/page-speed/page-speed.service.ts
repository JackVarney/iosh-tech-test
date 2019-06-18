import axios from "axios";
import { config } from "../../config";
import { GooglePageSpeedResponse } from "../../core/types/GooglePageSpeedResponse";
import { MappedPageSpeedResponse } from "../../core/types/MappedPageSpeedResponse";

class PageSpeedService {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = `https://www.googleapis.com/pagespeedonline/v4/runPagespeed?key=${
      config.pageSpeedRankingsAPIKey
    }&url=`;
  }

  async getPageSpeedRanking(
    websiteUrl: string
  ): Promise<MappedPageSpeedResponse> {
    const response = await axios.get<GooglePageSpeedResponse>(
      `${this.apiUrl}${websiteUrl}`
    );

    return this.mapPageSpeedResponse(response.data);
  }

  private mapPageSpeedResponse(
    response: GooglePageSpeedResponse
  ): MappedPageSpeedResponse {
    return {
      title: response.title,
      responseCode: response.responseCode,
      speedScore: response.ruleGroups.SPEED.score,
      siteUrl: response.id
    };
  }
}

export { PageSpeedService };
