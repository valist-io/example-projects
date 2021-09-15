# Publishing a Multi-Platform Project (GOLANG)

This project contains a simple `hello world` Go program, a `Makefile` specifying multiple build targets and a `valist.yml` that enables secure publishing of the built binaries.

<!-- This project can be found at [https://app.valist.io/exampleorg/exampleMultiPlatform](https://app.valist.io/test/binary) -->

## Configuring the `valist.yml` file

This project uses the following config:

```yaml
type: go
org: exampleOrg
repo: exampleMultiPlatform
tag: 0.0.1
build:  make all
out: dist
platforms:
  linux/amd64: linux64
  darwin/amd64: darwin64
  windows/amd64: windows64
```

In this config:

* The project `type` is `go` -- this tells the CLI to handle the golang build environment accordingly.

* Since this project is exporting multiple artifacts the `out` path defines the parent directory where artifacts will be exported. The `platforms` field then defines the supported os/architecture and it's corresponding artifact. For example the linux build in this project would be exported to `dist/linux64`.

* The `build` field defines the command used for building the project. If not set, the build field for go projects will have the default value `go build .`. In this example the build command is instead set to `make all` for building to multiple targets.

* The `org` field is the name of the organization associated with the project, and the `repo` field is the name of the project within that organization.

* The `tag` field is the version tag of the release. This can be any format, but preferably follows [semver](https://semver.org) or [calver](https://calver.org/).
  > **Note:** Tags can only be used **once** per release for security purposes.

## Usage

To publish this project, update the `org`, `repo`, and `tag` fields. Be sure the `out` and `artifact` fields point to the correct files.

Running the following command in the root of the project will trigger a publish:

```bash
valist publish
```

The Valist CLI will detect the package `type` as `go` and publish each `platform` artifact to the corresponding `org`, `repo`, and `tag`.
