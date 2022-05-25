SHELL=/bin/bash

all: clean windows linux darwin

windows: 
	GOOS=windows GOARCH=amd64 go build -o ./dist/hello-windows-amd64 src/main.go

linux: 
	GOOS=linux GOARCH=amd64 go build -o ./dist/hello-linux-amd64 src/main.go

darwin: 
	GOOS=darwin GOARCH=amd64 go build -o ./dist/hello-darwin-amd64 src/main.go
	GOOS=darwin GOARCH=arm64 go build -o ./dist/hello-darwin-arm64 src/main.go

clean:
	rm -rf dist

publish: all
	valist publish