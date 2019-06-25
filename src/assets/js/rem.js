/**
 * @description: rem缩放
 */
(function () {
    updateOrientation();
    var supportOrientation = (typeof window.orientation === 'number' &&
        typeof window.onorientationchange === 'object');
    if (supportOrientation) {
        window.addEventListener('orientationchange', updateOrientationDelay, false);
    } else {
        window.addEventListener('resize', updateOrientationDelay, false);
    }

    function updateOrientation() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) deviceWidth = 750;
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    }

    function updateOrientationDelay() {
        setTimeout(function () {
            updateOrientation()
        }, 100);
    }
}());