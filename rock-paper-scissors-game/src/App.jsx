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

 const choice = {
  scissors: {
    img: scissors
  },
  rock: {
    img: rock
  },
  paper: {
    img: paper
  }
 }

function App() {
  // 가위 바위 보 초기 상태: 아무것도 내지 않은 상태 = null
  const [playerState, setPlayerState] = useState(null);
  const [computerState, setComputerState] = useState(null)

  // 사용자가 가위, 바위, 보 버튼 클릭했을때
  const handleClick = (el) => {
    setPlayerState(choice[el]);

   let computerChoice = randomChoice();
    setComputerState(computerChoice);
  }

  const randomChoice = () => {
    // object는 배열처럼 index 접근이 불가능
    // key 배열로 변환이 필요
    const keys = Object.keys(choice) // [scissors, rock, paper]

    // 배열의 몇번째 선택을 위한 index값 구하기
    let randomKey = keys[Math.floor(Math.random() * keys.length)]

    return choice[randomKey]; //랜덤 값 최종 도출
  }


  return (
    <main className={'container'}>
      <h1>가위바위보 게임</h1>
      <div className={'box-group'}>
        <Box title={'나'} item={playerState}/>
        <Box title={'컴퓨터'} item={computerState}/>
      </div>
      <div className={'button-group'}>
        <button onClick={() => handleClick('scissors')}>가위</button>
        <button onClick={() => handleClick('rock')}>바위</button>
        <button onClick={() => handleClick('paper')}>보</button>
      </div>
    </main>
  )
}

export default App
