const fs = require('fs/promises')
module.exports = () => {
    return {
        name: 'esbuildPluginFrameworkless',
        setup(build) {
            build.onLoad({ filter: /.*.js/ }, async ({ path }) => {
                console.log(path,fs.readFile)
                
                let contents = (await fs.readFile(path)).toString();
                contents = contents.replace(/(?:^|\n)\s*(.+)!1\s*\n/gm, "\nif(!$1)return true\n")
                contents = contents.replace(/(?:^|\n)\s*(.+)!0\s*\n/gm, "\nif(!$1)return false\n")
                contents = contents.replace(/(?:^|\n)\s*(.+)!\s*\n/gm, "\nif(!$1)return\n")
                return { contents };
            })
        }
    }
}
