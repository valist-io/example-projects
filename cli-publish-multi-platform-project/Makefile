SHELL=/bin/bash

all: clean windows linux darwin

windows: 
	GOOS=windows GOARCH=amd64 go build -o ./dist/hello-windows64 src/main.go

linux: 
	GOOS=linux GOARCH=amd64 go build -o ./dist/hello-linux64 src/main.go

darwin: 
	GOOS=darwin GOARCH=amd64 go build -o ./dist/hello-darwin64 src/main.go

clean:
	rm -rf dist

publish: all
	valist publish acme-co/go-binary/0.0.3 dist
