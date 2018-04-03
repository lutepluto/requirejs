define(function() {
  function pad(s) {
      return ('0' + s).slice(-2);
  }

  return function(time) {
    var year = time.getFullYear(),
      month = pad(time.getMonth() + 1),
      date = pad(time.getDate()),
      hour = pad(time.getHours()),
      minute = pad(time.getMinutes()),
      second = pad(time.getSeconds())
    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  }
})
