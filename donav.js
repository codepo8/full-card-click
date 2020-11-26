let steps = [
  '1-unstyled.html',
  '2-clickable-card.html',
  '3-adding-button-and-links.html',
  '4-fixing-button-and-links.html',
  '5-adding-hover-effects.html',
  '6-hiding-on-click.html',
  '7-hiding-smoothly-on-click.html',
  '8-final.html'
];
let nav = document.createElement('nav');
let navlist = document.createElement('ul');
nav.appendChild(navlist);
out = '';
steps.forEach(s => {
  let name = s.replace(/\d?-/g,' ');
  if(document.location.href.includes(s)) {
    out += `<li class="current">${name.replace(/.html/,'').trim()}</li>`;

  } else {
    out += `<li><a href="${s}">${name.replace(/.html/,'').trim()}</a></li>`;
  }
});
navlist.innerHTML = out;
document.body.appendChild(nav)
