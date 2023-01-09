const fetch = require("node-fetch");
import { schedule } from "@netlify/functions";

const BUILD_HOOK = "https://api.netlify.com/build_hooks/63bb90ab0e674d226f545a62";

const handler = schedule("57 13 * * *", async () => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then((response) => {
    console.log("Build hook response:", response);
  });

  return {
    statusCode: 200,
  };
});

export { handler };
