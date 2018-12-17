<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  --light: #fff;
  --dark: #000;
  --gray: #c4c4c4;
  --snap: cubic-bezier(0.06, 0.975, 0.195, 0.985);
  font-family: "Space Grotesk", monospace;
  font-size: 62.5%;
}
::-moz-selection {
  color: #fff;
  background: #000;
}
::selection {
  color: #fff;
  background: #000;
}
* {
  outline: none;
}

/* http://meyerweb.com/eric/tools/css/reset/
v4.0 | 20180602
License: none (public domain)
*/

html,
body,
div,
span,
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
code,
em,
img,
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
main,
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
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
  display: none;
}
body {
  line-height: 1.2;
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
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-top: 0;
}
h1 {
  font-size: 5.1rem;
  line-height: 1.05;
}

@media only screen and (max-width: 680px) {
  h1 {
    font-size: 5.1rem;
  }
}

h2 {
  font-size: 3.2rem;
  line-height: 1.3;
}

@media only screen and (max-width: 680px) {
  h2 {
    font-size: 3.2rem;
  }
}

h3 {
  font-size: 2rem;
  line-height: 1.38;
}

@media only screen and (max-width: 680px) {
  h3 {
    font-size: 2rem;
  }
}

small {
  font-size: 1rem;
  line-height: 1.2;
}

em {
  font-style: italic;
}

p {
  margin: 20px 0;
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: 0.096em;
}
@media only screen and (min-width: 2000px) {
  p {
    font-size: 2.1rem;
  }
}
a {
  margin: 20px 0;
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--dark);
  transition: transform 1s var(--snap);
}
a:hover {
  transform: scale(0.95) translateY(3px);
}
</style>
