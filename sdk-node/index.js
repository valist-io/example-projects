const Valist = require('@valist/sdk');

(async () => {
  const valist = new Valist({ web3Provider: 'https://matic-mumbai.chainstacklabs.com', metaTx: false });
  await valist.connect();

  const releases = await valist.getReleasesFromRepo('valist', 'sdk');

  console.log(releases);
})();
