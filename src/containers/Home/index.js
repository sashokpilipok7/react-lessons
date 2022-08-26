import { Counter } from "../../components/counter/Counter";

import logo from "./logo.svg";

function Home() {
  return (
    <>
      <h1 className="App-title">Welcome to our lessons!</h1>
      <img src={logo} className="App-logo" />
      <Counter />
    </>
  );
}

export default Home;
