SHELL=/bin/bash

all: build publish

build-%:
	cd cli-publish-$*-project && make

build: build-go build-multi-platform build-rust

publish-%: build
	cd cli-publish-$*-project && valist publish --dryrun

publish-npm:
	cd cli-publish-npm-package && npm publish --registry=http://localhost:9000/api/npm

publish: publish-go publish-multi-platform publish-rust

