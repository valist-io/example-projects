# Publishing a Git Repository

This project can be found at [https://app.valist.io/acme-co/git-example](https://app.valist.io/acme-co/git-example)

## Usage

To publish this project, create a new git tag. This will be used as the `tag` for the release.

Running the following command in the root of the project will trigger a publish:

```bash
# in a new terminal window start the valist daemon
valist daemon

# a prompt will appear in the window running valist daemon
git push http://localhost:9000/api/git/acme-co/git-example v0.0.1
```
