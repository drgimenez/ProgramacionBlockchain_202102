//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract MyDeployContract {
    uint256 public myVariable;

    event myTestEvent(uint256 indexed _index, address indexed _sender, string _name);

    constructor() {
        myVariable = 10;
    }

    function setMyVariable(uint256 _newvalue) external {
        myVariable = _newvalue;
    }

    function getVersion() external pure returns(string memory) {
        return "1.0.0";
    }

    function emitEvent(uint256 _index, string memory _name) external {
        emit myTestEvent(_index, msg.sender, _name);
    }
}