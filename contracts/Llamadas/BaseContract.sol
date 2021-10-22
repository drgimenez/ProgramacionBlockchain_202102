//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract BaseContract {
    uint256 public contractVariable;
    function getBalance() external view returns(uint256) {
        return address(this).balance;
    }

    function setContractVariable(uint256 _newValue) external {
        contractVariable = _newValue;
    }

}

contract CallToBaseContract {

    uint256 myContractVariable;    
    BaseContract public baseContract;
    address public baseContractAddress;

    constructor() {
        
    }

    function setBaseContract(BaseContract _baseContractAddress) external {
        baseContract = _baseContractAddress;
    }

    function setBaseContractAddress(address _baseContractAddress) external {
        baseContractAddress = _baseContractAddress;
    }


    function getBaseContractBalance() external {
        if(address(baseContract) != address(0)) {
            baseContract.getBalance();
        }
    }

    function executeFrombaseContracWithCall(uint256 _newValue) external {
        bytes memory methodToCall = abi.encodeWithSignature("setContractVariable(uin256)", _newValue);
        (bool _success, bytes memory _returnData) = baseContractAddress.call(methodToCall);
        if(!_success){
            revert();
        }
    }

    function executeFromBaseContractWithDelegateCall(uint256 _newValue) external {
        bytes memory methodToCall = abi.encodeWithSignature("setContractVariable(uin256)", _newValue);
        (bool _success, bytes memory _returnData) = baseContractAddress.delegatecall(methodToCall);
        if(!_success){
            revert();
        }
    }

    function executeFromBaseContractWithStaticCall(uint256 _newValue) external {
        bytes memory methodToCall = abi.encodeWithSignature("setContractVariable(uin256)", _newValue);
        (bool _success, bytes memory _returnData) = baseContractAddress.staticcall(methodToCall);
        if(!_success){
            revert();
        }
    }

}