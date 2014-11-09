/**
*function getElementByClassName(node,classname){}
*node: the search start point of DOM
*className: the classname of elements you want to get
*return:array();
*/

function getElementByClassName(node,classname){
    if(node.getElementByClassName){
        return getElementByClassName(classname);
    } else {
        var result = [];
        var elems = node.getElementsByTagName("*");
        for(var i=0; i<elems.length;i++){
            if(eles[i].className.indexOf(classname)!=-1){
                result[result.length] = elems[i];
            }
        }
        return result;
    }
    
}

