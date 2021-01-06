// 引入 dotenv/config 解决环境变量 undefined 的问题
// https://github.com/gsoft-inc/craco/issues/198#issuecomment-727926522
require('dotenv').config()
const { whenProd, when } = require('@craco/craco')
const path = require('path')
const CracoAntDesignPlugin = require('craco-antd')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    plugins: [
      ...whenProd(
        () => [new AntdDayjsWebpackPlugin({ replaceMoment: true })],
        []
      ),
      ...when(
        process.env.SCRIPT_TYPE === 'analyze',
        () => [new BundleAnalyzerPlugin()],
        []
      ),
    ],
    configure: {
      output: whenProd(() => ({
        publicPath: process.env.REACT_APP_PUBLIC_PATH,
      })),
    },
  },

  style: {
    sass: {
      loaderOptions: {
        prependData: '@import "@/styles/variables.scss";',
      },
    },
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },

  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#556ee6',
          '@success-color': '#34c38f',
          '@warning-color': '#f1b44c',
          '@error-color': '#f46a6a',
          '@info-color': '#50a5f1',
          '@processing-color': '#6485ff',
          '@text-color': '#495057',
          '@border-radius-base': '6px',
          '@btn-border-radius-base': '5px',
          '@btn-border-radius-sm': '4px',
          '@font-family':
            "-apple-system, Rubik, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        },
      },
    },
  ],
}
