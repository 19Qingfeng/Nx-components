const path = require('path')
const fs = require('fs')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const inputEntry = {}
const resolve = () => path.resolve(__dirname, '../src/components')

function getComponentEntries() {
    const files = fs.readdirSync(resolve(path))
    files.forEach(input => {
        const inputPath = path.join(__dirname, `../src/components/${input}/index.js`)
        inputEntry[input] = inputPath
    })
}

getComponentEntries('components')
module.exports = {
    entry: {
        ...inputEntry,
        index: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../lib/'),
        library: 'Nx',
        libraryTarget: 'umd'
    },
    externals: ['vue'],
    resolve: {
        mainFiles: ['index'],
        extensions: ['.js', '.vue', '.css']
    },
    optimization: {
		    minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader'
                }
            ]
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                        // modules:true
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'theme-chalk/[name].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../lib')],
            verbose: true
        })
    ]
}