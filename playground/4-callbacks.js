// setTimeout(() => {
//     console.log('2 secs are up')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter( (n) => { return n.length <= 4} )

// const geocode = (address, callback) => {
//     setTimeout( () => {
//         const data = { lat: 0, lon: 0 }

//         callback(data)
//     }, 500)


// }

// geocode('Schenefeld', (data) => {
//     console.log(data)
// })

const add = (x, y, cb) => {
    setTimeout(() => {
        cb(x + y)
    }, 2000)
}

add(1, 4, (sum) => { console.log(sum) })
