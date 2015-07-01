function load_posts(blog, per_page, starting_page, load_all) {
	var offset = starting_page * per_page;
	jQuery.getJSON('https://www.tumblr.com/svc/indash_blog/posts?tumblelog_name_or_id=' + blog + '&limit=' + per_page + '&offset=' + offset,
		function (data) {
			var posts = data.response.posts;
			if (posts.length == 0) {
				console.log("No more posts for blog =]");
				return;
			}
			
			var output = '';
			for (var i = 0; i < posts.length; i++) {
				output += posts[i].post_url + "\n";
				output += posts[i].hasOwnProperty('title') ? posts[i].title + "\n" : '';
				output += (posts[i].hasOwnProperty('reblogged_from_id') ? 'reblogged' : 'posted') + " @ " + posts[i].date + "\n";
				output += posts[i].type + " [" + posts[i].notes.current + "]\n\n"
			}
			
			console.log(output);
			if (load_all !== false) {
				load_posts(blog, per_page, starting_page + 1, load_all);
			}
		}
	);
}
