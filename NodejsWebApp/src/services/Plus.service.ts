import { PlusInterface } from "../interfaces/plusInterface.interface";

class PlusService {
  
  async plusNumbers(plus: PlusInterface): Promise<number> {
    const isValid = await this.validateNumbers(plus);
    if (!isValid) {
      throw new Error('Números inválidos.');
    }
    return plus.firstValue + plus.secondValue;
  }

  private async validateNumbers(plus: PlusInterface): Promise<boolean> {
    return typeof plus.firstValue === 'number' && typeof plus.secondValue === 'number';
  }
}

export default new PlusService();