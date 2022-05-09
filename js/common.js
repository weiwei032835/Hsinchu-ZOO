//手機選單按鈕
$(function(){

	
	$(".btn_nav_m_open").on("click",function(){
		$(".header").addClass("active");
	});
	$(".btn_nav_m_close").on("click",function(){
		$(".header").removeClass("active");
	});
});	

//變換游標
$(function(){
	
	$(document).on("mousemove",function(e){
		$(".cursor").css({left:e.pageX + 'px', top:e.pageY + 'px'});
	})

	$("a").on("mousemove", function(){
		$(".cursor").addClass("active");
	});

	$("a").on("mouseleave", function(){
		$(".cursor").removeClass("active");
	});

})

/*.gallery_1 動物之星輪播外掛*/
$(function(){
	if($(".owl-carousel").length > 0){
		$(".gallery_1 .owl-carousel").owlCarousel({
			loop: true, // 循環播放
			margin: 10, // 外距 10px
			nav: true, // 不顯示左右鍵
			navText:['prev','next'],
			responsive: {
			  0: {
				items: 3 // 螢幕大小為 0~600 顯示 1 個項目
			  },
			  600: {
				items: 5 // 螢幕大小為 600~1000 顯示 3 個項目
			  },
			  1000: {
				items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
			  }
			}
		});

		// gallery_2 大圖輪播外掛
		$(".gallery_2 .owl-carousel").owlCarousel({
			items:1,
			autoplay:true
		});
	}
});


// gallery_3 園內景點介紹
$(function(){			
	//當前
	let iCurrent = 0;
	
	//總數
	let iTotal = $(".gallery_3 ul.pager li").length;
	//console.log(iTotal);
	//換圖
	function fnChange(argCurrent){
		let sTitle = $(".gallery_3 ul.pager li").eq(argCurrent).data("note");
		let sNote = $(".gallery_3 ul.pager li").eq(argCurrent).data("title");
		let sSummary = $(".gallery_3 ul.pager li").eq(argCurrent).data("summary");
		let sUrl =$(".gallery_3 ul.pager li").eq(argCurrent).data("photo");
		$(".gallery_3 .piece .info h2").text(sTitle);
		$(".gallery_3 .piece .info h4").text(sNote);
		$(".gallery_3 .piece .info p").text(sSummary);
		
		$(".gallery_3 .piece p.pic img").attr({"src":sUrl, "title":sTitle, "summary":sSummary, "note":sNote});
		$(".gallery_3 ul.pager li").eq(argCurrent).addClass("active").siblings().removeClass("active");
	}
	fnChange(iCurrent);
	//點擊換圖
	$(".gallery_3 ul.pager li").on("click", function(){
		iCurrent = $(this).index();
		fnChange(iCurrent);
	});
	//左右鍵
	$(".gallery_3 .piece .info .menu .btn_prev").on("click", function(){
		if(iCurrent <= 0) return;
		iCurrent = iCurrent -1;
		fnChange(iCurrent);
	})
	$(".gallery_3 .piece .info .menu .btn_next").on("click", function(){
		if(iCurrent >= iTotal-1) return;
		iCurrent = iCurrent +1;
		fnChange(iCurrent);
	})
});


// part_info_4 交通資訊 
$(function(){
	//當前
	let iCurrent = 0;
	//總數
	let iTotal=$(".gallery_4 .run ul.pager li").length;
	//console.log(iTotal);
	//更換圖片
	function fnChange(argCurrent){
		//宣告變數
		let sUrl = $(".gallery_4 .run ul.pager li").eq(argCurrent).data("guide");
		//console.log(sUrl);
		//更換圖片
		$(".gallery_4 .piece p.pic img").attr({"src":sUrl});
		//按下去時
		$(".gallery_4 .run ul.pager li").eq(argCurrent).addClass("current").siblings().removeClass("current");

	};

	fnChange(iCurrent);

	//縮圖點擊更換
	$(".gallery_4 .run ul.pager li").on("click", function(){
		iCurrent =$(this).index();
		fnChange(iCurrent);
	})
});

//loader
$(function(){

	if($(".gif .percent").length > 0 ){
		//加載完成
		function fnComplete(){
			$(".gif").fadeOut(200);
		}

		//加載過程 取得百分比數字
		function fnProgress(){
		$(".gif .percent").html($(".queryloader__overlay__percentage").html());
		}	

		//初始化環境
		$("body").queryLoader2({
			backgroundColor:"rgba(42, 222, 135, 1)",  //覆蓋顏色
			percentage:false, //百分比
			minimumTime: 4000, //loading最少顯示幾秒
			onProgress:fnProgress, //加載過程
			onComplete:fnComplete,  //加載完成
		});
	}	
})

//動物商品 card
window.addEventListener('load', function () {

	// setTimeout to simulate the delay from a real page load
	setTimeout(lazyLoad, 1000);

});

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');

	// loop over each card image
	card_images.forEach(function (card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');

		// change the src of the content image to load the new high res photo
		content_image.src = image_url;

		// listen for load event when the new photo is finished loading
		content_image.addEventListener('load', function () {
			// swap out the visible background image with the new fully downloaded photo
			card_image.style.backgroundImage = 'url(' + image_url + ')';
			// add a class to remove the blur filter to smoothly transition the image change
			card_image.className = card_image.className + ' is-loaded';
		});

	});

}

//TOP鍵
$(function () {

    // 滑動置頂
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    // 淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#gotop").stop().fadeTo("fast", .9);
        } else {
            $("#gotop").stop().fadeOut("fast");
        }
    });

    AOS.init();

});
