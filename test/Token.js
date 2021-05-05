const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("Token contract", function() {
    it("Deployment should assign the total supply of tokens to the owner", async function() {
        // A signer is an ethers.js object representing an ethereum account
        // docs @ https://docs.ethers.io/v5/api/signer/
        const [owner] = await ethers.getSigners();

        // A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
        // so 'Token' here is a factory for instances of the token contract
        const Token = await ethers.getContractFactory("Token");

        // calling deploy() will start the deployment and return a Promise that resolves
        // to a Contract. This is the object that will have the contract methods available
        const token = await Token.deploy();

        // Use Chai assertions library and Waffle
        // Docs @ https://www.chaijs.com/ & https://ethereum-waffle.readthedocs.io/en/latest/matchers.html
        const ownerBalance = await token.getBalance(owner.address);
        expect(await token.totalSupply()).to.equal(ownerBalance);
    });
});

/*
More documentation on testing @ https://hardhat.org/tutorial/testing-contracts.html
*/