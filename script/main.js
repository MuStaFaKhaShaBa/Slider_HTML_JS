let countSlid_P = document.querySelector(".container .slids-count p span");
let imgHold = document.querySelector(".container .img");
let indicator = document.querySelector(".container .indicators ul");
let Btns = document.querySelectorAll(".container .indicators button");
let currentImg = 0,
    MAX_IMGS = 0;

(function PutImgs(imgnum) {
    for (let x = 1; x <= imgnum; x++) {
        let img = document.createElement("img");
        img.setAttribute("src", `imgs/shuffle-0${x}.jpg`); //shuffle-01.jpg
        imgHold.appendChild(img);
    }
    removeAction(0);

    MAX_IMGS = imgnum;

    createIndicator(imgnum);

    activeInd(1);
    currentImg = 1;
    countSlid_P.innerHTML = currentImg;
})(6);

function createIndicator(number) {
    for (let x = 0; x < number; x++) {
        let li = document.createElement("li");
        li.innerHTML = x + 1;
        li.onclick = () => {
            indicatorLis(x);
        }
        indicator.appendChild(li);
    }
}

function activeInd(num) {
    Array.from(indicator.children).forEach((el) => {
        el.classList.remove("active");
    });
    indicator.children[num - 1].classList.add("active");
}

function translateImg(num, which) {
    if (which == 1) {
        imgHold.children[num - 1].style.cssText = `opacity: 1`;

    } else {
        imgHold.children[num].style = `opacity: 1`;
    }
}

function BtnInd(which) {


    Array.from(imgHold.children).forEach((el) => {
        el.style = "opacity: 0";
    })

    if (which == 1) {

        currentImg--;

        translateImg(currentImg, which);


        activeInd(currentImg);

        countSlid_P.innerHTML = currentImg;

        if (currentImg == 1) {
            removeAction(0);
        } else {
            AddAction(0);
            AddAction(1);
        }
    } else {
        translateImg(currentImg, which);

        currentImg++;

        activeInd(currentImg);
        countSlid_P.innerHTML = currentImg;

        if (currentImg == MAX_IMGS) {
            removeAction(1);
        } else {
            AddAction(0);
            AddAction(1);
        }
    }

}

function removeAction(Btn) {
    Btns[Btn].onclick = () => {};
    Btns[Btn].classList.add("BtnEnd");
}

function AddAction(Btn) {
    Btns[Btn].onclick = () => {
        BtnInd(Btn + 1);
    };
    Btns[Btn].classList.remove("BtnEnd");
}

function indicatorLis(num) {
    Array.from(indicator.children).forEach((el) => {
        el.classList.remove("active")
    });

    Array.from(imgHold.children).forEach((el) => {
        el.style = "opacity: 0";
    })

    indicator.children[num].classList.add("active");

    imgHold.children[num].style = "opacity: 1";

    currentImg = num + 1;

    countSlid_P.innerHTML = currentImg;
    console.log(currentImg);

    if (currentImg == 6) {
        removeAction(1);
    } else if (currentImg == 1) {
        removeAction(0);
    } else {
        AddAction(0);
        AddAction(1);
    }
}
