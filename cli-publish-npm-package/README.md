# Publishing an NPM Package

This project contains a simple `greeter` Javascript program, an `.npmignore` specifying files to ignore when packing the NPM package, a `tsconfig.json` with typescript settings, and a `package.json`.

This project can be found at [https://app.valist.io/acme-co/npm-example](https://app.valist.io/acme-co/npm-example)

## Usage

To publish this project, update the `version` field. This will be used as the `tag` for the release.

Be sure your `package.json` has the correct name @`org`/`repo`.

Running the following command in the root of the project will trigger a publish:

```bash
# in a new terminal window start the valist daemon
valist daemon

# a prompt will appear in the window running valist daemon
npm publish --registry=http://localhost:9000/api/npm
```

This will publish a new version using the `version` from your `package.json`.
