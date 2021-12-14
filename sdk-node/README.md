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
