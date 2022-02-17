/*eslint-disable*/

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "배고프다 뭐먹지?",
  ]); //array가 남음 [a,b] a는 입력한 값 드가고, b는 정정해주는 함수

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

  return (
    <div className="App">
      <div className="black-nav">
        <div style={st}>개발 Blog</div>
      </div>
      {/* <button onClick={제목바꾸기}>수정 버튼</button> */}
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
