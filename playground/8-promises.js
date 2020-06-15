const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 4, 7])
        // reject('Boom!')
    }, 500)
})

doWorkPromise.then((result) => {
    console.log('Success: ', result)
}).catch((err) => {
    console.log('Error: ', err)
})
