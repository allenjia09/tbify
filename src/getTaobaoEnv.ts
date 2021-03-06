/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */

// ref: https://github.com/cnpm/binary-mirror-config/blob/master/package.json#L42

import { TAOBAO_MIRROR, TAOBAO_REGISTRY } from './consts'

// 尽量使用不带 npm_config_ 或 npm_package_config_ 前缀的环境变量：
// npm_config_ 前缀的环境变量会被 npm 解析为参数，
// 且在内部总会被转换为小写（即大小写不敏感），
// 同时在执行 npm-scripts（譬如 install、postinstall）时，
// 这些参数又会被设置为全小写的环境变量 npm_config_* 向下传递，
// 这就导致那些实现不严谨、预期得到大写参数的包得不到正确的设置，
// 比如 Cypress。
export function getTaobaoEnv(LOCAL_MIRROR: string): Record<string, string> {
  return {
    // NPM registry
    npm_config_registry: TAOBAO_REGISTRY,

    // Yarn registry
    yarn_registry: TAOBAO_REGISTRY,

    // node
    npm_config_disturl: `${TAOBAO_MIRROR}/node`,

    // nvm
    NVM_NODEJS_ORG_MIRROR: `${TAOBAO_MIRROR}/node`,
    NVM_IOJS_ORG_MIRROR: `${TAOBAO_MIRROR}/iojs`,

    // nodist
    NODIST_NODE_MIRROR: `${TAOBAO_MIRROR}/node`,
    NODIST_IOJS_MIRROR: `${TAOBAO_MIRROR}/iojs`,

    // n
    N_NODE_MIRROR: `${TAOBAO_MIRROR}/node`,

    // node-gyp
    NODEJS_ORG_MIRROR: `${TAOBAO_MIRROR}/node`,
    IOJS_ORG_MIRROR: `${TAOBAO_MIRROR}/iojs`,

    // node-sass
    SASS_BINARY_SITE: `${TAOBAO_MIRROR}/node-sass`,

    // node-swc
    SWC_BINARY_SITE: `${TAOBAO_MIRROR}/node-swc`,

    // Browser drivers
    PHANTOMJS_CDNURL: `${TAOBAO_MIRROR}/phantomjs`,
    CHROMEDRIVER_CDNURL: `${TAOBAO_MIRROR}/chromedriver`,
    OPERADRIVER_CDNURL: `${TAOBAO_MIRROR}/operadriver`,

    // Electron
    ELECTRON_MIRROR: `${TAOBAO_MIRROR}/electron/`,
    ELECTRON_BUILDER_BINARIES_MIRROR: `${TAOBAO_MIRROR}/electron-builder-binaries/`,

    // Python
    PYTHON_MIRROR: `${TAOBAO_MIRROR}/python`,

    // Chrome Puppeteer
    PUPPETEER_DOWNLOAD_HOST: TAOBAO_MIRROR,

    // NW.js
    NWJS_URLBASE: `${TAOBAO_MIRROR}/nwjs/v`,

    // Sentry CLI
    SENTRYCLI_CDNURL: `${TAOBAO_MIRROR}/sentry-cli`,

    // Cypress
    CYPRESS_DOWNLOAD_MIRROR: `${LOCAL_MIRROR}/cypress`,

    // Sharp
    // NOTE: 后缀 / 必加
    SHARP_DIST_BASE_URL: `${LOCAL_MIRROR}/sharp-libvips/`,

    // node-pre-gyp
    // ref: https://github.com/mapbox/node-pre-gyp/pull/170
    // https://github.com/node-gfx/node-canvas-prebuilt/blob/master/package.json#L24
    npm_config_canvas_binary_host_mirror: `${TAOBAO_MIRROR}/node-canvas-prebuilt`,
    // https://github.com/node-inspector/v8-profiler/blob/master/package.json#L24
    npm_config_profiler_binary_host_mirror: `${TAOBAO_MIRROR}/node-inspector`,
    // https://github.com/node-inspector/v8-debug/blob/master/package.json#L18
    npm_config_debug_binary_host_mirror: `${TAOBAO_MIRROR}/node-inspector`,
    // https://github.com/mapbox/node-sqlite3/blob/master/package.json#L10
    npm_config_node_sqlite3_binary_host_mirror: TAOBAO_MIRROR,
    // https://github.com/nodegit/nodegit/blob/master/package.json#L69
    // NOTE: {version} 会被 node-pre-gyp 替换
    npm_config_nodegit_binary_host_mirror: `${TAOBAO_MIRROR}/nodegit/v{version}`,
    // https://github.com/fsevents/fsevents
    npm_config_fse_binary_host_mirror: `${TAOBAO_MIRROR}/fsevents/`,

    // prebuild
    npm_config_sharp_binary_host: `${TAOBAO_MIRROR}/sharp`,
  }
}
