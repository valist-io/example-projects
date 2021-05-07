# Example Valist SDK usage in Node.js

Use this example to create auto-update mechanisms, notification systems, and installers by pulling releases from Valist.

## Instructions

To install the Valist SDK, you'll need to use the `--registry` flag, and set it to `https://app.valist.io/api/npm`.
This will use the Valist NPM registry to pull it from Ethereum and IPFS.

Once you have installed the SDK from Valist, you'll need to run `npm i` again to install the rest of the dependencies.

```shell
npm install --registry=https://app.valist.io/api/npm @valist/sdk
npm install
```

Once the package is installed, you can import it into your project:

```typescript
const Valist = require('@valist/sdk');
```

You can then fetch releases from an organization and repository by using a function like the following:

```typescript
(async () => {
  const valist = new Valist({ web3Provider: 'https://matic-mumbai.chainstacklabs.com', metaTx: false });
  await valist.connect();

  const releases = await valist.getReleasesFromRepo('valist', 'sdk');

  console.log(releases);
})();
```

Check out [index.js](index.js) for an example!

## Need Help?

Come join our [Discord server](https://valist.io/discord) to get help if you are stuck!
