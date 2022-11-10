//Este componente deverá receber dados por Props e mostrar as Informações em Tela
//export function Card () {
//  return (
//    <div>

//import { useEffect } from "react";
//import { useState } from "react";

//    </div>
//  )
//}


  const cardTeste = [
    {
      id: 1,
      userId: 1,
      nome: 'azul',
      code: '#5883F0'
    },
    {
      id: 2,
      userId: 2,
      nome: 'vermelho',
      code: '#F05858'
    },
    {
      id: 3,
      userId: 3,
      nome: 'rosa',
      code: '#F0588F'
    },
    {
      id: 4,
      userId: 4,
      nome: 'laranja',
      code: '#F0576F'
    },
    {
      id: 5,
      userId: 5,
      nome: 'violeta',
      code: '#F0778F'
    },
    {
      id: 6,
      userId: 6,
      nome: 'verde',
      code: '#F2788F'
    },
  ];


//export function FetchingData() {
//  const [data, setData] = useState<any[]>(cardTeste);
//    useEffect(() => {
//      const newData = [
//        ...cardTeste,
//        {
//          id: 7,
//          userId: 7,
//          nome: 'amarelo',
//          code: '#F2383F'
//        },
//      ]
//    }
//  )
//}


export function Card () {
  return (    
       <>
        <header>
          <div class="sectiontwo">         
            <h2 class="subtitle">CORES FAVORITAS</h2>

            <div class="grid-container">
              <div class="colors1">
                <h3> Cor: Blue </h3>
                <h3> codigo: #5883F0 </h3>     
              </div>

              <div class="colors2">
                <h3> Cor: Red </h3>
                <h3> codigo: #F05858 </h3>
              </div>

              <div class="colors3">
                <h3> Cor: Rose </h3>
                <h3> codigo: #F0588F </h3>
              </div>
      
              <div class="colors4">
                <h3> Cor: Orange </h3>
                <h3> codigo: #F0576F </h3>
              </div>

              <div class="colors5">
                <h3> Cor: Purple </h3>
                <h3> codigo: #F0778F </h3>
              </div>

              <div class="colors6">
                <h3> Cor: Green </h3>
                <h3> codigo: #F2788F </h3>
              </div>
            </div>

          </div>
        </header>
      <code>
      <div class="container">

      </div>
        </code>
      </>   
  )
}
