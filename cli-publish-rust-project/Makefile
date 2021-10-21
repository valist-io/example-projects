SHELL=/bin/bash

all: bin

bin: clean
	cargo build --release

clean:
	rm -rf target

publish: all
	valist publish
