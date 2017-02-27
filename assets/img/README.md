# Image Assets

If you are using images (jpgs, pngs, gifs, svgs, etc.), this is the place to put them.

If you don't plan using images, feel free to delete this folder and the `tasks.img` config in `config.json`.

## Tasks and Files

```
gulpfile.js/tasks/img
```

The image task will copy them over to the destination specified in `config.json`, and run lossless optimizations and compression on them. File names will be reved in production builds (if enabled).
