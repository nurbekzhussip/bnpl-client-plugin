# payment-schedule

## Example
``` bash
<head>
  # connect bnpl-plugin.css
  <link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/nurbekzhussip/bnpl-plugin@develop/build/bnpl-plugin.css"
    />
  # connect bnpl-plugin.bundle.js
  <script defer="defer"
      src="https://cdn.jsdelivr.net/gh/nurbekzhussip/bnpl-plugin@develop/build/bnpl-plugin.bundle.js"
    ></script>
 </head>
 <body>
 # root div with id="bnpl-plugin"
  <div id="bnpl-plugin"></div>
  <script defer>
    document.addEventListener("DOMContentLoaded", () => {
      # render plugin in div with id="bnpl-plugin"
      const t = new BNPL.PaymentSchedule();
      t.render({ totalAmount: 50001 });
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
