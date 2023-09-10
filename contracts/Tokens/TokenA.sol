//SPDX-License-Identifier: MIT

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

pragma solidity 0.8.19;

contract TokenA is ERC20 {
    constructor() ERC20("JOE TokenA", "JOEA") {
        _mint(msg.sender, 10_000e18);
    }
}
