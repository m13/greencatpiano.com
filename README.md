This is the webpage for my wife's project.

You can find all the sourcecode inside `./src/`. Published files on `./docs/`.

Libraries used:
- Sapper
- Bootstrap
- Google Analytics
- Facebook comments plugin


# how to create a new version

```bash
$ cd src/
$ gco -b whatever-new
$ npm i
$ npm run export
$ gs
$ gaa
$ gc -m "Release: whatever new"
$ git push
# create the pull request
```
