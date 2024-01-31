
        var tablinks = document.getElementsByClassName(tab-links);
        var tabcontents = document.getElementsByClassName(tab-contents);
        function opentab(tabname){
            for(tablink of tab-links){
            tablink.classList.remove("active-link")
            }
            for(tabcontent of tab-contents){
            tablink.classList.remove("active-tab")
            }
        }

