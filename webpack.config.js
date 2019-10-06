module.exports = {
    entry: ['@babel/polyfill','./src/main.js'], //qual é o arquivo principal
    output: {  //para qual lugar devo enviar o arquivo convertido pra antes do ES6
        path: __dirname + '/public', //diretorio global que refere-se ao webpack
        filename: 'bundle.js', //nome do arquivo, não muda como o babel já estava configurado
    },
    devServer: {
        contentBase: __dirname + '/public' //caminho pra onde deve abrir o servidor da aplicação
    },
    module: {
        rules: [ //** como o webpack deve se comportar quando o usuário estiver tentando importar novos arquivos js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};