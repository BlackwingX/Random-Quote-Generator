$(document).ready(function() {
  function getQuote() {
  var quote = ["\"Sometimes, when you cage the beast, the beast gets angry.\"" , "\"I'm like a dog chasing cars. I wouldn't know what to do if I caught one. I just do things.\" ", "\"With great power, comes great responsibility.\" ", "\"It doesn't matter who we are, what matters is our plan.\" ","\"It's not who I am underneath, but what I do that defines me.\" ", "\"There are no heroes or villains. There's just what I want and how I'll get it.\" "];
  var author = ["- Wolverine", "- Joker", "- Spiderman","- Bane", "- Batman", "- Magneto"  ];
  var randomNum = Math.floor(Math.random() * quote.length);
 var randomQuote = quote[randomNum]  ;
  var randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  $("#press").on("click", function() {
    getQuote();
    

  });

var colors = ["red" ,"blue" ,"green" ,"black", "grey", "orange", "purple",  ] ;

$("#press").on("click",function(){
$(".background,  .btn ").css("background-color",colors[Math.floor(Math.random() *colors.length)]  );

});
  
});

