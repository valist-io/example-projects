SHELL=/bin/bash

DIST=./dist
SOURCE=./src

BUILD=./cmd/geth
FLAGS=-ldflags "-s -w" -trimpath

publish: all
	valist publish

all: clean checkout bin-darwin-arm64

checkout:
	git clone --depth 1 --branch release/1.10 https://github.com/ethereum/go-ethereum.git ${SOURCE}

clean:
	rm -rf ${SOURCE}
	rm -rf ${DIST}

bin-darwin-arm64:
	cd ${SOURCE} && GOOS=darwin GOARCH=arm64 go build ${FLAGS} -o .${DIST}/darwin-arm64/geth ${BUILD}

.PHONY: all checkout clean