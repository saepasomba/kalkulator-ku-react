import logo from './logo.svg';
import styles from './App.module.css';
import CustomButton from './components/CustomButton/CustomButton'
import { useState } from 'react';

function App() {
  var [currentDigit, setCurrentDigit] = useState('0')
  const handleClick = (input) => {
  }

  return (
    <div className={styles.calculatorContainer}>


      <div className={styles.buttonGroup}>
        <div className={styles.calculatorScreen}>
          <p className={styles.screenNumbers}>{currentDigit}</p>
        </div>
        <CustomButton type='btn-gray' label='C' onClick={() => handleClick("C")} />
        <CustomButton type='btn-gray' label='+/-' onClick={() => handleClick("+/-")} />
        <CustomButton type='btn-gray' label='%' onClick={() => handleClick("%")} />
        <CustomButton type='btn-orange' label='/' onClick={() => handleClick("/")} />

        <CustomButton type='btn-neutral' label='7' onClick={() => handleClick("7")} />
        <CustomButton type='btn-neutral' label='8' onClick={() => handleClick("8")} />
        <CustomButton type='btn-neutral' label='9' onClick={() => handleClick("9")} />
        <CustomButton type='btn-orange' label='*' onClick={() => handleClick("*")} />
        
        <CustomButton type='btn-neutral' label='4' onClick={() => handleClick("4")} />
        <CustomButton type='btn-neutral' label='5' onClick={() => handleClick("5")} />
        <CustomButton type='btn-neutral' label='6' onClick={() => handleClick("6")} />
        <CustomButton type='btn-orange' label='-' onClick={() => handleClick("-")} />

        <CustomButton type='btn-neutral' label='1' onClick={() => handleClick("1")} />
        <CustomButton type='btn-neutral' label='2' onClick={() => handleClick("2")} />
        <CustomButton type='btn-neutral' label='3' onClick={() => handleClick("3")} />
        <CustomButton type='btn-orange' label='+' onClick={() => handleClick("+")} />

        <CustomButton type='btn-neutral' label='0' span='2' onClick={() => handleClick("0")} />
        <CustomButton type='btn-neutral' label=',' onClick={() => handleClick(",")} />
        <CustomButton type='btn-orange' label='=' onClick={() => handleClick("=")} />
      </div>


    </div>
  );
}

export default App;
