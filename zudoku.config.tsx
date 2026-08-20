import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/tenzing-api-docs",
  site: {
    title: "Tenzing API Documentation",
    logo: {
      src: { light: "/tenzing-logo.svg", dark: "/tenzing-logo.svg" },
      alt: "Tenzing Technologies",
      width: "180px",
    },
  },
  theme: {
    light: {
      primary: "#0F5D4E",
      primaryForeground: "#ffffff",
    },
    dark: {
      primary: "#3FD9B0",
      primaryForeground: "#0A3F35",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            {
              type: "link",
              icon: "folder-cog",
              label: "API Reference",
              to: "/api",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.json",
      path: "/api",
    },
  ],
};

export default config;
