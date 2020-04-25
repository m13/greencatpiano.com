This is the webpage for my wife's project.

You can find all the sourcecode inside `./src/`. Published files on `./docs/`.

Libraries used:
- Sapper
- GetBootstrap
- Google Analytics
- Disqus


# how to create a new version

```bash
$ cd src/
$ gc -b whatever-new
$ npm i
$ npm run export
$ gs
$ gaa
$ gc -m "Release: whatever new"
$ git push
# create the pull request
```
