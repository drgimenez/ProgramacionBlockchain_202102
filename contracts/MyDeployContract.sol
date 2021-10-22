//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract MyDeployContract {
    uint256 public myVariable;

    constructor() {
        myVariable = 10;
    }

    function setMyVariable(uint256 _newvalue) external {
        myVariable = _newvalue;
    }

    function getVersion() external pure returns(string memory) {
        return "1.0.0";
    }
}