import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers";
import Components from 'unplugin-vue-components/vite'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons"; //自定义icon组件
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        AutoImport({
            imports: ['vue'],
            dts: 'src/auto-import.d.ts'
        }),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false
                })
            ]
        }),
        createSvgIconsPlugin({
            //指定svg存放目录
            iconDirs: [path.resolve(process.cwd(), "../../common/assets/svgs")],
            //使用 svg 图标的格式
            symbolId:"icon-[name]",
            //生成组件插入位置 只有两个值 body-last | body-first
            inject:"body-last"
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "../common/Bem/index.scss";`,

            }
        }
    }

})
