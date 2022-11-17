
import './App.css';
import Navbar from './Components/Navbar';
import Strat from './Components/Strat';
import Textform from './Components/Textform';

function App() {
  
  return (
    <>
    <Navbar title="TradeStrat" blogs="Strategies" />
    <Textform heading="Write your Trading Story" /> 
    <Strat/>
    </>
  );
}

export default App;
