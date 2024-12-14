import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Quantos planetas existem no sistema solar?',
    opcoes: ['5', '7', '9', '8'],
    resposta: '8'
  },
  {
    pergunta: 'Quem descobriu o Brasil?',
    opcoes: ['Pedro Álvares Cabral', 'Cristóvão Colombo', 'Vasco da Gama', 'Fernão de Magalhães'],
    resposta: 'Pedro Álvares Cabral'
  },
  {
    pergunta: 'Qual é a capital do Brasil?',
    opcoes: ['Rio de janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
    resposta: 'Brasília'
  },
];

function Quiz() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);

  const responder = (respostaSelecionada) => {
    const novasRespostas = [...respostas, respostaSelecionada];
    setRespostas(novasRespostas);
    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      calcularResultado(novasRespostas);
    }
  };
  const calcularResultado = (respostas) => {
    let pontuacao = 0;
    for (let i = 0; i < perguntas.length; i++) {
      if (respostas[i] === perguntas[i].resposta) {
        pontuacao++;
      }
    }
    setResultado(pontuacao);
  };

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostas([]);
    setResultado(null);
  };
  return (
    <div>
      {resultado !== null ? (
        <div>
          <h2>Resultado do Quiz</h2>
          <p>Você acertou {resultado} de {perguntas.length} perguntas!</p>
          <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Pergunta {indicePergunta + 1}</h2>
          <p>{perguntas[indicePergunta].pergunta}</p>
          <ol>
            {perguntas[indicePergunta].opcoes.map((opcao, index) => (
              <li key={index} onClick={() => responder(opcao)}>
                {opcao}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default Quiz;