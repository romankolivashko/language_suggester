
// python -person
// c#     -person
// ruby   -person

// javascript -industry
// C          -industry
// java       -industry 

// Obj-C      -mobile
// Swift      -mobileMaybe
// C++        -general good to know



$(document).ready(function() {
  $(".btn").click(function() {
    $(".card-showing").hide();
    $(".card-hidden").show();

    const name = $("input#firstLastName").val();
    let industry = $("select#industry").val();
    let person = $("select#person").val();
    let mobile = $("input:radio[name=mobile]:checked").val();
    let industryLang;

    if (industry === "Banking and Finance") {
      industryLang = "Python";
    } else if (industry === "Manufacturing"){
       industryLang = "C#"; 
    } else if (industry === "Retail"){
       industryLang = "JavaScript"; 
    }  else if (industry === "Media"){
       industryLang = "JavaScript"; 
    }  else if (industry === "Healthcare"){
       industryLang = "Java"; 
    } 

    if (person === "Jack Dorsey") {
      personLang = "Ruby";
    } else if (person === "Sergey Brin"){
      personLang = "Python"; 
    } else if (person === "Bill Gates"){
      pesrsonLang = "C#"; 
    } 


    $(".firstLastName").text(name);
    $(".industry").text(industry);
    $(".person").text(person);
    $(".mobile").text(mobile);
    $(".genStatement").hide();
    $(".personLang").text(personLang);
    $(".industryLang").text(industryLang);

  });
});




// $(document).ready(function() {
//   $(".btn").click(function() {
//     $(".card-showing").hide();
//     $(".card-hidden").show();

//     const name = $("input#firstLastName").val();
//     const industry = $("select#industry").val();
//     const person = $("select#person").val();
//     const mobile = $("input:radio[name=mobile]:checked").val();
//     const genStatement = "JavaScript, Python, Swift"; 
//     const mobileNot = "C++";
//     console.log(industry);

//    if (mobile === "yes") {
//         $(".firstLastName").text(name);
//         $(".industry").text(industry);
//         console.log(industry);
//         $(".person").text(person);
//         $(".mobile").text(mobile);
//         $(".genStatement").hide();
//       }
//    else if (mobile === "no")
//       {
//         $(".firstLastName").text(name);
//         $(".industry").text(industry);
//         $(".person").text(person);
//         $(".mobile").text(mobileNot);
//         console.log("testing mobileNot");
//         $(".genStatement").hide(); 
//      }
//    else {
//         console.log("Testing else");
//         $(".genStatement").show();
//    }


//   });
// });