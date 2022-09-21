---
title: Graphics
category: 'inner'
tags: [object]
---

<!--45--> 

### Graphics.prototype.asBMP()

::i-chinese{sha="267e0ae695cfe51f38b30cbbb2bea40abcc3d993103170e6b9e194627d19974c"}
::
Create a Windows BMP file from this Graphics instance, and return it as a String.

### Graphics.prototype.asImage()

::i-chinese{sha="261417d28b4d12f49a9512b7ad46978885c7bb54638f5cf2d293c922208592dd"}
::
Return this Graphics object as an Image that can be used with `Graphics.drawImage`.
Will return undefined if data can't be allocated for it.

### Graphics.prototype.asURL()

::i-chinese{sha="85d3661c6439bb978d37ff25b21d433c27629dcb364f3eb1afbaa4948ae7ef7a"}
::
Create a URL of the form `data:image/bmp;base64,...` that can be pasted into the browser.
The Espruino Web IDE can detect this data on the console and render the image inline automatically.

### Graphics.prototype.buffer

::i-chinese{sha="740ce49b09443d0d9f7480c80b1b124b6c9c00933eae651896a3f280b5b360a7"}
::
On Graphics instances with an offscreen buffer, this
is an `ArrayBuffer` that provides access to the underlying
pixel data.

```javascript
g=Graphics.createArrayBuffer(8,8,8)
g.drawLine(0,0,7,7)
print(new Uint8Array(g.buffer))
new Uint8Array([
255, 0, 0, 0, 0, 0, 0, 0,
0, 255, 0, 0, 0, 0, 0, 0,
0, 0, 255, 0, 0, 0, 0, 0,
0, 0, 0, 255, 0, 0, 0, 0,
0, 0, 0, 0, 255, 0, 0, 0,
0, 0, 0, 0, 0, 255, 0, 0,
0, 0, 0, 0, 0, 0, 255, 0,
0, 0, 0, 0, 0, 0, 0, 255])
```

### Graphics.prototype.clear(reset)

::i-chinese{sha="916d097c38c26b9815a68df17f1f330af04dc0d232950568230bdab5dc9d8eb8"}
::
Clear the LCD with the Background Color

### Graphics.prototype.clearRect(x1,y1,x2,y2)

::i-chinese{sha="5aeae823abebcdf25d1bbd0b81ea1b7c6185191b1d18d0733a920736eb3128c8"}
::
Fill a rectangular area in the Background Color

### Graphics.prototype.drawCircle(x,y,rad)

::i-chinese{sha="a5788a3a51c40f3118ee22e68f3856744cfb573ce3a42ac5e4a6433d85b5391c"}
::
Draw an unfilled circle 1px wide in the Foreground Color

### Graphics.prototype.drawEllipse(x1,y1,x2,y2)

::i-chinese{sha="6575e1a6dd6a9266d1c3b9499381d5c227d67c3789391124ece8a8263c3db80d"}
::
Draw an ellipse in the Foreground Color

### Graphics.prototype.drawImage(image,x,y,options)

::i-chinese{sha="1837744e0f4cc33a12be832728937b5773c1672c3146f892e3dfc0faaebd8331"}
::
Image can be:

* An object with the following fields `{ width : int, height : int, bpp : optional int, buffer : ArrayBuffer/String, transparent: optional int, palette : optional Uint16Array(2/4/16) }`. bpp = bits per pixel (default is 1), transparent (if defined) is the colour that will be treated as transparent, and palette is a color palette that each pixel will be looked up in first
* A String where the the first few bytes are: `width,height,bpp,[transparent,]image_bytes...`. If a transparent colour is specified the top bit of `bpp` should be set.

Draw an image at the specified position.

* If the image is 1 bit, the graphics foreground/background colours will be used.
* If `img.palette` is a Uint16Array or 2/4/16 elements, color data will be looked from the supplied palette
* On Bangle.js, 2 bit images blend from background(0) to foreground(1) colours
* On Bangle.js, 4 bit images use the Apple Mac 16 color palette
* On Bangle.js, 8 bit images use the Web Safe 216 color palette
* Otherwise color data will be copied as-is. Bitmaps are rendered MSB-first

If `options` is supplied, `drawImage` will allow images to be rendered at any scale or angle. If `options.rotate` is set it will
center images at `x,y`. `options` must be an object of the form:

```javascript
{
  rotate : float, // the amount to rotate the image in radians (default 0)
  scale : float, // the amount to scale the image in radians (default 1)
}
```

### Graphics.prototype.drawLine(x1,y1,x2,y2)

