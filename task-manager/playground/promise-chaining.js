require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5eeb92fda0e22738ec178092', { age: 1 } ).then( (user) => {
//     console.log(user)
//     return User.countDocuments({ age: 2 })
// }).then( (result) => {
//     console.log(result)
// }).catch( (e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age } )
    const count = await User.countDocuments( { age } )
    return count
}

updateAgeAndCount('5eeb92fda0e22738ec178092', 2).then( (cnt) => {
    console.log(cnt)
}).catch( (e) => {
    console.log(e)
})
