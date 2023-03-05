import { MetaMaskConnect, Contract, Check, BOP, withdraw } from "./Block";
function App() {
  return (
    <div className="App">
      <div className="Connect">
        <button onClick={MetaMaskConnect} id="btn">
          Connect
        </button>
        <p id="text"></p>
        <p id="account"></p>
        <p id="ChainId"></p>
        <button onClick={Contract}>UpdateNumber</button>
        <br></br>
        <br></br>
        <button onClick={Check}>CheckNumber</button>
        <p id="num"></p>
        <button onClick={BOP}>CheckBlanaceOfAddress</button>
        <input id="AddressInput"></input>

        <br></br>
        <button onClick={withdraw}>withdraw</button>
      </div>
    </div>
  );
}

export default App;