::i-chinese{sha="005fc8507407a925dfda7752559596ca3b4c854a751991d9fb9df201554f716b"}
::
Draw a line between x1,y1 and x2,y2 in the current foreground color

### Graphics.prototype.drawPoly(poly,closed)

::i-chinese{sha="3e7086c3295c1ca82f4117117dc95ac6a0508c58703e13c2aea2f374cdd56415"}
::
Draw a polyline (lines between each of the points in `poly`) in the current foreground color

### Graphics.prototype.drawRect(x1,y1,x2,y2)

::i-chinese{sha="e76bddc3095c9d3f258eeb37684f0f457b086606b7764a23c4a2dc0fa1e50913"}
::
Draw an unfilled rectangle 1px wide in the Foreground Color

### Graphics.prototype.drawString(str,x,y,solid)

::i-chinese{sha="599e856ece238c100fe09f8a639ccc226ff2b367a094c3422d96d125755f5da0"}
::
Draw a string of text in the current font

### Graphics.prototype.dump()

::i-chinese{sha="56433e7511c39195ff5a132c93feb3da1b7565748f32efc19ab3b925ac819853"}
::
Output this image as a bitmap URL. The Espruino Web IDE can detect the data on the console and render the image inline automatically.

This is identical to `console.log(g.asURL())` - it is just a convenient function for easy debugging.

### Graphics.prototype.fillCircle(x,y,rad)

::i-chinese{sha="35c183a00b4d8c83b66b9e1d705e9613018a53158abc5370a1db2cf2cfb17202"}
::
Draw a filled circle in the Foreground Color

### Graphics.prototype.fillEllipse(x1,y1,x2,y2)

::i-chinese{sha="d46ab1f036e569faffafc881066eb3628ce22fef304d6befae2a188bc7487771"}
::
Draw a filled ellipse in the Foreground Color

### Graphics.prototype.fillPoly(poly)

::i-chinese{sha="40adeb2f5d0061d9e74c05b2a2b45a05fc5e5a634ba45afb68de748c6b07f4b9"}
::
Draw a filled polygon in the current foreground color

### Graphics.prototype.fillRect(x1,y1,x2,y2)

::i-chinese{sha="444479aa6eacb95962240f1840c80b12f5f32723b48c96345d910ec2260df2ca"}
::
Fill a rectangular area in the Foreground Color

### Graphics.prototype.flip(all)

::i-chinese{sha="7aec64e5aa00921c307662d52a054ba3abbe4703f0a779b4bf03f613b3ba0951"}
::
On instances of graphics that drive a display with
an offscreen buffer, calling this function will
copy the contents of the offscreen buffer to the
screen.

Call this when you have drawn something to Graphics
and you want it shown on the screen.

If a display does not have an offscreen buffer,
it may not have a `g.flip()` method.

On Bangle.js, there are different graphics modes
chosen with `Bangle.setLCDMode()`. The default mode
is unbuffered and in this mode `g.flip()` does not
affect the screen contents, however it will cause the
screen to light up if it was previously off due
to inactivity.

On some devices, this command will attempt to
only update the areas of the screen that have
changed in order to increase speed. If you have
accessed the `Graphics.buffer` directly then you
may need to use `Graphics.flip(true)` to force
a full update of the screen.

### Graphics.prototype.getBgColor()

::i-chinese{sha="2514c1f9a926d88a9652f294d84bc81aebd8557833affcbfdf4b4455bb416234"}
::
Get the background color to use for subsequent drawing operations

### Graphics.prototype.getColor()

::i-chinese{sha="af899891bb817b1495dcd63a43978f1f062f1bf8565f462f0124c23a590cc090"}
::
Get the color to use for subsequent drawing operations

### Graphics.prototype.getFont()

::i-chinese{sha="c83291e6b5ad6c38f37daf2afafd0321f583a00b10d423d7af5585d8b08a57cc"}
::
Get the font by name - can be saved and used with `Graphics.setFont`

### Graphics.prototype.getFontHeight()

::i-chinese{sha="e53e1982312d864cbeb120e32b938b774f056a69a5e9136067d575c23b3d40ca"}
::
Return the height in pixels of the current font

### Graphics.prototype.getFonts()

::i-chinese{sha="ec7be46f266460f579ed47423b30c8141fed45869acea3cafd8901d5a6d48b9d"}
::
Return an array of all fonts currently in the Graphics library.

> **Note:** Vector fonts are specified as `Vector#` where `#` is the font height. As there
are effectively infinite fonts, just `Vector` is included in the list.

### Graphics.prototype.getHeight()

::i-chinese{sha="aa6c28b93432f4125888f6890b2c9bb356b9e258eb1400cee1d15ee6c2ab7941"}
::
The height of the LCD

