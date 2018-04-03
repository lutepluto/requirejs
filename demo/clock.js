define(['./time'], function(time) {
    var clock = document.createElement('div')
    document.body.appendChild(clock)
    setInterval(function() {
        clock.innerText = 'Current time: ' + time(new Date())
    }, 1000)
})