async function AcctInfo() {


    //const provider = await detectEthereumProvider();
    // var web3 = new Web3(provider);
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
    const balance = await ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] })
    //const web3 = window.web3;
    //const accounts = await web3.eth.getAccounts();

    document.getElementById("AddressBalance").value = "Balance: " + parseInt(balance, 16) / 1000000000000000000 + ' ETH';
    

}

async function connect() {
    ethereum
      .request({ method: 'eth_requestAccounts' })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
          
          document.getElementById("Wallet").value=  "Rejected Connection";
          document.getElementById("liveornot").style = "font-size:8px;color:Yellow";
        } else {
          console.error(err);
        }
      });

    }

   