const add = (function(){
    let box = 0;
    return function () {box += 1; return box;}
})();

function myTasbex(){
document.getElementById("tas").innerHTML = add();
};