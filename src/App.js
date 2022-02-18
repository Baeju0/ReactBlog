import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "많이 잤는데 또 졸려",
    "배고프다 뭐먹지",
  ]); //array가 남음 [a,b] a는 입력한 값 드가고, b는 정정해주는 함수

  let [누른제목, 누른제목변경] = useState(0);

  // 버튼 누를 시 여자 코트 추천으로 바뀌는 기능
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);
  }

  // ㄱㄴㄷ 순으로 정렬하기
  // function 정렬하기() {
  //   var newA = [...글제목];
  //   newA.sort();
  //   글제목변경(newA);
  // }

  let posts = "강남 꼬기 맛집";
  let st = { fontSize: "25px" };
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);

  // var 어레이 = [2, 3, 4];

  // var 뉴어레이 = 어레이.map(function (a) {
  //   return a * 2;
  // });

  return (
    <div className="App">
      <div className="black-nav">
        <div style={st}>개발 Blog</div>
      </div>
      {/* <button onClick={제목바꾸기}>수정 버튼</button> */}

      {글제목.map(function (글, i) {
        return (
          <div className="list">
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                👍
              </span>
              {따봉}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        모달버튼
      </button>
      {modal == true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}

      {/* {modal ? <Modal></Modal> : null} */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
