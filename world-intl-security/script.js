const brandLogo = document.querySelector('.brand-logo')
const missionContent= document.querySelector('#mission-content')
const ourMission= document.querySelector('#mission-btn')
const servicesContent= document.querySelector('#services-content')
const ourServices=document.querySelector('#services-btn')
const mainFormBtn = document.querySelector('#mainForm button')

brandLogo.addEventListener('click', function(event) {
  event.preventDefault()

  console.log('clickonLogo')
})
ourMission.addEventListener('click', function(event) {
  event.preventDefault()
  missionContent.classList.toggle('hidden')
})
ourServices.addEventListener('click', function(event) {
  event.preventDefault()
  servicesContent.classList.toggle('hidden')
})
mainForm.addEventListener('submit', function() {
  event.preventDefault()
  $.ajax({
    url: 'http://fvi-grad.com:4004/fakeform',
    method: 'POST',
    data: $(mainForm).serialize(),
    success: function() {
      mainFormBtn.textContent = 'Message Sent!'
      mainForm.reset()
        }
    })
})
