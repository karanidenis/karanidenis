// Purpose: To create a new page for my website
        // about section
        function showAbout() {
            document.getElementById('hobby').style.display = "grid";
            document.getElementById('flip-boxa').style.display = "none";
            document.getElementById('myproj').style.display = "none";
            document.getElementById('flip-box').style.display = "none";  
            document.getElementById('flip-boxe').style.display = "none";
            document.getElementById('reach').style.display = "none";
        }
        function hideAbout() {
            document.getElementById('hobby').style.display = "none";
            document.getElementById('flip-boxa').style.display = "block";
            document.getElementById('flip-box').style.display = "block";
            document.getElementById('flip-boxe').style.display = "block";

        }

        // education section
        function showProj() {
            document.getElementById('myproj').style.display = "block";
            document.getElementById('reach').style.display = "none";
            document.getElementById('hobby').style.display = "none";
            document.getElementById('flip-box').style.display = "none";
            document.getElementById('flip-boxa').style.display = "none";
            document.getElementById('flip-boxe').style.display = "none";
        }
        function hideProj() {
            document.getElementById('myproj').style.display = "none";
            document.getElementById('flip-box').style.display = "block";
            document.getElementById('flip-boxa').style.display = "block";
            document.getElementById('flip-boxe').style.display = "block";
        }

        // documents section
        function showLangs() {
            document.getElementById('reach').style.display = "block";
            document.getElementById('myproj').style.display = "none";
            document.getElementById('hobby').style.display = "none";
            document.getElementById('flip-box').style.display = "none";
            document.getElementById('flip-boxa').style.display = "none";
            document.getElementById('flip-boxe').style.display = "none";
        }
        function hideLangs() {
            document.getElementById('reach').style.display = "none";
        }

        // show cards
        function showCard() {
            document.getElementById('flip-box').style.display = "block";
            document.getElementById('flip-boxa').style.display = "block";
            document.getElementById('flip-boxe').style.display = "block";
            // everything else is hidden
            document.getElementById('reach').style.display = "none";
            document.getElementById('hobby').style.display = "none";
            document.getElementById('myproj').style.display = "none";
        }

        document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})

    function hideTags() {
       document.getElementById('placetags').style.display = "none";
    }
    // function showTags() {
    //     document.getElementById('placetags').style.display = "block";
    // }
