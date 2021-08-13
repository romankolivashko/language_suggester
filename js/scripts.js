// $(document).ready(function() {
//   $(".content").click(function() {
//     $(".card-showing").toggle();
//     $(".card-hidden").toggle();
//   });
// });

// Engineering: Objective-C
// Banking and Finance: Python
// Marketing: SQL
// Car Manufacturing: C
// Retail: JavaScript
// Security: C
// Media: C++
// Healthcare: Java
// Science: MATLAB

// if (healthcare --> java
//    finance --> python
//    retail --> js
//    manufacturing --> C
//    media C++) {
//      then lang1, lang2, lang3
//    }

// else if (mobile --> ObjC, Swift or Java)
//    {
//      lang 1, lang2, lang3
//    }
   
// else (sceince --> MATLAB) {
//      lang1
// }
   
         


$(document).ready(function() {
  $(".btn").click(function() {
    $(".card-showing").hide();
    $(".card-hidden").show();

    const name = $("input#firstLastName").val();
    const industry = $("select#industry").val();
    const person = $("select#person").val();
    // const mobile = $("input#mobile").val();
    // ("input:radio[name=operator]:checked").val()
    const mobile = $("input:radio[name=mobile]:checked").val();
    // const dob = $("input#born").val();
    // const color = $("input#color").val();

    $(".firstLastName").text(name);
    $(".industry").text(industry);
    $(".person").text(person);
    $(".mobile").text(mobile);
    // $(".dob").text(dob);
    // $(".color").text(color);

  });
});



// // Business logic:
// let number1;
// let number2;
// function add(number1, number2) {
//   return number1 + number2;
// }

// function subtract(number1, number2) {
//   return number1 - number2;
// }

// function multiply(number1, number2) {
//   return number1 * number2;
// }

// function divide(number1, number2) {
//   return number1 / number2;
// }


// // Business logic not included because it will remain the same.

// $(document).ready(function() {
//   $("form#calculator").submit(function() {
//     event.preventDefault();
//     const number1 = parseInt($("#input1").val());
//     const number2 = parseInt($("#input2").val());
//     const operator = $("input:radio[name=operator]:checked").val();
//     let result;
//     if (operator === "add") {
//       result = add(number1, number2);
//     } else if (operator === "subtract") {
//       result = subtract(number1, number2);
//     } else if (operator === "multiply") {
//       result = multiply(number1, number2);
//     } else if (operator === "divide") {
//       result = divide(number1, number2);
//     }
//     $("#output").text(result);
//   });
// });
