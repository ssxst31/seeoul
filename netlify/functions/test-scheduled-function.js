import fetch from "node-fetch";
import { schedule } from "@netlify/functions";

// This is a sample build hook URL
const url = "https://all-exhibition-ssxst31.koyeb.app/total";

// Schedules the handler function to run at midnight on
// Mondays, Wednesday, and Friday
const handler = schedule("0 0 * * *", async () => {
  await fetch(url, {
    method: "get",
  }).then((res) => {
    console.log(res);
  });

  return {
    statusCode: 200,
  };
});

export { handler };
