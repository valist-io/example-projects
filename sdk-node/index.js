const Valist = require('@valist/sdk').default;

const getReleases = async () => {

  const valist = new Valist({ web3Provider: 'https://matic-mumbai.chainstacklabs.com' });
  await valist.connect();

  const releases = await valist.getReleasesFromRepo('valist', 'sdk');
  return releases;
};

getReleases().then((releases) => {
  console.log('Printing available releases');
  console.log(releases);
});
