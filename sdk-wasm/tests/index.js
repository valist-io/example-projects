const Valist = require("@valist/sdk");
const valist = new Valist({ web3Provider: "https://rpc.valist.io/mumbai", metaTx: false });
const axios = require('axios');

(async () => {
    await valist.connect();
    const release = await valist.getLatestRelease('acme-co', 'wasm-modules');
    console.log(release);
    try {
        const releaseRes = await axios.get(`https://gateway.valist.io${release.releaseCID}`);
        const releaseJSON = releaseRes.data;
        console.log(releaseJSON);

        const wasmRes = await axios.get(`https://gateway.valist.io${releaseJSON.artifacts['untouched.wasm'].provider}`);
        const wasmBuffer = Buffer.from(wasmRes.data, 'binary');

        WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
            const add = wasmModule.instance.exports.add;
            const sum = add(992, 345);
            console.log("992 + 345 is:", sum);
        });
    } catch (err) {
        throw new Error(err);
    }
})();
