const form = document.querySelector('.email-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  let inputElementArray = [...e.srcElement]
  let validateElement = [...form.querySelectorAll('.validate')]

  for (let i = 0; i < validateElement.length; i++) {
    const element = validateElement[i]
    element.style.display = 'none'
    element.innerHTML = ''
  }
  inputElementArray.map((inputElement, index) => {
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
          // success
          console.log(inputElement.value, ', index ->', index)

          form.querySelector('#form-message').style.display = 'block'
        }
      }
    }
  })
})
