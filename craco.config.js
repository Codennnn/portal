const { whenProd } = require('@craco/craco')
const path = require('path')
const CracoLessPlugin = require('craco-less')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': '@/assets/images',
      '@comp': '@/components',
    },
    plugins: [
      ...whenProd(
        () => [
          new BundleAnalyzerPlugin(),
          new AntdDayjsWebpackPlugin({ replaceMoment: true }),
        ],
        []
      ),
    ],
  },

  style: {
    sass: {
      loaderOptions: {
        prependData: '@import "@/assets/styles/variables.scss";',
      },
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#556ee6',
              'success-color': '#34c38f',
              'warning-color': '#f1b44c',
              'error-color': '#f46a6a',
              'info-color': '#50a5f1',
              'processing-color': '#6485ff',
              'text-color': '#495057',
              'border-radius-base': '6px',
              'btn-border-radius-base': '5px',
              'btn-border-radius-sm': '4px',
              'font-family':
                "-apple-system, Rubik, 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
