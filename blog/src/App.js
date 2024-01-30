import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','집 보내줘라']);
  let [likeResult, likeResultUpdate] = useState(0);

  function changeTitle (){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천' 
    글제목변경(newArray);
  }

  let posts = '강남 고기 맛집';
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ changeTitle }>버튼</button>
      <div className="list">
        <h4>{ posts } <span className="likeBtn" onClick={()=>{ likeResultUpdate(likeResult+1) }}>👍</span> {likeResult}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 19일 발행</p>
        <hr />
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h3>제목</h3>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
