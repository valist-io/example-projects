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
release: 0.2.13

platforms:
  web: dist/web
  darwin_amd64: dist/darwin/amd64/hello-go
  darwin_arm64: dist/linux/amd64/hello-go
  linux_amd64: dist/linux/amd64/hello-go
  windows_amd64: dist/windows/amd64/hello-go
```

To publish this project, run the following:

```bash
valist publish
```

Voila! The release is packaged and published to the designated path 🚀

## View on Valist

To view this project on Valist, navigate to the following link!

<https://app.valist.io/acme-co/multi-platform>
