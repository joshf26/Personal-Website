function getParameters(){
    var parameters = {};
    var form = document.querySelector("form");
    for ( var i = 0; i < form.elements.length; i++ ) {
        var e = form.elements[i];
        parameters[encodeURIComponent(e.name)] = encodeURIComponent(e.value);
    }
    return parameters
}

function submitForm() {
    console.log(getParameters());

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           alert("Form submitted successfully!");
        }
    };
    xhttp.open("POST", "https://script.google.com/a/joshfrankl.in/macros/s/AKfycbxmR7I68vs5cX_d098VIQLcLZwGtgkWHaPUnWX8auAWZDbaKYs/exec", true);
    xhttp.send(getParameters());
}
