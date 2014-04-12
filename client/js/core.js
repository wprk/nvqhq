/* -------------------- Check Browser --------------------- */
function browser() {
	
	var isOpera = !!(window.opera && window.opera.version);  // Opera 8.0+
	var isFirefox = testCSS('MozBoxSizing');                 // FF 0.8+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	    // At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !isSafari && testCSS('WebkitTransform');  // Chrome 1+
	//var isIE = /*@cc_on!@*/false || testCSS('msTransform');  // At least IE6

	function testCSS(prop) {
	    return prop in document.documentElement.style;
	}
	if (isOpera) {
		return false;
	} else if (isSafari || isChrome) {
		return true;
	} else {
		return false;
	}
}

jQuery(document).ready(function($){
	
  /* ---------- Remove elements in IE8 ---------- */
	if ($('html').hasClass('lt-ie8')) {
		$('.hideInIE8').remove();
	}
	
	/* ---------- Disable moving to top ---------- */
	$('a[href="#"][data-top!=true]').click(function(e){
		e.preventDefault();
	});
  
	/* ---------- Fullscreen ---------- */
	$('#toggle-fullscreen').button().click(function () {
		var button = $(this), root = document.documentElement;
		if (!button.hasClass('active')) {
			$('#thumbnails').addClass('modal-fullscreen');
			if (root.webkitRequestFullScreen) {
				root.webkitRequestFullScreen(
					window.Element.ALLOW_KEYBOARD_INPUT
				);
			} else if (root.mozRequestFullScreen) {
				root.mozRequestFullScreen();
			}
		} else {
			$('#thumbnails').removeClass('modal-fullscreen');
			(document.webkitCancelFullScreen ||
				document.mozCancelFullScreen ||
				$.noop).apply(document);
		}
	});
  
	$('.btn-close').click(function(e){
		e.preventDefault();
		$(this).parent().parent().parent().fadeOut();
	});
  
	$('.btn-minimize').click(function(e){
		e.preventDefault();
		var $target = $(this).parent().parent().next('.box-content');
		if($target.is(':visible')) $('i',$(this)).removeClass('fa-chevron-up').addClass('fa-chevron-down');
		else 					   $('i',$(this)).removeClass('fa-chevron-down').addClass('fa-chevron-up');
		$target.slideToggle('slow', function() {
		    widthFunctions();
		});
	});
  
	$('.btn-setting').click(function(e){
		e.preventDefault();
		$('#myModal').modal('show');
	});
  
});

/* ---------- Check Retina ---------- */
function retina(){
	retinaMode = (window.devicePixelRatio > 1);
	return retinaMode;
}

/* ---------- Main Menu Open/Close, Min/Full ---------- */
jQuery(document).ready(function($){
		
	$('#main-menu-toggle').click(function(){
		
		if($(this).hasClass('open')){
			
			$(this).removeClass('open').addClass('close');
			
			var span = $('#content').attr('class');
			var spanNum = parseInt(span.replace( /^\D+/g, ''));
			var newSpanNum = spanNum + 2;
			var newSpan = 'span' + newSpanNum;
			
			$('#content').addClass('full');
			$('.navbar-brand').addClass('noBg');
			$('#sidebar-left').hide();
			
		} else {
			
			$(this).removeClass('close').addClass('open');
			
			var span = $('#content').attr('class');
			var spanNum = parseInt(span.replace( /^\D+/g, ''));
			var newSpanNum = spanNum - 2;
			var newSpan = 'span' + newSpanNum;
			
			$('#content').removeClass('full');
			$('.navbar-brand').removeClass('noBg');
			$('#sidebar-left').show();
			
		}				
		
	});
		
	$('#main-menu-min').click(function(){
		
		if($(this).hasClass('full')){
			
			$(this).removeClass('full').addClass('minified').find('i').removeClass('fa-angle-double-left').addClass('fa-angle-double-right');
			
			$('body').addClass('sidebar-minified');
			$('#content').addClass('sidebar-minified');
			$('#sidebar-left').addClass('minified');
			
			$('.dropmenu > .chevron').removeClass('opened').addClass('closed');
			$('.dropmenu').parent().find('ul').hide();
			
			$('#sidebar-left > div > ul > li > a > .chevron').removeClass('closed').addClass('opened');
			$('#sidebar-left > div > ul > li > a').addClass('open');
						
		} else {
			
			$(this).removeClass('minified').addClass('full').find('i').removeClass('fa-angle-double-right').addClass('fa-angle-double-left');
			
			$('body').removeClass('sidebar-minified');
			$('#content').removeClass('sidebar-minified');
			$('#sidebar-left').removeClass('minified');
			
			$('#sidebar-left > div > ul > li > a > .chevron').removeClass('opened').addClass('closed');
			$('#sidebar-left > div > ul > li > a').removeClass('open');		
			
		}
		
	});
	
	$('.dropmenu').click(function(e){
		
		e.preventDefault();
		
		if ($('#sidebar-left').hasClass('minified')) {
			
			if ($(this).hasClass('open')) {
				
				//do nothing or add here any function
				
			} else {
				$(this).parent().find('ul').first().slideToggle();
				
				if ($(this).find('.chevron').hasClass('closed')) {

					$(this).find('.chevron').removeClass('closed').addClass('opened')

				} else {

					$(this).find('.chevron').removeClass('opened').addClass('closed')

				}
								
			}
			
		} else {
			
			$(this).parent().find('ul').first().slideToggle();

			if ($(this).find('.chevron').hasClass('closed')) {

				$(this).find('.chevron').removeClass('closed').addClass('opened');

			} else {

				$(this).find('.chevron').removeClass('opened').addClass('closed');
			}
			
		}
	});
	
	if ($('#sidebar-left').hasClass('minified')) {
		$('#sidebar-left > div > ul > li > a > .chevron').removeClass('closed').addClass('opened');
		$('#sidebar-left > div > ul > li > a').addClass('open');
		$('body').addClass('sidebar-minified');
	}	
		
});	

jQuery(document).ready(function($){
	
	/* ---------- Add class .active to current link  ---------- */
	$('ul.main-menu').find('a').each(function(){
		if ($($(this))[0].href==String(window.location)) {
			$(this).parent().addClass('active');
			$(this).parents('ul').add(this).each(function(){
			    $(this).show();
				$(this).prev('a').find('.chevron').removeClass('closed').addClass('opened');
			});
		}	
	});
  
});

