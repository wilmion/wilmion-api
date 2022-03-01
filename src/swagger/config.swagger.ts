import { Application } from "express";

//Documentation
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "WILMION API",
      version: "1.0.0",
      description: "A simple express library API",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./src/swagger/*.ts"],
};

export function setupSwagger(app: Application) {
  const specs = swaggerJSDoc(options);

  app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
}
