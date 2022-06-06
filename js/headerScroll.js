(function(){
    var doc = document.documentElement;
    var w = window;

    var curScroll = prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = prevDirection = 0;

    //Function
    var header = document.getElementById("header");
    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll){
            //Scrolled down
            curDirection = 2;
        }else{
            curDirection = 1;
        }
        if (curDirection !== prevDirection){
            toggleHeader();
        }
        prevDirection = curDirection;
        prevScroll = curScroll;
    };

    var toggleHeader = function() {
        if (curDirection === 2){
            header.classList.add("hide");
        }
        else if (curDirection ===1){
            header.classList.remove("hide");
        }
    };
    window.addEventListener("scroll", checkScroll);
})();