SHELL=/bin/bash

DIST=./dist
SOURCE=./src

BUILD=./cmd/ipfs
FLAGS=-ldflags "-s -w" -trimpath

all: clean checkout bin-linux-amd64 bin-linux-arm64 bin-darwin-amd64 bin-darwin-arm64 bin-windows-amd64

checkout:
	git clone --depth 1 --branch v0.11.0 https://github.com/ipfs/go-ipfs ${SOURCE}

clean:
	rm -rf ${SOURCE}
	rm -rf ${DIST}

bin-linux-amd64:
	cd ${SOURCE} && GOOS=linux GOARCH=amd64 go build ${FLAGS} -o .${DIST}/linux-amd64/ipfs ${BUILD}

bin-linux-arm64:
	cd ${SOURCE} && GOOS=linux GOARCH=arm64 go build ${FLAGS} -o .${DIST}/linux-arm64/ipfs ${BUILD}

bin-darwin-amd64:
	cd ${SOURCE} && GOOS=darwin GOARCH=amd64 go build ${FLAGS} -o .${DIST}/darwin-amd64/ipfs ${BUILD}

bin-darwin-arm64:
	cd ${SOURCE} && GOOS=darwin GOARCH=arm64 go build ${FLAGS} -o .${DIST}/darwin-arm64/ipfs ${BUILD}

bin-windows-amd64:
	cd ${SOURCE} && GOOS=windows GOARCH=amd64 go build ${FLAGS} -o .${DIST}/windows-amd64/ipfs.exe ${BUILD}

.PHONY: all checkout clean
