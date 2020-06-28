require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5eeb93be7a99163963db59cb').then( (task) => {
//     console.log(task)
//     return Task.countDocuments( { completed: false })
// }).then( (result) => {
//     console.log(result)
// }).catch( (e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    return await Task.countDocuments( { completed: false } )
}

deleteTaskAndCount('5eed05c9a9b5c3ce06b74973').then( (cnt) => {
    console.log(cnt)
}).catch( (e) => {
    console.log(e)
})
