import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
<<<<<<< HEAD
       config: {
=======
      config: {
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
        contextType: "./context#DataSourceContext",
        mappers: {
          Track: "./models#TrackModel",
          Author: "./models#AuthorModel"
        },
      },
    },
  },
};

<<<<<<< HEAD
export default config;
=======
export default config;
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
