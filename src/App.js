import "./App.css";
import { React, useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <h1>Button</h1>
      <div className="buttons">
        <button
          onClick={() => alert("버튼을 만들어보세요")}
          className="bigbutton"
        >
          Large Primary Button
        </button>{" "}
        <button className="midbutton">Midium</button>{" "}
        <button className="smallbutton">Small</button>
      </div>
      <div>
        <button onClick={() => alert("어렵나요?")} className="bigbutton2">
          Large Navigate Button
        </button>{" "}
        <button className="midbutton2">Midium</button>{" "}
        <button className="smallbutton2">Small</button>
      </div>
      <h1>Input</h1>
      <div>
        이름: <input className="inputs"></input> 가격:{" "}
        <input className="inputs"></input> <button onClick={alert}>저장</button>
      </div>
      <h1>Modal</h1>
      <div className="modalbuttons"></div>
      <button className="modalbutton" onClick={() => setModal(true)}>
        open modal
      </button>{" "}
      <button className="bigmodalbutton" onClick={() => setModal(true)}>
        open modal
      </button>
      {modal && (
        <Modal closeModal={closeModal}>
          <p>모달 팝업 창 내용입니다.</p>
        </Modal>
      )}
      <h1>select</h1>
      <div className="selectbox">
        <select className="selects" name="주특기">
          <option value="리액트">리액트</option>
          <option value="자바">자바</option>
          <option value="스프링">스프링</option>
          <option value="리액트네이티브">리액트네이티브</option>
        </select>
        <select className="selects" name="주특기">
          <option value="리액트">리액트</option>
          <option value="자바">자바</option>
          <option value="스프링">스프링</option>
          <option value="리액트네이티브">리액트네이티브</option>
        </select>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        {props.children}
        <button onClick={props.closeModal}>닫기</button>
        <button onClick={props.confirm}>확인</button>
      </div>
    </div>
  );
}

export default App;
