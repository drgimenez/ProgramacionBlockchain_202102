//SPDX-License-Identifier:MIT
pragma solidity 0.8.4;

contract Test2 {
    uint256 public myvariable;

    constructor() {

    }

    function getVersion() external pure virtual returns(string memory) {
        return "1.0.0";
    }
}