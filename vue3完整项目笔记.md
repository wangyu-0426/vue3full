##### 项目初始化

使用vue-ts模板初始化项目，vite + vue3 + ts

```cmd
npm init vite vue3full --template vue-ts
```

安装依赖

```cmd
npm install
```

启动项目

```cmd
npm run dev
```

##### 安装并配置eslint

```cmd
npm install eslint -D
npm init @eslint/config
```

.eslintrc.cjs 可以不使用配置工具，直接复制配置文件就可以，需安装必要依赖

> @typescript-eslint/eslint-plugin
> @typescript-eslint/parser
> eslint-plugin-vue

```js
module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential',  // 不使用recommended
		'plugin:@typescript-eslint/recommended'
	],
	'parser': 'vue-eslint-parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module',
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'indent': ['error', 2],
		'quotes': ['error', 'single'],
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
	}
}
```

vscode安装volar插件，做为项目默认格式化工具
设置保存自动格式化 .vscode/settings.json

```json
{
    "editor.formatOnSave": true
}
```

##### 配置lint脚本

package.json

```cmd
"scripts": {
    "lint": "eslint src/**/*.{js,jsx,vue,ts,tsx} --fix"
  },
```

> 关于eslint、stylelint、prettier
> husky、commitlint、lint-staged
> editorconfig、vscode配置

> eslint侧重代码质量检查，no-var、eqeqeq、no-multiple-empty-lines等，eslint检查js，stylelint检查css
> prettier侧重代码格式化，printWidth、semi、singleQuote等，支持html、css、js、ts、json等
> eslint和prettier可以单独使用也可以同时使用，可以通过使用eslint-config-prettier和stylelint-config-prettier来解决冲突
> husky，提交代码时使用钩子，pre-commit、commit-msg...
> lint-staged，配合husky的pre-commit，检查暂存区的文件，和符合规范则中断提交
> commitlint，配合husky的commit-msg，检查提交信息是否符合规范
>
> eslint: https://eslint.org/
> stylelint: https://stylelint.io/
> prettier: https://prettier.io/docs/en/index.html
> husky: https://www.npmjs.com/package/husky、https://github.com/typicode/husky、https://typicode.github.io/husky/
> git hooks: https://www.git-scm.com/book/zh/v2/自定义-Git-Git-钩子
> lint-staged: https://www.npmjs.com/package/lint-staged、https://github.com/okonet/lint-staged#readme
> commitlint: https://commitlint.js.org/

> **提交阶段代码检查 与 编码阶段自动格式化 分别使用不同工具。编码时可以使用volar或者prettier插件自动格式化。提交阶段使用lint检查，用prettier修复。同时注意处理不同工具之间的配置冲突**

##### 版本控制

安装git，https://gitforwindows.org/

项目初始化命令，生成 .git 文件夹

```cmd
git init
```

全局配置用户名和邮箱

```cmd
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

![img](https://pics7.baidu.com/feed/d833c895d143ad4b60257e17714561a7a50f06a9.png?token=a42dd236fa8a0687ae0e4d0690cfd322)

| 工作目录   | 暂存区        | 本地repo        | 远程repo    |
| ---------- | ------------- | --------------- | ----------- |
| git add => | git commit => | git push =>     |             |
|            |               |                 | <= git pull |
|            | <=            | <= git checkout |             |
|            | <=            | <= git merge    |             |

将文件添加至暂存区

```cmd
git add *
git add .
```

提交全部修改，不用添加到暂存

```cmd
git commit -a -m "commit message"
```

提交远程库

```cmd
git push
```

从远程库拉取

```cmd
git pull
```

从远程库克隆

```cmd
git clone 
```

查看版本号，回滚

```cmd
git log
git reset --hard 版本号
```

处理分支

处理冲突



##### 配置husky、lint-staged

```cmd
npm install husky lint-staged -D
```

初始化husky，生成 .husky 文件夹

```cmd
npx husky install
```

新增文件 ./husky/pre-commit，包含提交前要运行的脚本

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
```

> husky的pre-commit在commit前执行
>
> lint-staged对暂存区的文件执行校验

lint-staged







##### 配置路径别名@

安装@types/node

```cmd
npm install @types/node -D
```

vite.config.ts，引入path，增加resolve

```ts
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
```

tsconfig.json配置路径，不然引入ts文件时会报错

```json
    "compilerOptions": {
        "baseUrl": "./"  
        "paths"： { // 
            "@/*": ["src/*"]
        }
    }
```



