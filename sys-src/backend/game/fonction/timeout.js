function timeout() {

    var t;


    window.onmousemove = timer_zurücksetzen;
    window.onclick = timer_zurücksetzen;
    window.onscroll = timer_zurücksetzen;
    window.onkeypress = timer_zurücksetzen;

    function ausloggen() {

        window.location.href = '/action/logout';  //mit den Server anpassen

    }


   function timer_zurücksetzen() {

        clearTimeout(t);
        t = setTimeout(ausloggen, 300.000);  // 5 min (1sec= 1000)

    }
}

module.exports = timeout;
