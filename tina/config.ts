import { string } from "prop-types";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "7d4a0a9f-6c67-4b2a-8e50-3ddb43043ebf", // Get this from tina.io
  token: "699d3a03a4989b32de118ab6051433661baab097", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
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
            date: new Date().toISOString(),
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "heroHeading",
            label: "Hero Heading",
            description: "Typically copy-paste of \"Title\"",
          },
          {
            type: "string",
            name: "heroSubHeading",
            label: "Sub Heading",
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'heroBackground',
          },
          {
            label: "Author",
            name: "author",
            type: "reference",
            collections: ["author"],
          },
          {
            type: "datetime",
            label: "Date",
            name: "date",
          },
          {
            label: "Draft",
            name: "draft",
            type: "boolean",
          },
          {
            label: "Categories",
            name: "categories",
            type: "string",
            list: true,
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: 'WarningCallout',
                label: 'WarningCallout',
                match: {
                  start: '{{',
                  end: '}}',
                },
                fields: [
                  {
                    name: "content",
                    label: "Content",
                    type: 'string',
                    required: true,
                    ui: {
                      component: 'textarea'
                    }
                  }
                ],
              },
            ]
          }
        ]
      },
      {
        label: "Author",
        name: 'author',
        path: 'authors',
        fields: [
          {
            label: "Name",
            name: "name",
            type: "string",
          },
          {
            label: "Avatar",
            name: "avatar",
            type: "string",
          },
        ],
      },
    ],
  },
});
