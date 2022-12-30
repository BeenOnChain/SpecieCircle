
const smallMA = document.getElementById('inputSMA');
const mediumMA = document.getElementById('inputMMA');
const largeMA = document.getElementById('inputLMA');
const xlargeMA = document.getElementById('inputXLMA');
const xxlargeMA = document.getElementById('inputXXLMA');

function WaitForLoad() {

  alert("Web-3.0 Browser Loading Smart Contract Information..")
}

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

async function change()
  {  
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    
    document.getElementById("Wallet").value= accounts[0].substring(0,12) + "...";
    document.getElementById("liveornot").style = "font-size:8px;color:green";
    
    
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
    
    async function Addresspop()
    {  
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      var str = "Etherscan"
      document.getElementById("WalletAddress").value= str.link("https://etherscan.io/address/") + accounts[0];
      
    }
 
    function String2Hex(tmp) {
      var str = '';
      for(var i = 0; i < tmp.length; i++) {
          str += tmp[i].charCodeAt(0).toString(16);
      }
      return str;
  }   



   

        
