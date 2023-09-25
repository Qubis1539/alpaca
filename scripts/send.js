let formBox = document.querySelector(".form-box");


document.querySelector("#form-btn").addEventListener("click", async function(e) {
    e.preventDefault();
    let check = true
    let name = formBox.querySelector(".form__input[name='name']");
    let number = formBox.querySelector(".form__input[name='phone']");
    let course = formBox.querySelector(".form__input[name='course']");
    name.classList.remove("error");
    number.classList.remove("error");
    course.classList.remove("error");

    if (name.value.length < 2) {
        check = false
        name.classList.add("error");
    }
    let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    let valid = re.test(number.value);
    console.log(valid);
    if (number.value.length < 3 || !valid) {
        check = false;
        number.classList.add("error");
    }
    if (course.value == "") {
        check = false
        course.classList.add("error");
    }
    if (check) {
        formBox.classList.add("load");
        let botKey = "6691494072:AAGk5pJ4pT2jzwN05mEpa_g3UwOK7b-90pE";
        let data = `
Новый Lead:%0A
Фио: ${name.value}%0A
Номер: ${number.value}%0A
Курс: ${course.value}%0A
        `;
        let chat_id = "-1001974715597";
        let url = `https://api.telegram.org/bot${botKey}/sendMessage?chat_id=${chat_id}&text=${data}`;
        let response = await fetch(url);
        // mode: 'no-cors',
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        //     'X_KEY': "7530f7faa0d8578d069d0710efba3320",
        // },
        // body: JSON.stringify(data),

        let result = await response.json();
        // console.log(response);
        // console.log(result);
        formBox.classList.remove("load")
    }
})