//スロットの数字枠の番号を以下のように設定する
//    4 5 6 上段
//    1 2 3 中段
//    7 8 9 下段

const nowTime1 = document.getElementById('nowTime1');
const nowTime2 = document.getElementById('nowTime2');
const nowTime3 = document.getElementById('nowTime3');
const nowTime4 = document.getElementById('nowTime4');
const nowTime5 = document.getElementById('nowTime5');
const nowTime6 = document.getElementById('nowTime6');
const nowTime7 = document.getElementById('nowTime7');
const nowTime8 = document.getElementById('nowTime8');
const nowTime9 = document.getElementById('nowTime9');

const startTimer = document.getElementById('startTimer');

const setTime1 = document.getElementById('setTime1');
const setTime2 = document.getElementById('setTime2');
const setTime3 = document.getElementById('setTime3');

let countNum1 = 0;
let countNum2 = 0;
let countNum3 = 0;
let countNum4 = 9;
let countNum5 = 9;
let countNum6 = 9;
let countNum7 = 1;
let countNum8 = 1;
let countNum9 = 1;

nowTime1.textContent = countNum1;
nowTime2.textContent = countNum2;
nowTime3.textContent = countNum3;
nowTime4.textContent = countNum4;
nowTime5.textContent = countNum5;
nowTime6.textContent = countNum6;
nowTime7.textContent = countNum7;
nowTime8.textContent = countNum8;
nowTime9.textContent = countNum9;

let rollNum1;
let rollNum2;
let rollNum3;
let rollNum4;
let rollNum5;
let rollNum6;
let rollNum7;
let rollNum8;
let rollNum9;

const resultJudge = () => {
    if (setTime1.disabled === true && setTime2.disabled === true && setTime3.disabled === true){
            if (countNum1 === countNum2 && countNum2 === countNum3) {
                alert('成功！！');
                setTime1.disabled = false;
                setTime2.disabled = false;
                setTime3.disabled = false;
            } else {
                alert('再挑戦！');
                setTime1.disabled = false;
                setTime2.disabled = false;
                setTime3.disabled = false;
            }
        }
};

startTimer.addEventListener('click', () => {
    setTime1.disabled = false;
    setTime2.disabled = false;
    setTime3.disabled = false;
    
    const slotNum1 = () => {
        if (countNum1 < 9 ) {
            countNum1 ++;
        } else if (countNum1 === 9) {
            countNum1 = 0;
        }
        nowTime1.textContent = countNum1;
    }
    clearInterval(rollNum1);
    rollNum1 = setInterval(slotNum1,100);

    const slotNum2 = () => {
        if (countNum2 < 9 ) {
            countNum2 ++;
        } else if (countNum2 === 9) {
            countNum2 = 0;
        }
        nowTime2.textContent = countNum2; // if の中で同じコードを繰り返す場合、if{}の後に書くことでどちらの内容にも映される
    }
    clearInterval(rollNum2);
    rollNum2 = setInterval(slotNum2,100);

    const slotNum3 = () => {
        if (countNum3 < 9 ) {
            countNum3 ++;
        } else if (countNum3 === 9) {
            countNum3 = 0;
        }
        nowTime3.textContent = countNum3;
    }
    clearInterval(rollNum3);
    rollNum3 = setInterval(slotNum3,100);

    const slotNum4 = () => {
        if (countNum4 < 9 ) {
            countNum4 ++;
        } else if (countNum4 === 9) {
            countNum4 = 0;
        }
        nowTime4.textContent = countNum4;
    }
    clearInterval(rollNum4);
    rollNum4 = setInterval(slotNum4,100);

    const slotNum5 = () => {
        if (countNum5 < 9 ) {
            countNum5 ++;
        } else if (countNum5 === 9) {
            countNum5 = 0;
        }
        nowTime5.textContent = countNum5;
    }
    clearInterval(rollNum5);
    rollNum5 = setInterval(slotNum5,100);

    const slotNum6 = () => {
        if (countNum6 < 9 ) {
            countNum6 ++;
        } else if (countNum6 === 9) {
            countNum6 = 0;
        }
        nowTime6.textContent = countNum6;
    }
    clearInterval(rollNum6);
    rollNum6 = setInterval(slotNum6,100);

    const slotNum7 = () => {
        if (countNum7 < 9 ) {
            countNum7 ++;
        } else if (countNum7 === 9) {
            countNum7 = 0;
        }
        nowTime7.textContent = countNum7;
    }
    clearInterval(rollNum7);
    rollNum7 = setInterval(slotNum7,100);

    const slotNum8 = () => {
        if (countNum8 < 9 ) {
            countNum8 ++;
        } else if (countNum8 === 9) {
            countNum8 = 0;
        }
        nowTime8.textContent = countNum8;
    }
    clearInterval(rollNum8);
    rollNum8 = setInterval(slotNum8,100);

    const slotNum9 = () => {
        if (countNum9 < 9 ) {
            countNum9 ++;
        } else if (countNum9 === 9) {
            countNum9 = 0;
        }
        nowTime9.textContent = countNum9;
    }
    clearInterval(rollNum9);
    rollNum9 = setInterval(slotNum9,100);
    
    setTime1.addEventListener('click', () => {
        clearInterval(rollNum1);
        clearInterval(rollNum4);
        clearInterval(rollNum7);
        setTime1.disabled = true;
        resultJudge();
    });

    setTime2.addEventListener('click', () => {
        clearInterval(rollNum2);
        clearInterval(rollNum5);
        clearInterval(rollNum8);
        setTime2.disabled = true;
        resultJudge();
    });

    setTime3.addEventListener('click', () => {
        clearInterval(rollNum3);
        clearInterval(rollNum6);
        clearInterval(rollNum9);
        setTime3.disabled = true;
        resultJudge();
    });
});