#  RoyalDetailing
## Detailing & CarWash

### Developer scripts
> - `npm run dev` - run project for development.  
> - `npm run build` - build project for production.  
> - `npm run lint` - check your code for codeStyle.  

### Developer script options
> - `npm run lint:fix` - fix your codeStyle errors.  

### Components
> - Use file name only in `PascalCase`.
> - Use file name as a `componentName`.
> - Use componentName in `kebab-case` as root className.
> - Use `self-closing tags` if you don't pass content.
> - Don't use `mixins`. Use `helpers`.
> - Don't use `extension` for import *.vue and *.js files.
> - Don't use `props` as Array. Always `describe` it.

### Svg in components
> - Compress your files with `Svgo`
> - Move it to `src/assets/svg/*`
> - Import `IconName` from 'assets/svg/IconName'
> - Use it as a `< IconName />`
> - Use `fill="currentColor"` in svg path.
> - Use color in styles for set svg `color`.

### Svgo batch compression
> - install global dependency `npm -g install svgo`. 
> - run terminal command `svgo -f INPUT_FOLDER -o OUTPUT_FOLDER`. 

### Styles
> - Use `base-style.scss` to set html, body and other base styles.
> - Use `override.scss` to override bootstrap options.
> - Use `variables.scss` to set @media, color and font properties.
> - Use `animations.scss` to define names for vue transitions.
> - Use `keyframes.scss` to set @keyframes for vue transitions.
> - Use `font.scss` to set @font-face.
> - Use only `scoped` styles.
> - Use only `scss` style lang.

### Breakpoints
| Variable   | Class name | Size    | Content |
| ---------- |:----------:| -------:|--------:|
| $screen-xs | .col       | <320px  | 100%    |
| $screen-sm | .col-sm    | ≥576px  | 540px   |
| $screen-md | .col-md    | ≥768px  | 720px   |
| $screen-lg | .col-lg    | ≥992px  | 960px   |
| $screen-xl | .col-xl    | ≥1200px | 1140px  |
| $screen-hd | .col-hd    | ≥1920px | 1728px  |

### Vuex
> - Don't use unnamed Vuex modules always add `moduleName`.
> - Don't use mapState - always write `getters`.
> - Don't use mapMutations - always call `actions`.
> - Don't use `requests in Vuex actions`. Move it to separate service.
> - Always use `namespaced` vuex modules.

### Modal
> - Use vuex `MODAL` module.
> - Use action `SHOW_MODAL` with { component, position, closeAction and closable } in props to show modal.
> - Use action `HIDE_MODAL` to hide modal.
> - Use `bootstrap` classes to set modal size.
> - Use `closable` prop for close modal by outside click.
> - Use `component` prop for set up content component.
> - Use `position` prop for set modal position (`right`, `bottom`, `null`).
> - Use `closeAction` prop to pass method called after hide modal. 
> - Use `closeAction` prop in nested component if this is needed. 

### Popup
> - Use vuex `POPUP` module.
> - Use popup only as a `mobile menu`.
> - Use action `SHOW_POPUP` with { component, closeAction and title } in props to show modal.
> - Use action `HIDE_POPUP` to hide modal.
> - Use `title` param for set up the popup title.
> - Use `options` param for set up the popup options.
> - Use `component` prop for set up content component.
> - Use `closeAction` prop to pass method called after hide popup. 

### Global preloader
> - Use vuex `PRELOADER` module.
> - Use `SHOW_PRELOADER` action with id in parameters to show preloader.
> - Use `HIDE_PRELOADER` action with id in parameters to hide preloader.
> - Preloader is visible until an `array` of ids in store is not empty.

### Commit and push
> - Don't commit without solving all `.eslint` problems.

### Docs
> - [Vue](https://vuejs.org/)
> - [Vuex](https://vuex.vuejs.org/)
> - [Vue Meta](https://vue-meta.nuxtjs.org/)
> - [Axios](https://github.com/axios/axios/)
> - [Bootstrap 4 Grid](https://getbootstrap.com/docs/4.0/layout/grid/)
> - [Lodash](https://lodash.com/)
> - [Luxon](https://moment.github.io/luxon/)
> - [Numeral](http://numeraljs.com/)
> - [Detect Browser](https://github.com/DamonOehlman/detect-browser)
> - [Favicons Webpack Plugin](https://github.com/jantimon/favicons-webpack-plugin)
> - [Cookie](https://learn.javascript.ru/cookie)
> - [Svgomg](https://jakearchibald.github.io/svgomg/)
> - [WebpackNotifier](https://github.com/Turbo87/webpack-notifier)
> - [VueDevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)  
> - [Svgo](https://github.com/svg/svgo)
