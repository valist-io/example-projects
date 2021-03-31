import { useState, useEffect } from 'react';
import Valist from '@valist/sdk';

const getReleases = async () => {

  const valist = new Valist({ web3Provider: 'https://rpc-mumbai.matic.today' });
  await valist.connect();

  const releases = await valist.getReleasesFromRepo('valist', 'sdk');
  return releases;
};

function App() {

  const [releases, setReleases] = useState<{releaseCID: string, metaCID: string, tag: string}[]>([]);

  useEffect(() => {
    (async () => {
      setReleases(await getReleases());
    })();
  }, []);

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Valist Example Download Page</h1>
        {releases.map(({releaseCID, metaCID, tag}) => (
          <div key={tag}>
            <p><b>Version: {tag}</b></p>
            <p><b>Release CID:</b> {releaseCID}</p>
            <p><b>Metadata CID:</b> {metaCID}</p>
            <p><a href={`ipfs://${releaseCID}`}>IPFS Download</a></p>
            <p><a href={`https://cloudflare-ipfs.com/ipfs/${releaseCID}`}>Gateway Download</a></p>
          </div>
        ))}
    </div>
  );
}

export default App;
