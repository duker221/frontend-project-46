### Hexlet tests and linter status:
[![Actions Status](https://github.com/duker221/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/duker221/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/8473f9bb61c4ccbc1f47/maintainability)](https://codeclimate.com/github/duker221/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8473f9bb61c4ccbc1f47/test_coverage)](https://codeclimate.com/github/duker221/frontend-project-46/test_coverage)
[![Actions Status](https://github.com/duker221/frontend-project-46/actions/workflows/github-actions.yml/badge.svg)](https://github.com/duker221/frontend-project-46/actions)


### Description
Compares two configuration files and shows a difference.

### Requirements
To use the gendiff utility successfully, you need to have the following components installed:
+ **Install [Node js v20.8.0.](https://nodejs.org/en)**

### Dependencies
The project relies on the following libraries:
+ Lodash
+ Commander
+ Js-Yaml


Make sure to install these dependencies before running the project. You can install them using the following commands:
```bash
npm install lodash commander js-yaml
```

### Install
+ Clone the repository
```
git clone https://github.com/duker221/frontend-project-46
```
+ Navigate to the project directory
```
cd frontend-project-46
```
+ Make Install
```
make install
```
+ Debugging
```
make publish
```

+ Usage
```
gendiff -h
```

### Compare file
```
gendiff -f formatName file1.json or file1.yaml file2.json or file2.yaml
```


### Compares two JSON or YAML files in "stylish" format and shows a difference
[![asciicast](https://asciinema.org/a/0lPH4FQhJhYsdcoWlXi00XLQF.svg)](https://asciinema.org/a/0lPH4FQhJhYsdcoWlXi00XLQF)

### Compares two JSON or YAML files in "plain" format and shows a difference
[![asciicast](https://asciinema.org/a/7k80zagEOkB9XAOBsUWJPTrKG.svg)](https://asciinema.org/a/7k80zagEOkB9XAOBsUWJPTrKG)

### Compares two JSON or YAML files in "JSON" format and shows a difference
[![asciicast](https://asciinema.org/a/GhdPoA3w1BRW5LNeyhZnuxvpI.svg)](https://asciinema.org/a/GhdPoA3w1BRW5LNeyhZnuxvpI)