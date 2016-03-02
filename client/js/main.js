var ele_ids = ['about_me','projects','resume'];
var index = 0;

function scroll_id(eleID,new_index) {

   index = new_index;

   var e = document.getElementById(eleID);
   if (!!e && e.scrollIntoView) {
       e.scrollIntoView();
   }
}
//scroll page up and down with key press
document.onkeydown = function (e) {

    alert("key down fired");
    e = e || window.event;
    //key press was right or down
    if(e.keyCode === 39 || e.keyCode === 40) {

        if(index < 2) {
            index++;
            scroll_id(ele_ids[index],index);
        }

        return;
    }
    //key press was left or up
    if(e.keyCode === 38 || e.keyCode === 37) {

        if(index > 0) {
            index--;
            scroll_id(ele_ids[index],index);
        }

        return;
    }
};
//scroll page up and down with key press
document.onkeypress = function (e) {

    alert("key press fired");
    e = e || window.event;
    //key press was right or down
    if(e.keyCode === 39 || e.keyCode === 40) {

        if(index < 2) {
            index++;
            scroll_id(ele_ids[index],index);
        }

        return;
    }
    //key press was left or up
    if(e.keyCode === 38 || e.keyCode === 37) {

        if(index > 0) {
            index--;
            scroll_id(ele_ids[index],index);
        }

        return;
    }
};
document.addEventListener('keydown', function(event) {
    alert("even listen");
    if (event.ctrlKey && event.which === 72) {
        // open help widget
    }
});

/*
function scrollFunc(e) {

    if ( typeof scrollFunc.x == 'undefined' ) {
        scrollFunc.x=window.pageXOffset;
    }
    var diffX=scrollFunc.x-window.pageXOffset;

    if( diffX<0 ) {
        index--;
        scroll_id(ele_ids[index],index);
    }
    else if( diffX>0 ) {
        index++;
        scroll_id(ele_ids[index],index);
    }
    else {
        index--;
        scroll_id(ele_ids[index],index);
    }
    scrollFunc.x=window.pageXOffset;

}
window.onscroll = scrollFunc;
*/
