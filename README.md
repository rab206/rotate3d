# Chromecast Configurator
## How it works
Designed to work with a configurator it broadcasts a big image and the currently selected options to a TV, reflecting the options you select on your smaller device

## Who does it work for
#### Audi
Based on the Audi "Choose your look" page
#### No-one else yet
Could implement it for DFS but probably more interested in Hololens

## How to demo
ChromeCast AUDI configurator bookmarklet. To use create a new bookmark, enter a name, paste the contents of this into the value.
Go to the Audi configurator, when you are on the "Choose your look" page click the bookmark you created.
``` javascript
javascript: (function() { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://configurator.netlify.com/index.js'); document.body.appendChild(jsCode); }());
```

#### Mobile device
Can't use the bookmarklet. So instead need to set up android debugging over USB (automatic from a Mac, require drivers from a PC). Then setup a Snippet in Chrome Debugger Snippets (using index.js), when the device connects and is on the "Choose your look" page - run the snippet. You can then disconnect the device in order to demo it.

## Development
#### Locally
Uncomment the line which sends the processMessage request to populate the content.

You can also use browsersync with ```gulp```

#### Using chromecast
Chromecast receiver app is set up as custom receiver in Google Cast console. The receiver url is on Netlify https://configurator.netlify.com
ChromeCast retrieves the url on initial cast, so when you redeploy to netlify just reconnect to ChromeCast and it will reload the receiver.

The 'public' folder is deployed to netlify.

## Setup using contentful
Inside folder contentful there is a set up which uses the products set up in contentful. Go to https://chromecast-rab206.c9users.io/url-cast-receiver/sender.html. This uses someone elses receiver.

## Thoughts
Need to consider how we set this up for multiple different clients as the netlify domain is hardcoded as the chromecast receiver. So on initial connect we should send the client so that we get the correct header and font etc.