import logo from './logo.svg';
import styles from './App.module.css';
import CustomButton from './components/CustomButton/CustomButton'

function App() {
  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.buttonGroup}>
        <CustomButton type='btn-gray' label='C' />
        <CustomButton type='btn-gray' label='+/-' />
        <CustomButton type='btn-gray' label='%' />
        <CustomButton type='btn-orange' label='/' />

        <CustomButton type='btn-neutral' label='7' />
        <CustomButton type='btn-neutral' label='8' />
        <CustomButton type='btn-neutral' label='9' />
        <CustomButton type='btn-orange' label='*' />
        
        <CustomButton type='btn-neutral' label='4' />
        <CustomButton type='btn-neutral' label='5' />
        <CustomButton type='btn-neutral' label='6' />
        <CustomButton type='btn-orange' label='-' />

        <CustomButton type='btn-neutral' label='1' />
        <CustomButton type='btn-neutral' label='2' />
        <CustomButton type='btn-neutral' label='3' />
        <CustomButton type='btn-orange' label='+' />

        <CustomButton type='btn-neutral' label='0' span='2' />
        <CustomButton type='btn-neutral' label=',' />
        <CustomButton type='btn-orange' label='=' />
      </div>


    </div>
  );
}

export default App;
