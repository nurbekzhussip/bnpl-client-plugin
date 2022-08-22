# payment-schedule

## Usage
``` bash
# create new instance
const plugin = new Factoring004.PaymentSchedule({ elemId:'bnpl-plugin', totalAmount: 120000 })

# render plugin
plugin.render()

# if changed parent id you can use
const elem = document.createElement('div');
plugin.renderTo(elem)

# destroy app
plugin.destroy()
```


## Example
```
<head>
  <link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/nurbekzhussip/bnpl-plugin@0.0.6/build/bnpl-plugin.css"
    />
  <script defer="defer"
      src="https://cdn.jsdelivr.net/gh/nurbekzhussip/bnpl-plugin@0.0.6/build/bnpl-plugin.bundle.js"
      href="https://cdn.jsdelivr.net/gh/nurbekzhussip/bnpl-plugin@0.0.5/build/bnpl-plugin.css"
    />
  <script defer="defer"
      src="https://cdn.jsdelivr.net/gh/nurbekzhussip/bnpl-plugin@0.0.5/build/bnpl-plugin.bundle.js"
    ></script>
 </head>
 <body>
  <div id="bnpl-plugin"></div>
  <script defer>
    document.addEventListener("DOMContentLoaded", () => {
      const plugin = new Factoring004.PaymentSchedule({ elemId:'bnpl-plugin', totalAmount: 120000 });
      plugin.render();
    });
  </script>
</body>
```




## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
