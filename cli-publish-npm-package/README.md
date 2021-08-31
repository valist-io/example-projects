# Publishing an NPM Package

This project contains a simple `greeter` Javascript program, an `.npmignore` specifying files to ignore when packing the NPM package, a `tsconfig.json` with typescript settings, a `package,json` and a `valist.yml` that enables secure publishing of the built binaries.

<!-- This project can be found at [https://app.valist.io/exampleorg/exampleNpm](https://app.valist.io/test/binary) -->

## Configuring the `valist.yml` file

This project uses the following config:

```yaml
type: npm
org: exampleOrg
repo: exampleNpm
tag: 0.0.1
install: npm install
build: npm run build
```

In this config:

* The project `type` is `npm` -- this tells the CLI to handle the golang build environment accordingly.

* Since this project is an `NPM package` the `out` and `platforms` field does not need to be defined, instead a built package will be constructed with the name `<packageName>-<packageVersion>.tgz`. For example this config will generate a package named `nodejs-example-0.0.1-rc.0.tgz`.

* The `build` field defines the command used for building the project. If not set, the build field for NPM projects will have the default value `npm run build`.

* The `org` field is the name of the organization associated with the project, and the `repo` field is the name of the project within that organization.

* The `tag` field is the version tag of the release. This can be any format, but preferably follows [semver](https://semver.org) or [calver](https://calver.org/).
  > **Note:** Tags can only be used **once** per release for security purposes.

## Usage

To publish this project, update the `org`, `repo`, and `tag` fields. Be sure your `package.json` matches the correct name and version in your `valist.yml`.

Running the following command in the root of the project will trigger a publish:

```bash
valist publish
```

The Valist CLI will detect the package `type` as `npm` and publish the package.
