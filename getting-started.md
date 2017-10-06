# Getting Started with the Auth0 Webtask Serverless Plugin {#getting-started-with-serverless}

First things first, let's get the Serverless framework installed on your machine.

**Installing the serverless cli**

```
npm install -g serverless
```

**Login to the serverless platform \(optional\)**

```
serverless login
```

# Auth0 Webtasks - Quick Start {#auth0-webtasks---quick-start}

This guide is designed to help you get started with Auth0 Webtasks as quick as possible.

{% video %}http://res.cloudinary.com/de-demo/video/upload/v1507312669/brand-assets-intro-hello-world.mov{% endvideo %}

#### **Step 1:  Create a new service**

##### Create a new service with the[`webtasks-nodejs`](https://github.com/serverless/serverless/tree/master/lib/plugins/create/templates/webtasks-nodejs)template

```
serverless create --template webtasks-nodejs --path brand-assets
```

##### Install the dependencies

```
cd brand-assets
npm install
```

#### **Step 2:   Setup the Credentials **

Run the [config crendentials command](https://serverless.com/framework/docs/providers/webtasks/cli-reference/config-credentials) to create a local profile. You will be asked for a phone number or email. You'll immediately receive a verification code. Enter the verification code and your profile will be entirely setup and ready to use.

```
serverless config credentials --provider webtasks
```

#### **Step 3: Deploy**

Run the [deploy command](https://serverless.com/framework/docs/providers/webtasks/cli-reference/deploy)

```
serverless deploy
```
Console will output:
```
$ serverless deploy
Serverless: Packaging service...
Serverless: Packaging disabled for function: "main"
Serverless: Deploying function: main...
Serverless: Successfully deployed function: main
Service Information
service: brand-assets
profile: serverless
stage: dev
endpoints:
  * - https://wt-41ac8847e83a648e7aff1d5bedacc6bd-0.sandbox.auth0-extend.com/brand-assets-dev-main
  main: brand-assets-dev-main
```

#### **Step 3:  Invoke**

```
serverless invoke --function main
```

#### Step 4: Review on CodePen (iFrame)

<iframe height='300' scrolling='no' title='dVdVdo' src='//codepen.io/dzeitman/embed/dVdVdo/?height=300&theme-id=31498&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dzeitman/pen/dVdVdo/'>dVdVdo</a> by Dan Zeitman (<a href='https://codepen.io/dzeitman'>@dzeitman</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### Step 5: Review on Gist
{% gist id="https://gist.github.com/dzeitman/019574a0c4cbad6c6485162cb2a6f2eb.js" %}{% endgist %}
