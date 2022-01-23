# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

-This is a simple NFT card component that I coded using React as part of my frontend practice.
-I have included hover effects for the interactive elements as per the challenge design.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/KyleGichez/NFT-card-component)
- Live Site URL: [Netlify](https://gichezdman-nft-card-component.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library

### What I learned

I have learned how to use css variables to style my NFT card component. This has made my styling easy and very efficient as I do not have to repeat the same styles over and over again when styling diofferent elements in my card component project.

```css
:root {
  --primary-one: hsl(215, 51%, 70%);
  --primary-two: hsl(178, 100%, 50%);
  --neutral-one: hsl(216, 54%, 11%);
  --neutral-two: hsl(216, 51%, 16%);
  --neutral-three: hsl(215, 32%, 27%);
  --neutral-four: hsl(0, 0%, 100%);
  --font-family: Outfit, sans-serif;
  --font-weight-light: 300;
  --font-weight-bold: 400;
  --font-weight-semibold: 600;
}
```

However, I have encountered a problem with adding hover effect to my image. I have added the corresponding hover effect color but it is not showing up the color that I have declared in my CSS styling for the hover effect so I just added opacity to the image on hover that I may see the color but it isn't responding as expected. I need help on how how can solve this issue. Here is the code snippet.

```css
.main--container--image:hover {
  color: var(--primary-two);
  opacity: 0.4;
}
```

### Continued development

I am actively engaging myself in solving frontend challenges at Frontend Mentor and implementing them so that I may grow and enrich my Frontend coding skills and become an efficient and excellent global developer in future. I am happy with my coding journey and my tech career.

Bravo to all my fellow Frontend Masters developers.Let's keep the coding fire burning.!!

### Useful resources

- [CSS Box shadow generator](https://cssgenerator.org/box-shadow-css-generator.html) - This helped me in generating my box-shadow for the card component. I really liked this pattern and will use it going forward.
- [CSS Variables ](https://www.w3schools.com/css/css3_variables.asp#:~:text=First%20of%20all%3A%20CSS%20variables%20can%20have%20a,The%20%3Aroot%20selector%20matches%20the%20document%27s%20root%20element.)) - This is an amazing article which helped me finally understand CSS variables and using the :root selector for styling. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Gichure Maina](https://www.linkedin.com/in/gichure-maina-a45aab202/)
- Frontend Mentor - [@Kyle Gichez](https://www.frontendmentor.io/profile/KyleGichez)
- Twitter - [@Kyle Gichez](https://www.twitter.com/KyleGichez)
