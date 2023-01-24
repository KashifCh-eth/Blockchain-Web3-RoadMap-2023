//SPDX-License-Identifier:MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract ChainLInkInterFace {
  

  int ETHPrice ;
     AggregatorV3Interface ETHUSD = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);

  function Price () external  view returns(int _price){       
    (,int price ,,,) = ETHUSD.latestRoundData();
    return (price );
  }


   

  //answer * 10000000000

}
 
