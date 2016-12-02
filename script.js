var editor = $(parent.document.body)
//editor.find("div").css({border:"1px solid yellow"})

var topbar = $(parent.parent.document.body).find("#topbar")
topbar.find("div").append("<button class='btn btn-primary'>" + "hi" + "</button>");
//topbar.find("div").append("hellow")

var allDivsInTheEditor = editor.find("div")
var projectheader = $(parent.document.body).find("#project-files-header")
projectheader.find("div").append("hi")

// Now try to
// 1. add a button to the topbar
// 2. change the title above the file list
// 3. change some borders in the editor
// 4. Make all this happen when a button is clicked