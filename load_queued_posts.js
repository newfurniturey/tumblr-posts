function load_queued_posts(blog, page, load_all) {
	jQuery.get('https://www.tumblr.com/blog/' + blog + '/queue?page=' + page,
		function (data) {
			var posts = jQuery(data).find('li.post_container');
			if (!posts.length) {
				console.log("\t\tFinal Queue Page: " + (page - 1));
				return;
			}
			
			var publishOnTimes = data.match(/publishOnTimes\s*:\s*\[([\[\]",:a-zA-Z0-9]+)\]\s*,[ \r\n]/);
			if (publishOnTimes) {
				publishOnTimes = publishOnTimes[1].replace(/","/g, ' ').replace(/[\[\]]/g, '');
				publishOnTimes = publishOnTimes.split(',');
			} else {
				publishOnTimes = [];
			}
			var currentQueueIndex = 0;
			
			var output = '';
			jQuery.each(posts, function(i, el) {
				var $post_full = jQuery(el).find('.post_full');
				var post_data = JSON.parse($post_full.attr('data-json'));
				var private_url = $post_full.find('.post_permalink').attr('href');
				
				var title = '';
				if ((title_el = $post_full.find('.post_title')).length) {
					title = title_el[0].innerHTML + "\n";
				}
				
				var post_text = (post_data['post-id'] != post_data['root-id']) ? 'reblogging' : 'posting';
				var posting_time = (publishOnTimes.length > currentQueueIndex) ? " @ " + publishOnTimes[currentQueueIndex] : '';
				
				output += private_url + "\n";
				output += title;
				output += post_text + posting_time + "\n";
				output += post_data.type + "\n\n"
				currentQueueIndex++;
			});
			
			console.log(output);
			if (load_all !== false) {
				load_queued_posts(blog, page + 1, load_all);
			}
		}
	);
}
