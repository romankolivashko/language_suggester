//Language use legend
//---------------------------------
// python     -person
// c#         -person
// ruby       -person
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

    let name = $("input#firstLastName").val();
    let industry = $("select#industry").val();
    let person = $("select#person").val();
    let personIsland = $("select#personIsland").val();
    let mobile = $("input:radio[name=mobile]:checked").val();
    let strictRules = $("input:radio[name=strictRules]:checked").val();
    let industryLang;
    let strictRulesLang;
    let personIslandLang;

    if (name === "") {
      name = "Beautiful Stranger";
    }

    if (industry === "Banking and Finance" || industry === "Engineering" ) {
      industryLang = "C";
      // url  = "https://www.w3schools.com";
    } else if (industry === "Manufacturing" || industry === "Healthcare"){
       industryLang = "Java"; 
    } else if (industry === "Retail" || industry === "Media"){
       industryLang = "JavaScript"; 
    } 

    if (person === "Jack Dorsey") {
      personLang = "Ruby";
    } else if (person === "Sergey Brin"){
      personLang = "Python"; 
    } else if (person === "Bill Gates"){
      personLang = "C#"; 
    } 

    if (strictRules === "Yes") {
      strictRules = "strict";
      strictRulesLang = "Python";
    }
    else if (strictRules === "No")
    { 
      strictRules = "laid back";
      mobileLang = "Haskell";
    }


    if (personIsland === "Einstein") {
      personLang = "MATLAB";
    } else if (person === "Oprah Winfrey"){
      personLang = "JavaScript"; 
    } else if (person === "Steve Irwin"){
      personLang = "Python"; 
    } else if (person === "Grace Hopper"){
      personLang = "COBOL"; 
    } 

    if (mobile === "Yes") {
      mobile = "interested";
      mobileLang = "Objective C";
    }
    else if (mobile === "No")
    { 
      mobile = "not interested";
      mobileLang = "C++" //another great general purpose language
    }
    else {
      mobile = "somewhat interested";
      mobileLang = "Swift";
    }


    $(".firstLastName").text(name);
    $(".industry").text(industry);
    $(".industryLang").text(industryLang);
    $(".person").text(person);
    $(".personLang").text(personLang);
    $(".personIsland").text(personIsland);
    $(".personIslandLang").text(personIslandLang);
    $(".strictRules").text(strictRules);
    $(".strictRulesLang").text(strictRulesLang);
    $(".mobile").text(mobile);
    $(".mobileLang").text(mobileLang);
    
  });
});

