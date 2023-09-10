// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

interface IERC20 {
    function balanceOf(address _address) external view returns (uint);

    function approve(
        address _owner,
        address _spender,
        uint amount
    ) external returns (bool);
}
