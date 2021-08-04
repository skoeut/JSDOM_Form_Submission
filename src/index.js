//import "./index.css";

/*
 Your solution here
 */

 function validateExists(value) {
    return value && value.trim();
  }

 function validateForm(formData) {
    const errors = {};
  
    // check if something was entered
    if (!validateExists(formData.get("searchTerm"))) {
      errors.name = "Please enter something";
    }
    return errors
  }

  const submitHandler = (event) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
    const input = formData.get("searchTerm").toLowerCase()
    const error = validateForm(formData);

    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
    element.style.display = "none";
  }
    
    if (Object.keys(error).length > 0) {
        const test = document.querySelector('form')
        const newElement = document.createElement('div')
        newElement.classList.add('error')
        newElement.setAttribute('id', 'searchError')
        newElement.innerText = 'Please enter a search term'
        test.appendChild(newElement)
    } 
    if (!Object.keys(error).length) {
        const headlines = document.querySelectorAll("h2")
        for (let headline of headlines.values()) {
          const title = headline.innerHTML.toLowerCase()
          if (!title.includes(input)) {
            const change = headline.parentElement
            change.classList.add('hidden')
          }
        }
    }
  }

  const main = () => {
    // Get the form element
    const form = document.querySelector("#searchForm");
  
    // Attach the submit handler
    form.addEventListener("submit", submitHandler);
  };

  window.addEventListener("DOMContentLoaded", main)



  