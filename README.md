# Movie Cards

A responsive grid of movie cards built with React and Material UI. Each card shows a poster, a title and a link to the film's IMDb page.

**Live demo:** [moviecards-blond.vercel.app](https://moviecards-blond.vercel.app)

## What it shows

- A reusable `Card` component that takes `Img`, `Title`, `Content` and `Link` as props, so every card is one line of JSX
- Component styles kept next to each component (`Card.jsx` + `Card.css`)
- External links opened safely with `target="_blank"` and `rel="noreferrer"`

## Tech

React 18 · Material UI · JavaScript · CSS · Create React App · deployed on Vercel

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Project structure

```
src/
  App.js              the page: a grid of <Card /> components
  Components/
    Card.jsx          the reusable card
    Card.css          card styles
```
