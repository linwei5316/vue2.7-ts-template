"use strict"

const path = require('path')
const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const baseConfig = require('./webpack.base.config')
const { processEnvGenerator } = require("./utility")

const config = merge(baseConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    historyApiFallback: true,
    port: 9000
  },
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      ...processEnvGenerator({
        ...require('./ENV_DEV'), // TODO extend env inject way
      }),
    })
  ]
})

module.exports = config;
