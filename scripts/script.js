function feelingLucky() {
        let query = document.getElementById("searchQuery").value;
        if (query.trim() !=="") {
                setTimeout(function() {
                        window.location.href = "https://google.com/search?q=" + encodeURIComponent(query) + "&btnI=I%27m+Feeling+Lucky";
                }, 1000) // delay to mimick human use on main page
        }
};
