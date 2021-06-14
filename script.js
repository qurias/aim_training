$('.container__greeting__button').click(() => {
  $('.container__greeting').addClass('opacity_zero');
  setTimeout(() => {
    $('.container__greeting').css('display', 'none');
  }, 500);
  setTimeout(() => {
    $('.container__timing').css('display', 'flex');
  }, 600);
  setTimeout(() => {
    $('.container__timing').addClass('opacity_one');
  }, 700);
})


const buttons_timing = document.querySelectorAll('.container__timing__buttons__button')

let time_game = 60;

buttons_timing.forEach((elem) => {
  elem.addEventListener('click', () => {
    time_game = +elem.value
    console.log(time_game)
    $('.container__timing').removeClass('opacity_one');
    $('.container__timing').addClass('opacity_zero');
    setTimeout(() => {
    $('.container__timing').css('display', 'none');
  }, 500);
    setTimeout(() => {
    $('.container__appearance').css('display', 'flex');
  }, 600);
    setTimeout(() => {
    $('.container__appearance').addClass('opacity_one');
  }, 700);
  })
})

const buttons_appearance = document.querySelectorAll('.container__appearance__buttons__button')

let time_appearance = 0;

buttons_appearance.forEach((elem) => {
  elem.addEventListener('click', () => {
    time_appearance = +elem.value
    $('.time_value').html(time_game)
    $('.container__appearance').removeClass('opacity_one');
    $('.container__appearance').addClass('opacity_zero');
    setTimeout(() => {
    $('.container__appearance').css('display', 'none');
  }, 500);
    setTimeout(() => {
    $('.container__game').css('display', 'flex');
  }, 600);
    setTimeout(() => {
    $('.container__game').addClass('opacity_one');
  }, 700);
  })
})

const game_field = $('.container__game__field')

function add_circle() {
  let circle = document.createElement('div')
  circle.classList.add('container__game__field__circle')
  let size = Math.floor(Math.random() * 32 + 10)
  let position_top = Math.floor(Math.random() * 500)
  let position_left = Math.floor(Math.random() * 400)
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.borderRadius = `${size}px`
  circle.style.top = `${position_top}px`
  circle.style.left = `${position_left}px`
  game_field.append(circle)
  remove_circle()
}

add_circle()

let j = 0

function remove_circle() {
  $('.container__game__field__circle').click(() => {
  if (j == 0) {
    time()
    j++
  }
  let remove_obj = $('.container__game__field__circle')
  let score_value = $('.score_value').html()
  $('.score_value').html(+score_value + 1)
  remove_obj.remove()
  setTimeout(() => {
    add_circle()
  }, time_appearance);
})
}

function time() {
  let i = 0
  setInterval(() => {
    let time_value = $('.time_value').html()
    if($('.time_value').html() == '0') {
      let remove_obj = $('.container__game__field__circle')
      remove_obj.remove()
      if (i == 0) {
        result()
        i++
      }
      return
    } 
    else if ($('.time_value').html() !== '0') {
      $('.time_value').html(+time_value - 1)
    }
  }, 1000);
}


function result() {
  let result_section = document.querySelector('.container__game__field')
  let score_value = $('.score_value').html()
  let p = document.createElement('p')
  p.innerHTML = `Ваш счет: ${score_value}`
  result_section.append(p)
}




