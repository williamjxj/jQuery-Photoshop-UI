Date.prototype.monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

Date.prototype.getMonthName = function() {
    return this.monthNames[this.getMonth()];
};

//\/Date(1341880220000)\/ ==> '\/Date(1341880220000)\/'.replace(/^.*\(/,'').replace(/\).*$/,'')
function get_date(ts) {
	var tt;
	var b;
	
	if(! ts) {
		b = new Date();
	}
	else if(/Date/.test(ts)) {
		tt = ts.replace(/^.*\(/, '');
		tt = tt.replace(/\).*$/, '');
		b = new Date(parseInt(tt));
	}
	else {
		tt = parseInt(ts);
		b = new Date(parseInt(tt));
	}

	// tt includes special chars, use parseInt() to filt.
    var d = ("0" + (b.getDate())).slice(-2);
	return b.getMonthName() + ' ' + d + ', ' + b.getFullYear();
}

function top_display_1(s, c, t) {
	if (s===undefined) {
		s=signup_ary[0];
	}
	var $name = $('<div></div>').addClass('name').html(s.name);
	var $zip = $('<div></div>').addClass('zip').html(s.zip);
	var $date = $('<div></div>').addClass('date').html(s.date);
	var $count = $('<div></div>').addClass('count').html(c);

	$('<div></div>')
		.addClass(t)
		.append($name)
		.append($zip)
		.append($date)
		.append($count)
		.appendTo('div.item:last');
}
function top_display_2(s, c, t, div) {
	if (s===undefined) {
		s=signup_ary[0];
	}
	var $name = $('<div></div>').addClass('name').html(s.name);
	var $zip = $('<div></div>').addClass('zip').html(s.zip);
	var $date = $('<div></div>').addClass('date').html(s.date);
	var $count = $('<div></div>').addClass('count').html(c);

	$('<div></div>')
		.addClass(t)
		.append($name)
		.append($zip)
		.append($date)
		.append($count)
		.appendTo(div);
}

function bottom_display_1(s, c, t) {
	if (s===undefined) {
		s=signup_ary[0];
	}
	var $name = $('<div></div>').addClass('name').html(s.name);
	var $zip = $('<div></div>').addClass('zip').html(s.zip);
	var $date = $('<div></div>').addClass('date').html(s.date);
	var $count = $('<div></div>').addClass('count').html(c);

	$('<div></div>')
		.addClass(t)
		.append($name)
		.append($zip)
		.append($date)
		.append($count)
		.appendTo('div.item.active');
}

function top_display(s, c, t, div) {
	if (s===undefined) {
		s=signup_ary[0];
	}
	var $name = $('<div></div>').addClass('name').html(s.name);
	var $zip = $('<div></div>').addClass('zip').html(s.zip);
	var $date = $('<div></div>').addClass('date').html(s.date);
	var $count = $('<div></div>').addClass('count').html(c);

	$('<div></div>')
		.addClass(t)
		.append($name)
		.append($zip)
		.append($date)
		.append($count)
		.appendTo(div);
}

function bottom_display(s, c, t, div) {
	if (s===undefined) {
		s=signup_ary[0];
	}
	var $name = $('<div></div>').addClass('name').html(s.name);
	var $zip = $('<div></div>').addClass('zip').html(s.zip);
	var $date = $('<div></div>').addClass('date').html(s.date);
	var $count = $('<div></div>').addClass('count').html(c);

	$('<div></div>')
		.addClass(t)
		.append($name)
		.append($zip)
		.append($date)
		.append($count)
		.appendTo(div);
}
