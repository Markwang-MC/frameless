const esbuild = require("esbuild")
let {esbuildPluginFrameworkless} = require('./index.js')
 esbuild.build({
    entryPoints: ['./test'],
    outfile: './out.js',
    plugins: [
        esbuildPluginFrameworkless()
    ],
    bundle:false
})
