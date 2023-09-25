let formBox = document.querySelector(".form-box");
let inputs = document.querySelector(".form__input[name='name']")
console.log(inputs.value);


document.querySelector("#form-btn").addEventListener("click", function(e) {
    e.preventDefault();
    formBox.classList.add("load")
})