const { expect } = require("chai");
const { ethers } = require("hardhat");

let contractInstance;

before(async function(){
    console.log("-- Deploy process started");
    const contractFactory = await ethers.getContractFactory("MyDeployContract");
    contractInstance = await contractFactory.deploy();
    console.log("-- Contract deployed to address:", contractInstance.address);
    console.log("-- Deploy process finished");

    contractInstance.emitEvent(1, "Test1");
    contractInstance.emitEvent(2, "Test2");
    contractInstance.emitEvent(3, "Test3");
});

/*
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
*/

describe("Event test", async function(){
    const abiCoder = ethers.utils.defaultAbiCoder;

    it("Retrieve event information filtering by index", async function(){
        const filters = {
            address: contractInstance.address,
            fromBlock: "0x1",
            toBlock: "latest",
            topics: [
                ethers.utils.id("myTestEvent(uint256,address,string)"),
                ethers.utils.hexZeroPad(2,32)
            ]
        }

        const events = await ethers.provider.getLogs(filters);
        console.log(abiCoder.decode(["string"], events[0].data)[0]);
    });

    it("retrieve event information filtering by address", async function(){
        const deployer = await ethers.getSigner();

        const filters ={
            address: contractInstance.address,
            fromBlock: "0x1",
            toBlock: "latest",
            topics: [
                ethers.utils.id("myTestEvent(uint256,address,string)"),
                null,
                ethers.utils.hexZeroPad(deployer.address, 32)
            ]
        }

        const events = await ethers.provider.getLogs(filters);
        for(i = 0; i < events.length; i++){
            console.log(abiCoder.decode(["string"], events[i].data)[0]);
        }
    });

    it("Retrieve event information with contract instance", async function(){
        const deployer = await ethers.getSigner();
        const eventFilter = contractInstance.filters.myTestEvent();

        console.log(eventFilter);

        //const events = await contractInstance.queryFilter(eventFilter);
        //console.log(abiCoder.decode(["string"], event[0].data)[0]);

        const events = await ethers.provider.getLogs(eventFilter);
        console.log(events.length);
        for(i = 0; i < events.length; i++){
            console.log(abiCoder.decode(["string"], events[i].data)[0]);
        }
    });
});