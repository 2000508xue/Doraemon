const string = `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
ul,
li,
ol {
    list-style: none;
}

.head {
    width: 600px;
    height: 600px;
    border-radius: 100%;
    background: #3c9dca;
    border: black solid thick;
}

.white {
    width: 524px;
    height: 462px;
    border-radius: 100%;
    position: relative;
    top: 126px;
    left: 34px;
    background: #FFF;
    border: black solid thin;
    z-index: 0;
}

.eye_white {
    position: relative;
    top: 60px;
    left: 168px;
    z-index: 1;
}

.eye_white li {
    width: 125px;
    height: 152px;
    border-radius: 100%;
    background: #FFF;
    list-style: none;
    border: black solid thin;
    display: block;
    float: left;
}

.eye_black {
    width: 25px;
    height: 45px;
    border-radius: 100%;
    background: #000;
    list-style: none;
    top: 80px;
    position: relative;
    border: black solid thin;
    display: block;
    left: 10px;
    -webkit-animation: move 4s ease infinite;
    animation: move 4s ease infinite;
}


@keyframes move {
    16% {
        top: 95px;
        left: 30px;
    }
    32% {
        top: 100px;
        left: 60px;
    }
    48% {
        top: 80px;
        left: 90px
    }
    64% {
        top: 100px;
        left: 60px
    }
    80% {
        top: 95px;
        left: 30px
    }
}

.eye_black::before {
    content: '';
    width: 10px;
    height: 15px;
    border-radius: 100%;
    background: #fff;
    list-style: none;
    top: 16px;
    position: relative;
    display: block;
    left: 7px;
}

.line_left {
    width: 150px;
    height: 2px;
    transform: rotate(20deg);
    top: 90px;
    left: 14px;
    position: relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}

.line_left::before {
    content: '';
    width: 150px;
    height: 2px;
    top: 70px;
    transform: rotate(-20deg);
    position: relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}

.line_left::after {
    content: '';
    transform: rotate(-40deg);
    width: 150px;
    height: 2px;
    top: 120px;
    left: 30px;
    position: relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}

.line_right {
    width: 150px;
    height: 2px;
    transform: rotate(160deg);
    top: 90px;
    left: 370px;
    position: relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}

.line_right::before {
    content: '';
    width: 150px;
    height: 2px;
    bottom: 100px;
    position: relative;
    transform: rotate(30deg);
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
    left: 20px;
}

.line_right::after {
    content: '';
    width: 150px;
    height: 2px;
    bottom: 50px;
    transform: rotate(10deg);
    left: 0px;
    position: relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}

.nose {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background: #b90319;
    list-style: none;
    top: 60px;
    position: relative;
    border: black solid thin;
    display: block;
    left: 236px;
    z-index: 2;
}

.nose::after {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: #FFF;
    list-style: none;
    top: 19px;
    position: relative;
    border: black solid thin;
    display: block;
    left: 9px;
}

.line_vertical {
    width: 2px;
    height: 310px;
    top: 40px;
    left: 258px;
    position: relative;
    border-radius: 10%;
    background: #000;
    z-index: 1;
}

.mouth {
    width: 400px;
    height: 400px;
    border-radius: 100%;
    top: -358px;
    left: 62px;
    position: relative;
    background: #000;
    z-index: -1;
}

.mouth::after {
    content: '';
    width: 402px;
    height: 401px;
    top: -4px;
    left: -1px;
    border-radius: 100%;
    position: relative;
    display: block;
    background: #FFF;
}
`
let n = 1

let id = setInterval(() => {
    if (n > string.length) {
        clearInterval(id)
        return
    }
    n += 1
    demo.innerText = string.substr(0, n)
    demo1.innerText = string.substr(0, n)
    window.scrollTo(0, 9999); //设置滚动条
}, 0)
    