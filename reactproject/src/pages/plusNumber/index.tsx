import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlusCalculation from '../../actions/plusNumberAction';
import InputComponent from '../../genericComponents/inputs';
import ButtonComponent from '../../genericComponents/buttons';

function PlusNumber() {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [resultado, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    setIsLoading(true);
    setError('');
  
    if (!firstValue || !secondValue) {
      setError('Por favor, insira valores válidos para calcular.');
      setIsLoading(false);
      return;
    }
  
    try {
      const plusResult = await PlusCalculation(firstValue, secondValue);
      setResult(`Resultado: ${plusResult}`);
    } catch (error: any) {
      setError(error.message as string);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setFirstValue('');
    setSecondValue('');
    setResult('');
    setError('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Calculadora de Soma</h2>
      <form className="row g-3 align-items-end">
        <InputComponent label="Valor 1" value={firstValue} onChange={(e) => setFirstValue(e.target.value)} />
        <InputComponent label="Valor 2" value={secondValue} onChange={(e) => setSecondValue(e.target.value)} />
        <ButtonComponent text="Calcular" onClick={handleCalculate} disabled={isLoading} isClear={false} />
        <ButtonComponent text="Limpar" onClick={handleClear} disabled={isLoading} isClear />
      </form>
      {isLoading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {resultado && (
        <div className="mt-3 d-inline-block w-100" style={{ overflow: 'hidden' }}>
          <div className="p-3" style={{ backgroundColor: '#ffffcc', borderRadius: '10px', width: 'calc(100% / 3)' }}>{resultado}</div>
        </div>
      )}
    </div>
  );
}

export default PlusNumber;
