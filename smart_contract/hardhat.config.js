// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/udjnolHN2Ei8dKwj1jAF5M0ijBH3bZo1',
      accounts: ['52a34f7aaa1158b62bc0f6dd506b7ad3dcc5018f38443e6cd3df91dc730d9e2c'],
      // 52a34f7aaa1158b62bc0f6dd506b7ad3dcc5018f38443e6cd3df91dc730d9e2c
      
    },            
  },
};