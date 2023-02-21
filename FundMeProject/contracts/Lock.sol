// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    struct Fund {
        uint256 value;
    }

    mapping(address => Fund) public valueOfEachFunder;
    address payable[] public Funder;
    address owner;

    function fund() public payable {
        require(msg.value > 1 ether, "Not FullFill");
        Funder.push(payable(msg.sender));
        valueOfEachFunder[msg.sender].value = msg.value;
    }

    function Balance() public view returns (uint256) {
        return address(this).balance;
    }

    function BalanceofEach(address _funder) public view returns (uint256) {
        return valueOfEachFunder[_funder].value;
    }

    function withdraw() public {
        require(msg.sender == owner, "Signer not Owner");
        (bool fs, ) = payable(msg.sender).call{value: address(this).balance}(
            ""
        );
        require(fs, "callFailed");
    }
}
