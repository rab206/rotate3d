# Rotate 3D
## How it works
Using your phone you can rotate a 360 degree image of a sofa.

## Who does it work for?
#### DFS
Currently just using a single sofa. http://www.dfs.co.uk/dynasty/dyn53agob
#### No-one else yet
Could implement it for Audi: https://www.audi.co.uk/new-cars/tt/tt-coupe.html

## How to demo
If the server is not already running;
1. Go to index.html
2. Click Run

Then open the page in the console on your mobile phone. As you rotate your phone the image of the sofa will rotate. You can do this by rotating e.g. in a spinny chair, or by rotating the phone on a flat surface.

It does not work on a device where the deviceorientation is not available.
*Check browsers*

## Development
#### Locally
You can use browsersync with ```gulp```.

## Thoughts
Need to think about how this is actually useful. Should it control an image on another device. Or do we just implement this in hololens.
We could publish this to Netlify if we wanted.