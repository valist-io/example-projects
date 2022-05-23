SHELL=/bin/bash

all: bin

bin: clean
	cargo build --release

clean:
	rm -rf target

publish: all
	valist publish acme-co/rust-binary/0.0.2 src target
