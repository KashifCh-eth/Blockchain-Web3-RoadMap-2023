//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ContractOne.sol";

contract ContractTwo {

 ContractOne[] public ContractOneArray;

 function CreateContractOne () public {
   ContractOne InsideContract = new ContractOne();
   ContractOneArray.push(InsideContract);
 }

 function Cset (uint256 index ,uint256 _number ,string memory _name) public {
     ContractOne ContractOneIndex = ContractOneArray[index];
     ContractOneIndex.setNum(_number ,_name);
 }

 function Cget (uint256 index , string memory _nameofstudent) public view returns (uint256 _num, string memory _name ){
    ContractOne ContractOneIndex = ContractOneArray[index];
    return ContractOneIndex.Show(_nameofstudent);
 }

}
