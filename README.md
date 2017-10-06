# Brand Assets Slack Command App

**Creating a Slack Command App from scratch with The Serverless Framework, WebTask and Cloudinary**

In this multi-part series we'll learn how to use several of the most innovative frameworks and apis to create a powerful Slack app and tool to deliver marketing assets a company organization.

* Serverless-Framework
* Auth0  - Webtasks
* Slack
* Cloudinary

We'll learn how to use the Serverless-Framework with the new webtask plugin, create a JavaScript function and deploy as webhook service via Webtask extend, and finally integrate it seamlessly into Slack.

**Why build a dynamic brand assets application?**

Today's company's move at the speed of light, marketing and other d

We're going to build useful tool for our company's slack channels. Brand Assets will be a Slack command line app that leverages Cloudinary's powerful image manipulation and delivery platform to provide on-demand branding assets.

We'll use Serverless and Webtask to create a simple webservice function to power our simple slack app. The function will simply generate a dynamic url that's configured by passing color, asset type and size arguments via the slack channel.

