//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Padre {
    string private privateVariable;
    string public publicVariable;

    constructor() {
        privateVariable = "Constructor padre";
        publicVariable = "Constrictor padre";
    }

    function setPublicVariable() external virtual {
        publicVariable = "setPublicVariable in Padre";
    }
}