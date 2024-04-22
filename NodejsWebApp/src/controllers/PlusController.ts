import { Request, Response } from "express";
import { PlusInterface } from "../interfaces/plusInterface.interface";
import PlusService from "../services/Plus.service";

class PlusController {
  async plus (req: Request, res: Response): Promise<Response> {
    try{
      const {
        body: { firstValue, secondValue },
      } = req;

      const plus: PlusInterface = {
        firstValue: firstValue,
        secondValue: secondValue,
      };

      const result = await PlusService.plusNumbers(plus);
      
      return res.json({
        sucesso: true,
        data: result,
      });
    } catch (e) {
      let msgError = "";
      if (e.response && e.response.config) {
        const config = e.response.config;
        msgError = `[${config.method}] ${config.url} : ${
          e.message
        } - ${JSON.stringify(e.response.data)}`;
      } else {
        msgError = e.message;
      }

      const plusResult = {
        sucess: false,
        errors: msgError,
      };

      return res.json(plusResult).status(400);
    }
  }
}

export default new PlusController();