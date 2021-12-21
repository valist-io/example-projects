# Publishing With the Valist Github Action

This project contains a simple `hello world` Go program, an `example.yml` github workflow file, and a  `valist.yml` that enables secure publishing of the built binary.

<!-- This project can be found at [https://app.valist.io/acme/go](https://app.valist.io/acme/go) -->

## Using the Github Action

Below is the minimal config for using the Valist Github action in your workflow:

```yaml
name: Valist publish
on:
  push:
    branches: ['main'] # Event triggers on pushes to main

jobs:
  Valist: # Define deploy job
    runs-on: ubuntu-latest # OS used for virtual machine

    steps:
      - uses: actions/checkout@v2 # Make source code of repo available
      
      - name: Valist publish
        uses: valist-io/valist-github-action@main # Execute valist build & publish
```

## Configuring the `valist.yml` file

This project uses the following config:

```yaml
name: acme-co/github-action
tag: 0.0.1
artifacts:
  linux/amd64: dist/linux64
  darwin/amd64: dist/darwin64
  windows/amd64: dist/windows64
```

In this config:

* The `tag` field is the version tag of the release. This can be any format, but preferably follows [semver](https://semver.org) or [calver](https://calver.org/).

  > **Note:** Tags can only be used **once** per release for security purposes.


## Usage

To publish this project, update the `name`, and `tag` fields.

> **Note:** Before publishing you will have to set the `VALIST_SINGER` key on yuor repository. Please refer to [https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)

Running the following commands in your project will commit and push triggering a new publish:

```bash
  make build
  git add src/main.go valist.yml .github/workflows/example.yml
  git commit -m "Release 0.0.1"
  git push 
```

The Valist CLI inside the Github Action will publish the artifacts to the corresponding `name`, and `tag`.
