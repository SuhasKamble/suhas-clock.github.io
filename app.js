
let htime;
let mtime;
let stime;
setInterval(() => {
    let hour = document.getElementById('hour')
    let minute = document.getElementById('minute')
    let second = document.getElementById('second')
    let d = new Date();
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds()

    hrotation = 30 * htime + mtime / 2
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);