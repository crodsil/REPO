
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { Card } from './Card'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
//function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  function App() {
    const [name, setName] = useState("");
    const [cor, setCor] = useState("");
    const [allColors, setAllColors] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const shoot = () => {
      alert("Cor favorita adicionada!");
    }

    function insertColor(event) {
      event.preventDefault()
      if(inputIsValid()){
        let color = {
          name: name.trim(),
          color: cor.trim()
        }
        setAllColors([...allColors, color])
        setErrorMessage("")
      } else {
        setErrorMessage("Adicione corretamente os dados do formulário!")
      }
    }

    function inputIsValid(){
      var color = cor.trim()
      var name = name.trim()
      var isValid = false
  
      if(color[0] === ("#") && color.length > 6 && name.length > 3){
        isValid = true
      }
      return isValid
    }
  
     return (

      <>
      <div class="borderapp">
        <div class="App">
            <h1 class="title">ADICIONAR NOVA COR</h1>
          <div class="grid-container">
            <form onSubmit={ event => insertColor(event)}>
              <label class="labelsty">Nome:
                <input 
                id="name"
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                class="campo" />
              </label>
            </form>
            <form>
              <label class="labelsty">Cor:
                <input 
                id="color"
                type="text" 
                value={cor} 
                onChange={(e) => setCor(e.target.value)}
                class="campo2" />
              </label>
            </form>
          </div>
        </div>
        <div><button type="submit" onClick={shoot} class="button">Adicionar</button></div>
        <p>{errorMessage}</p>
      </div>

      <Card />
    
      </>    
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

export default App