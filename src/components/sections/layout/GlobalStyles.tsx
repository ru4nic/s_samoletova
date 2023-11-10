import { createGlobalStyle } from 'styled-components';

/*
Images
*/
import overlay from '../../../assets/img/overlay.png';
import background from '../../../assets/img/bg.jpg';
/*
Fonts
*/
import sansLightWoff from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-300.woff';
import sansLightWoff2 from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-300.woff2';
import sansLightSvg from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-300.svg';

import sansRegtWoff from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-regular.woff';
import sansRegWoff2 from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-regular.woff2';
import sansRegSvg from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-regular.svg';

import sansMediumtWoff from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-500.woff';
import sansMediumWoff2 from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-500.woff2';
import sansMediumSvg from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-500.svg';

import sansBoldWoff from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-500.woff';
import sansBoldWoff2 from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-500.woff2';
import sansBoldSvg from '../../../assets/fonts/source-sans-3-v10-cyrillic_latin-500.svg';

import { palette } from '../../../assets/misc/vars';

const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  // font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  -webkit-text-size-adjust: none;
}

/* Page */

html {
  width: 100%;
  height: 100%;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 30rem;
  overflow: hidden;

  &::after {
    pointer-events: none;
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-attachment: fixed;
    background-color: #e1e6e1;
    background-image: url(${overlay}), url(${background});
    background-repeat: repeat, repeat-x;
    background-size: 128px 128px, cover;
  }
}



/* Typography */

html {
  font-size: 18pt;
  font-size: 1vmax;
}

@font-face {
  font-display: swap;
  font-family: 'Source';
  font-style: normal;
  font-weight: 300;
  src: url(${sansLightWoff2}) format('woff2'),
    url(${sansLightWoff}) format('woff'),
    url(${sansLightSvg}) format('svg');
}
@font-face {
  font-display: swap;
  font-family: 'Source';
  font-style: normal;
  font-weight: 400;
  src: url(${sansRegWoff2}) format('woff2'),
    url(${sansRegtWoff}) format('woff'),
    url(${sansRegSvg}) format('svg');
}
@font-face {
  font-display: swap;
  font-family: 'Source';
  font-style: normal;
  font-weight: 500;
  src: url(${sansMediumWoff2}) format('woff2'),
    url(${sansMediumtWoff}) format('woff'),
    url(${sansMediumSvg}) format('svg');
}
@font-face {
  font-display: swap;
  font-family: 'Source';
  font-style: normal;
  font-weight: bold;
  src: url(${sansBoldWoff2}) format('woff2'),
    url(${sansBoldWoff}) format('woff'),
    url(${sansBoldSvg}) format('svg');
}


body {
  color: ${palette.lightShades};
  font-family: "Source", Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.65;
}

h1.major,
h2.major,
h3.major {
  position: relative;
}

h1 {
  font-size: 3rem;
  line-height: 1.2;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  /* color: rgba(255, 255, 255, 0.875); */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  // line-height: 1.3;
  margin: 0 0 0.75rem 0;
  /* letter-spacing: 0.2px; */
}

h1 {
  font-size: 3rem;
  line-height: 1.2;

  &.major {
    margin: 0 0 calc(1.5rem * 1.75) 0;

    &:after {
      bottom: -1.325rem;
    }
  }
}

h2 {
  font-size: 1.75rem;
  line-height: 1.2;

  &.major {
    margin: 0 0 calc(1.5rem * 1.325) 0;

    &:after {
      bottom: -1.2rem;
    }
  }
}

h1,
h2,
h3 {
  &.major {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 3.5rem;
      height: 0.1rem;
      background-color: ${palette.darkShades}30;
    }
  }
}

h2.major::after {
  bottom: -1.2rem;
}

h2.major {
  margin: 0 0 1.9875rem 0;
}

p {
  margin: 0 0 1.5rem 0;
  /* font-weight: normal; */
}

/* strong {
  color: rgba(255, 255, 255, 0.875);
  font-weight: 400;
} */



.small .span_7,

.large .span_7 {
  width: 70%;
}

#root {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  flex-shrink: 0;
  height: 100%;
  padding: 5rem;
  @media (max-width:736px){
    flex-shrink: 1;
  }
}

.wrapper {
  display: flex;
  flex-direction: row;
  cursor: default;
  position: relative;
  height: 32rem;
  box-shadow: 0 2rem 4rem 0.25rem rgba(46, 43, 55, 0.575);

  &.is-dragging {
    user-select: none;
    cursor: -moz-grab;
    cursor: -webkit-grab;
    cursor: -ms-grab;
    cursor: grab;

    * {
      user-select: none;
    }

    *:not(a, .image) {
      cursor: -moz-grab;
      cursor: -webkit-grab;
      cursor: -ms-grab;
      cursor: grab;
    }
  }

  &.is-dragged {
    * {
      pointer-events: none;
    }
  }

}

@media (max-width:1680px){
  html {
    font-size: 12pt;
    font-size: 1.1vmax;

  }
}
@media (max-width:1280px){
  html {
    font-size: 11pt;
    font-size: 1.5vmax;

  }
}

/* @media screen and (max-width: 1080px) {
  .wrapper {
    height: 40rem;
  }

  #root {
    padding: 5rem;
  }
} */
@media screen and (max-width: 1080px) {
  body {
    overflow-x: auto;
    min-height: auto;
  }

  html {
    font-size: 10pt;
    font-size: 1.7vmax;
  }

  /* .wrapper {
    height: 50vmax;

    } */
}
@media screen and (orientation: portrait){

  #root {
    padding-left: 2rem;
    padding-right: 2rem;
}
}
@media (max-width: 736px){
  html {
    font-size: 12pt;
    height: auto;
  }
  body {
    height: auto;
    overflow-x: hidden;
    overflow-y: auto;
}
  #root {
    height: auto;
    padding: 1rem;
  }
  .wrapper {
    flex-direction: column;
    /* height: auto; */
    margin: 0 0 5rem 0;
    height: auto;
    box-shadow: 0 0.25rem 1.5rem 0.25rem rgba(46, 43, 55, 0.5);
  }
}
@media (max-width: 480px){
  html, body {
    min-width: 320px;
  }
  #root {
    padding: 0;
  }
  .wrapper {
    box-shadow: none;
    height: unset;
    margin: 0;
  }
}
`;
export default GlobalStyles;
