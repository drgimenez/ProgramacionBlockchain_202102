//SPDX-License-Identifier: MIT;
pragma solidity 0.8.4;

import "./Padre.sol";
import "./Amigo.sol";

contract Hijo is Padre, Amigo {

    constructor() {

    }

    function setPublicVariable() external override virtual {
        publicVariable = "Public variable in hijo";
    }

}