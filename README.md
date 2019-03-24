# My Customized theme for Shower
This theme is customized based on the [Shower's material theme][material theme].  It adds code highlighting by Highlight.js and stylings.

[material theme]: https://github.com/shower/material

![theme screenshot](pictures/canvas.png)


## How to use this theme
Clone this repository and install the dependencies:

    npm install

Modify the slide content at `index.html`. Live preview the slides by:

    npm start


## Customize the theme
Modify styles at `styles/custom/custom.css`. For example, to change the theme's main color:

```css
.shower {
    --color-key: #008aa5;
}
```


## License
The theme template is shared under MIT license, which is based on the following packages:

- [shower]: HTML5 slideshow framework by Vadim Makeev *et al.*, MIT license
- [shower's material theme][material theme] under [MIT License](LICENSE.md)
- [highlight.js]: Syntax highlight library by Ivan Sagalaev *et al.*, MIT license

[shower]: https://github.com/shower/shower
[highlight.js]: http://highlightjs.org/