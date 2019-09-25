// taps 
$(document).ready(function()
{ 
    // tabs
	$("#years li").click(function()
	{
		var myID = $(this).attr("id");
		$(this).removeClass("inactive").siblings().addClass("inactive");
		$(".years-content").hide();
		$("."+myID+"-content").show("slow");
	});

    // more button
        $(".toggle").hide();
        $(".click").click(function(){
        $(".toggle").toggle();
  });
});


// stars js
const ratings = 
{
    phoneName1: 4.7,
    phoneName2: 4.7,
    phoneName3: 4.7

}
// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);
function getRatings() {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    console.log(typeof(starPercentageRounded));

    // Set width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
  }
}

