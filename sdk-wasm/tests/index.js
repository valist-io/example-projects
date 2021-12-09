const assert = require("assert");
const loader = require("@assemblyscript/loader");
const Valist = require("@valist/sdk");
const valist = new Valist({ web3Provider: "https://rpc.valist.io/mumbai", metaTx: false });

(async () => {
    await valist.connect();

    const release = await valist.getLatestRelease('acme-co', 'wasm-modules');
    console.log(release);
    const req = await fetch(`https://gateway.valist.io${release.releaseCID}`);
    const releaseJSON = await req.json();

    await loader.instantiateStreaming(fetch(`https://gateway.valist.io${releaseJSON.artifacts['untouched.wasm'].provider}`))
    .then(obj => obj.instance.exports.add(1,2));
    // const { instance } = await loader.instantiateStreaming(, importObject);
    // const result = instance.add(1, 2);
    // assert.strictEqual(instance.add(1, 2), 3);
    // console.log(instance.add(1, 2));
    // console.log(result);
    // console.log("ok");
})();
