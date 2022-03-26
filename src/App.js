import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "밖에 비오는 중",
    "배고픈 개발자",
    "안녕하세요",
  ]); //array가 남음 [a,b] a는 입력한 값 드가고, b는 정정해주는 함수

  let [pushTitle, setPushTitle] = useState(0);

  // 버튼 누를 시 제목이 '대전 맛집'으로 바뀌는 기능
  function changeTitle() {
    var newArray = [...title];
    newArray[0] = "대전 맛집";
    setTitle(newArray);
  }

  function addTitle() {
    var newArr = [...title];
    newArr.unshift(entry);
    setTitle(newArr);
  }
  // ㄱㄴㄷ 순으로 정렬하기
  // function range() {
  //   var newA = [...title];
  //   newA.sort();
  //   setTitle(newA);
  // }

  // let posts = "맛집";
  let st = { fontSize: "25px" };
  let [like, setLike] = useState([0,0,0]);
  const likeup = (i) => {
    let like2 = [...like];
    like2[i]++;
    setLike(like2);
  }


  let [modal, setModal] = useState(false);

  let [entry, setEntry] = useState('');

  // var array = [2, 3, 4];

  // var newArray = array.map(function (a) {
  //   return a * 2;
  // });

  return (
    <div className="App">
      <div className="black-nav">
        <div style={st}>개발 Blog</div>
      </div>
      {/* <button onClick={changeTitle}>수정 버튼</button> */}

      {title.map(function (post, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => { setPushTitle(i); }}>
              {post}

              <span onClick={() => { likeup(i); }}>👍</span>
              {like[i]}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })
      }

      <div className="publish">
        <input onChange={(e)=>{setEntry(e.target.value)}}/>
        <button onClick={addTitle}>저장</button>
      </div>

      {/* <input onChange={(e)=>{ setEntry(e.target.value) }}/> 값 입력, 저장*/}

      <button onClick={() => {
          setModal(!modal);
        }}
      >
        내용 보기
      </button>
      

      {modal == true ? (
        <Modal title={title} pushTitle={pushTitle}></Modal>
      ) : null}

      {/* {modal ? <Modal></Modal> : null} */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.pushTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
