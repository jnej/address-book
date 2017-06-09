$(document).ready(function() {
  $("#address").submit(function(event) {
    var firstName = $("#firstName").val();
    var surName = $("#surName").val();
    var address = $("#address").val();
    var postCode = $("#postCode").val();
    var phoneNo = $("#phoneNo").val();
    var email = $("#email").val();

    $(".firstName").text(firstName);
    $(".surName").text(surName);
    $(".address").text(address);
    $(".postCode").text(postCode);
    $(".phoneNo").text(phoneNo);
    $(".email").text(email);

    //alert("hello" + firstName + ",");//
    $(".contacts ul").html("<li>" + firstName + " " + surName + "</li>");

    event.preventDefault();
  });
});
