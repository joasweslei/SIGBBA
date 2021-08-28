import express from "express";
import http from "http";

import routes from "./routes";

class App {
  private app;
  public server;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
