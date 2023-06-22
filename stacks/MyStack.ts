import { StackContext, Api, Cron, Config } from "sst/constructs";

export function API({ stack }: StackContext) {
  // As cron job

  // new Cron(stack, "Cron", {
  //   schedule: "rate(5 minutes)",
  //   job: "packages/functions/src/hello.handler",
  // });

  // Api request only

  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/hello.handler",
    },

  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
