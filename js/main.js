$(document).ready(function () {
  // Годиник
  const pos = document.getElementById('time')

  const time = () => {
    const today = new Date()
    let hours_ = today.getHours()
    let min_ = today.getMinutes()
    let sec_ = today.getSeconds()
    hours_ = hours_ < 10 ? '0' + hours_ : hours_
    min_ = min_ < 10 ? '0' + min_ : min_
    sec_ = sec_ < 10 ? '0' + sec_ : sec_
    const nowTime = hours_ + ':' + min_
    pos.innerHTML = nowTime + ':' + sec_
    return nowTime
  }

  setInterval(time, 0)

  const nowTimeHM = time()

  // Перебор графика
  const schedule = []

  const tableItems = document.querySelectorAll('table.so_ts_table')

  tableItems.forEach(table => {
    let counter = 0
    const dataTimeItems = table.querySelectorAll('td[data-time]')
    dataTimeItems.forEach(item => {
      const tableTime = item.getAttribute('data-time')
      if (tableTime > nowTimeHM) {
        if (counter < 3) {
          counter++
          item.classList.add('mark_time_' + counter)
        }
      }
    })
  })


  const scrollTo = (target) => {
    if (target.length) {
      $('html, body').stop().animate({ scrollTop: target.offset().top }, 1000)
    }
  }

  $('.scroll-link').on('click', function (e) {
    e.preventDefault()
    const href = $(this).attr('href')
    scrollTo($(href))
  })
})