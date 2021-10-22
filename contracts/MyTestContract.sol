//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "./MyTestContract2.sol";

contract MyTestContract is Test2 {
    // State variables
    bool public myBool;
    string public myString;
    uint256 public myint;
    Test2 public myTestContract;
    bool public allowDeposit;
    bool public pause;

    // Enums
    enum myEnum {
        op1,
        op2
    } 

    // Structs
    struct myStruct {
        string name;
        uint256 edad;
    }

    uint256[] public myArray;
    mapping(uint256 => myStruct) public myMapping;
    mapping(string => myStruct) public myMapping2;

    // Address
    address public myAddress;
    address public owner;

    // Events
    event tansferToken(address indexed _from, address indexed _to, uint256 _amount);
       

    // modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner.");
        _;
    }

    modifier balance(uint256 _amount) {
        require(address(this).balance >= _amount);
        _;
    }

    modifier pausable() {
        require(!pause, "Contract is in pause");
        _;
    }

    // Constructor
    constructor(Test2 _myTestContractAddress) Test2() payable {
        // Initialization
        owner = msg.sender;
        myTestContract = _myTestContractAddress;
    }

    // Functions
    function deposit() external payable {
        myTestContract.getVersion();
    }

    function getBalance() external view returns(uint256) {
        return address(this).balance;
    }

    function withdraw(address _remitent, uint256 _amount) external onlyOwner() pausable() balance(_amount) {
        payable(_remitent).transfer(_amount);
    }

    function getVersion() external pure override returns(string memory) {
        return "1.0.1";
    }

    function setAllowDeposit(bool _newValue) external onlyOwner() {
        allowDeposit = _newValue;
    }

    function setpause(bool _newValue) external onlyOwner() {
        allowDeposit = _newValue;
    }

    receive() external payable {
        if(!allowDeposit) {
            revert();
        }
    }

    fallback() external payable {
             
    }
}