const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 500)

    })
}

add(1, 2).then((sum) => {
    console.log(sum)

    add(sum, 3).then((sum2) => {
        console.log(sum2)
    }).catch((e) => {
        console.log(e)
    })
}).catch( (e) => {
    console.log(e)
})

add(1, 2).then((sum) => {
    console.log(sum)
    return add(sum, 3)
}).then((sum2) => {
    console.log(sum2)
}).catch( (e) => {
    console.log(e)
})

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1, 4, 7])
//         // reject('Boom!')
//     }, 500)
// })

// doWorkPromise.then((result) => {
//     console.log('Success: ', result)
// }).catch((err) => {
//     console.log('Error: ', err)
// })
