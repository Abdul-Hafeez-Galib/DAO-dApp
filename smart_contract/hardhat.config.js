require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

// FakeNFTMarketplace CONTRACT ADDRESS: 0x940b3cA19d62Ac6B445de11de43BC95c1585aECa

// CryptoDevsDAO CONTRACT ADDRESS: 0x753120883A7191A79BfB498E5E1D5070358CB887