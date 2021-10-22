//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Amigo {

    struct person {
        string name;
        uint256 age;
    }

    function getVersion() external pure returns(string memory) {
        return "1.0.0";
    }
}