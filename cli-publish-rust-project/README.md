# Publishing a Rust Project

This project contains a simple `hello world` Rust program, a `cargo.toml` and a `valist.yml` that enables secure publishing of the built binary.

## Documentation

To find more detailed documentation, please visit https://docs.valist.io

## Configuring the `valist.yml` file

This project uses the following config:

```yaml
name: acme-co/rust-example
tag: 0.1.7
artifacts:
  hello: target/release/hello_cargo
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
