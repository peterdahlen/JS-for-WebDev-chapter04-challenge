(function(){
	'use strict';
	
	document.addEventListener('DOMContentLoaded', function(){
		var currentTime = document.getElementById('current-time'),
			currentDate = document.getElementById('current-date');
		
		setInterval(function() {
			var d = new Date();
		
			var hours = d.getHours(),
				minutes = d.getMinutes(),
				month = formatMonth(d.getMonth()),
				date = d.getDate();
			
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			
			var sepClass = '';
			if (d.getSeconds() % 2 === 1) sepClass = 'trans';
			
			var sep = '<span class="' + sepClass + '">:</span>';
		
			currentTime.innerHTML = hours + sep + minutes;
			currentDate.textContent = date + ' ' + month;
		}, 1000);
		
		function formatMonth(m) {
			m = parseInt(m, 10);
		
			if (m < 0) {
				m = 0;
			} else if (m > 11) {
				m = 11;
			}
		
			var monthNames = [
				'Januari', 'Februari', 'Mars',
				'April', 'Maj', 'Juni', 
				'Juli', 'Augusti', 'September',
				'Oktober', 'November', 'December'
			];
			
			return monthNames[m];
		}
	});
	
	
	})();