##### 安装vue-router

```cmd
npm install vue-router
```

配置路由，router/index.ts

```ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router
```

main.ts

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

App.vue

```vue
<template>
  <router-view />
</template>
```

##### 安装vuex

```cmd
npm install vuex
```

定义store，store/vuex.ts

```ts
import { createStore } from 'vuex'
export default createStore({
    state: {
        name: 'vuex name'
    },
    mutations: {
        changeName(state, name) {
            state.name = name
        }
    },
    actions: {
    },
    modules: {
    }
})
```

main.ts

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/vuex'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
```

调用

```vue
<script setup lang="ts">
import { useStore } from 'vuex' // 引入useStore方法
const store = useStore()  // 该方法用于返回store实例
</script>
<template>
    <div @click="store.commit('changeName', 'vuex name updated!')">
        {{ store.state.name }}
    </div>
</template>
```

##### 安装pinia

```cmd
npm install pinia
```

定义store，store/pinia.ts

```ts
import { defineStore } from 'pinia'
const usePiniaStore = defineStore('main', {
    state: () => ({
        name: 'pinia name'
    }),
    getters: {
        doubleCount(state) {
            return state.name + ' double'
        }
    },
    actions: {
        increment() {
            this.name = this.name + 1
        }
    }
})
export default usePiniaStore
```

main.ts

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
```

调用

```vue
<script setup lang="ts">
import usePiniaStore from '../store/pinia'
const piniaStore = usePiniaStore()
</script>
<template>
    <div @click="piniaStore.increment()">
        {{ piniaStore.doubleCount }}
    </div>
</template>
```

##### 安装element-plus

```cmd
npm install element-plus
```

安装自动导入插件

```cmd
npm install -D unplugin-vue-components unplugin-auto-import
```

配置文件

vite.config.ts

```ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

main.ts

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/vuex'
import ElementPlus from 'element-plus';

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
```

使用自动导入组件以后，vue文件中可以直接使用components目录下的组件，而无需import

##### 使用图标

###### 全局注册

main.ts

```ts
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
```

```vue
	<el-icon>
        <Plus />
    </el-icon>
```

###### 使用iconify

