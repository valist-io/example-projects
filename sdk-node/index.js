const Valist = require('@valist/sdk');

(async () => {
  const valist = new Valist({ web3Provider: 'https://rpc.valist.io', metaTx: false });
  await valist.connect();

  const releases = await valist.getReleases('valist', 'sdk');

  const latest = await valist.getLatestRelease('valist', 'sdk');

  console.log('List of releases', releases);

  console.log('Latest release', latest);
})();
