SHELL=/bin/bash

all: clean windows linux darwin

windows: 
	GOOS=windows GOARCH=amd64 go build -o ./dist/windows/amd64/hello-go src/main.go

linux: 
	GOOS=linux GOARCH=amd64 go build -o ./dist/linux/amd64/hello-go src/main.go

darwin: 
	GOOS=darwin GOARCH=amd64 go build -o ./dist/darwin/amd64/hello-go src/main.go
	GOOS=darwin GOARCH=arm64 go build -o ./dist/darwin/arm64/hello-go src/main.go

clean:
	rm -rf dist

publish: all
	valist publish