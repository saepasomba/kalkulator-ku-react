import logo from './logo.svg';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton'

function App() {
  return (
    <div className="App">
      <CustomButton type='btn-orange' label='1' />
      <CustomButton type='btn-neutral' label='1' />
      <CustomButton type='btn-gray' label='1' />
    </div>
  );
}

export default App;
