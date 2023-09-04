console.log("Hello");

/* hack JS on JQuery to have the same header and footer on all yours pages */
$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });