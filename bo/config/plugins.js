module.exports = {
    //
    graphql: {
      enabled: true,
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: true,
        },
      },
    },
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
        apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
        appFilter: "your-app-name-on-vercel",
        teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  };