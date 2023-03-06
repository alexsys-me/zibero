$(document).ready(function(){
    $(".star").on("mouseover", function(){
        $(".star").slice(0, $(".star").index(this)+1).addClass("star2");
    });
    $(".star").on("mouseout", function(){
        $(".star").slice(0, $(".star").index(this)+1).removeClass("star2");
    });
    $(".star").on("click", function(){
        jQuery.post("change_rating.php", {
            obj_id: $(this).parent().attr("id").substr(3),
            stars: $(".star").index(this)+1
        }, notice, "json");
    });
    function notice(data){
        $("#star_rating, #star_votes, #star_message").fadeOut(500, function(){
            $("#star_rating").text(data.points);
            $("#star_votes").text(data.votes);
            $("#star_message").text(data.message);
        }).fadeIn(1500);
    }
});



$('.ichat-icon').click(function() {
    $('.ichat-body').addClass('active');
   
})
 $('.ichat-body_header-close').click(function() {
    $('.ichat-body').removeClass('active');
   
})
 
$('.tabs').tabs();
$('.dropdown-trigger').dropdown();