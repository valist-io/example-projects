# Publishing a Multi-Platform Project

This project contains a simple `hello world` Go program, a `Makefile` specifying multiple build targets and a `valist.yml` that enables secure publishing of the built binaries.

## Documentation

To find more detailed documentation, please visit https://docs.valist.io

## Configuring the `valist.yml` file

This project uses the following config:

```yaml
name: acme-co/multi-platform-example
tag: 0.0.4
artifacts:
  linux/amd64: dist/linux64
  darwin/amd64: dist/darwin64
  windows/amd64: dist/windows64
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
