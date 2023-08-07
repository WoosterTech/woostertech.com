import { string } from "prop-types";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const client_id = process.env.TINA_CLIENT_ID
const token = process.env.TINA_TOKEN
const search_token = process.env.TINA_SEARCH_TOKEN

export default defineConfig({
  branch,
  clientId: client_id
  token: token

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
  search: {
    tina: {
      indexerToken: search_token,
      stopwordLanguages: ['eng'],  
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
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
                name: 'netlify_imgproc',
                nameOverride: 'netlify/imgproc',
                label: 'Netlify Processed Image',
                match: {
                  start: '{{',
                  end: '}}',
                },
                fields: [
                  {
                    name: "filename",
                    label: "File Name",
                    type: 'string',
                    required: true,
                  },
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
