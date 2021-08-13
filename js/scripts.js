
// Engineering: Objective-C, Swift
// Banking and Finance: Python
// Marketing: SQL
// Manufacturing: C#
// Retail: JavaScript
// Security: C
// Media: C++, JS
// Healthcare: Java
// Science: MATLAB

//let lang;

// if (industry && islandPerson && mobile = "yes") {
//      then 
//      return industry + person + mobile lang;
//    }

// else if (industry && person  && mobile = "no")
//    {
//      then 
//      return industry + person + "C++"; //great for beginners
//    }
   
// else {
//      
//      return Javascript, Python, Swift;
// }
   
         


$(document).ready(function() {
  $(".btn").click(function() {
    $(".card-showing").hide();
    $(".card-hidden").show();

    const name = $("input#firstLastName").val();
    const industry = $("select#industry").val();
    const person = $("select#person").val();
    const mobile = $("input:radio[name=mobile]:checked").val();

    $(".firstLastName").text(name);
    $(".industry").text(industry);
    $(".person").text(person);
    $(".mobile").text(mobile);


  });
});

