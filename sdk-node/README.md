# Example Valist SDK usage in Node.js

Use this example to create auto-update mechanisms, notification systems, and installers by pulling releases from Valist.

## Instructions

To install the Valist SDK, you'll need to use the `--registry` flag, and set it to `https://app.valist.io/api/npm`.
This will use the Valist NPM registry to pull it from Ethereum and IPFS, and fallback any other NPM packages to the main registry.

```shell
npm install @valist/sdk --registry=https://app.valist.io/api/npm
```

Once the package is installed, you can import it into your project:

```typescript
const Valist = require('@valist/sdk');
```

You can then fetch releases from an organization and repository by using a function like the following:

```typescript
const valist = new Valist({ web3Provider: 'https://rpc.valist.io', metaTx: false });
await valist.connect();

const releases = await valist.getReleases('valist', 'sdk');

const latest = await valist.getLatestRelease('valist', 'sdk');

console.log('List of releases', releases);

console.log('Latest release', latest);
```

Check out [index.js](index.js) for an example!

## Need Help?

Come join our [Discord server](https://valist.io/discord) to get help if you are stuck!
