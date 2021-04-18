# Example Binary Publishing

In this project is a simple `hello world` Go program and a `valist.yml` that enables secure publishing of the built binary.

This project can be found at [https://app.valist.io/test/binary](https://app.valist.io/test/binary)

## Configuring the `valist.yml` file

The config for this project looks like the following:

```yaml
type: binary
org: test
project: binary
tag: 0.1.6-rc.0
meta: RELEASE.md
artifact: dist/hello
```

In this case, the project `type` is `binary` -- this tells the CLI to handle this accordingly.

All `binary` projects require an `artifact` field containing the final build.

The `org` is simply the name of the organization associated with the project, and the `project` field is the name of said project within the `org`.

The `tag` field is the version tag of the release. This can be any format, but preferably follows [semver](https://semver.org) or [calver](https://calver.org/).
Tags can only be used once per release for security purposes.

The `meta` field refers a some file containing the metadata associated with the release. This is typically a changelog, or release notes.

Lastly, the `artifact` field contains the path to the actual release file that will be published. In this case, it's pointing to the built `hello world` program.

## Usage

To publish an update to this project, simply update the `tag`, add some info to the `meta` file, and make sure that the `artifact` points to the correct file.

Then, running the following command will trigger a publish:

```bash
valist publish
```

The Valist CLI will detect the package `type` as `binary` and publish the `artifact` to the corresponding `org`, `project`, and `tag`, along with the `meta` file.