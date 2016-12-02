var editor = $(parent.document.body)
editor.find("div").css({background:"black"})

var topbar = $(parent.parent.document.body).find("#topbar")
//topbar.find("div").css({border: "2px solid black})
topbar.find("div").append("<div>" + "hi" + "</div>")

var allDivsInTheEditor = editor.find("div")

var projectheader = $(parent.document.body).find("#project-files-header")
projectheader.find("div").css("<div>" + "hi" + "</div>")

// Now try to
// 1. add a button to the topbar
// 2. change the title above the file list
// 3. change some borders in the editor
// 4. Make all this happen when a button is clicked