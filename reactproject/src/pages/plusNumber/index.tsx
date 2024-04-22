import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlusCalculation from '../../actions/plusNumberAction';
import InputComponent from '../../genericComponents/inputs';
import ButtonComponent from '../../genericComponents/buttons';

function PlusNumber() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    setIsLoading(true);
    setError('');

    try {
      const soma = await PlusCalculation(valor1, valor2);
      setResultado(`Resultado: ${soma}`);
    } catch (error: any) {
      setError(error.message as string);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setValor1('');
    setValor2('');
    setResultado('');
    setError('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Calculadora de Soma</h2>
      <form className="row g-3 align-items-end">
        <InputComponent label="Valor 1" value={valor1} onChange={(e) => setValor1(e.target.value)} />
        <InputComponent label="Valor 2" value={valor2} onChange={(e) => setValor2(e.target.value)} />
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
