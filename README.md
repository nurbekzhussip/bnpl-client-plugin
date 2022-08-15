# payment-schedule

## Example
```
<head>
  <link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/nurbekzhussip/bnpl-plugin@0.0.4/build/bnpl-plugin.css"
    />
  <script defer="defer"
      src="https://cdn.jsdelivr.net/gh/nurbekzhussip/bnpl-plugin@0.0.4/build/bnpl-plugin.bundle.js"
    ></script>
 </head>
 <body>
  <div id="bnpl-plugin"></div>
  <script defer>
    document.addEventListener("DOMContentLoaded", () => {
      const t = new BNPL.PaymentSchedule();
      t.render({ elemId:'bnpl-plugin', totalAmount: 120000 });
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