### Graphics.prototype.getModified(reset)

::i-chinese{sha="816bfa42ff86a6d554ffe4ec391ad979386a4d491e124e0ef4854c27be300026"}
::
Return the area of the Graphics canvas that has been modified, and optionally clear
the modified area to 0.

For instance if `g.setPixel(10,20)` was called, this would return `{x1:10, y1:20, x2:10, y2:20}`

### Graphics.prototype.getPixel(x,y)

::i-chinese{sha="2220aed7533fd659d12292f7df8677c2841cc6fa5ffc2d8f4c05cc516767ec7f"}
::
Get a pixel's color

### Graphics.prototype.getWidth()

::i-chinese{sha="f516120ddb55e0109eb99d5c22cd3ae3bdee6bbb8cde748422a1619ff5d4e89f"}
::
The width of the LCD

### Graphics.prototype.lineTo(x,y)

::i-chinese{sha="032723a150882e636536d3dd0425565bf8ea523b3a559f85083ee0d468917846"}
::
Draw a line from the last position of lineTo or moveTo to this position

### Graphics.prototype.moveTo(x,y)

::i-chinese{sha="7d5900187a5a05d4beb267ce56b3d3f9235a7f063d343640dbedcca917adfb56"}
::
Move the cursor to a position - see lineTo

### Graphics.prototype.quadraticBezier(arr,options)

::i-chinese{sha="1433eb95aa1fa77d96d486484764262b8ed39404724038ab62dfd5f601c9ab05"}
::
Calculate the square area under a Bezier curve.

 x0,y0: start point
 x1,y1: control point
 y2,y2: end point

 Max 10 points without start point.

### Graphics.prototype.reset()

::i-chinese{sha="f7049b3099e7da8e57bee0393c30feb2f08f74aa3b47353b4a29a8d7f64a594a"}
::
Reset the state of Graphics to the defaults (eg. Color, Font, etc)
that would have been used when Graphics was initialised.

### Graphics.prototype.scroll(x,y)

::i-chinese{sha="e99929e5c386926b0fbe1b9a8afc034dbc82358b6da1e1fe6e15b2141088636a"}
::
Scroll the contents of this graphics in a certain direction. The remaining area
is filled with the background color.

> **Note:** This uses repeated pixel reads and writes, so will not work on platforms that
don't support pixel reads.

### Graphics.prototype.setBgColor(r,g,b)

::i-chinese{sha="70b551e2270f5ae9bfd8e5bae20232bbb12b4cb093088bb8ad5dff86c3e2502d"}
::
Set the background color to use for subsequent drawing operations.

See `Graphics.setColor` for more information on the mapping of `r`, `g`, and `b` to pixel values.

> **Note:** On devices with low flash memory, `r` **must** be an integer representing the color in the current bit depth. It cannot
be a floating point value, and `g` and `b` are ignored.

### Graphics.prototype.setClipRect(x1,y1,x2,y2)

::i-chinese{sha="df3c18ff5f18e0a10f5e9695e75f24651ee9dfe6faac4d683126fc1019a411c6"}
::
This sets the 'clip rect' that subsequent drawing operations are clipped to
sit between.

These values are inclusive - eg `g.setClipRect(1,0,5,0)` will ensure that only
pixel rows 1,2,3,4,5 are touched on column 0.

> **Note:** For maximum flexibility, the values here are not range checked. For normal
use, unsure X and Y are between 0 and `getWidth`/`getHeight`.

### Graphics.prototype.setColor(r,g,b)

::i-chinese{sha="2f325f1bdf2e7637a048fdf6de1f2f3d859a525b039d4b8f52205c9beb9ad06a"}
::
Set the color to use for subsequent drawing operations.

If just `r` is specified as an integer, the numeric value will be written directly into a pixel. eg. On a 24 bit `Graphics` instance you set bright blue with either `g.setColor(0,0,1)` or `g.setColor(0x0000FF)`.

A good shortcut to ensure you get white on all platforms is to use `g.setColor(-1)`

The mapping is as follows:

* 32 bit: `r,g,b` => `0xFFrrggbb`
* 24 bit: `r,g,b` => `0xrrggbb`
* 16 bit: `r,g,b` => `0brrrrrggggggbbbbb` (RGB565)
* Other bpp: `r,g,b` => white if `r+g+b > 50%`, otherwise black (use `r` on its own as an integer)

If you specified `color_order` when creating the `Graphics` instance, `r`,`g` and `b` will be swapped as you specified.

