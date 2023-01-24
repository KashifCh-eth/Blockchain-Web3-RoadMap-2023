//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;


error BalanceIsNOtOky();
error WithrawFailed();
error UserNotOwner();

contract withrawFunctions {

   address  public immutable Owner ; // can,t be Modified 
   address public constant Admin = 0x65f399024fa90b6561b82398354fAA9Ad453dd90; // not Modified 
 
 constructor  (){
    Owner = msg.sender;
 }
   
   struct fund {
      uint value ;
   }

   mapping (address => fund) peoples ;

  function Deposit () public  payable{

      if (msg.sender == Owner )
        revert BalanceIsNOtOky();  
        peoples[msg.sender].value = msg.value;

        // Admin = 0x65f399024fa90b6561b82398354fAA9Ad453dd90; error
  }




  
  function withraw () public {

   // trnsfer
     payable (Owner).transfer(address(this).balance);

    // send
     bool fs = payable(Owner).send(address(this).balance);
     if(fs == true)
     revert WithrawFailed();

     //call
     (bool fsucess,) = payable(Owner).call{value:address(this).balance}("");
     if(fsucess == true)
     revert WithrawFailed();


  }


// Modifier 

  modifier OnlyOwner () {
      if (msg.sender == Owner)
      revert UserNotOwner();
    _;
  } 


    

 receive ()  external payable{
      Deposit();
   }
   
fallback () external payable {
      Deposit();
 }

}
