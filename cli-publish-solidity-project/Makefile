SHELL=/bin/bash

all: bin

install:
	npm install

bin: clean install
	npm run compile

clean:
	rm -rf build

publish: all
	valist publish acme-co/solidity/0.0.1 Hello.sol build
