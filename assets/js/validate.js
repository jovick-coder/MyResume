let checkArray = []
// netlify form data encode
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
// Netlify form submittion

const handleSubmit = (event) => {
  event.preventDefault()
  if (checkArray.length !== 4) {
    console.log('fill all field')
  } else {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...name,
      }),
    })
      .then(() => navigate('/thank-you/'))
      .catch((error) => alert(error))
  }
}
const form = document.querySelector('.email-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkArray = []
  let inputElementArray = [...e.srcElement]
  let validateElement = [...form.querySelectorAll('.validate')]

  for (let i = 0; i < validateElement.length; i++) {
    const element = validateElement[i]
    element.style.display = 'none'
    element.innerHTML = ''
  }

  inputElementArray
    .map((inputElement, index) => {
      if (index !== 4) {
        if (inputElement.value === '') {
          textNode = 'Input Empty'
          validate = validateElement[index]

          validate.append(textNode)
          validate.style.display = 'block'
        } else {
          // check text lenght
          if (inputElement.value.length <= 4) {
            textNode = 'Text to short'
            validate = validateElement[index]

            validate.append(textNode)
            validate.style.display = 'block'
          } else {
            checkArray.push('success')
            // success
            // console.log(inputElement.value, ', index ->', index)
            // form.querySelector('#form-message').style.display = 'block'
          }
        }
      }
    })
    .then(handleSubmit(e))
  // .then(console.log(e))
})
