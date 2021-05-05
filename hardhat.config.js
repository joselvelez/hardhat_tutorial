require("@nomiclabs/hardhat-waffle");

const INFURA_URL = 'https://rinkeby.infura.io/v3/aa2d17cf27064c5aa8f30f371e802cc3';
/*
add a file to root called 'private_key.js' and add:
const key = 'your_private_key';
*/
const { key } = require("./private_key")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${key}`]
    }
  }
};
