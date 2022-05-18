function f1() {
    // alert("I am inside the function f1");
    var name = document.valform.t1.value;
    var p = document.valform.t2.value;
    if (name == "" || name == "null") {
        alert("enter name");
        return false;
    }
    else if (p.length < 5) {
        alert("password length min 5 letters");
        return false;
    } else {
        alert("you have logged in successfully!")
    }
}
function myFunction() {
    // document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown").style.display = document.getElementById("myDropdown").style.display !== 'none' ? 'none' : 'block';
}
window.onclick = (e => {
    console.log(e)
    if (!e.target.matches('.myDropdown')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
});