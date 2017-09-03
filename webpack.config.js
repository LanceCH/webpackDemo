var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/app.js',
    output:{
        path:__dirname +'/dist',
        filename:'js/app.bundle.js'
    },
    module: {
        rules:[
            { test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                },
                exclude: /node_modules/,
                include:__dirname+'/src/', 
            },
            {
                test:/\.css|less$/,        
                use: ['style-loader','css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        plugins:[
                            require('postcss-import'),
                            require('autoprefixer')
                        ]
                    }
                },
                'less-loader'
                ]                               
            },
            { test:/\.html$/,
                use:{
                    loader:'html-loader'
                },
            },
            { test:/\.tpl$/,
                use:{
                    loader:'ejs-loader'
                },
            },
            { test:/\.png|jpg$/i,
                use: [
                    'url-loader?limit=1000000',
                    'img-loader'
                  ]
                
            },
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'body'
        })
    ]
}