import './App.css'
import Box from './components/Box'
import rock from './assets/rock_me.png';
import scissors from './assets/scissors_me.png';
import paper from './assets/paper_me.png';
import { useState } from 'react';

/*
 가위, 바위 보 각 버튼 클릭시 이미지가 버튼에 맞게 나와야 한다
 게임 시작 전 카드에 초기 이미지가 나와야 한다
 */

 const choice = [
    {
      name: 'scissors',
      img: scissors
    },
    {
      name: 'rock',
      img: rock
    },
    {
      name: 'paper',
      img: paper
    }
  ];

function App() {
  // 가위 바위 보 초기 상태: 아무것도 내지 않은 상태 = null
  const [playerState, setPlayerState] = useState(null);
  const [computerState, setComputerState] = useState(null);
  const [playerResult, setPlayerResult] = useState('')
  const [computerResult, setComputerResult] = useState('')

  // 사용자가 가위, 바위, 보 버튼 클릭했을때
  const handleClick = (el) => {
    setPlayerState(choice[el]);

   let computerChoice = randomChoice();
    setComputerState(computerChoice);

    setPlayerResult(gameResult(choice[el].name,computerChoice.name))
    setComputerResult(gameResult(computerChoice.name,choice[el].name))
  }

  const randomChoice = () => {
    // object는 배열처럼 index 접근이 불가능
    // key 배열로 변환이 필요


    return    choice[Math.floor(Math.random() * choice.length)]; //랜덤 값 최종 도출
  }

  const gameResult = (user, computer) => {
    if (user === computer) return 'tie'

    if (user  === 'rock') {
      if(computer === 'scissors') {
        return 'win'
      }else if ( computer  === 'paper') {
        return 'lose'
      }
    }else if (user  === 'scissors') {
      if (computer  === 'rock') {
        return 'lose'
      }else if (computer  === 'paper'){
        return 'win'
      }
    }else if (user  === 'paper') {
     if (computer  === 'rock') {
       return 'win'
     }else if (computer  === 'scissors'){
       return 'lose'
     }
   }
  }

  const reset = () => {
    setPlayerState (null);
    setComputerState(null)
    setPlayerResult('')
    setComputerResult('')
  }


  return (
    <main className={'container'}>
      <h1>가위바위보 게임</h1>
      <p>아래 버튼을 눌러 가위, 바위, 보 게임을 시작해보세요!</p>
      <div className={'box-group'}>
        <Box title={'나'} item={playerState} result={playerResult}/>
         VS
        <Box title={'컴퓨터'} item={computerState} result={computerResult}/>
      </div>
      <div className={'button-group'}>
        <button onClick={() => handleClick(0)}>✂️</button>
        <button onClick={() => handleClick(1)}>🪨</button>
        <button onClick={() => handleClick(2)}>✋🏻</button>
        <button onClick={() => reset()}>🔄</button>
      </div>
    </main>
  )
}

export default App
