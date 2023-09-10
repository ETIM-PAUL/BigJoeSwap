// SPDX-License-Identifier: MIT
import "./interface/SwapInterface.sol";
import "./interface/IERC20.sol";

pragma solidity 0.8.19;

contract JoeSwap is SWAPINTERFACE {
    //a state variable that sets the reserveA amount
    uint reserveA;

    //a state variable that sets the reserveB amount
    uint reserveB;

    // a struct that contains the liquidity provider
    struct LiquidityProvider {
        uint AmountA;
        uint AmountB;
    }

    //a mapping of address to its total amounts added to liquidity
    mapping(address => LiquidityProvider) liquidityProvider;

    //the contract address of tokenA
    IERC20 tokenA;
    //the contract address of tokenB
    IERC20 tokenB;

    //event that emits when liquidity is added;
    event LiquidityAdded(address _liquidityAdder, uint amountA, uint amountB);

    constructor(address _tokenA, address _tokenB) {
        //set the contract address of token A by using the constructor argument
        tokenA = IERC20(_tokenA);
        //set the contract address of token B by using the constructor argument
        tokenB = IERC20(_tokenB);
    }

    function addLiquidity(
        uint amountA,
        uint amountB
    ) external returns (bool _success) {
        require(amountA > 0 && amountB > 0, "Zero Amounts");
        require();

        //get the amount of token A set by the provider
        IERC20(tokenA).transferFrom(msg.sender, address(this), amountA);

        //get the amount of token B set by the provider
        IERC20(tokenB).transferFrom(msg.sender, address(this), amountB);

        //increases total of reserveA by the amount of token A set by the provider
        reserveA += amountA;
        //increases total of reserveB by the amount of token B set by the provider
        reserveB += amountB;

        LiquidityProvider storage provider = liquidityProvider[msg.sender];
        provider.AmountA += amountA;
        provider.AmountB += amountB;

        _success = true;

        emit LiquidityAdded(msg.sender, amountA, amountB);
    }
}
