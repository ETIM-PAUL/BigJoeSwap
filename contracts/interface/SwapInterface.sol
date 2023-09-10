// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

interface SwapInterface{
  function getReserveA() external view returns (uint _reserveA)
  function getReserveB() external view returns (uint _reserveB)
  function addLiquidity(uint amountA, uint amountB) returns (bool success) 
  function removeLiquidity(uint amountA, uint amountB) returns (bool success)
  function expectedAmountsForTokenB(uint tokenA_Amount) returns (uint _returnedValue)
  function expectedAmountsForTokenA(uint tokenB_Amount) returns (uint _returnedValue)
  function swapTokenAForTokenB(uint tokenA_Amount) returns (bool success)
  function swapTokenBForTokenA(uint tokenB_Amount) returns (bool success)

  event LiquidityAdded(address _liquidityAdder, uint amountA, uint amountB)
  event LiquidityRemoved(address _liquidityRemover, uint amountA, uint amountB)
}