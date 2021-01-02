## Setup (initial requirements)

Actually I'm using Node.js v12. Let's start our setup:
```
npm install -g serverless
mkdir serverless-jam
cd serverless-jam
serverless create --template aws-nodejs
npm init -y

# removed nuxt
npm i axios express serverless-http serverless-apigw-binary
```
## Credentials

When using AWS you can easily use your profile. It is stored in:  
`~/.aws/credentials`

When using multiple profiles you can setup an environment variable to switch profile:  
`export AWS_PROFILE="profileName2"`

## Basic commands

`serverless --help` will give you the list of all the commands  
  
`serverless info` will show infos about your deployment  
  
`serverless deploy / remove`  to deploy or remove the whole stack  
  