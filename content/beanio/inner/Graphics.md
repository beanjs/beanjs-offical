---
title: Graphics
category: 'inner'
tags: [object]
---

<!--59--> 

### Graphics.prototype.asBMP()

::i-chinese{sha="dc51551d516d3cc48b8b803e0f6d795f36ff91d86347a662fb7bbffdc965190e"}
::
Create a Windows BMP file from this Graphics instance, and return it as a
String.

### Graphics.prototype.asImage(type)

::i-chinese{sha="f0a773e902e9fe9c5a381bc81486e9de397b7b51bc1e737b0efd949b3ce073f4"}
::
Return this Graphics object as an Image that can be used with
`Graphics.drawImage`. Check out [the Graphics reference
page](http://www.espruino.com/Graphics#images-bitmaps) for more information on
images.

Will return undefined if data can't be allocated for the image.

The image data itself will be referenced rather than copied if:

* An image `object` was requested (not `string`)
* The Graphics instance was created with `Graphics.createArrayBuffer`
* Is 8 bpp *OR* the `{msb:true}` option was given
* No other format options (zigzag/etc) were given

Otherwise data will be copied, which takes up more space and may be quite slow.

### Graphics.prototype.asURL()

::i-chinese{sha="bc745cc9aad231b0e0ffa32b77be8c45df141f4df4dcef40d9d3f32384ec0706"}
::
Create a URL of the form `data:image/bmp;base64,...` that can be pasted into the
browser.

The Espruino Web IDE can detect this data on the console and render the image
inline automatically.

### Graphics.prototype.blendColor(col_a,col_b,amt)

::i-chinese{sha="928702c3eb382b8b3e8c1f401d9f6340272f095b773b565fbdc1baae479596de"}
::
Blend between two colors, and return the result.

```
// dark yellow - halfway between red and green
var col = g.blendColor("#f00","#0f0", 0.5);
// Get a color 25% brighter than the theme's background colour
var col = g.blendColor(g.theme.fg,g.theme.bg, 0.75);
// then...
g.setColor(col).fillRect(10,10,100,100);
```

### Graphics.prototype.blit(options)

::i-chinese{sha="a5b18c017a100d58dfec614162977abde66a984b7a2e3af3e0af975e03472e53"}
::
Blit one area of the screen (x1,y1 w,h) to another (x2,y2 w,h)

```
g.blit({
  x1:0, y1:0,
  w:32, h:32,
  x2:100, y2:100,
  setModified : true // should we set the modified area?
});
```

Note: This uses repeated pixel reads and writes, so will not work on platforms
that don't support pixel reads.

### Graphics.prototype.buffer

::i-chinese{sha="424374f7b47f2436a8c675e1ddb99b733b28694cedfa78bf3ef8dca4505778d5"}
::
On Graphics instances with an offscreen buffer, this is an `ArrayBuffer` that
provides access to the underlying pixel data.

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

::i-chinese{sha="42ba37b9787897c434e1740edc4cef8cbb81c8d807ad7ff0b8381c3416ebfb04"}
::
Fill a rectangular area in the Background Color

On devices with enough memory, you can specify `{x,y,x2,y2,r}` as the first
argument, which allows you to draw a rounded rectangle.

### Graphics.prototype.drawCircle(x,y,rad)

::i-chinese{sha="a5788a3a51c40f3118ee22e68f3856744cfb573ce3a42ac5e4a6433d85b5391c"}
::
Draw an unfilled circle 1px wide in the Foreground Color

### Graphics.prototype.drawCircleAA(x,y,r)

::i-chinese{sha="f878c156257a928d574388a13e808c3b7a44798419958407db879875b403346e"}
::
Draw a circle, centred at (x,y) with radius r in the current foreground color

### Graphics.prototype.drawEllipse(x1,y1,x2,y2)

::i-chinese{sha="6575e1a6dd6a9266d1c3b9499381d5c227d67c3789391124ece8a8263c3db80d"}
::
Draw an ellipse in the Foreground Color

### Graphics.prototype.drawImage(image,x,y,options)

::i-chinese{sha="e1f438461529baae23a9d1dc732a16c386f3927b0d729ef48415dc855dbc4eb4"}
::
Image can be:

* An object with the following fields `{ width : int, height : int, bpp :
  optional int, buffer : ArrayBuffer/String, transparent: optional int,
  palette : optional Uint16Array(2/4/16) }`. bpp = bits per pixel (default is
  1), transparent (if defined) is the colour that will be treated as
  transparent, and palette is a color palette that each pixel will be looked up
  in first
* A String where the the first few bytes are:
  `width,height,bpp,[transparent,]image_bytes...`. If a transparent colour is
  specified the top bit of `bpp` should be set.
* An ArrayBuffer Graphics object (if `bpp<8`, `msb:true` must be set) - this is
  disabled on devices without much flash memory available

Draw an image at the specified position.

* If the image is 1 bit, the graphics foreground/background colours will be
  used.
* If `img.palette` is a Uint16Array or 2/4/16 elements, color data will be
  looked from the supplied palette
* On Bangle.js, 2 bit images blend from background(0) to foreground(1) colours
* On Bangle.js, 4 bit images use the Apple Mac 16 color palette
* On Bangle.js, 8 bit images use the Web Safe 216 color palette
* Otherwise color data will be copied as-is. Bitmaps are rendered MSB-first

If `options` is supplied, `drawImage` will allow images to be rendered at any
scale or angle. If `options.rotate` is set it will center images at `x,y`.
`options` must be an object of the form:

```javascript
{
  rotate : float, // the amount to rotate the image in radians (default 0)
  scale : float, // the amount to scale the image up (default 1)
  frame : int    // if specified and the image has frames of data
                 //  after the initial frame, draw one of those frames from the image
}
```

For example:

```
// In the top left of the screen
g.drawImage(img,0,0);
// In the top left of the screen, twice as big
g.drawImage(img,0,0,{scale:2});
// In the center of the screen, twice as big, 45 degrees
g.drawImage(img, g.getWidth()/2, g.getHeight()/2,
            {scale:2, rotate:Math.PI/4});
```

### Graphics.prototype.drawImages(layers,options)

::i-chinese{sha="853f77d5d353655c4590d14b12d337c2e9462efe2fa5b2a7fc286441bd122208"}
::
Draws multiple images *at once* - which avoids flicker on unbuffered systems
like Bangle.js. Maximum layer count right now is 4.

```
layers = [ {
  {x : int, // x start position
   y : int, // y start position
   image : string/object,
   scale : float, // scale factor, default 1
   rotate : float, // angle in radians
   center : bool // center on x,y? default is top left
   repeat : should this image be repeated (tiled?)
   nobounds : bool // if true, the bounds of the image are not used to work out the default area to draw
  }
]
options = { // the area to render. Defaults to rendering just enough to cover what's requested
 x,y,
 width,height
}
```

### Graphics.prototype.drawLine(x1,y1,x2,y2)

::i-chinese{sha="005fc8507407a925dfda7752559596ca3b4c854a751991d9fb9df201554f716b"}
::
Draw a line between x1,y1 and x2,y2 in the current foreground color

### Graphics.prototype.drawLineAA(x1,y1,x2,y2)

::i-chinese{sha="005fc8507407a925dfda7752559596ca3b4c854a751991d9fb9df201554f716b"}
::
Draw a line between x1,y1 and x2,y2 in the current foreground color

### Graphics.prototype.drawPoly(poly,closed)

::i-chinese{sha="df04afdd9fc180b928540dc803c9fca90da63c75a3f148768f9d603393e88f52"}
::
Draw a polyline (lines between each of the points in `poly`) in the current
foreground color

**Note:** there is a limit of 64 points (128 XY elements) for polygons

### Graphics.prototype.drawPolyAA(poly,closed)

::i-chinese{sha="862349a5bf7c1b805967a17f1c5b8e0cd2ae3451185ba250d92b234c27cb7d8a"}
::
Draw an **antialiased** polyline (lines between each of the points in `poly`) in
the current foreground color

**Note:** there is a limit of 64 points (128 XY elements) for polygons

### Graphics.prototype.drawRect(x1,y1,x2,y2)

::i-chinese{sha="e76bddc3095c9d3f258eeb37684f0f457b086606b7764a23c4a2dc0fa1e50913"}
::
Draw an unfilled rectangle 1px wide in the Foreground Color

### Graphics.prototype.drawString(str,x,y,solid)

::i-chinese{sha="9365772360a0faab2be6c58e88ff39511295c581e8ccfb76f550fffe4ea35734"}
::
Draw a string of text in the current font.

```
g.drawString("Hello World", 10, 10);
```

Images may also be embedded inside strings (e.g. to render Emoji or characters
not in the current font). To do this, just add `0` then the image string ([about
Images](http://www.espruino.com/Graphics#images-bitmaps)) For example:

```
g.drawString("Hi \0\7\5\1\x82 D\x17\xC0");
// draws:
// # #  #      #     #
// # #            #
// ### ##         #
// # #  #      #     #
// # # ###      #####
```

### Graphics.prototype.dump()

::i-chinese{sha="5a77b9bacb67b72b334c6166dcb8f722f797733a8be46470aab8f270fdb4c7c5"}
::
Output this image as a bitmap URL of the form `data:image/bmp;base64,...`. The
Espruino Web IDE will detect this on the console and will render the image
inline automatically.

This is identical to `console.log(g.asURL())` - it is just a convenient function
for easy debugging and producing screenshots of what is currently in the
Graphics instance.

**Note:** This may not work on some bit depths of Graphics instances. It will
also not work for the main Graphics instance of Bangle.js 1 as the graphics on
Bangle.js 1 are stored in write-only memory.

### Graphics.prototype.fillCircle(x,y,rad)

::i-chinese{sha="35c183a00b4d8c83b66b9e1d705e9613018a53158abc5370a1db2cf2cfb17202"}
::
Draw a filled circle in the Foreground Color

### Graphics.prototype.fillEllipse(x1,y1,x2,y2)

::i-chinese{sha="d46ab1f036e569faffafc881066eb3628ce22fef304d6befae2a188bc7487771"}
::
Draw a filled ellipse in the Foreground Color

### Graphics.prototype.fillPoly(poly)

::i-chinese{sha="80babff01e34403696afa9e3aa9ae7372b4199ae25332ce020fa079e55d36bb1"}
::
Draw a filled polygon in the current foreground color.

```
g.fillPoly([
  16, 0,
  31, 31,
  26, 31,
  16, 12,
  6, 28,
  0, 27 ]);
```

This fills from the top left hand side of the polygon (low X, low Y) *down to
but not including* the bottom right. When placed together polygons will align
perfectly without overdraw - but this will not fill the same pixels as
`drawPoly` (drawing a line around the edge of the polygon).

**Note:** there is a limit of 64 points (128 XY elements) for polygons

### Graphics.prototype.fillPolyAA(poly)

::i-chinese{sha="9866e77f2eef0c167ceec4a208d0ebff26d880232acb1cafd128bb5647da5113"}
::
Draw a filled polygon in the current foreground color.

```
g.fillPolyAA([
  16, 0,
  31, 31,
  26, 31,
  16, 12,
  6, 28,
  0, 27 ]);
```

This fills from the top left hand side of the polygon (low X, low Y) *down to
but not including* the bottom right. When placed together polygons will align
perfectly without overdraw - but this will not fill the same pixels as
`drawPoly` (drawing a line around the edge of the polygon).

**Note:** there is a limit of 64 points (128 XY elements) for polygons

### Graphics.prototype.fillRect(x1,y1,x2,y2)

::i-chinese{sha="a464d2c197dcade969f54d56e07cefadd00eb1a905e84b93188d7c73599b0797"}
::
Fill a rectangular area in the Foreground Color

On devices with enough memory, you can specify `{x,y,x2,y2,r}` as the first
argument, which allows you to draw a rounded rectangle.

### Graphics.prototype.flip(all)

::i-chinese{sha="ef3cc5727ce0893a08089dda80fa68d4ee25e93e9e8bb3592d4cb2c4602546c4"}
::
On instances of graphics that drive a display with an offscreen buffer, calling
this function will copy the contents of the offscreen buffer to the screen.

Call this when you have drawn something to Graphics and you want it shown on the
screen.

If a display does not have an offscreen buffer, it may not have a `g.flip()`
method.

On Bangle.js 1, there are different graphics modes chosen with
`Bangle.setLCDMode()`. The default mode is unbuffered and in this mode
`g.flip()` does not affect the screen contents.

On some devices, this command will attempt to only update the areas of the
screen that have changed in order to increase speed. If you have accessed the
`Graphics.buffer` directly then you may need to use `Graphics.flip(true)` to
force a full update of the screen.

### Graphics.prototype.getBPP()

::i-chinese{sha="40829bba7591d02dfeb643a83fa5d5b4c3743a917384f572ed15367b6bbbb285"}
::
The number of bits per pixel of this Graphics instance

**Note:** Bangle.js 2 behaves a little differently here. The display is 3 bit,
so `getBPP` returns 3 and `asBMP`/`asImage`/etc return 3 bit images. However in
order to allow dithering, the colors returned by `Graphics.getColor` and
`Graphics.theme` are actually 16 bits.

### Graphics.prototype.getBgColor()

::i-chinese{sha="2514c1f9a926d88a9652f294d84bc81aebd8557833affcbfdf4b4455bb416234"}
::
Get the background color to use for subsequent drawing operations

### Graphics.prototype.getColor()

::i-chinese{sha="af899891bb817b1495dcd63a43978f1f062f1bf8565f462f0124c23a590cc090"}
::
Get the color to use for subsequent drawing operations

### Graphics.prototype.getFont()

::i-chinese{sha="5df168734798d2f77082d17e2824c552f44ccff75578a054b7882e922c6c4b4e"}
::
Get the font by name - can be saved and used with `Graphics.setFont`.

Normally this might return something like `"4x6"`, but if a scale factor is
specified, a colon and then the size is reported, like "4x6:2"

**Note:** For custom fonts, `Custom` is currently reported instead of the font
name.

### Graphics.prototype.getFontHeight()

::i-chinese{sha="e53e1982312d864cbeb120e32b938b774f056a69a5e9136067d575c23b3d40ca"}
::
Return the height in pixels of the current font

### Graphics.prototype.getFonts()

::i-chinese{sha="7254ac753812cb4903e92f46079e9765319a16bfbbe592a56a8f4367110e85d0"}
::
Return an array of all fonts currently in the Graphics library.


> **Note:** Vector fonts are specified as `Vector#` where `#` is the font height.
As there are effectively infinite fonts, just `Vector` is included in the list.

### Graphics.prototype.getHeight()

::i-chinese{sha="c451671ee0ff451f776a42871a0bc080e50f75836497406f42b12700711d147e"}
::
The height of this Graphics instance

### Graphics.prototype.getModified(reset)

::i-chinese{sha="aa2ed8eef6f423f4278a8e008a2b5910f89f3bd7b722b6ce7729ab5b6f1ef47f"}
::
Return the area of the Graphics canvas that has been modified, and optionally
clear the modified area to 0.

For instance if `g.setPixel(10,20)` was called, this would return `{x1:10,
y1:20, x2:10, y2:20}`

### Graphics.prototype.getPixel(x,y)

::i-chinese{sha="2220aed7533fd659d12292f7df8677c2841cc6fa5ffc2d8f4c05cc516767ec7f"}
::
Get a pixel's color

### Graphics.prototype.getWidth()

::i-chinese{sha="814584c8b4633bb96d0107319b103c68de11ed27f69cee87c9ec928684c20495"}
::
The width of this Graphics instance

### Graphics.prototype.imageMetrics(str)

::i-chinese{sha="f6c1ae3870f82e0c1c2e8504148b1e49d33f0c7e41da3cdce7e24abd18ef0227"}
::
Return the width and height in pixels of an image (either Graphics, Image
Object, Image String or ArrayBuffer). Returns `undefined` if image couldn't be
decoded.

`frames` is also included is the image contains more information than you'd
expect for a single bitmap. In this case the bitmap might be an animation with
multiple frames

### Graphics.prototype.lineTo(x,y)

::i-chinese{sha="38cbe19b6bde0ec6b707b8ac9a87e353df2be12955db186668413b6b1e1fbfe7"}
::
Draw a line from the last position of `lineTo` or `moveTo` to this position

### Graphics.prototype.moveTo(x,y)

::i-chinese{sha="7d5900187a5a05d4beb267ce56b3d3f9235a7f063d343640dbedcca917adfb56"}
::
Move the cursor to a position - see lineTo

### Graphics.prototype.quadraticBezier(arr,options)

::i-chinese{sha="7a063fcdd36f7455e2a1b89555b30c860dca0cc17cdcae7436e5e067f40c9797"}
::
Calculate the square area under a Bezier curve.

 x0,y0: start point x1,y1: control point y2,y2: end point

 Max 10 points without start point.

### Graphics.prototype.reset()

::i-chinese{sha="57e648cba904f4cfc557633b5e94914f32e88969183298cc63b74ee7d8c73205"}
::
Reset the state of Graphics to the defaults (e.g. Color, Font, etc) that would
have been used when Graphics was initialised.

### Graphics.prototype.scroll(x,y)

::i-chinese{sha="bed0cd25048b35acaf8da6ae17a858f071ac8d9a025c88192fa44f9852f7a4d4"}
::
Scroll the contents of this graphics in a certain direction. The remaining area
is filled with the background color.

> **Note:** This uses repeated pixel reads and writes, so will not work on platforms
that don't support pixel reads.

### Graphics.prototype.setBgColor(r,g,b)

::i-chinese{sha="70b551e2270f5ae9bfd8e5bae20232bbb12b4cb093088bb8ad5dff86c3e2502d"}
::
Set the background color to use for subsequent drawing operations.

See `Graphics.setColor` for more information on the mapping of `r`, `g`, and `b` to pixel values.

> **Note:** On devices with low flash memory, `r` **must** be an integer representing the color in the current bit depth. It cannot
be a floating point value, and `g` and `b` are ignored.

### Graphics.prototype.setClipRect(x1,y1,x2,y2)

::i-chinese{sha="b07b4ddaf9810069c064ac89e8eef92a2e03f19193639f914f1293e845760d79"}
::
This sets the 'clip rect' that subsequent drawing operations are clipped to sit
between.

These values are inclusive - e.g. `g.setClipRect(1,0,5,0)` will ensure that only
pixel rows 1,2,3,4,5 are touched on column 0.

> **Note:** For maximum flexibility on Bangle.js 1, the values here are not range
checked. For normal use, X and Y should be between 0 and
`getWidth()-1`/`getHeight()-1`.

> **Note:** The x/y values here are rotated, so that if `Graphics.setRotation` is
used they correspond to the coordinates given to the draw functions, `not to the
physical device pixel`.

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

::i-chinese{sha="6c8c054089ae4e79bb808f8ec0dda46c8e7d4319c583983b3871e16739239415"}
::
Set the font by name. Various forms are available:

* `g.setFont("4x6")` - standard 4x6 bitmap font
* `g.setFont("Vector:12")` - vector font 12px high
* `g.setFont("4x6:2")` - 4x6 bitmap font, doubled in size
* `g.setFont("6x8:2x3")` - 6x8 bitmap font, doubled in width, tripled in height

You can also use these forms, but they are not recommended:

* `g.setFont("Vector12")` - vector font 12px high
* `g.setFont("4x6",2)` - 4x6 bitmap font, doubled in size

`g.getFont()` will return the current font as a String.

For a list of available font names, you can use `g.getFonts()`.

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

::i-chinese{sha="1187f18a2d05ff8e2161f72a27c2d2e1f56e70806bdeb0ae76c7c3104d5eeb62"}
::
Make subsequent calls to `drawString` use a Custom Font of the given height. See
the [Fonts page](http://www.espruino.com/Fonts) for more information about
custom fonts and how to create them.

For examples of use, see the [font
modules](https://www.espruino.com/Fonts#font-modules).

**Note:** while you can specify the character code of the first character with
`firstChar`, the newline character 13 will always be treated as a newline and
not rendered.

### Graphics.prototype.setFontVector(size)

::i-chinese{sha="116fefa9840457ba63147e962cbc6209864f8ec3b8afe0ffb1c70869c4257a6c"}
::
Make subsequent calls to `drawString` use a Vector Font of the given height.

It is recommended that you use `Graphics.setFont("Vector", size)` for more
flexibility.

### Graphics.prototype.setPixel(x,y,col)

::i-chinese{sha="f5321fc00be243ed42ae59e928d4ea2e69cb594c64c5b7badf51d7bcceea0dcb"}
::
Set a pixel's color

### Graphics.prototype.setRotation(rotation,reflect)

::i-chinese{sha="f5c5ab9d7218c9f0f7348123203ec5cb2cc7be8da94edb66599040f4104de84e"}
::
Set the current rotation of the graphics device.

### Graphics.prototype.setTheme(theme)

::i-chinese{sha="ff50a458940bb75d4f69bd6f8647f6ed49be9bcaabfec264a42efa2fd5bf5830"}
::
Set the global colour scheme. On Bangle.js, this is reloaded from
`settings.json` for each new app loaded.

See `Graphics.theme` for the fields that can be provided. For instance you can
change the background to red using:

```
g.setTheme({bg:"#f00"});
```

### Graphics.prototype.stringMetrics(str)

::i-chinese{sha="ac17cba137545cf0589b5c28a26f1f60bbfc4418afe73f5ad4bc106d1a85f8d6"}
::
Return the width and height in pixels of a string of text in the current font

### Graphics.prototype.stringWidth(str)

::i-chinese{sha="6af447fa9b7cca8e52b4e9dcd702f1e205c91b2c4213bcc443532b3f42ef0723"}
::
Return the size in pixels of a string of text in the current font

### Graphics.prototype.theme

::i-chinese{sha="52ca080797d4206f088eafa60731cf638b5d9de590f3ac5f1a7e0fbe12ebaf26"}
::
Returns an object of the form:

```
{
  fg : 0xFFFF,  // foreground colour
  bg : 0,       // background colour
  fg2 : 0xFFFF,  // accented foreground colour
  bg2 : 0x0007,  // accented background colour
  fgH : 0xFFFF,  // highlighted foreground colour
  bgH : 0x02F7,  // highlighted background colour
  dark : true,  // Is background dark (e.g. foreground should be a light colour)
}
```

These values can then be passed to `g.setColor`/`g.setBgColor` for example
`g.setColor(g.theme.fg2)`. When the Graphics instance is reset, the background
color is automatically set to `g.theme.bg` and foreground is set to
`g.theme.fg`.

On Bangle.js these values can be changed by writing updated values to `theme` in
`settings.js` and reloading the app - or they can be changed temporarily by
calling `Graphics.setTheme`

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

### Graphics.prototype.transformVertices(verts,transformation)

::i-chinese{sha="1184cbd952c4f89f9d4534cdbe0532a64b90a0c6a216ecc9b3b5d5b49c5b4b0b"}
::
Transformation can be:

* An object of the form
```
{
  x: float, // x offset (default 0)
  y: float, // y offset (default 0)
  scale: float, // scale factor (default 1)
  rotate: float, // angle in radians (default 0)
}
```
* A six-element array of the form `[a,b,c,d,e,f]`, which represents the 2D transformation matrix
```
a c e
b d f
0 0 1
```

 Apply a transformation to an array of vertices.

### Graphics.prototype.wrapString(str,maxWidth)

::i-chinese{sha="f42bf7cb2992e306a5adbadf9f9a647eb8be1275c001e7f0055adcf74ed38c89"}
::
Wrap a string to the given pixel width using the current font, and return the
lines as an array.

To render within the screen's width you can do:

```
g.drawString(g.wrapString(text, g.getWidth()).join("\n")),
```

<!--4--> 

### Graphics.createArrayBuffer(width,height,bpp,options)

::i-chinese{sha="c8ac128bb7f44d4598ae03fbbcf38e4bc4853d9835ca65f1529827bec01923e0"}
::
Create a Graphics object that renders to an Array Buffer. This will have a field
called 'buffer' that can get used to get at the buffer itself

### Graphics.createCallback(width,height,bpp,callback)

::i-chinese{sha="074b0c3e9b9a11fb58a3e89df107802230d999c82de02830d1a020b68651eec8"}
::
Create a Graphics object that renders by calling a JavaScript callback function
to draw pixels

### Graphics.createImage(str)

::i-chinese{sha="bbe3eaa73d02e45f53eb6b9eb68fdee34d759e2da17dc7035b5ca5951e020a03"}
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

If the characters at the beginning and end of the string are newlines, they will
be ignored. Spaces are treated as `0`, and any other character is a `1`

### Graphics.getInstance()

::i-chinese{sha="be71f03eb45f73d3a5d9a1d984acbaab1f45ae1c8d426eac58081c75153bff77"}
::
On devices like Pixl.js or HYSTM boards that contain a built-in display this
will return an instance of the graphics class that can be used to access that
display.

Internally, this is stored as a member called `gfx` inside the `hiddenRoot`.
