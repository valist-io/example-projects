# Publishing a Multi-Platform Project

This project contains a simple `hello world` Go program, and a `Makefile` specifying multiple build targets.

## Documentation

To find more detailed documentation, please visit https://docs.valist.io

## Usage


### Configuring platform/architecture mappings

In order to let the Valist clients know how to install your binaries, it needs to understand the mapping between binaries and their designated platform & architecture.

To configure this, you can setup the mapping in the `valist.yml` file at the root of your project:

```yaml
account: acme-co
project: multi-platform
release: 0.0.5
files: dist/*
install:
  name: hello-go
  darwin_amd64: dist/hello-darwin-amd64
  darwin_arm64: dist/hello-darwin-arm64
  linux_amd64: dist/hello-linux-amd64
  windows_amd64: dist/hello-windows-amd64
```

To publish this project, run the following:

```bash
valist publish
```

Voila! The release is packaged and published to the designated path 🚀

## View on Valist

To view this project on Valist, navigate to the following link!

<https://app.valist.io/acme-co/multi-platform>
