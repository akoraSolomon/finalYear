document.getElementById("searchQueries").onkeydown = function(event){
    let searchField = document.getElementById("searchbox").value;
    if(event.keyCode == 13 && searchField != ""){
        console.log(searchField);
        document.getElementById("wordLogo").style.transform = "translate(-450px, -160px)";
        document.getElementById("repositionSearch").style.transform = "translate(-60px, -240px)";
        document.getElementById("repositionSearch").style.width = "130%";
        document.getElementById("how_to_search").style.transform = "translate(260px,-250px)";
        document.getElementById("how_to_search").style.backgroundColor = "transparent";
        document.getElementById("how_to_search").style.width = "130px";
        document.getElementById("updates").style.backgroundColor = "white";
        document.getElementById("updates").style.width = "100px";
        document.getElementById("updates").style.fontSize = "0.8em";
        document.getElementById("how_to_search").style.fontSize = "0.8em";
        document.getElementById("updates").style.transform = "translate(260px,-250px)";
        document.getElementById("updates").style.height = "30px";
        document.getElementById("split_line").style.borderBottom = "0.5px solid rgb(196, 187, 177)";
        document.getElementById("split_line").style.transform = "translateY(-370px)";
    }
    }