import { StackContext, Api, Cron } from "sst/constructs";

export function API({ stack }: StackContext) {
  new Cron(stack, "Cron", {
    schedule: "rate(5 minutes)",
    job: "packages/functions/src/hello.handler",
  });

  // const api = new Api(stack, "api", {
  //   routes: {
  //     "GET /": "packages/functions/src/hello.handler",
  //   },

  // });

  // stack.addOutputs({
  //   ApiEndpoint: api.url,
  // });
}
