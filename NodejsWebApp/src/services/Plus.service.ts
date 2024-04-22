import { PlusInterface } from "../interfaces/plusInterface.interface";

class PlusService {
  
  async plusNumbers(plus: PlusInterface): Promise<number> {
    return plus.firstValue + plus.secondValue;
  }
}

export default new PlusService();