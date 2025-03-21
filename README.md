# About This Site

As a developer, my focus has mostly been on backend work. I have branched out into front end, and this will be my playground. More so - my online resume. It will bring together all of what I want to be seen when speaking with a potential new employer or client.

## Distinguishing Branches

- [vanilla-HTMLJS](https://github.com/ProsperousHeart/ProsperousHeart.github.io/tree/vanilla-HTMLJS):  original resume site without projects section.

- [react-migration](https://github.com/ProsperousHeart/ProsperousHeart.github.io/tree/react-migration):  migrating original resume site from vanilla HTML/CSS/JS to React. (Projects not in this one.)

- [updates-react](https://github.com/ProsperousHeart/ProsperousHeart.github.io/tree/updates-react):  branch where updates are done after migration to react.

- [gh-pages](https://github.com/ProsperousHeart/ProsperousHeart.github.io/tree/gh-pages):  GitHub hosting published code.
 
## Site Creation History
If you would like to see what free templates inspired my decisions, check out [the original README](README-OLD.md).

While I originally based the the flow with [this template](https://www.styleshout.com/free-templates/hola/), I quickly realized there was a LOT that could be optimized, some things were broken or missing, and I didn't like the style for the projects. But since I (at the time) had very few reasons to do front end web development, I just needed a starting piece. And from the template, I began updatin gcolors, fonts, flow of things, and so much more.

Eventually, I went through [ZTM's Complete Web Developer Mastery (2023)](https://prosperousheart.com/ztm-web-dev-bc) where I eventually learned a bit of React, Node & Express, as well as postgres as outlined [here](https://github.com/ProsperousHeart/FaceRecognitionApp-ZTM).

So in this next phase of my digital resume, I will have migrated [the original (vanilla) HTML/CSS/Javascript](https://github.com/ProsperousHeart/ProsperousHeart.github.io/tree/vanilla-HTMLJS) to a React site.

# How To Integrate New Code Into Live

## Commands To Run

`npm start` will allow you to test the site locally.

`npm start dev` will allow you to test the site locally AND have it automatically update with changes.

`npm run predeploy` creates a build directory with production build of your app. But this is not needed, since we are integrating with GitHub Pages.

`npm run deploy` will run `predeploy` then `react-scripts build` to optimize your code into a production build.

**NOTE:** If you are using GitHub pages for publishing AND you ahve set up DNS, you will need to re-add your domain in the _settings > pages_ section of your repo.

## Locations Of Where To Find What To Update

Main page is in the [App.js](./src/containers/App.js) file. All components are pulled into this single page app.

# Special Shoutouts

I found [Stroybook](https://storybook.js.org/) and have introduced this into my process flow! (And realized it had a dependency for lower React version so had to stop for now)

I was introduced to [this YouTube](https://www.youtube.com/watch?v=5DEq5cWNYt8) for creating my project cards. Additional animation stuff [here](https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108) from the creator.

# NPM Installs

After running `npm init` in my root repo folder, I then installed the following npm packages I installed for the first phase of React migration:

1. `npm install express` (removed since not currently hosting as a server)
2. `npm install react`
3. `npm install react-dom`
4. `npm install react-scripts`

It was at this stage I realized I likely needed to run `npx create-react-app APPNAME` to get everything installed properly, so I did so in a temp folder and moved over necessary files.

5. OPTIONAL (may not be needed / haven't installed yet) `npm install --save react-router-hash-link` from [here](https://www.npmjs.com/package/react-router-hash-link)

6. In an attempt to resolve a Modernizr issue, I ram `npm install -g modernizr` ... but no longer using this

7.  `npm install jquery --save` for jQuery use as well as `npm i --save-dev @types/jquery` as per [here](https://stackoverflow.com/a/41381583/10474024)

8. attempt to add waypoints with `npm install react-waypoint --save` from [here]https://www.npmjs.com/package/react-waypoint)

9. to detect scroll:  `npm i @smakss/react-scroll-direction` as per [here](https://www.npmjs.com/package/@smakss/react-scroll-direction)

10. `npm install @mui/material @emotion/react @emotion/styled` from [here](https://mui.com/material-ui/getting-started/installation/) ... NOTE that I believe this is no longer needed as VSCode cannot find it in my code anymore ... but sometimes it comes up empty. So be aware that this may be extraneous.

# Additional 3rd Party Tools

1. Slider (from original site) --> [React-Slick](https://react-slick.neostack.com/docs/get-started) with [code here](https://github.com/kenwheeler/slick)

```
npm install react-slick --save
npm install slick-carousel --save
```

2. react-scroll-up-button using `npm install react-scroll-up-button --legacy-peer-deps` (as per [here](https://www.npmjs.com/package/react-scroll-up-button) and [here](https://github.com/dirtyredz/react-scroll-up-button/issues/23)) --- but because it is broken made my own component with their code as base

3. `npm install --save react-modal --legacy-peer-deps` for [react-modal](https://github.com/reactjs/react-modal)

<!-- 3. `npm install react-scroll-up` -->

# Migrating From Vanilla to React

Things I had to remember:
1. `class` in HTML must now be `className`
