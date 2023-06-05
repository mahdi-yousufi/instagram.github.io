function time() {
    const d = new Date()
    document.getElementById("demo").innerHTML =
        d.getHours() + ':' +
        d.getMinutes() + ":" +
        d.setSeconds()
}