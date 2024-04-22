import axios from 'axios';

const baseUrl = 'http://localhost:3000/api'

const PlusCalculation = async (valor1: any, valor2: any) => {
  try {
    const response = await axios.post(`${baseUrl}/plus`, {
      firstValue: parseInt(valor1),
      secondValue: parseInt(valor2)
    });

    if (response.data && response.data.sucesso) {
      return response.data.data;
    } else {
      throw new Error('Erro ao processar a soma. Por favor, tente novamente.');
    }
  } catch (error) {
    throw new Error('Ocorreu um erro ao processar a requisição.');
  }
};

export default PlusCalculation;
