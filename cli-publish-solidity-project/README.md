# Publishing a Solidity Project

This project contains a simple `Hello.sol` smart contract and a `valist.yml` that enables secure publishing of the Solidity assets.

## Documentation

To find more detailed documentation, please visit https://docs.valist.io

## Configuring the `valist.yml` file

This project uses the following config:

```yaml
name: acme-co/solidity
tag: 0.0.1
artifacts:
  sol: Hello.sol
  abi: build/Hello_sol_Hello.abi
  bin: build/Hello_sol_Hello.bin
```

## Usage

To publish this project, update the `name` and `tag` fields.

Running the following command in the root of the project will trigger a publish:

```bash
valist publish
```

To change which artifacts are being uploaded, simply add/change/remove them from the `artifacts` list in the `valist.yml`.

The format is:

```yaml
filename: path/to/file/from/current/dir
```