
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
// let genStatement = "JavaScript, Python, Swift"; 
// let mobileNot = "C++";
// // if (industry && person && mobile = "yes") {
// //      then 
// //      return industry + person + mobile lang;
//         $(".firstLastName").text(name);
//         $(".industry").text(industry);
//         $(".person").text(person);
//         $(".mobile").text(mobile);
// //    }
// // else if (industry && person  && mobile = "no")
// //    {
// //      return industry + person + "C++"; //great for beginners
//         $(".firstLastName").text(name);
//         $(".industry").text(industry);
//         $(".person").text(person);
//         $(".mobile").text(mobileNot);
// //    }
// // else {
// //      return genStatement;
// // }
   
         








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
    $(".genStatement").hide();

  });
});


















$(document).ready(function() {
  $(".btn").click(function() {
    $(".card-showing").hide();
    $(".card-hidden").show();

    const name = $("input#firstLastName").val();
    const industry = $("select#industry").val();
    const person = $("select#person").val();
    const mobile = $("input:radio[name=mobile]:checked").val();
    const genStatement = "JavaScript, Python, Swift"; 
    const mobileNot = "C++";
    console.log(industry);

   if (mobile === "yes") {
        $(".firstLastName").text(name);
        $(".industry").text(industry);
        console.log(industry);
        $(".person").text(person);
        $(".mobile").text(mobile);
        $(".genStatement").hide();
      }
   else if (mobile === "no")
      {
        $(".firstLastName").text(name);
        $(".industry").text(industry);
        $(".person").text(person);
        $(".mobile").text(mobileNot);
        console.log("testing mobileNot");
        $(".genStatement").hide(); 
     }
   else {
        console.log("Testing else");
        $(".genStatement").show();
   }


  });
});