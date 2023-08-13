let btn = document.querySelectorAll('.popup_btn');

btn.forEach(btns => {
    btns.addEventListener('click', (e) => {
        e.preventDefault()
        let body = document.querySelector('body')
        body.classList.toggle('activePopup')
    })
});





var players = document.querySelectorAll('.youtube-player')

var loadPlayer = function (event) {
  var target = event.currentTarget
  var iframe = document.createElement('iframe')
  
  iframe.height = target.clientHeight
  iframe.width = target.clientWidth
  iframe.src = 'https://www.youtube.com/embed/' + target.dataset.videoId + '?autoplay=1'
  iframe.setAttribute('frameborder', 0)
  
  target.classList.remove('pristine')
  
  if (target.children.length) {
    target.replaceChild(iframe, target.firstElementChild)
  } else {
    target.appendChild(iframe)
  }
}

var config = { once: true }

Array.from(players).forEach(function (player) {
  player.addEventListener('click', loadPlayer, config)
})




//codepen.io/AllThingsSmitty/pen/JJavZN


(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "07/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


