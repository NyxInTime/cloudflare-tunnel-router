export default {
  async fetch(request, env, ctx) {
    const TUNNEL_URL = "https://nicintime.ca";

    const url = new URL(request.url);
    url.host = new URL(TUNNEL_URL).host;

    try {
      const response = await fetch(url.toString(), request);

      if (response.status >= 500) {
        return getErrorResponse();
      }

      return response;
    }
    catch (error) {
      return getErrorResponse();
    }
  }
}

function getErrorResponse() {

  const html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <title>404 - Not Found</title>
    <style>@font-face {
  font-family: 'Iosevka ASCII';
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  src: url('//cdn.kippi.at/font/Iosevka_ASCII-h5VvnoYs.woff2') format('woff2');
  font-display: block;
}

* {
  margin: 0;
  padding: 0;
}

body,
html {
  width: 100%;
  height: 100%;
  background-color: black;
  font-family: 'Iosevka ASCII', system-ui, monospace;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container {
  width: 61.8%;
  max-height: 100%;
}

.container-spacer {
  padding-top: 32px;
  padding-bottom: 32px;
}

.subtext {
  color: white;
  position: relative;
  font-size: 64px;
}

.desc {
  color: gray;
  font-size: 16px;
  padding-top: 2em;
}

.glitch {
  color: white;
  position: relative;
  font-size: 256px;
  line-height: 0.875;
  margin-bottom: 32px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.glitch::before,
.glitch::after {
  color: white;
  content: attr(data-text);
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  animation-timing-function: steps(8, jump-none), step-end;
  animation-iteration-count: infinite, infinite;
  animation-direction: alternate alternate;
}

.glitch::before {
  left: 0.03em;
  text-shadow: -0.02em 0 red;
  animation-name: glitch-animation-1, glitch-hide;
  animation-duration: 2.75s, 8s;
}

.glitch::after {
  left: -0.03em;
  text-shadow: -0.02em 0 blue;
  animation-name: glitch-animation-2, glitch-hide;
  animation-duration: 3.25s, 8s;
}

@media (prefers-reduced-motion) {
  .glitch::before,
  .glitch::after {
    animation: unset;
    content: unset;
  }
}

@keyframes glitch-animation-1 {
  0%   { clip: rect(0.3725em, auto, 0.7725em, auto); }
  5%   { clip: rect(0.6225em, auto, -0.0075em, auto); }
  10%  { clip: rect(-0.1275em, auto, 0.7425em, auto); }
  15%  { clip: rect(0.4125em, auto, 1.0725em, auto); }
  20%  { clip: rect(0.0125em, auto, 0.7225em, auto); }
  25%  { clip: rect(1.0125em, auto, 0.0925em, auto); }
  30%  { clip: rect(0.5925em, auto, 0.8625em, auto); }
  35%  { clip: rect(0.8625em, auto, 0.0625em, auto); }
  40%  { clip: rect(0.4025em, auto, -0.0175em, auto); }
  45%  { clip: rect(1.2625em, auto, 0.3025em, auto); }
  50%  { clip: rect(0.1225em, auto, 1.1625em, auto); }
  55%  { clip: rect(0.5525em, auto, 0.6625em, auto); }
  60%  { clip: rect(0.1825em, auto, 0.5325em, auto); }
  65%  { clip: rect(0.8725em, auto, 0.2525em, auto); }
  70%  { clip: rect(0.6325em, auto, -0.1375em, auto); }
  75%  { clip: rect(0.5925em, auto, 0.6225em, auto); }
  80%  { clip: rect(0.9125em, auto, 0.7325em, auto); }
  85%  { clip: rect(0.9625em, auto, 0.0825em, auto); }
  90%  { clip: rect(-0.0275em, auto, 0.9925em, auto); }
  95%  { clip: rect(1.3025em, auto, 1.1125em, auto); }
  100% { clip: rect(0.2525em, auto, -0.0275em, auto); }
}

@keyframes glitch-animation-2 {
  0%   { clip: rect(0.8325em, auto, 1.2225em, auto); }
  5%   { clip: rect(0.8025em, auto, 0.0325em, auto); }
  10%  { clip: rect(0.3425em, auto, 0.9825em, auto); }
  15%  { clip: rect(0.7225em, auto, 0.1325em, auto); }
  20%  { clip: rect(0.4325em, auto, 0.6425em, auto); }
  25%  { clip: rect(0.7125em, auto, 0.6125em, auto); }
  30%  { clip: rect(0.2925em, auto, 0.9225em, auto); }
  35%  { clip: rect(1.1825em, auto, 0.62em, auto); }
  40%  { clip: rect(0.1625em, auto, 0.5325em, auto); }
  45%  { clip: rect(1.3125em, auto, 0.8425em, auto); }
  50%  { clip: rect(0.1525em, auto, 0.7725em, auto); }
  55%  { clip: rect(0.9725em, auto, 1.0325em, auto); }
  60%  { clip: rect(0.2825em, auto, 0.1725em, auto); }
  65%  { clip: rect(0.5325em, auto, 1.1525em, auto); }
  70%  { clip: rect(0.2325em, auto, 1.0025em, auto); }
  75%  { clip: rect(0.2025em, auto, 1.0425em, auto); }
  80%  { clip: rect(0.4125em, auto, -0.0775em, auto); }
  85%  { clip: rect(1.0625em, auto, 1.0925em, auto); }
  90%  { clip: rect(1.1625em, auto, 1.0025em, auto); }
  95%  { clip: rect(0.7025em, auto, 0.3425em, auto); }
  100% { clip: rect(0.6225em, auto, 0.6525em, auto); }
}

@keyframes glitch-hide {
  0%   { z-index: -1; }
  15%  { z-index: unset; }
  18%  { z-index: -1; }
  37%  { z-index: unset; }
  42%  { z-index: -1; }
  54%  { z-index: unset; }
  64%  { z-index: -1; }
  71%  { z-index: unset; }
  75%  { z-index: -1; }
  85%  { z-index: unset; }
  88%  { z-index: -1; }
  96%  { z-index: unset; }
  100% { z-index: unset; }
}</style>
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <div class="container-spacer">
          <h1 class="glitch" data-text="404">404</h1>
          <p class="subtext">Not Found</p>
          <p class="desc">The page you requested does not exist</p>
        </div>
      </div>
    </div>
  </body>
</html>
  `


  return new Response(html, {
    status: 503,
    headers: { "Content-Type": "text/html;charset=UTF-8" }
  });
}
