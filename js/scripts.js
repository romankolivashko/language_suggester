//Language use matching legend
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
    let personLang;


    //In case user does not enter the name
    if (name === "") {
      name = "Beautiful Stranger";
    }

    //Match industry to its most used language
    if (industry === "Banking and Finance" || industry === "Engineering" ) {
      industryLang = "C";
    } else if (industry === "Manufacturing" || industry === "Healthcare"){
       industryLang = "Java"; 
    } else if (industry === "Retail" || industry === "Media"){
       industryLang = "JavaScript"; 
    } 

    //Match language to famous tech figures
    if (person === "Jack Dorsey") {
      personLang = "Ruby";
    } else if (person === "Sergey Brin"){
      personLang = "Python"; 
    } else if (person === "Bill Gates"){
      personLang = "C#"; 
    } 

    //Identify strict vs non-strict languages
    if (strictRules === "Yes") {
      strictRules = "strict";
      strictRulesLang = "Python";
    }
    else if (strictRules === "No")
    { 
      strictRules = "laid back";
      mobileLang = "Haskell";
    }

   //Match language based on subconscious perception of a non-tech well-known person
    if (personIsland === "Einstein") {
      personIslandLang = "MATLAB";
    } else if (person === "Oprah Winfrey"){
      personIslandLang = "JavaScript"; 
    } else if (person === "Steve Irwin"){
      personIslandLang = "Python"; 
    } else if (person === "Grace Hopper"){
      personIslandLang = "COBOL"; 
    } 

    //Match mobile language
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

    //Pass values in
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

