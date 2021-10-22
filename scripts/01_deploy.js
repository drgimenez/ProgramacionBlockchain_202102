const { ethers } = require("hardhat");

async function main() {
    console.log("-- Deploy process started");
    const deployer = await ethers.getSigner();
    console.log("-- Deployer account address:\t", deployer.address);
    console.log("-- Deployer account balance:\t", ethers.utils.formatEther(await deployer.getBalance()));
    const contractFactory = await ethers.getContractFactory("MyDeployContract");
    const contractInstance = await contractFactory.deploy();
    console.log("-- Contract deployed to address:", contractInstance.address);
    console.log("-- Deployer account balance:\t", ethers.utils.formatEther(await deployer.getBalance()));
    console.log("-- Deploy process finished");
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});