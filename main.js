
window.setTimeout(function() {
    var object1 = document.getElementById('object1'),
        object2 = document.getElementById('object2'),
        object3 = document.getElementById('object3'),
        object4 = document.getElementById('object4'),
        object5 = document.getElementById('object5');

    object1.style.opacity=0;
    object2.className += ' transform';
    object3.className += ' transform-origin';
    object4.className += ' rotate';
    object5.className += ' animation';
}, 1000);