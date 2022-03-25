let regex = /^\s*$/

const validateField = (name) => {
    let element = document.getElementById(name)
    if(element.value !== regex){
      errorMessageInsert(element)
      return
    }
    errorMessageRemove(element)
}

const errorMessageInsert = (id) =>{
    let element = id.nextElementSibling
    element.style.display = 'block'
    id.classList = 'error'
}

const errorMessageRemove = (id) =>{
  let element = id.nextElementSibling
  element.style.display = 'none'
  id.classList.remove('error')
}