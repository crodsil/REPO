import { useState } from 'react'
import './App.css'
import { Card } from './Card'

function App() {
  const [validators, setValidators] = useState(false)
  const [cards, setCards] = useState([])

  const shoot = () => {
    alert("Cor favorita adicionada!");
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { nameInput, colorInput } = e.target.elements
    const data = {
      name: nameInput.value.trim(),
      color: colorInput.value,
    }

    const containsNumber = (str) => {
      return /\d/.test(str);
    }

    if (data.name.length < 3 || data.color.length < 6 || !containsNumber(data.color)) {
      setValidators(true)
    } else {
      setValidators(false)
      setCards([...cards, data])
    }
  }

  const handleChange = () => {
    setValidators(false)
  }

  return (
    <div className="App">
      <div className='gridcontent'>
        <form onSubmit={handleSubmit} className={validators ? 'validators' : ''}>
          <h1>ADICIONAR NOVA COR</h1>

          <div className='gridContainer'>
            <div className='inputDiv'>
              <label htmlFor='nameInput'>Nome:</label>
              <input
                id='nameInput'
                className={validators ? 'validatorsInput' : ''}
                type='text'
                placeholder="inserir nome da cor"
                onChange={handleChange}
              />
            </div>

            <div className='inputDiv'>
              <label htmlFor='colorInput'>Cor:</label>
              <input
                id='colorInput'
                className={validators ? 'validatorsInput' : ''}
                type='text'
                placeholder="inserir cor favorita no formato Hexadecimal"
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" disabled={validators} onClick={shoot}>ADICIONAR</button>
        </form>

        {validators && 
          <span className={validators ? 'validatorsSpan' : ''}>
            Adicione corretamente os dados do formulário!
          </span>
        }

        <h1>CORES FAVORITAS</h1>
        <div className='insertColors'>
          {cards.map(
            card => {
              return(
                <Card key={card.color} colorName={card.name} colorHex={card.color} />
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

export default App