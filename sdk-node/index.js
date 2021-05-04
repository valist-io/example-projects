const Valist = require('@valist/sdk').default;

(async () => {
  const valist = new Valist({ web3Provider: 'https://matic-mumbai.chainstacklabs.com', metaTx: false });
  await valist.connect();

  const releases = await valist.getReleasesFromRepo('valist', 'sdk');

  console.log(releases);
})();