安装依赖， [unplugin-icons](https://github.com/antfu/unplugin-icons) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

配置plugin，vite.config.ts

```ts
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // IconsResolver({
        //   prefix: 'Icon',
        // }),
      ],

    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
```

```vue
    <i-ep-add-location />
    <i-ep-aim />
    <el-icon>
        <i-ep-circle-check-filled />
    </el-icon>
```



##### CSS 预处理

使用scss（sass）、less、stylus等预处理器，配置styleLint

定义全局变量，子元素嵌套或缩进，样式导入包含...

```cmd
npm install sass -D
```

```vue
<style lang="scss" scoped>
$title_color :rgb(13, 255, 0);
$span_color: #f00;
$span_padding_left: 1em;

h2.title {
    color: $title_color;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1em;

    span {
        color: $span_color;
        padding-left: $span_padding_left;
    }
}
</style>
```



##### 封装axios

安装axios

封装请求，interceptor



##### 多环境配置

###### import.meta.env  对象

Vite 在一个特殊的  import.meta.env  对象上暴露环境变量
```ts
const env = import.meta.env
console.log(env)
```

生产环境下的import.meta.env

> BASE_URL: "/"
> DEV: false
> MODE: "production"
> PROD: true

开发环境下的import.meta.env

> BASE_URL: "/"
> DEV: true
> MODE: "development"
> PROD: false
> SSR: false

###### .env 文件

> .env                			# 所有情况下都会加载
> .env.local         		  # 所有情况下都会加载，但会被 git 忽略
> .env.[mode]        	  # 只在指定模式下加载
> .env.[mode].local     # 只在指定模式下加载，但会被 git 忽略

.env

```
VITE_SOME_KEY = "some key 123"
```

> 只有以 `VITE_` 为前缀的变量才会暴露给经过 vite 处理的代码

调用

```ts
const some_key = import.meta.env.VITE_SOME_KEY
console.log(some_key) // some key 123
```

除了development和production以外，还可以自定义其他环境，如：staging

配置.env.staging文件

使用带参数的命令

```
vite build --mode staging
```

staging模式下的import.meta.env对象

> BASE_URL: "/"
> DEV: true
> MODE: "staging"
> PROD: false

##### 定义layout，嵌套路由



##### 权限，路由守卫，动态路由



##### mock server



##### 单元测试、组件测试

https://staging-cn.vuejs.org/guide/scaling-up/testing.htm

单测 [Vitest](https://vitest.dev/)、[Peeky](https://peeky.dev/)、[Jest](https://jestjs.io/)



###### 单元测试

安装依赖，配置jest

https://blog.csdn.net/weixin_39559449/article/details/126465458

```
npm install babel-jest@27 jest@27 ts-jest@27 -D
npm install @babel/core @babel/preset-env babel-plugin-transform-es2015-modules-commonjs @vue/test-utils @vue/vue3-jest jest-transform-stub -D
```

jest.config.js

```js
export default {
    preset: 'ts-jest',
    roots: ['<rootDir>/tests/'],
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'ts', 'vue', 'tsx', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
    testMatch: [
        '**/tests/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
        '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/tests/server/',
        '<rootDir>/tests/__mocks__/',
        '/node_modules/',
    ],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '^.+\\.vue$': '@vue/vue3-jest',// 使用 vue-jest 帮助测试 .vue 文件
        '^.+\\.(js|jsx)?$': 'babel-jest',// 遇到 js jsx 等转成 es5
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',// 遇到 css 等转为字符串 不作测试
    },
    transformIgnorePatterns: ['<rootDir>/tests/__mocks__/', '/node_modules/'],
    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
        '\\.(vs|fs|vert|frag|glsl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/__mocks__/fileMock.ts',
        '\\.(sass|s?css|less)$': '<rootDir>/tests/__mocks__/styleMock.ts',
        '\\?worker$': '<rootDir>/tests/__mocks__/workerMock.ts',
        '^/@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jsdom',
    verbose: true,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{js,ts,vue}'],
    coveragePathIgnorePatterns: ['^.+\\.d\\.ts$'],
};
```

babel.config.cjs

```js
module.exports = {
  presets: [
      [
          "@babel/preset-env",
          { targets: {node: "current"}}
      ]
  ],
  plugins: ["transform-es2015-modules-commonjs"]
};
```

工具函数 src\utils\sum.ts

```ts
export function sum(a: number, b: number) {
    return a + b;
}
```

测试代码 tests\unit\sum.test.ts

```ts
import { sum } from "../../src/utils/sum"
test('测试sum：1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

package.json脚本命令

```json
"scripts": {
    "test": "jest"
  },
```

###### 组件测试

https://cn.vuejs.org/guide/scaling-up/testing.html#component-testing

hello.test.js

```js
import { mount } from '@vue/test-utils';
import Component from '../../src/components/ComponentTest.vue';
import Hello from '../../src/components/HelloWorld.vue';

describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Component, {
            props: {
                name: 'myName',
            },
        });
        // expect(wrapper.classes()).toContain('bar')
        expect(wrapper.vm.count).toBe(0);
        const button = wrapper.find('button');
        button.trigger('click');
        expect(wrapper.vm.count).toBe(1);
        expect(wrapper.find('.msg').text()).toBe('hello');
        expect(wrapper.find('.name').text()).toBe('myName');
        wrapper.unmount();
    });
    test("hello", () => {
        const wrapper = mount(Hello, {
            props: {
                msg: "message!!!"
            }
        })
        // console.log(wrapper)
        // console.log(wrapper.html())
        expect(wrapper.html()).toContain('message!!!')
    })
});
```



##### 性能优化

###### 代码层面



###### 网络层面

axios封装：取消重复请求、限制并发、限制重试次数、大文件分片上传...

###### 业务层面

防抖节流、事件解绑、长列表（懒加载、虚拟滚动、分页...）、首屏优化、组件懒加载、减少组件重复渲染

###### 打包

压缩代码和静态资源体积，缩短打包时间，使用cdn

> 大的拆，小的合

vite.config.ts

```ts
  build: {
    rollupOptions: {
      output: {
        // 最小化拆分包
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },

        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'js/[name].[hash].js',
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'js/[name].[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: '[ext]/[name].[hash].[ext]',
        // 拆分js到模块文件夹
        // chunkFileNames: (chunkInfo) => {
        //   const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
        //   const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
        //   return `js/${fileName}/[name].[hash].js`;
        // },
      },
    },
  },
```



##### 包分析

rollup-plugin-visualizer

https://www.npmjs.com/package/rollup-plugin-visualizer

```cmd
npm install rollup-plugin-visualizer -D
```

vite.config.ts配置plugin

```json
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
```

> 打包完成会默认在项目根目录生成stats.html并自动打开
