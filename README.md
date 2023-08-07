# ---plugin-name--- 

[![NPM version](https://img.shields.io/npm/v/---plugin-name---?color=a1b858&label=)](https://www.npmjs.com/package/---plugin-name---)

---plugin-name--- for [vite](https://github.com/vitejs/vite).

## Template Usage

> example use [@vtrbo/cli](https://github.com/vtrbo/cli)

Clone this template

```bash
vtr
# select Unplugin

# or
# vtr vtrbo/starter-unplugin my-plugin
```

Globally replace `---plugin-name---` with your plugin name.  

Globally replace `---PluginName---` with your plugin name (big camel case).  

Then you can start developing your plugin.

## Install

```bash
npm i ---plugin-name---
```

```js
// vite.config.js
import ---PluginName--- from '---plugin-name---/vite'

export default defineConfig({
  plugins: [---PluginName---({ /* options */ })],
})
```

## License

[MIT](./LICENSE) License © 2023 [Victor Bo](https://github.com/vtrbo)
