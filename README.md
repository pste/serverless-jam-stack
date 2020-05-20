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

