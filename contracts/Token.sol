pragma solidity ^0.8.0;

contract Token {
    string public name = "My Hardhat Token";
    string public symbol = "MHT";
    uint public totalSupply = 1000000;
    address public owner;
    mapping(address => uint) balances;

    // contract initialization
    constructor() {
        // The total supply is assigned to the transaction sender,
        // which is the account that is deploying the contract
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    
    function transfer(address to, uint amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // update balances
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    // read only function to get a user's balance
    function getBalance(address account) external view returns (uint) {
        return balances[account];
    }    
}