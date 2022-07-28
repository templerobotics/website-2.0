# Temple Robotics Website
This is the github pages repository used for hosting the Temple Robotics website. 
This website uses react for a single page static website, using the database 
located at `public/db.json` to fetch events.

## Adding Events
The event database is located [here](public/db.json). Add an event by appending to 
the array. Events will need to be removed manually, as gh-pages cannot host a dynamic 
webpage. An example `json` can be seen below.

```json
[
	{
		"title": "Title of the event",
		"description": "Description of the event",
		"date": "04/22",
		"location": "Engineering building",
		"id": 0
	},
	{
		"title": "Title of the event 2",
		"description": "Description of the event 2",
		"date": "04/23",
		"location": "Engineering building",
		"id": 1
	}
]
```

## Getting the Environment Setup
It should be pretty simple getting the website set up on vscode. First you will need 
to download [Node.js](https://nodejs.org/en/).

Once the newest version of `Node.js` is installed, you can install the node packages 
with npm as follows

```
    npm i
```

Your environment should now be set up!

## Using the Environment
Once the environment is set up, there are a few commands once should know for deploying 
locally and to the gh-pages branch.

```sh
    npm start # Start the website locally at http://localhost:3000/website-2.0
    npm run deploy # Deploy the website to gh-pages. This should do all the work for you!
```
