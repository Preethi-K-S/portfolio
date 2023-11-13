const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const arrlists = ["pizza.jpg", "cal.jpg", "cc.jpg", "cf.jpg", "lc.jpg"];
const name1=document.getElementById("phara")
const showProjectBtn = document.querySelector(".b");
const projectNames = ["Hotel Management System", "Calculator", "Currency Converter","Color Flipper", "Length Converter"];
const projectlinks=["user.html","calculator.html","currency conventer.html","color flipper.html","length converter.html"]
let index = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains("btn-left")) {
            index--;
            if (index < 0) {
                index = arrlists.length - 1;
            }
        } else {
            index++;
            if (index === arrlists.length) {
                index = 0;
            }
        }
        container.style.background = `url("${arrlists[index]}")`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundSize = '500px';
        container.style.backgroundRepeat = 'no-repeat';
        name1.textContent = projectNames[index];
        showProjectBtn.href = projectlinks[index];

    });
});
