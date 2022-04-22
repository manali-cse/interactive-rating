
var rating_id;
var firstClick=0;
var selected_rating_id="button-not-selected";
$(".rtn").on("click",function(){
  this.classList.toggle("rtn-pressed");
  if(firstClick===0)
  {
    rating_id=this.getAttribute("id");
    firstClick++;
  }
  else
  {
    $("#"+rating_id).removeClass("rtn-pressed");
    rating_id=this.getAttribute("id");
  }
  if($("#"+rating_id).hasClass("rtn-pressed"))
  {
    selected_rating_id=$("#"+rating_id).attr("id");
  }
  else
  {
    selected_rating_id="button-not-selected";
  }
});

$(".rating-button").on("click",function(){
  if(selected_rating_id=="button-not-selected")
  {
    alert("Select Your Rating First!!");
  }
  else
  {
    $(".rating-star-div").addClass("invisible");
    $(".rating-card-p").addClass("invisible");
    $(".rating-number-row").addClass("invisible");
    $(".rating-button").addClass("invisible");
    $(".thank-you-feedback-div").addClass("text-align-center-class");
    $(".rating-card-title").addClass("text-align-center-class");
    $(".thank-you-card-p").addClass("text-align-center-class");
    $(".thank-you-image-div").addClass("text-align-center-class");
    $(".card-body").addClass("card-body-padding");
    $(".thank-you-image-div").removeClass("invisible");
    $(".thank-you-card-p").removeClass("invisible");
    $(".thank-you-feedback-margin-div").removeClass("invisible");
    $(".rating-card-title").text("Thank you!");
    $(".thank-you-feedback-line").text("You selected "+$("#"+selected_rating_id).text()+" out of 5");


  }
});
