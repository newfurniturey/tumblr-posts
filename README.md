Tumblr Posts
------------

This quick-n-dirty function will load every post for a given blog.

### How to use

1. Load your Tumblr dashboard, https://www.tumblr.com/
2. Open the JavaScript Console (`Ctrl+Shift+J` in Chrome on Windows)
3. Copy+paste the `load_posts()` function into console and execute it
4. Execute the function with the blog name you're interested in

### Examples

    // load the latest 10 posts for the `newfurniturey` blog
        load_posts('newfurniturey', 10, 0, true);

    // load *all* of the posts for the `newfurniturey` blog
        load_posts('newfurniturey', 100, 0);

### Tweaking

If you just want a list of Post URLs, comment out lines 14 - 16.

To see what post data is available to you, you can also replace lines 13 - 16 with `console.log(posts[i]);`
and execute the function with something like `load_posts('newfurniturey', 1, 0, false);`.

Then, tweak as your heart desires =]
