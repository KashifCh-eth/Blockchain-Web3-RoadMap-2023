//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContractOne {
 
struct student {
  uint256 Num ;
  string name ;
 }

 mapping (string  => student ) StudentMap ;
  

    function setNum (uint256 _num,string memory _name) virtual public {
        StudentMap[_name].Num= _num;
        StudentMap[_name].name=_name;
    }

    function Show(string memory _name) public view  returns(uint256 na , string memory NU) {
        return (StudentMap[_name].Num, StudentMap[_name].name);
    }
     
}
