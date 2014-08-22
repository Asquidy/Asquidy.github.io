function toggleMe2(a){
    var e=document.getElementById(a);
    if(!e)return true;
    if(e.style.display=="none"){
                    e.style.display="block"
    }
    else{
                    e.style.display="none"
    }
    return true;
}

function ShowHiddenText(a) {
    document.getElementById(a).style.display = "block";
}

function toggleMe(obj){
        var div1 = document.getElementById(obj)
        if (div1.style.display == 'none') {
                div1.style.display = 'block'
        } else {
                div1.style.display = 'none'
        }
}