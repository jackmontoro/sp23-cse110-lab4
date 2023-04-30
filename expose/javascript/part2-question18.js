function myTimer() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

const secondCounter = setInterval(myTimer, 1000);

