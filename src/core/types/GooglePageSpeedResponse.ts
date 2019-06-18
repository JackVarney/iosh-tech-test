export interface GooglePageSpeedResponse {
  captchaResult: string;
  kind: string;
  id: string;
  responseCode: number;
  title: string;
  ruleGroups: RuleGroups;
  loadingExperience: LoadingExperience;
  pageStats: PageStats;
  formattedResults: FormattedResults;
  version: Version;
}

interface RuleGroups {
  SPEED: SPEED;
}
interface SPEED {
  score: number;
}
interface LoadingExperience {
  id: string;
  metrics: Metrics;
  overall_category: string;
  initial_url: string;
}
interface Metrics {
  DOM_CONTENT_LOADED_EVENT_FIRED_MS: DOM_CONTENT_LOADED_EVENT_FIRED_MS;
  FIRST_CONTENTFUL_PAINT_MS: FIRST_CONTENTFUL_PAINT_MS;
}
interface DOM_CONTENT_LOADED_EVENT_FIRED_MS {
  median: number;
  distributions: DistributionsItem[];
  category: string;
}
interface DistributionsItem {
  min: number;
  max?: number;
  proportion: number;
}
interface FIRST_CONTENTFUL_PAINT_MS {
  median: number;
  distributions: DistributionsItem[];
  category: string;
}
interface PageStats {
  numberResources: number;
  numberHosts: number;
  totalRequestBytes: string;
  numberStaticResources: number;
  htmlResponseBytes: string;
  overTheWireResponseBytes: string;
  cssResponseBytes: string;
  imageResponseBytes: string;
  javascriptResponseBytes: string;
  otherResponseBytes: string;
  numberJsResources: number;
  numberCssResources: number;
  numTotalRoundTrips: number;
  numRenderBlockingRoundTrips: number;
}
interface FormattedResults {
  locale: string;
  ruleResults: RuleResults;
}
interface RuleResults {
  AvoidLandingPageRedirects: AvoidLandingPageRedirects;
  EnableGzipCompression: EnableGzipCompression;
  LeverageBrowserCaching: LeverageBrowserCaching;
  MainResourceServerResponseTime: MainResourceServerResponseTime;
  MinifyCss: MinifyCss;
  MinifyHTML: MinifyHTML;
  MinifyJavaScript: MinifyJavaScript;
  MinimizeRenderBlockingResources: MinimizeRenderBlockingResources;
  OptimizeImages: OptimizeImages;
  PrioritizeVisibleContent: PrioritizeVisibleContent;
}
interface AvoidLandingPageRedirects {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
}
interface Summary {
  format: string;
  args?: ArgsItem[];
}
interface ArgsItem {
  type: string;
  key: string;
  value: string;
}
interface EnableGzipCompression {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
  urlBlocks: UrlBlocksItem[];
}
interface UrlBlocksItem {
  header: Header;
  urls?: UrlsItem[];
}
interface Header {
  format: string;
  args?: ArgsItem[];
}
interface UrlsItem {
  result: Result;
}
interface Result {
  format: string;
  args: ArgsItem[];
}
interface LeverageBrowserCaching {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
  urlBlocks: UrlBlocksItem[];
}
interface MainResourceServerResponseTime {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
}
interface MinifyCss {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
  urlBlocks: UrlBlocksItem[];
}
interface MinifyHTML {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
  urlBlocks: UrlBlocksItem[];
}
interface MinifyJavaScript {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
  urlBlocks: UrlBlocksItem[];
}
interface MinimizeRenderBlockingResources {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
  urlBlocks: UrlBlocksItem[];
}
interface OptimizeImages {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
  urlBlocks: UrlBlocksItem[];
}
interface PrioritizeVisibleContent {
  localizedRuleName: string;
  ruleImpact: number;
  groups: string[];
  summary: Summary;
  urlBlocks: UrlBlocksItem[];
}
interface Version {
  major: number;
  minor: number;
}
