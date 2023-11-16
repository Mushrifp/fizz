window.onscroll = function() {
    var theta = document.documentElement.scrollTop / 50% Math.PI;

document.getElementById('leaf').style.transform ='rotate(' + theta + 'rad)';
}