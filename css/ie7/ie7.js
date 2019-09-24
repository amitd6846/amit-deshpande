/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'deshu\'">' + entity + '</span>' + html;
	}
	var icons = {
		'deshu-fruit': '&#xe900;',
		'deshu-analysis': '&#xe901;',
		'deshu-building': '&#xe902;',
		'deshu-chart': '&#xe903;',
		'deshu-consumer-behavior': '&#xe904;',
		'deshu-diagram': '&#xe905;',
		'deshu-flask': '&#xe906;',
		'deshu-heartbeat': '&#xe907;',
		'deshu-integrated-circuit': '&#xe908;',
		'deshu-laptop': '&#xe909;',
		'deshu-petrol': '&#xe90a;',
		'deshu-renewable-energy': '&#xe90b;',
		'deshu-shield': '&#xe90c;',
		'deshu-speedometer': '&#xe90d;',
		'deshu-tractor': '&#xe90e;',
		'deshu-worldwide': '&#xe90f;',
		'deshu-wrench': '&#xe910;',
		'deshu-phone': '&#xe942;',
		'deshu-phone-hang-up': '&#xe943;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/deshu-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
