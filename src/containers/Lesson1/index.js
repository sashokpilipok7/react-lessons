import React from "react";
import "./index.scss";
import img1 from "../../img/les1_1.png";
import img2 from "../../img/les1_2.png";

function FunctionComponent() {
  return <p>FunctionComponent</p>;
}

class ClassComponent extends React.Component {
  state = {};
  render() {
    return <p>ClassComponent</p>;
  }
}

function Description() {
  return "dESCRIPTION";
}

function UserCard(props) {
  return (
    <div className="user-card">
      <h4>Petr Jacovlev</h4>
      <Description />
    </div>
  );
}

function Post(props) {
  return (
    <div className="post">
      <h4 className="post-title">{props.title}</h4>
      <p className="post-description">{props.description}</p>
      <div className="post-likes">{props.likes}</div>
    </div>
  );
}

const phonesList = ["Life", "KuivStart", "Vodafone", "Beline", "UkrTelekom"];

function SimpleList(props) {
  console.log(props.list);
  return props.list.map((item) => {
    return <p>{item}</p>;
  });
}

function Lesson1() {
  return (
    <div>
      <h1 className="App-title">First Lessons</h1>
      <div className="App-preview">
        <h2 className="App-preview_title">Теми:</h2>
        <ul className="App-preview_list">
          <li>React 18</li>
          <li>Розуміння JSX</li>
          <li>Розуміння Компонента</li>
          <li>Робота з множиною компонентів</li>
          <li>Використання пропсів для передачі данних між компонентами</li>
          <li>Рендер list of data</li>
          <li>Вступ в react-router-dom</li>
        </ul>
      </div>
      <div className="App-section">
        <h3>React 18</h3>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
      <div className="App-section">
        <h3>Розуміння JSX</h3>
        <p>This is p!</p> {/* Синтаксичний сахар*/}
        {React.createElement("p", {}, "This is p!")}
      </div>
      <div className="App-section">
        <h3>Розуміння Компонента</h3>
        <FunctionComponent />
        <ClassComponent />
      </div>
      <div className="App-section">
        <h3>Робота з множиною компонентів</h3>
        <UserCard />
        <UserCard />
        <Description></Description>
      </div>
      <div className="App-section">
        <h3>Використання пропсів</h3>
        <Post title="First Post" description="description 1" likes={10}></Post>
        <Post title="Second Post" description="description 2" likes={20}></Post>
        <Post title="Third Post" description="description 3" likes={30}></Post>
      </div>
      <div className="App-section">
        <h3>Рендер list of data</h3>
        <SimpleList list={phonesList} />
      </div>
    </div>
  );
}

export default Lesson1;
