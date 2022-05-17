SHELL=/bin/bash

all: bin

bin: clean
	go build -o ./dist/hello src/main.go

clean:
	rm -rf dist

publish: all
	valist publish acme-co/go-binary/0.0.1 dist/*