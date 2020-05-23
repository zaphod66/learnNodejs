// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user1 = {
    name: name,
    age: userAge, 
    location: 'Philadelphia'
}

const user2 = {
    name,
    userAge, 
    location: 'Philadelphia'
}

console.log(user1)
console.log(user2)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label, stock, rating = 5} = product  // default value
console.log(label + ', ' + stock + ', ' + rating)

const {label: prodLabel, stock: prodStock} = product
console.log(prodLabel + ', ' + prodStock)

const transaction1 = (type, myProd) => {
    const {label, stock} = myProd

    console.log(type, label, stock)
}

const transaction2 = (type, { stock, label }) => {
    console.log(type, label, stock)
}

transaction1('Order1', product)

transaction2('Order2', product)

