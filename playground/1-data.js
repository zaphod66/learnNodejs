const fs = require('fs')

const dataJSON = fs.readFileSync('1-data.json').toString()
const dataOBJ  = JSON.parse(dataJSON)

dataOBJ.name = 'Norbert'
dataOBJ.age  = 54

const dataStr = JSON.stringify(dataOBJ)
fs.writeFileSync('1-data.json', dataStr)
