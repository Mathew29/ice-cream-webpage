$(document).ready(function() {
  $("#user").submit(function(event) {
    event.preventDefault();
    var flavors = ["flavor1", "flavor2", "flavor3", "flavor4"];

    flavors.forEach(function(flavor) {
      var userInput = $("input#" + flavor).val();
      $(".flavorList").append("<li>" + userInput + "</li>");
    });

  });
});
