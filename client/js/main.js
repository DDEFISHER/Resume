var ele_ids = ['about_me','projects','resume'];
var index = 0;

//TODO add index numbers to links
function scroll_id(eleID) {

   var e = document.getElementById(eleID);
   if (!!e && e.scrollIntoView) {
       e.scrollIntoView();
   }
}
//scroll page up and down with key press
document.onkeypress = function (e) {

    e = e || window.event;
    //key press was right or down
    if(e.keyCode === 39 || e.keyCode === 40) {

        if(index < 2) {
            index++;
            scroll_id(ele_ids[index]);
        }

        return;
    }
    //key press was left or up
    if(e.keyCode === 38 || e.keyCode === 37) {

        if(index > 0) {
            index--;
            scroll_id(ele_ids[index]);
        }

        return;
    }
};
