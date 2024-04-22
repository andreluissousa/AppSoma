import { Request, Response } from "express";
import { PlusInterface } from "../interfaces/plusInterface.interface";
import PlusService from "../services/Plus.service";

class PlusController {
  async plus(req: Request, res: Response): Promise<Response> {
    try {
      const { firstValue, secondValue } = req.body;

      if (typeof firstValue !== 'number' || typeof secondValue !== 'number') {
        throw new Error('Os valores devem ser números.');
      }

      const plus: PlusInterface = {
        firstValue: firstValue,
        secondValue: secondValue,
      };

      const result = await PlusService.plusNumbers(plus);

      return res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro interno.';
      return res.status(400).json({
        success: false,
        error: errorMessage,
      });
    }
  }
}

export default new PlusController();