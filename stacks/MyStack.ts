import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/hello.handler",
    },

  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
