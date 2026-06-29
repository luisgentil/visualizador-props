import logo from './logo.svg';
import './App.css';
import { VisualizadorProps } from './components/VisualizadorProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      < VisualizadorProps 
      usuario = "Pepe Palos" 
        edad = "54" 
        ciudad = "Sevilla" />
        
      </header>
    </div>
  );
}

export default App;
