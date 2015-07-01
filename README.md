Tumblr Posts
------------

These quick-n-dirty functions will load every post for a given blog.

### `load_posts()`

1. Load your Tumblr dashboard, https://www.tumblr.com/
2. Open the JavaScript Console (`Ctrl+Shift+J` in Chrome on Windows)
3. Copy+paste the `load_posts()` function into console and execute it
4. Execute the function with the blog name you're interested in

#### Examples

    // load the latest 10 posts for the `newfurniturey` blog
        load_posts('newfurniturey', 10, 0, false);

    // load *all* of the posts for the `newfurniturey` blog
        load_posts('newfurniturey', 100, 0);

#### Notes

- This should work against *all* public blogs.
- Password protected blogs will **only** load if you're a member of the blog
- Private, deleted, etc posts do not display
		
#### Tweaking

If you just want a list of Post URLs, comment out lines 14 - 16.

To see what post data is available to you, you can also replace lines 13 - 16 with `console.log(posts[i]);`
and execute the function with something like `load_posts('newfurniturey', 1, 0, false);`.

Then, tweak as your heart desires =]

### `load_queued_posts()`

1. Load your Tumblr dashboard, https://www.tumblr.com/
2. Open the JavaScript Console (`Ctrl+Shift+J` in Chrome on Windows)
3. Copy+paste the `load_queued_posts()` function into console and execute it
4. Execute the function with **one of your** blog names you're interested in

#### Examples

    // load the first 10 posts (i.e. the first page) in the queue for the
	// `newfurniturey` blog (assuming you're the owner, or member of, this blog)
	load_queued_posts('newfurniturey', 1, false);
	
	// load *all* of the queued posts for the `newfurniturey` blog, again, assuming
	// you're the owner or member of the blog)
	load_queued_posts('newfurniturey', 1);

#### Notes

- This will only work against blogs that you own (i.e. your primary or secondaries) or blogs you're a member of
