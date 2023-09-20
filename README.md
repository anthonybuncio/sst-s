<p align="center">
  <a href="https://sst.dev/">
      <svg version="1.1" id="Uploaded to svgrepo.com" width="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .linesandangles_een{fill:#111918;} </style> <path class="linesandangles_een" d="M27,13V7h-7V4h-8v3H5v6h3v4H5.883l1.222,11h17.79l1.222-11H24v-4H27z M14,6h4v1h-4V6z M23.105,26H8.895l-0.778-7h15.766L23.105,26z M12,16v-2h2v2H12z M18,16v-2h2v2H18z M7,11V9h18v2H7z"></path> </g></svg>
  </a>
  <h1 align="center">StealthMachine</h1>
</p>

<p align="center">
   <a href="https://sst.dev/discord"><img alt="Discord" src="https://img.shields.io/discord/983865673656705025?style=flat-square&label=Discord" /></a>
  <a href="https://www.npmjs.com/package/sst"><img alt="npm" src="https://img.shields.io/npm/v/sst.svg?style=flat-square" /></a>
  <a href="https://github.com/sst/sst/actions/workflows/test.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/sst/sst/test.yml?style=flat-square&branch=master" /></a>
</p>

---

SST makes it easy to build modern full-stack applications on AWS. Watch the [**SST in 100 seconds**](https://youtu.be/JY_d0vf-rfw) video to learn more.

```bash
$ npx create-sst@latest
```

### Pick your frontend

Deploy Next.js, Svelte, Remix, Astro, Solid, or any static site to AWS.

- [**Next.js**](https://docs.sst.dev/start/nextjs)
- [**Svelte**](https://docs.sst.dev/start/svelte)
- [**Remix**](https://docs.sst.dev/start/remix)
- [**Astro**](https://docs.sst.dev/start/astro)
- [**Solid**](https://docs.sst.dev/start/solid)

### Add any feature

SST gives you the full power of AWS. Making it easy to add any feature to your product.

- [File uploads](https://docs.sst.dev/file-uploads) — Allow your users to upload files to S3.
- [Auth](https://docs.sst.dev/auth) — Authenticate your users through any auth provider.
- [Events](https://docs.sst.dev/events) — Run tasks after your app has returned to your user.
- [Databases](https://docs.sst.dev/databases) — Use a serverless SQL or NoSQL database to power your app.
- [Jobs](https://docs.sst.dev/cron-jobs) — Run cron jobs or long running jobs powered by serverless functions.
- [APIs](https://docs.sst.dev/apis) — Add a dedicated serverless REST, GraphQL, or WebSocket API to your app.

### Collaborate with your team

Finally, you can `git push` to deploy using [_**Seed**_](https://seed.run), a service built by the team behind SST. And you can work on your apps together with your team with automatic preview environments.

---

**Notes**

- [SST Template Used](https://github.com/sst/sst/tree/master/examples/rest-api-mongodb)

### YAHOO! Sports

**NBA**

**NFL**

- Teams/Standings - https://sports.yahoo.com/site/api/resource/sports.league.standings;alias=mini_standings;combineGroups=;conference=;count=100;division=;league=nfl;leagueSeason=standings;season=;seasonPeriod=;topDivisionOnly=?bkt=sd-gam-migration1-1&device=desktop&ecma=modern&feature=enableCMP%2CenableConsentData%2CenableGAMAds%2CenableHeaderBidding%2CenableYBarFavTeams%2CdisableHistoricalStats%2CfuseCss%2Csp-nav-test%2CoathPlayer%2CenableMonalixaSportsbookPromos%2CenableNewsletterHomepageModule%2CenableCCPAFooter%2CloadGameNotifs%2CenableReconsent%2CshowFutures%2CenableUserService%2CenableNotificationSettingsPage%2CenableFantasyFlyout%2CdisableCommentsMessage%2CenableLGPD%2Cwatchtogether%2CenableXrayNcp%2CenableXrayPeopleSportsEntities%2CenableXrayTeamEntities%2CenableXrayTopicEntities%2CenableAdlite%2CenableAdLiteUpSellFeedback%2CenableGAMEdgeToEdge%2CenableMonalixa3pBodySlot%2CenableMonalixaBodySlot%2CenableMonalixaFreqCapping%2CenableMonalixaOverlayUpsell%2CenableMonalixaPlacements%2CenableMonalixaYBarUpsell%2CenableSportsHeaderUH3%2CenableSportsRedesignLayout%2CenableXrayAthleteHeaderV2%2CenableXrayNcpV2SalienceMerge%2Clivecoverage%2CnewContentAttribution%2CcaasSmartphone%2Ccanvass%2CdesktopNotifications%2CsearchAssist%2Clicensed-only%2CdfsFavoriteTeamPromo%2CenableOlyAthletePage%2CenableGameDriveOdds%2CyahooDayOne%2CplayerNews%2CenableMonalixaNcaabBanner%2CnewLogo%2CsponsoredAds%2CenableBodyAdSlotsNewMap%2CenableRRTriggerOnViewport&intl=us&lang=en-US&partner=none&prid=5007hjligmr76&region=US&site=sports&tz=America%2FChicago&ver=1.0.10439&returnMeta=true

- Current Scores - https://api-secure.sports.yahoo.com/v1/editorial/s/scoreboard?lang=en-US&region=US&tz=America%2FChicago&ysp_redesign=1&ysp_platform=desktop&leagues=nfl&week=3&season=current&sched_states=2&v=2&ysp_enable_last_update=1&include_last_play=1

Query string parameters:

```json
{
  "lang": "en-US",
  "region": "US",
  "tz": "America/Chicago",
  "ysp_redesign": 1,
  "ysp_platform": "desktop",
  "leagues": "nfl",
  "week": 2,
  "season": "current",
  "sched_states": 2,
  "v": 2,
  "ysp_enable_last_update": 1,
  "include_last_play": 1
}
```

**MLB**

- League Data/Standings - https://sports.yahoo.com/site/api/resource/sports.league.standings;alias=full_standings;combineGroups=;conference=;count=100;division=;league=mlb;leagueSeason=standings;season=;seasonPeriod=;topDivisionOnly=?bkt=sd-gam-migration1-1&device=desktop&ecma=modern&feature=enableCMP%2CenableConsentData%2CenableGAMAds%2CenableHeaderBidding%2CenableYBarFavTeams%2CdisableHistoricalStats%2CfuseCss%2Csp-nav-test%2CoathPlayer%2CenableMonalixaSportsbookPromos%2CenableNewsletterHomepageModule%2CenableCCPAFooter%2CloadGameNotifs%2CenableReconsent%2CshowFutures%2CenableUserService%2CenableNotificationSettingsPage%2CenableFantasyFlyout%2CdisableCommentsMessage%2CenableLGPD%2Cwatchtogether%2CenableXrayNcp%2CenableXrayPeopleSportsEntities%2CenableXrayTeamEntities%2CenableXrayTopicEntities%2CenableAdlite%2CenableAdLiteUpSellFeedback%2CenableGAMEdgeToEdge%2CenableMonalixa3pBodySlot%2CenableMonalixaBodySlot%2CenableMonalixaFreqCapping%2CenableMonalixaOverlayUpsell%2CenableMonalixaPlacements%2CenableMonalixaYBarUpsell%2CenableSportsHeaderUH3%2CenableSportsRedesignLayout%2CenableXrayAthleteHeaderV2%2CenableXrayNcpV2SalienceMerge%2Clivecoverage%2CnewContentAttribution%2CcaasSmartphone%2Ccanvass%2CdesktopNotifications%2CsearchAssist%2Clicensed-only%2CdfsFavoriteTeamPromo%2CenableOlyAthletePage%2CenableGameDriveOdds%2CyahooDayOne%2CplayerNews%2CenableMonalixaNcaabBanner%2CnewLogo%2CsponsoredAds%2CenableBodyAdSlotsNewMap%2CenableRRTriggerOnViewport&intl=us&lang=en-US&partner=none&prid=6oug6jligmrlp&region=US&site=sports&tz=America%2FChicago&ver=1.0.10439&returnMeta=true

- Scores - https://api-secure.sports.yahoo.com/v1/editorial/s/scoreboard?lang=en-US&region=US&tz=America%2FChicago&ysp_redesign=1&ysp_platform=desktop&leagues=mlb&date=2023-09-19&v=2&ysp_enable_last_update=1

Query string parameters:

```json
{
"lang": "en-US",
"region": "US",
"tz": "America/Chicago",
"ysp_redesign": 1,
"ysp_platform": "desktop",
"leagues": "mlb",
"date": 2023-09-20,
"v": 2,
"ysp_enable_last_update": 1
}
```
