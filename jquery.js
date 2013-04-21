jQuery.fn.center = function()
{
	$(this).css({"z-index":"10000"});
	$(this).fadeIn(500);	
	
	var top = ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px";
	var left = ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px";
	
	this.css("top", top);
	this.css("left", left);
}

$(document).ready(function () {

            $(".rot-img").click(function () {

                var Height = $(window).height();
                var Width = $(window).width();

                //alert("A felbontás: " + Width + " px  X  " + Height + " px");

                var left = 0.1 * Width;
                var top = 0.1 * Height;

                Height *= 0.8;
                Width *= 0.8;

                url = $(this).attr("media");
				
                var dark_back = $(".dark-back");
				

                dark_back.css({ "background": "black", "height": $(document).height(), "opacity":"0.9" });

                $(".front-img").css({ "background-image": "url('" + url + "')",
                    "width": Width + "px",
                    "height:": Height + "px",
                    "left": left + "px",
                    "top": top + "px"
                }).center();

                dark_back.fadeIn(500);

            });

			$(document).keyup(function(e) {
				if (e.keyCode == 27)
				{
					$(".front-img").fadeOut(500);
					$(".dark-back").fadeOut(500);
				}
			});
			
            $(".dark-back").click(function () {
				$(".front-img").fadeOut(500);
                $(this).fadeOut(500);
            });
			
			$(".front-img").click(function () {
				$(this).fadeOut(500);
				$(".dark-back").fadeOut(500);
            });


        });