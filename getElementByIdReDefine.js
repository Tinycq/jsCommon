//getelement function define
if (typeof getElementById != "function") {
    var getElementById = function (id) {
        if (typeof (id) == "object") return id;
        if (document.getElementById(id)) {
            return document.getElementById(id);
        } else {
            throw new Error(id + " argument error, can not find /"
                " +id+ " / " element");
        }
    }
}

function $() {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        if (typeof element == 'string')
            element = document.getElementById(element);
        if (arguments.length == 1)
            return element;
        elements.push(element);
    }
    return elements;
}



