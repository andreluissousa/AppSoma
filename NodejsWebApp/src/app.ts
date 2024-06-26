import express from "express";
import cors from "cors";

import nfe from "./routes/plus";


class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.routes();

  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }


  private routes(): void {
    this.express.use("/api/plus", nfe);
  }
}

export default new App().express;
