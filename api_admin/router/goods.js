var goodslist = require('../../data/goods/list.js')
let fs = require('fs')
let path = require('path')
let filePath = path.resolve()

let write = (data) => {
    let result = ''
    data.forEach((item, index) => {
        result += '\n{\n'

        result += `id: "${index}",`
        result += `name: "${item.name}",`
        result += `price: "${item.price}",`
        result += `cover: "${item.cover}",`
        result += `file: "${item.file}",`
        result += `detail: "${item.detail}"`


        result += '\n},'
    })

    let str = `module.exports = {\n data: [${result}] \n}`

    fs.writeFile(`${filePath}/data/goods/list.js`, str, (err) => {
        if(err)  return console.log(err)
    })
}

module.exports = {
    save (data) {
        goodslist.data.push(data)

        write(goodslist.data)
    },
    edit (data) {
        goodslist.data.splice(data.id, 1, data)

        write(goodslist.data)
    },
    list () {
        return goodslist.data
    },
    del(data) {
        goodslist.data.splice(data.id, 1)

       write(goodslist.data)
    },
    detail (data) {
        return goodslist.data[data.id]
    }
}