# Example Valist SDK usage in Node.js

Use this example to create auto-update mechanisms, notification systems, and installers by pulling releases from Valist.

## Documentation

To find more detailed documentation, please visit https://docs.valist.io

## Instructions

You can install the SDK by running the following:

```shell
npm install @valist/sdk
```

Once the package is installed, you can import it into your project:

```typescript
const createValist = require('@valist/sdk').create;
```

You can then fetch releases from an organization and repository by using a function like the following:

```typescript
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
```

Check out [index.js](index.js) for an example!

## Need Help?

Come join our [Discord server](https://valist.io/discord) to get help if you are stuck!
