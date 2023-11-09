import './App.css'
import Card from './Tarjeta';

function App() {
  return (
    <>
      <div>
        <h1 style={{color : 'white'}}>Boca de Urnas</h1>
      </div>
      <div>
        <Card name="Candidato 1"/>
        <Card name="Candidato 2"/>
      </div>
    </>
  );
}

export default App;
