SHELL=/bin/bash

publish-git:
	cd cli-publish-git-project && valist publish --dryrun

publish-go:
	cd cli-publish-go-project && valist publish --dryrun

publish-multi:
	cd cli-publish-multi-platform-project && valist publish --dryrun

publish-nodejs:
	cd cli-publish-nodejs-project && valist publish --dryrun

publish-npm:
	cd cli-publish-npm-package && npm publish --registry=http://localhost:9000/api/npm

publish-rust:
	cd cli-publish-rust-project && valist publish --dryrun

publish-all: publish-go publish-multi publish-nodejs publish-rust
