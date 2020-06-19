const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative (' + a + ', ' +  b + ')')
            }
            resolve(a + b)
        }, 500)

    })
}

const doWork = async () => {
    const sum1 = await add(1, 2)
    const sum2 = await add(sum1, 3)
    const sum3 = await add(sum2, -4)

    return sum3
}

doWork().then( (result) => {
    console.log('result', result)
}).catch( (e) => {
    console.log('e', e)
})
