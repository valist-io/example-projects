# Publishing a GO Project

This project contains a simple `greeter` Javascript program, a `tsconfig.json` with typescript settings, a `package,json` and a `valist.yml` that enables secure publishing of the built binaries.

<!-- This project can be found at [https://app.valist.io/acme/nodejs-example](https://app.valist.io/test/binary) -->

## Configuring the `valist.yml` file

This project uses the following config:

```yaml
type: node
org: acme
repo: nodejs-example
tag: 0.1.6-rc.1
install: npm install
build: npm run build
out: dist/main.js
```

In this config:

* The project `type` is `node` -- this tells the CLI to handle the golang build environment accordingly. All `node` projects require an `out` field that corresponds to the directory containing the final build.

* The `build` field defines the command used for building the project. If not set, the build field for go projects will have the default value `npm run build`.

* The `org` field is the name of the organization associated with the project, and the `repo` field is the name of the project within that organization.

* The `tag` field is the version tag of the release. This can be any format, but preferably follows [semver](https://semver.org) or [calver](https://calver.org/).
  > **Note:** Tags can only be used **once** per release for security purposes.

* The `meta` field refers to any file containing the metadata associated with the release. This is typically a changelog, or release notes.

## Usage

To publish this project, update the `org`, `repo`, and `tag` fields. Be sure the `out` points to the correct file.

Running the following command in the root of the project will trigger a publish:

```bash
valist publish
```

The Valist CLI will detect the package `type` as `go` and publish the `out` artifact to the corresponding `org`, `repo`, and `tag`.