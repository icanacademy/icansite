/**
	2010.05.12
	: Modal Dialog를 띄울 때 스크롤바가 생긴다
	: position: 'absolute' -> position: 'fixed' 수정
*/

(function($) {
	
	$.modal = {
		
		verticalOffset: 0,									// 상단위치(기본:-75)
		horizontalOffset: 0,                // 왼쪽위치
		repositionOnResize: true,           // re-centers the dialog on window resize
		overlayOpacity: .5,                 // transparency level of overlay
		overlayColor: '#000',               // base color of overlay
		draggable: true,                    // make the dialogs draggable (requires UI Draggables plugin)
		dialogClass: null,                  // if specified, this class will be applied to all dialogs
		
		// iframe box
		xbox: function(src, title, width, height) {
			if( width == null ) width = 400;
			if( height == null ) height = 300;
			$.modal._show(src, title, width, height, "xbox", function(result) {
				if( callback ) callback(result);
			});
		},

		// iframe
		box: function(src, width, height) {
			if( width == null ) width = 400;
			if( height == null ) height = 300;			
			$.modal._show(src, "", width, height, "box", function(result) {
				if( callback ) callback(result);
			});
		},

		image: function(src) {
			$.modal._show(src, "", 0, 0, "image", function(result) {
				if( callback ) callback(result);
			});
		},
		
		// Private methods
		_show: function(src, title, width, height, type, callback) {
			$.modal._hide();
			$.modal._overlay('show');
			
			switch( type ) {
				case 'xbox':
					if(title) {
						$("BODY").append(
						'<div id="modal_container" class="modal_container">'
							+'<div class="modal_colgroup" style="width:'+width+'px;height:'+(height-5)+'px;">'
								+'<div id="modal_title" class="modal_title">'+title+'</div>'
								+'<div class="modal_content">'
									+'<iframe id="modal_iframe" name="modal_iframe" src="'+src+'" scrolling="auto" width="'+width+'" height="'+(height-53)+'" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"></iframe>'
								+'</div>'
							+'</div>'
							+'<div id="modal_close" class="modal_close"><img src="'+mf_path+'/core/image/modal/btn_modal_close.gif" alt="닫기" style="cursor:pointer;"></div>'
						+'</div>'
						);
					} else {
						$("BODY").append(
						'<div id="modal_container" class="modal_container">'
							+'<div class="modal_colgroup" style="width:'+width+'px;height:'+(height-5)+'px;">'
								+'<div class="modal_content">'
									+'<iframe id="modal_iframe" name="modal_iframe" src="'+src+'" scrolling="auto" width="'+width+'" height="'+height+'" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"></iframe>'
								+'</div>'
							+'</div>'
							+'<div id="modal_close" class="modal_close"><img src="'+mf_path+'/core/image/modal/btn_modal_close.gif" alt="닫기" style="cursor:pointer;"></div>'
						+'</div>'
						);
					}
				break;
				
				case 'box':
					$("BODY").append(
						'<div id="modal_container" class="modal_container modal_box_container">'
							+'<iframe id="modal_iframe" name="modal_iframe" src="'+src+'" scrolling="auto" width="'+width+'" height="'+height+'" marginwidth="0" marginheight="0" frameborder="0 vspace="0" hspace="0"></iframe>'
						+'</div>'
					);
				break;

				case 'image':
					$("BODY").append(
						'<div id="modal_container" class="modal_container modal_box_container">'
							+'<img src="'+src+'" ondblclick="close_xbox();" title="더블클릭하시면 창이 닫힙니다." />'
						+'</div>'
					);
				break;
			}

			if( $.modal.dialogClass ) $("#modal_container").addClass($.modal.dialogClass);
			
			// IE6 Fix
			var pos = ($.browser.msie && parseInt($.browser.version) <= 6 ) ? 'absolute' : 'fixed'; 
			
			$("#modal_container").css({
				position: pos,
				zIndex: 99999,
				padding: 0,
				margin: 0
			});
			
			$("#modal_container").css({
				minWidth: $("#modal_container").outerWidth(),
				maxWidth: $("#modal_container").outerWidth()
			});

			$.modal._reposition();
			$.modal._maintainPosition(true);
			
			//if(type == "xbox" || type == "box") {
				//$("#modal_iframe").attr('src', src); //iframe 
			//}

			$("#modal_close").click( function() {
				$.modal._hide();
			});
			
			
			// Make draggable
			if( $.modal.draggable ) {
				try {
					if(type == "xbox") {
						$("#modal_container").draggable({ handle: $("#modal_title") });
						$("#modal_title").css({ cursor: 'move' });
					} else {
						$("#modal_container").draggable({ handle: $("#modal_container") });
						$("#modal_container").css({ cursor: 'move' });
					}
				} catch(e) { /* requires jQuery UI draggables */ }
			}
			
		},
		
		_hide: function() {
			$("#modal_iframe").remove();	// iframe 속성 지우기
			$("#modal_container").remove();
			$.modal._overlay('hide');
			$.modal._maintainPosition(false);
		},
		
		_overlay: function(status) {
			switch( status ) {
				case 'show':
					$.modal._overlay('hide');
					$("body").append('<div id="modal_overlay"></div>');
					$("body").css({overflow:'hidden'}); // 스크롤바 감추기
					$("#modal_overlay").css({
						position: 'absolute',
						zIndex: 99998,
						top: '0px',
						left: '0px',
						width: '100%',
						height: $(document).height(),
						background: $.modal.overlayColor,
						opacity: $.modal.overlayOpacity
					});
				break;
				case 'hide':
					$("#modal_overlay").remove();
					$("body").css({overflow:'auto'}); // 스크롤바 복구
				break;
			}
			//모달 범위밖을 누를때 닫을것인지 여부 결정
			//$("#modal_overlay").one("click", close_xbox);
		},
		
		_reposition: function() {
			var top = (($(window).height() / 2) - ($("#modal_container").outerHeight() / 2)) + $.modal.verticalOffset;
			var left = (($(window).width() / 2) - ($("#modal_container").outerWidth() / 2)) + $.modal.horizontalOffset;
			if( top < 0 ) top = 0;
			if( left < 0 ) left = 0;

			// IE6 fix
			if( $.browser.msie && parseInt($.browser.version) <= 6 ) top = top + $(window).scrollTop();
			
			$("#modal_container").css({
				top: top + 'px',
				left: left + 'px'
			});
			$("#modal_overlay").height( $(document).height());
		},
		
		_maintainPosition: function(status) {
			if( $.modal.repositionOnResize ) {
				switch(status) {
					case true:
						$(window).bind('resize', $.modal._reposition);
					break;
					case false:
						$(window).unbind('resize', $.modal._reposition);
					break;
				}
			}
		}
		
	}
	
	// Shortuct functions
	open_xbox = function(src, title, width, height, callback) {
		$.modal.xbox(src, title, width, height, callback);
	}

	open_box = function(src, width, height, callback) {
		$.modal.box(src, width, height, callback);
	}

	open_image = function(src, callback) {
		$.modal.image(src, callback);
	}
	
	// close
	close_xbox = function() {
		$.modal._hide();
	}

	// change
	modal_change = function(src, width, height, callback) {
		$.modal._hide();
		$.modal.box(src, width, height, callback);
	}

})(jQuery);