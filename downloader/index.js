

let sec=15;
count=0;
let file = document.querySelector(".file-name");
let percentage = document.querySelector(".percentage");
let progress = document.querySelector(".progress-fill");
let interval= setInterval(() => {

    if(count<100){count++;
    progress.style.width=`${count}%`;
    percentage.textContent = `${count}%`;
    }else {clearInterval(interval);
    file.textContent="downloaded";
    }
}, sec*1000/100);