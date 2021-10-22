const { expect } = require("chai");
const { ethers } = require("hardhat");

let contractInstance;

before(async function(){
    console.log("-- Deploy process started");
    const contractFactory = await ethers.getContractFactory("MyDeployContract");
    contractInstance = await contractFactory.deploy();
    console.log("-- Contract deployed to address:", contractInstance.address);
    console.log("-- Deploy process finished");
});

describe("Deploy test", async function(){
    it("Contract should be deployed successfully", async function(){
        expect(contractInstance).to.be.ok;
    });

    it("Version of the contract should be 1.0.0", async function(){
        const contractVersion = await contractInstance.getVersion();
        expect(contractVersion).to.be.equal("1.0.0");
    });
});

describe("Set value test", async function(){
    it("Set myVariable to 20", async function(){
        const tx = await contractInstance.setMyVariable(20);
        await tx.wait();
        const contractMyvariable = parseInt(await contractInstance.myVariable());
        expect(contractMyvariable).to.be.equal(20);
    });
});