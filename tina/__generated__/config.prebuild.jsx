// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: "7d4a0a9f-6c67-4b2a-8e50-3ddb43043ebf",
  // Get this from tina.io
  token: "699d3a03a4989b32de118ab6051433661baab097",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "content/blog",
        defaultItem: () => {
          return {
            author: "authors/karl.md",
            draft: true,
            date: (/* @__PURE__ */ new Date()).toISOString()
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "heroHeading",
            label: "Hero Heading",
            description: 'Typically copy-paste of "Title"'
          },
          {
            type: "string",
            name: "heroSubHeading",
            label: "Sub Heading"
          },
          {
            type: "image",
            label: "Hero image",
            name: "heroBackground"
          },
          {
            label: "Author",
            name: "author",
            type: "reference",
            collections: ["author"]
          },
          {
            type: "datetime",
            label: "Date",
            name: "date"
          },
          {
            label: "Draft",
            name: "draft",
            type: "boolean"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "netlify_imgproc",
                nameOverride: "netlify/imgproc",
                label: "Netlify Processed Image",
                match: {
                  start: "{{",
                  end: "}}"
                },
                fields: [
                  {
                    name: "filename",
                    label: "File Name",
                    type: "string",
                    required: true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Author",
        name: "author",
        path: "authors",
        fields: [
          {
            label: "Name",
            name: "name",
            type: "string"
          },
          {
            label: "Avatar",
            name: "avatar",
            type: "string"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
