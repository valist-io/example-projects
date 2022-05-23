const ethers = require('ethers');
const createValist = require('@valist/sdk').create;
const Web3HttpProvider = require('web3-providers-http'); 

async function main() {
	try {
            const web3 = new Web3HttpProvider("https://rpc.valist.io/polygon");
            
            const privateKey = ethers.Wallet.createRandom();
            const wallet = new ethers.Wallet(privateKey);
            
            const provider = new ethers.providers.Web3Provider(web3);
            const valist = await createValist(provider, { wallet, metaTx: true });
            
            const accountID = valist.generateID(137, 'acme-co');
            const projectID = valist.generateID(accountID, 'go-binary')
            const releaseID = await valist.getLatestReleaseID(projectID)
        
            const projectMeta = await valist.getProjectMeta(projectID);
            const latestRelease = await valist.getReleaseMeta(releaseID);
        
            console.log(projectMeta);
            console.log(latestRelease);
	} catch (err) {
		console.log(err)
	}
}

main()