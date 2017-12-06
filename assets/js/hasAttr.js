$(document).ready(function()
{
	    jQuery.fn.extend({
	    hasAttr: function (name) {
	    	return this.attr(name) !== undefined;
	    }
	});
});