> **Note:** On devices with low flash memory, `r` **must** be an integer representing the color in the current bit depth. It cannot
be a floating point value, and `g` and `b` are ignored.

### Graphics.prototype.setFont(name,size)

::i-chinese{sha="e439c44e14cadfd7be97d168c30bfa658a97b1ffaf75d2d7d898d5143f97f3de"}
::
Set the font by name, eg "4x6", or "Vector12".

For bitmap fonts you can also specify a size multiplier, for example `g.setFont("4x6",2)` will double the size of the standard 4x6 bitmap font to 8x12.

### Graphics.prototype.setFontAlign(x,y,rotation)

::i-chinese{sha="dfa767d07aa2c21fd2948fe90687ea81aefb478a9407ef1aeabdaabc8d66ac9e"}
::
Set the alignment for subsequent calls to `drawString`

### Graphics.prototype.setFontBitmap()

::i-chinese{sha="82c74a9b529379ad8acf295d7e52a7c09c528fbadbbf64f59251251e3f6a3d4e"}
::
Make subsequent calls to `drawString` use the built-in 4x6 pixel bitmapped Font

It is recommended that you use `Graphics.setFont("4x6")` for more flexibility.

### Graphics.prototype.setFontCustom(bitmap,firstChar,width,height)

::i-chinese{sha="a4127a045f7f823536c36f90551577c1229082aa1591a91d9e8e6b753636665c"}
::
Make subsequent calls to `drawString` use a Custom Font of the given height. See the [Fonts page](http://www.espruino.com/Fonts) for more
information about custom fonts and how to create them.

### Graphics.prototype.setFontVector(size)

::i-chinese{sha="c2059eb1bae2f0231fe33b3ab8f1c5a54f7b94e4377b9b293244c1aadd257832"}
::
Make subsequent calls to `drawString` use a Vector Font of the given height.

It is recommended that you use `Graphics.setFont("Vector", size)` for more flexibility.

### Graphics.prototype.setPixel(x,y,col)

::i-chinese{sha="f5321fc00be243ed42ae59e928d4ea2e69cb594c64c5b7badf51d7bcceea0dcb"}
::
Set a pixel's color

### Graphics.prototype.setRotation(rotation,reflect)

::i-chinese{sha="f5c5ab9d7218c9f0f7348123203ec5cb2cc7be8da94edb66599040f4104de84e"}
::
Set the current rotation of the graphics device.

### Graphics.prototype.stringWidth(str)

::i-chinese{sha="6af447fa9b7cca8e52b4e9dcd702f1e205c91b2c4213bcc443532b3f42ef0723"}
::
Return the size in pixels of a string of text in the current font

### Graphics.prototype.toColor(r,g,b)

::i-chinese{sha="379dbe6f63f356dbcd0755ad10788a6f1d9987f7cba8399c8ee6c88e8e9b9bd2"}
::
Work out the color value to be used in the current bit depth based on the arguments.

This is used internally by setColor and setBgColor

```javascript
// 1 bit
g.toColor(1,1,1) => 1
// 16 bit
g.toColor(1,0,0) => 0xF800
```

<!--4--> 

### Graphics.createArrayBuffer(width,height,bpp,options)

::i-chinese{sha="5a11d74cd0dadb6452d7f36d15f030bcc3130a8d9bd462bcfb11d065db0fb5b0"}
::
Create a Graphics object that renders to an Array Buffer. This will have a field called 'buffer' that can get used to get at the buffer itself

### Graphics.createCallback(width,height,bpp,callback)

::i-chinese{sha="079204462ac0eba82f3cfa7e22ccc1ec44a3baac7fec633291ba192f123573cd"}
::
Create a Graphics object that renders by calling a JavaScript callback function to draw pixels

### Graphics.createImage(str)

::i-chinese{sha="a99035cd6253eb7ede93b3e088e01354f51e1f9a76e13a3c986d74a2387b98e7"}
::
Create a simple Black and White image for use with `Graphics.drawImage`.

Use as follows:

```javascript
var img = Graphics.createImage(`
XXXXXXXXX
X       X
X   X   X
X   X   X
X       X
XXXXXXXXX
`);
g.drawImage(img, x,y);
```

If the characters at the beginning and end of the string are newlines, they
will be ignored. Spaces are treated as `0`, and any other character is a `1`

### Graphics.getInstance()

::i-chinese{sha="70bb4380859318f7dab6f5c04cd6d3baf9d777783000cf3cf79dce0b905d1211"}
::
On devices like Pixl.js or HYSTM boards that contain a built-in display
this will return an instance of the graphics class that can be used to
access that display.

Internally, this is stored as a member called `gfx` inside the `hiddenRoot`.
