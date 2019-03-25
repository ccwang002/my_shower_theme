# My Customized theme for Shower
This theme is customized based on the [Shower's material theme][material
theme].  It adds code highlighting by Highlight.js and customized stylings.
[See it in action][gh-pages].

![theme screenshot](pictures/canvas.png)

[material theme]: https://github.com/shower/material
[gh-pages]: https://blog.liang2.tw/my_shower_theme/



## How to use this theme
Clone this repository and install the dependencies:

    npm install

Modify the slides content at `index.html`. Live preview the slides by:

    npm start

Export the slides (including libraries under `libs`, fonts under `fonts`, and
images under `pictures`) to folder `prepared` by:

    npm run prepare

Publish the slides to gh-pages of the same repository by (which automically
runs the `prepare` command):

    npm run publish



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
