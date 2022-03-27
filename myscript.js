let regex = /^$/;

const validateField = (name) => {
    let element = document.getElementById(name)
    if(regex.test(element.value)){
      errorMessageInsert(element)
      return
    }
    errorMessageRemove(element)
}

const errorMessageInsert = (id) =>{
    let element = id.nextElementSibling
    if(element.tagName !== 'P'){
      let newElement = document.createElement('p')
    newElement.innerHTML = 'Please Fill in field'
    id.after(newElement)
    id.classList = 'error'
    }
}

const errorMessageRemove = (id) =>{
  let element = id.nextElementSibling
  if(element.tagName === 'P'){
    element.remove()
  }
  id.classList.remove('error')
}

const form  = document.getElementById('validationform');

form.addEventListener('submit', (event) => {
    let newElement = document.createElement('h1')
    newElement.innerHTML = 'High Five You Filled out the Form'
    form.after(newElement)

    event.preventDefault();
});

form.addEventListener('reset', (event) => {
    let newElement = document.getElementsByTagName('h1')
    if(newElement[0] !== undefined){
      newElement[0].remove()
    }
});