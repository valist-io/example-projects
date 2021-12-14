# Example Valist Download Page

Use this example to build a secure download page powered by Valist. Simply import and render your releases with the SDK,
and the list will always be up-to-date based on what you publish via the dashboard, SDK, or CLI.

## Documentation

To find more detailed documentation, please visit https://docs.valist.io

## Instructions

You can install the SDK by running the following:

```shell
npm install @valist/sdk
```

Once the package is installed, you can import it into your project:

```typescript
import Valist from '@valist/sdk';
```

You can then fetch releases from an organization and repository by using a function like the following:

```typescript
const getReleases = async () => {

  const valist = new Valist({ web3Provider: 'https://rpc.valist.io' });
  await valist.connect();

  const releases = await valist.getReleases('valist', 'sdk');
  return releases;
};
```

Check out [App.tsx](src/App.tsx) for an example!

## Need Help?

Come join our [Discord server](https://valist.io/discord) to get help if you are stuck!
