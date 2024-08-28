const bodyparser = require('body-parser')

function serveStatic(path){
    const _ss = require('serve-static')(path)
    return (req,res)=>new Promise((s,f)=>{
        _ss(req,res,(err)=>{
            if (!err) s(true)
        })
    })
}

let bodyParser =  {
    json:(options)=>{
        let middle = bodyparser.json(options)
        return (req,res)=>new Promise((s,f)=>{
            middle(req,res,(err,data)=>{
                if (err) return
                s(true)
            })
        })
    },
    urlencoded:(options)=>{
        let middle = bodyparser.urlencoded(options)
        return (req,res)=>new Promise((s,f)=>{
            middle(req,res,(err)=>{
                if (err) return
                s(true)
            })
        })
    }
}

module.exports = {bodyParser,serveStatic}