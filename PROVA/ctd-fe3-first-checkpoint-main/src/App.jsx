
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { Card } from './Card'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
//function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  function App() {
    const [name, setName] = useState("");
    const [cor, setCor] = useState("");

    const shoot = () => {
      alert("Cor favorita adicionada!");
    }
  
    return (

      <>
      <div class="borderapp">
        <div class="App">
            <h1 class="title">ADICIONAR NOVA COR</h1>
          <div class="grid-container">
            <form>
              <label class="labelsty">Nome:
                <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                class="campo" />
              </label>
            </form>
            <form>
              <label class="labelsty">Cor:
                <input 
                type="text" 
                value={cor} 
                onChange={(e) => setCor(e.target.value)}
                class="campo2" />
              </label>
            </form>
          </div>
        </div>
        <div><button type="submit" onClick={shoot} class="button">Adicionar</button></div>
      </div>

      <Card />
    
      </>    
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

export default App