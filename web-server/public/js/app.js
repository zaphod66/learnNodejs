const weatherForm = document.querySelector('form')
const search      = document.querySelector('input')
const msg1        = document.querySelector('#msg-1')
const msg2        = document.querySelector('#msg-2')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    msg1.textContent = "loading..."
    msg2.textContent = ""
    
    const location = search.value

    const url = 'http://localhost:3000/weather?address=' + location

    fetch(url).then( (res) => {
        res.json().then( (data) => {
            if (data.error) {
                msg1.textContent = data.error
            } else {
                const text1 = 'Weather for ' + data.data.name + ' is ' + data.data.desc + '.'
                const text2 = 'Temperature is ' + data.data.temp + '°C and feels like ' + data.data.feelslike + '°C.'

                msg1.textContent = text1
                msg2.textContent = text2
            }
        })
    })
})