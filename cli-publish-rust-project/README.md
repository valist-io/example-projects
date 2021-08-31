# Publishing a GO Project

This project contains a simple `hello world` Rust program, a `cargo.toml` and a `valist.yml` that enables secure publishing of the built binary.

<!-- This project can be found at [https://app.valist.io/acme/rust](https://app.valist.io/acme/rust) -->

## Configuring the `valist.yml` file

This project uses the following config:

```yaml
type: rust
org: acme
repo: rust
tag: 0.1.6-rc.0
out: target/debug
build: cargo build
```

In this config:

* The project `type` is `rust` -- this tells the CLI to handle the rust build environment accordingly. All `rust` projects require an `out` field that corresponds to the directory containing the final build.

  > **Note**: If the project does not export multiple artifacts the `out` path is a direct path to the built artifact. For multi-platform builds with multiple artifacts, please reference [Publishing a Multi-Platform Build (GOLANG)](cli-publish-multi-platofrm-project)

* The `build` field defines the command used for building the project. If not set, the build field for go projects will have the default value `cargo build`.

* The `org` field is the name of the organization associated with the project, and the `repo` field is the name of the project within that organization.

* The `tag` field is the version tag of the release. This can be any format, but preferably follows [semver](https://semver.org) or [calver](https://calver.org/).
  > **Note:** Tags can only be used **once** per release for security purposes.

* The `meta` field refers to any file containing the metadata associated with the release. This is typically a changelog, or release notes.

## Usage

To publish this project, update the `org`, `repo`, and `tag` fields. You can also add some info to the `meta` file, but be sure the `out` points to the correct file.

Running the following command in the root of the project will trigger a publish:

```bash
valist publish
```

The Valist CLI will detect the package `type` as `go` and publish the `out` artifact to the corresponding `org`, `repo`, and `tag`, along with the `meta` file.
