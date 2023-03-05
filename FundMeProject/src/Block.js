import { ethers } from "ethers/lib";
import { contractAddress, ContractAbi } from "./const";

async function MetaMaskConnect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("Metmask Dected!");
    let accounts;
    try {
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } catch (error) {
      console.log(error);
    }

    document.getElementById("account").innerHTML = accounts;
    document.getElementById("btn").innerHTML = "Connected!";
  } else {
    document.getElementById("text").innerHTML = "MetaMask Not Dected!";
    console.log("no");
  }
}

let contract;
async function Contract() {
  //Provider
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  //Signer
  const signer = provider.getSigner();
  //contract  ABI & Adddress
  contract = new ethers.Contract(contractAddress, ContractAbi, signer);
  try {
    const TransactionResponse = await contract.fund({
      value: ethers.utils.parseEther("1.7"),
    });
    await ResponsMine(TransactionResponse, provider);
    console.log("Done!");
  } catch (error) {
    console.log(error);
  }
}
async function Check() {
  //Provider
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  //Signer
  const signer = provider.getSigner();
  //contract  ABI & Adddress
  contract = new ethers.Contract(contractAddress, ContractAbi, signer);
  try {
    const balance = await contract.Balance();
    document.getElementById("num").innerHTML =
      ethers.utils.formatEther(balance);
    console.log(`Balance ${balance}`);
  } catch (error) {
    console.log(error);
  }
}

async function BOP() {
  //Provider
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  //Signer
  const signer = provider.getSigner();
  //contract  ABI & Adddress
  contract = new ethers.Contract(contractAddress, ContractAbi, signer);
  try {
    const AddressInput = document.getElementById("AddressInput").value;
    const balofeach = await contract.BalanceofEach(AddressInput);
    console.log(`Balance of This Address ${AddressInput} Is ${balofeach}`);
  } catch (error) {
    console.log(error);
  }
}

async function withdraw() {
  //provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // signer
  const signer = provider.getSigner();
  // contract

  const contract = new ethers.Contract(contractAddress, ContractAbi, signer);

  try {
    const withRaw = contract.withdraw();
    await ResponsMine(withRaw, provider);
    console.log("Done Withdraw!!!");
  } catch (error) {
    console.log(error);
  }
}

// for hash confirmation
function ResponsMine(TransactionResponse, provider) {
  console.log(`Minig ${TransactionResponse.hash}...`);
  provider.once(TransactionResponse.hash, (TransitionResipt) => {
    console.log(`TransactionConframtion ${TransitionResipt.confirmations}`);
  });
}

export { MetaMaskConnect, Contract, Check, BOP, withdraw };
