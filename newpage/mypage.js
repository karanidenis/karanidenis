// Purpose: To create a new page for my website
        // about section
        function showAbout() {
            document.getElementById('hobby').style.display = "block";
            document.getElementById('flip-boxa').style.display = "none";
            document.getElementById('educate').style.display = "none";
            document.getElementById('files').style.display = "none";
            document.getElementById('container').style.display = "none";
            document.getElementById('flip-box').style.display = "block";
            document.getElementById('flip-boxe').style.display = "block";
            document.getElementById('flip-boxc').style.display = "block";
            document.getElementById('reach').style.display = "none";
            document.getElementById('emailtext').style.display = "none";
        }
        function hideAbout() {
            document.getElementById('hobby').style.display = "none";
            document.getElementById('flip-boxa').style.display = "block";

        }

        // education section
        function showEdu() {
            document.getElementById('educate').style.display = "block";
            document.getElementById('reach').style.display = "none";
            document.getElementById('hobby').style.display = "none";
            document.getElementById('files').style.display = "none";
            document.getElementById('flip-box').style.display = "block";
            document.getElementById('flip-boxa').style.display = "block";
            document.getElementById('flip-boxe').style.display = "none";
            document.getElementById('flip-boxc').style.display = "block";
        }
        function hideEdu() {
            document.getElementById('educate').style.display = "none";
        }

        // documents section
        function showDocs() {
            document.getElementById('files').style.display = "block";
            document.getElementById('reach').style.display = "none";
            document.getElementById('educate').style.display = "none";
            document.getElementById('hobby').style.display = "none";
            document.getElementById('flip-boxc').style.display = "block";
            document.getElementById('flip-box').style.display = "none";
            document.getElementById('flip-boxa').style.display = "block";
            document.getElementById('flip-boxe').style.display = "block";
        }
        function hideDocs() {
            document.getElementById('files').style.display = "none";
        }

        // contacts section
        function showConts() {
            document.getElementById('reach').style.display = "block";
            document.getElementById('files').style.display = "none";
            document.getElementById('educate').style.display = "none";
            document.getElementById('hobby').style.display = "none";
            document.getElementById('flip-boxc').style.display = "none";
            document.getElementById('flip-box').style.display = "block";
            document.getElementById('flip-boxa').style.display = "block";
            document.getElementById('flip-boxe').style.display = "block";
        }
        function hideConts() {
            document.getElementById('reach').style.display = "none";
            document.getElementById('flip-box').style.display = "block";
            document.getElementById('flip-boxa').style.display = "block";
            document.getElementById('flip-boxe').style.display = "block";
        }

        // light mode and dark mode
        function lightMode() {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.getElementById('head').style.backgroundColor = "black";
            document.getElementById('head').style.color = "white";
            document.getElementById('abouts').style.backgroundColor = "black";
            document.getElementById('abouts').style.color = "white";
            document.getElementById('edu').style.backgroundColor = "black";
            document.getElementById('edu').style.color = "white";
            document.getElementById('docs').style.backgroundColor = "black";
            document.getElementById('docs').style.color = "white";
            document.getElementById('conts').style.backgroundColor = "black";
            document.getElementById('conts').style.color = "white";
            document.getElementById('lights').style.backgroundColor = "black";
            document.getElementById('lights').style.color = "white";
            document.getElementById('flip-boxa').style.backgroundColor = "black";
            document.getElementById('flip-boxa').style.color = "white";
            document.getElementById('flip-boxe').style.backgroundColor = "black";
            document.getElementById('flip-boxe').style.color = "white";
            document.getElementById('flip-box').style.backgroundColor = "black";
            document.getElementById('flip-box').style.color = "white";
            document.getElementById('flip-boxc').style.backgroundColor = "black";
            document.getElementById('flip-boxc').style.color = "white";
            document.getElementById('hobby').style.backgroundColor = "black";
            document.getElementById('hobby').style.color = "white";
            document.getElementById('educate').style.backgroundColor = "black";
            document.getElementById('educate').style.color = "white";
            document.getElementById('files').style.backgroundColor = "black";
            document.getElementById('files').style.color = "white";
            document.getElementById('reach').style.backgroundColor = "black";
            document.getElementById('reach').style.color = "white";
        }
        function darkMode() {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            // document.getElementById('head').style.backgroundColor = "white";
            // document.getElementById('head').style.color = "black";
            document.getElementById('abouts').style.backgroundColor = "white";
            document.getElementById('abouts').style.color = "black";
            document.getElementById('edu').style.backgroundColor = "white";
            document.getElementById('edu').style.color = "black";
            document.getElementById('docs').style.backgroundColor = "white";
            document.getElementById('docs').style.color = "black";
            document.getElementById('conts').style.backgroundColor = "white";
            document.getElementById('conts').style.color = "black";
            document.getElementById('lights').style.backgroundColor = "white";
            document.getElementById('lights').style.color = "black";
            document.getElementById('flip-boxa').style.backgroundColor = "white";
            document.getElementById('flip-boxa').style.color = "black";
            document.getElementById('flip-boxe').style.backgroundColor = "white";
            document.getElementById('flip-boxe').style.color = "black";
            document.getElementById('flip-box').style.backgroundColor = "white";
            document.getElementById('flip-box').style.color = "black";
            document.getElementById('flip-boxc').style.backgroundColor = "white";
            document.getElementById('flip-boxc').style.color = "black";
            document.getElementById('hobby').style.backgroundColor = "white";
            document.getElementById('hobby').style.color = "black";
            document.getElementById('educate').style.backgroundColor = "white";
            document.getElementById('educate').style.color = "black";
            document.getElementById('files').style.backgroundColor = "white";
            document.getElementById('files').style.color = "black";
            document.getElementById('reach').style.backgroundColor = "white";
            document.getElementById('reach').style.color = "black";
        }

        //show email
        function showEmail() {
            document.getElementById('emailtext').style.display = "block";
        }
        function hideEmail() {
            document.getElementById('emailtext').style.display = "none";
        }