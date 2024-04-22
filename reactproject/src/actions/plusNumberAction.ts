import axios from 'axios';

const baseUrl = 'http://localhost:3000/api'

const PlusCalculation = async (firstValue: any, secondValue: any) => {
  try {
    const response = await axios.post(`${baseUrl}/plus`, {
      firstValue: parseInt(firstValue),
      secondValue: parseInt(secondValue)
    });

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Erro ao processar a soma. Por favor, tente novamente.');
    }
  } catch (error) {
    throw new Error('Ocorreu um erro ao processar a requisição.');
  }
};

export default PlusCalculation;
