var oneNum, twoNum;
$(function(){
	oneNum = 0;
	twoNum = 0;
	jQuery(".gnb_navi>li").each(function(q){
		jQuery(this).mouseenter(function(){
			//jQuery(this).find("a>img").attr("src", jQuery(this).find("a>img").attr("src").replace(".png", "_on.png"));
			jQuery(this).find(".sub_navi").stop(true, true).slideDown(300);
		})

		jQuery(this).mouseleave(function(){
			//jQuery(this).find("a>img").attr("src", jQuery(this).find("a>img").attr("src").replace("_on.png", ".png"));
			jQuery(this).find(".sub_navi").stop(true, true).slideUp(300);
		})
	})
})