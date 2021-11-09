# Example Valist SDK usage in Node.js

Use this example to create auto-update mechanisms, notification systems, and installers by pulling releases from Valist.

## Instructions

You can install the SDK by running the following:

```shell
npm install @valist/sdk
```

If you're using the CLI, you'll can install the package using web3 protocols using the `--registry` flag and setting it to `https://localhost:9000/api/npm`.

This will use the Valist NPM registry to pull it from Ethereum and IPFS, and fallback any other NPM packages to the main registry.


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
