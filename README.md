# Rotate 3D
## How it works
Using your phone you can rotate a 360 degree image of an object.

There are two examples;
* one where it directly rotates on the phone itself (package phone)
* secondly where the phone controls the rotation of the object on a separate screen

## Who does it work for?
#### DFS on a phone
Currently just using a single sofa. http://www.dfs.co.uk/dynasty/dyn53agob

Could implement it for Audi: https://www.audi.co.uk/new-cars/tt/tt-coupe.html
#### Audi phone controlling screen
Based on a 3d model from SketchUp.

We can get new models but need to ensure they are good enough. Once you have the model need to set the position so it is the right size in the window. Then need to adjust if the axes are not at the center of rotation.


## How to demo
### On phone
If the server is not already running;
1. Go to phone/index.html
2. Click Run

Then open the page in the console on your mobile phone. As you rotate your phone the image of the sofa will rotate. You can do this by rotating e.g. in a spinny chair, or by rotating the phone on a flat surface.

It does not work on a device where the deviceorientation is not available.
*Check browsers*

### Phone controlling screen
1. Go to index.js 
2. Click run
3. Open /interact on your phone
4. Open /render on your screen

As you rotate your phone the image of the car will rotate as well. 

## Development
This is using websockets so in theory should have a loading and pairing screen. Open the site on your phone automatically assigned an id and a url to open on the mobile as at the moment all screens are paired with all phones.


## Thoughts
Need to think about how this is actually useful. Should it control an image on another device. Or do we just implement this in hololens.
We could publish this to Netlify if we wanted.