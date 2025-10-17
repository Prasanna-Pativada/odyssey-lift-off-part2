import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          Track: "./models#TrackModel",
<<<<<<< HEAD
          Author: "./models#AuthorModel"
=======
          Author: "./models#AuthorModel",
          Module: "./models#ModuleModel"
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
        },
      },
    },
  },
};

export default config;
