const { expect } = require("chai");
const { ethers } = require("hardhat");

let provider;

describe("Provider test", async function(){
    it("Load provider", async function(){
        const networkInfo = {
            chainid:    4,
            url:        process.env.RINKEBY_URL
        };
        provider = new ethers.providers.JsonRpcProvider(networkInfo);
        const blockNumber = await provider.getBlockNumber();
        console.log(blockNumber);
        expect(blockNumber).to.be.greaterThan(0);
    });

    it("Load account from mnemonic", async function(){
        let path = "m/44'/60'/0'/0/12";
        const account = ethers.Wallet.fromMnemonic(process.env.MNEMONIC, path);
        const wallet = account.connect(provider);
        console.log(wallet.address);
        console.log(ethers.utils.formatEther(await wallet.getBalance()));
    });
});