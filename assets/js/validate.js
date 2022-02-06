const form = document.querySelector('#MyResumeForm')
const sentMessage = document.querySelector('.sent-message')
const loading = document.querySelector('.loading')
let checkArray = []

const submitForm = () => {
  console.log('working')
  if (checkArray.length >= 4) {
    loading.style.display = 'block'

    let formData = new FormData(form)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        loading.style.display = 'none'

        sentMessage.style.display = 'block'
        console.log('Form successfully submitted')
      })
      .catch((error) => console.log(error))
  } else {
    console.log('make sure the form is filled')
  }
}
form.addEventListener('submit', (e) => {
  e.preventDefault()
  sentMessage.style.display = 'none'

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
            // success
            checkArray.push('success')
          }
        }
      }
    })
    .then(submitForm())
})
