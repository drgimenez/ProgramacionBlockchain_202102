require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
      hardhat: {
          chainid:  31337,
      },

      ganache: {
          chainid:  1337,
          url:      process.env.GANACHE_URL,
          accounts: [process.env.PRIVATE_KEY_G],
          from:     process.env.ACCOUNT_ADDRESS_G
      },

      rinkeby: {
        chainid:  1337,
        url:      process.env.RINKEBY_URL,
        accounts: [process.env.PRIVATE_KEY_R],
        from:     process.env.ACCOUNT_ADDRESS_R
    }
  }
};
