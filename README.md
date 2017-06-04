# React Boilerplate

React and Redux, Webpack 2 boilerplate.

## What is this?

Boilerplate for kicking off React/Redux applications.

It includes complete, minimal react app.

In short:
- components (both container/views and regular ones)
- routes
- reducers (redux)
- actions (both sync and async),
- SASS (with autoprefixer)<sup>1</sup>
- dummy API
- using assets (in CSS and components)
- imports relative to the app root

## Setup

```
$ npm install
```

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ npm run dev
```

## Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```

## Running in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run preview
```

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```

## Components

### SVG icons - `Icon`

Add SVG icons to `source/assets/icons` folder, and they will automatically be added to SVG sprite.

**Usage:**

```
import Icon from 'components/Global/Icon';

<Icon glyph='triangle' />
```

**Available props**

```
glyph       // required, name of the SVG icon
className   // optional, additional CSS class, default ones are `Icon Icon--iconName`
width       // optional, default 24
height      // optional, default 24
style       // optional, CSS style object
```

