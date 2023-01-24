 //SPDX-License-Identifier:MIT

pragma solidity ^0.8.8;


error  NotValued();

contract FallBackFunctions {

    uint public resultRecived ;
    
    uint public resultRecived2 ;

 

    

receive ()  external payable{
     resultRecived ++;
   }
   
fallback () external payable {
    resultRecived2 ++;
 }

}
