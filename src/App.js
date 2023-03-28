import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState([]);
  const [calc, setCalc] = useState([]);
  const [sinal, setSinal] = useState('');
  const [result, setResult] = useState('');

  const handleClick = ({ target }) => {
    setResult('');
    setNumber([...number, { number: target.value }]);
  };

  const handleSoma = ({ target }) => {
    const sum = number;
    setCalc(sum);
    setNumber([]);
    setSinal(target.value)
  }

  const returnResult = (num1, num2) => {
    if (sinal === '+') return (num1 + num2);
    if (sinal === '-') return (num1 - num2);
    if (sinal === '*') return (num1 * num2);
    if (sinal === '/') return (num1 / num2);
    if (sinal === 'N') return (num1 ** num2);
    if (sinal === '%') {
      return (num1 / 100) * num2;
    };
  }

  const handleIgual = () => {
    setResult('');
    const sum = number;
    const sum2 = calc;
    const total2 = sum2.reduce((resultado, quantidade) => {
      return (resultado + quantidade.number);
    }, []);
    if (sinal === 'R') {
      setResult(Math.sqrt(total2));
      setNumber([]);
      setCalc([]);
    } else if (sinal === 'C') {
      setResult(Math.cos(total2));
      setNumber([]);
      setCalc([]);
    } else if (sinal === 'S') {
      setResult(Math.sin(total2));
      setNumber([]);
      setCalc([]);
    } else if (sinal === 'L') {
      setResult(Math.log(total2));
      setNumber([]);
      setCalc([]);
    } else {
      const total = sum.reduce((resultado, quantidade) => {
        return (resultado + quantidade.number);
      }, []);
      setResult(returnResult(Number(total2), Number(total)));
      setNumber([]);
      setCalc([]);
    }

  }
  return (
    <div className="App">
      <h2>CALC</h2>
      <input type="text" placeholder='Total' value={number.length > 0 ? number.reduce((r, c) => {
        return r + c.number
      }, []) : result} />
      <div className='calc'>
        <button type="button" value='0' onClick={(event) => handleClick(event)}>0</button>
        <button type="button" value='1' onClick={(event) => handleClick(event)}>1</button>
        <button type="button" value='2' onClick={(event) => handleClick(event)}>2</button>
        <button type="button" value='3' onClick={(event) => handleClick(event)}>3</button>
        <button type="button" value='4' onClick={(event) => handleClick(event)}>4</button>
        <button type="button" value='5' onClick={(event) => handleClick(event)}>5</button>
        <button type="button" value='6' onClick={(event) => handleClick(event)}>6</button>
        <button type="button" value='7' onClick={(event) => handleClick(event)}>7</button>
        <button type="button" value='8' onClick={(event) => handleClick(event)}>8</button>
        <button type="button" value='9' onClick={(event) => handleClick(event)}>9</button>
        <button type="button" value='.' onClick={(event) => handleClick(event)}>.</button>
        <button type="button" value='+' onClick={(event) => handleSoma(event)}>+</button>
        <button type="button" value='-' onClick={(event) => handleSoma(event)}>-</button>
        <button type="button" value='*' onClick={(event) => handleSoma(event)}>*</button>
        <button type="button" value='/' onClick={(event) => handleSoma(event)}>/</button>
        <button type="button" value='%' onClick={(event) => handleSoma(event)}>%</button>
        <button type="button" value='R' onClick={(event) => handleSoma(event)}>raiz</button>
        <button type="button" value='N' onClick={(event) => handleSoma(event)}>n²..</button>
        <button type="button" value='C' onClick={(event) => handleSoma(event)}>Cos</button>
        <button type="button" value='S' onClick={(event) => handleSoma(event)}>Sen</button>
        <button type="button" value='L' onClick={(event) => handleSoma(event)}>Log</button>
        <button type="button" value='=' onClick={handleIgual}>=</button>
        <button type="button" onClick={() => setResult('')}>clear</button>
      </div>
    </div>
  );
}

export default App;
