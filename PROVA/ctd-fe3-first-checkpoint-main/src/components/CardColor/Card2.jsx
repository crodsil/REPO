//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import { useState } from 'react'
import './style.scss'
//import { CardColor } from "../../components/CardColor"

export function Card () {
  const [nomeColor, setNomeColor] = useState('')
  const [codeColor, setCodeColor] = useState('')
  const [fotoColor, setFotoColor] = useState('')
  const [allColor, setAllColor] = useState([
    {
      id: 1,
      name: 'Azul',
      code: '#5883F0',
      picture: 'https://cdn.pixabay.com/photo/2017/10/11/10/13/christmas-2840575_960_720.png'
  },
  {
      id: 2,
      name: 'Vermelho',
      code: '#F05858',
      picture: 'https://cdn.pixabay.com/photo/2016/08/05/09/30/background-1571856_960_720.jpg'
  },
  {
      id: 3,
      name: 'Verde',
      code: '#58F083',
      picture: 'https://cdn.pixabay.com/photo/2016/08/05/09/29/background-1571854_960_720.jpg'
  },
  {
    id: 4,
    name: 'Rosa',
    code: '#F0588F',
    picture: 'https://cdn.pixabay.com/photo/2016/12/06/18/52/christmas-1887309_960_720.png'
}
])

const newColor = {
  name: 'Rosa',
  code: '#F0588F',
  picture: 'https://cdn.pixabay.com/photo/2016/12/06/18/52/christmas-1887309_960_720.png'
}

function cadastrarCor(event) {

  event.preventDefault()

  const novaCorCadastrada = {
      name: nomeColor,
      code: codeColor,
      picture: fotoColor
  }

  if (nomeColor === '' || codeColor === '') {

      setFormularioErro(true)

  } else {

      setFormularioErro(false)

      setAllColor([...allColor, novaCorCadastrada])

      setNomeColor('')
      codeColor('')
      fotoColor('')

  }

  console.log(opcao)
}

    return (
      <div className="tittle">
                <h1>Cores</h1>
                {/* <button onClick={addNewProduct}>Adicionar novo produto</button> */}
      </div>
    )
  }