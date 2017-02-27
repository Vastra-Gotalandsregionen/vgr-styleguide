# Static Assets

There are some files that belong in your root destination directory that you won't want to process or revision in production. Things like favicons, app icons, etc., should go in `src/static`, and will get copied over to `build`.

## Tasks and Files

```
gulpfile.js/tasks/static
```

Files are copied from this folder to the `root.dest` folder specified in `config.json`.
