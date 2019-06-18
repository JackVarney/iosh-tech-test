const config = {
  pageSpeedRankingsAPIKey: process.env.PAGESPEED_API_KEY
};

debugger;

if (config.pageSpeedRankingsAPIKey === undefined) {
  throw new Error(
    `Please create a .env file with a variable of 'PAGESPEED_API_KEY' and assign it your google pagespeed API key.`
  );
}

export { config };
