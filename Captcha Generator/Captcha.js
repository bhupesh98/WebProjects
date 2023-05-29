const captchaTextBox = document.querySelector(".image");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

let captchaText = null;

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(3,9);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() >0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("  ");

    var canv = document.createElement("canvas");
    canv.width = 200;
    canv.height = 40;
    var ctx = canv.getContext("2d");
    ctx.font = "30px Georgia";
    ctx.strokeText(captchaText,0,30);

    captchaTextBox.appendChild(canv);
    console.log(captchaText);
};

const captchaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled",!captchaInputBox.value);

    if (!captchaInputBox.value) message.classList.remove("active");
};

const submitBtnClick = () => {
    captchaText = captchaText
        .split("")
        .filter((char) => char !== " ")
        .join("");
    message.classList.add("active");

    if (captchaInputBox.value === captchaText) {
        message.innerText = "Entered captcha is correct";
        message.style.color = "#008000";
    }
    else {
        message.innerText = "Entered captcha is incorrect";
        message.style.color = "#FF2525";
    }
};

captchaInputBox.addEventListener("keyup",captchaKeyUpValidate);
submitButton.addEventListener("click",submitBtnClick);

generateCaptcha();