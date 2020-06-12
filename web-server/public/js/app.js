const weatherForm = document.querySelector('form')
const search      = document.querySelector('input')
const msg1        = document.querySelector('#msg-1')
const msg2        = document.querySelector('#msg-2')
const msg3        = document.querySelector('#msg-3')
const icon        = document.querySelector('#weather-icon')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    msg1.textContent = "loading..."
    msg2.textContent = ""
    msg3.textContent = ""
    icon.setAttribute('style', 'display:none')

    const location = search.value

    const url = '/weather?address=' + location

    fetch(url).then( (res) => {
        res.json().then( (data) => {
            if (data.error) {
                msg1.textContent = data.error
            } else {
                const text1 = 'Weather for ' + data.data.name + ' is ' + data.data.desc + '.'
                const text2 = 'Temperature is ' + data.data.temp + '°C and feels like ' + data.data.feelslike + '°C by ' + data.data.humidity + '% humidity.'
                const text3 = 'Wind ' + data.data.windSpd + 'km/h ' + data.data.windDir + ' (' + data.data.windDeg + '°).'

                msg1.textContent = text1
                msg2.textContent = text2
                msg3.textContent = text3
                icon.removeAttribute('style')
                icon.src = data.data.icons[0]
            }
        })
    })
})
