import{K as It,L as cl,O as hl,S as pl,Y as _,Z as wa,_ as m,$ as to,a0 as x,a1 as b,a2 as F,a3 as A,a4 as w,a5 as xa,a6 as je,a7 as _t,a8 as V,a9 as Q,aa as $i,ab as Bi,ac as ro,ad as P,ae as fl,af as ne,ag as Ri,ah as ml,ai as _l,aj as vl,ak as oo,al as gl,am as Ge,an as le,ao as de,ap as Ce,aq as ke,ar as N,as as ce,at as bl,au as Aa,av as Ca,aw as ka,ax as vt,ay as gt,az as bt,aA as yl,aB as Qe,aC as Ke,aD as se,aE as xe,aF as Fi,aG as Fe,aH as Ia,aI as Oa,aJ as Le,aK as Pe,aL as yt,aM as Ea,aN as ct,aO as Ta,aP as wl,aQ as wt,aR as Ne,aS as mr,aT as io,aU as Ve,aV as xl,aW as Al,aX as Sa,aY as q,aZ as Pa,a_ as Cl,a$ as kl,b0 as Da,b1 as za,b2 as vo,b3 as Il,b4 as Ol,b5 as Ma,b6 as El,b7 as Tl,b8 as Sl,b9 as ht,ba as Pl,bb as go,bc as cn,bd as oe,be as Dl,bf as hn,bg as zl,bh as Se,bi as Ml,bj as $l,bk as Bl,bl as Li,bm as Rl,bn as Fl,bo as Ll,bp as $a,bq as pn,br as fn,bs as Ot,bt as Nl,bu as Vl,bv as Ba,bw as Ni,bx as Vi,by as Hl,bz as Ul,bA as Yl,bB as Ra,bC as Wl,bD as ql,bE as jl,bF as Gl,bG as Ql,bH as bo,bI as Kl,bJ as Xl}from"./indexhtml-qEKIKPDw.js";/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let mn=0;function Fa(o,t=[],e={}){const r=e.moduleId||`custom-style-module-${mn}`;mn+=1;const i=document.createElement("dom-module");o&&i.setAttribute("theme-for",o);const n=!!(t.length&&e.moduleId),a=[].concat(e.include||[]);a.length===0?i.__allStyles=t:n||(i.__partialStyles=t),i.innerHTML=`
    <template>
      ${a.map(s=>`<style include=${s}></style>`)}
      ${n?`<style>${t.map(s=>s.cssText).join(`
`)}</style>`:""}
    </template>
  `,i.register(r)}function Zl(o){return cl(o.querySelector("template")).map(t=>hl(t.textContent))}function Jl(){const t=pl.prototype.modules;return Object.keys(t).map(e=>{const r=t[e],i=r.getAttribute("theme-for");return r.__allStyles||(r.__allStyles=Zl(r).concat(r.__partialStyles||[])),{themeFor:i,moduleId:e,styles:r.__allStyles}})}window.Vaadin||(window.Vaadin={});window.Vaadin.styleModules={getAllThemes:Jl,registerStyles:Fa};It&&It.length>0&&(It.forEach(o=>{Fa(o.themeFor,o.styles,{moduleId:o.moduleId,include:o.include})}),It.length=0);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ed=_`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;wa("font-icons",ed);const La=_`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([disabled]),
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])),
    :host(:hover:not([disabled])) [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  /* Small */
  :host([theme~='small']) {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  /* Filled */
  :host([theme~='filled']) {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  /* Reverse */
  :host([theme~='reverse']) {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  /* Filled reverse */
  :host([theme~='reverse'][theme~='filled']) {
    padding-left: var(--lumo-space-m);
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) {
    padding-right: var(--lumo-space-m);
  }
`;m("vaadin-details-summary",La,{moduleId:"lumo-details-summary"});const td=_`
  :host {
    padding: 0;
  }

  [part='content'] {
    padding: var(--lumo-space-s) 0;
  }

  :host([theme~='filled']) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;m("vaadin-accordion-heading",[La,td],{moduleId:"lumo-accordion-heading"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rd=_`
  :host {
    display: block;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: inherit;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: initial;
    color: inherit;
    border: initial;
    outline: none;
    font: inherit;
    text-align: inherit;
  }
`;/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-accordion-heading",rd,{moduleId:"vaadin-accordion-heading-styles"});class od extends to(F(A(w))){static get is(){return"vaadin-accordion-heading"}static get template(){return x`
      <button id="button" part="content" disabled$="[[disabled]]" aria-expanded$="[[__updateAriaExpanded(opened)]]">
        <span part="toggle" aria-hidden="true"></span>
        <slot></slot>
      </button>
    `}static get properties(){return{opened:{type:Boolean,reflectToAttribute:!0}}}_attachDom(t){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return e.appendChild(t),e}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","heading")}__updateAriaExpanded(t){return t?"true":"false"}}b(od);const Na=_`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focus-ring]) ::slotted([slot='summary']) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part$='content'] {
    font-size: var(--lumo-font-size-s);
  }
`;m("vaadin-details",Na,{moduleId:"lumo-details"});const id=_`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;m("vaadin-accordion-panel",[Na,id],{moduleId:"lumo-accordion-panel"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nd extends xa{static generateId(t){return super.generateId(t,"content")}constructor(t){super(t,"",null,{multiple:!0})}}/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Va=o=>class extends o{static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},_contentElements:{type:Array}}}static get observers(){return["_openedOrContentChanged(opened, _contentElements)"]}constructor(){super(),this._contentController=new nd(this),this._contentController.addEventListener("slot-content-changed",e=>{const r=e.target.nodes||[];this._contentElements=r.filter(i=>i.parentNode===this)})}ready(){super.ready(),this.addController(this._contentController),this.addEventListener("click",({target:e})=>{if(this.disabled||e.localName==="a")return;const r=this.focusElement;r&&(e===r||r.contains(e))&&(this.opened=!this.opened)})}_openedOrContentChanged(e,r){r&&r.forEach(i=>{i.setAttribute("aria-hidden",e?"false":"true")})}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ha extends xa{constructor(t,e){super(t,"summary",e)}setSummary(t){this.summary=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{summary:t}=this;t&&t.trim()!==""&&this.attachDefaultNode()}updateDefaultNode(t){t&&(t.textContent=this.summary),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ad=_`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='content'] {
    display: none;
    overflow: hidden;
  }

  :host([opened]) [part='content'] {
    display: block;
    overflow: visible;
  }
`;/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-accordion-panel",ad,{moduleId:"vaadin-accordion-panel-styles"});class Ua extends Va(je(_t(A(V(w))))){static get is(){return"vaadin-accordion-panel"}static get template(){return x`
      <slot name="summary"></slot>

      <div part="content">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{summary:{type:String,observer:"_summaryChanged"}}}static get observers(){return["__updateAriaAttributes(focusElement, _contentElements)"]}static get delegateAttrs(){return["theme"]}static get delegateProps(){return["disabled","opened"]}constructor(){super(),this._summaryController=new Ha(this,"vaadin-accordion-heading"),this._summaryController.addEventListener("slot-content-changed",t=>{const{node:e}=t.target;this._setFocusElement(e),this.stateTarget=e,this._tooltipController.setTarget(e)}),this._tooltipController=new Q(this),this._tooltipController.setPosition("bottom-start")}ready(){super.ready(),this.addController(this._summaryController),this.addController(this._tooltipController)}_setAriaDisabled(){}_summaryChanged(t){this._summaryController.setSummary(t)}__updateAriaAttributes(t,e){if(t&&e){const r=e[0];r&&(r.setAttribute("role","region"),r.setAttribute("aria-labelledby",t.id)),r&&r.id?t.setAttribute("aria-controls",r.id):t.removeAttribute("aria-controls")}}}b(Ua);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sd extends $i(A(P(w))){static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}get focused(){return(this._getItems()||[]).find(t=>Bi(t.focusElement))}focus(){this._observer&&this._observer.flush(),super.focus()}ready(){super.ready();const t=this.shadowRoot.querySelector("slot");this._observer=new ro(t,e=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(e.addedNodes).forEach(r=>{r.addEventListener("opened-changed",this._boundUpdateOpened)})})}_getItems(){return this.items}_filterItems(t){return t.filter(e=>e instanceof Ua)}_updateItems(t,e){if(t){const r=t[e];t.forEach(i=>{i.opened=i===r})}}_onKeyDown(t){this.items.some(e=>e.focusElement===t.target)&&super._onKeyDown(t)}_updateOpened(t){const e=this._filterItems(t.composedPath())[0],r=this.items.indexOf(e);if(t.detail.value){if(e.disabled||r===-1)return;this.opened=r}else this.items.some(i=>i.opened)||(this.opened=null)}}b(sd);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hi=o=>class extends to(fl(ne(o))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),!(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)&&this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ld extends Hi(F(A(w))){static get is(){return"vaadin-details-summary"}static get template(){return x`
      <style>
        :host {
          display: block;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          pointer-events: none;
        }
      </style>
      <span part="toggle" aria-hidden="true"></span>
      <div part="content"><slot></slot></div>
    `}static get properties(){return{opened:{type:Boolean,reflectToAttribute:!0}}}}b(ld);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dd=o=>class extends Va(je(_t(o))){static get properties(){return{summary:{type:String,observer:"_summaryChanged"}}}static get observers(){return["__updateAriaControls(focusElement, _contentElements)","__updateAriaExpanded(focusElement, opened)"]}static get delegateAttrs(){return["theme"]}static get delegateProps(){return["disabled","opened"]}constructor(){super(),this._summaryController=new Ha(this,"vaadin-details-summary"),this._summaryController.addEventListener("slot-content-changed",e=>{const{node:r}=e.target;this._setFocusElement(r),this.stateTarget=r,this._tooltipController.setTarget(r)}),this._tooltipController=new Q(this),this._tooltipController.setPosition("bottom-start")}ready(){super.ready(),this.addController(this._summaryController),this.addController(this._tooltipController)}_setAriaDisabled(){}_summaryChanged(e){this._summaryController.setSummary(e)}__updateAriaControls(e,r){if(e&&r){const i=r[0];i&&i.id?e.setAttribute("aria-controls",i.id):e.removeAttribute("aria-controls")}}__updateAriaExpanded(e,r){e&&e.setAttribute("aria-expanded",r?"true":"false")}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ud extends dd(P(A(V(w)))){static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
        }

        :host([opened]) [part='content'] {
          display: block;
        }
      </style>

      <slot name="summary"></slot>

      <div part="content">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-details"}}b(ud);m("vaadin-app-layout",_`
    [part='navbar'],
    [part='drawer'] {
      background-color: var(--lumo-base-color);
      background-clip: padding-box;
    }

    [part='navbar'] {
      min-height: var(--lumo-size-xl);
      border-bottom: 1px solid var(--lumo-contrast-10pct);
    }

    [part='navbar'][bottom] {
      border-bottom: none;
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    [part='drawer'] {
      border-inline-end: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer'] {
      border-inline-end: none;
      box-shadow: var(--lumo-box-shadow-s);
    }

    :host([primary-section='navbar']) [part='navbar'] {
      border: none;
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host([primary-section='drawer']:not([overlay])) [part='drawer'] {
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }
  `,{moduleId:"lumo-app-layout"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ya(){if(Ri){const o=window.innerHeight,e=window.innerWidth>o,r=document.documentElement.clientHeight;e&&r>o?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${r-o}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Ya();window.addEventListener("resize",Ya);const Wa=document.createElement("template");Wa.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(Wa.content);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cd extends P(A(V(w))){static get template(){return x`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, 16em);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-block: var(--vaadin-app-layout-navbar-offset-top) var(--vaadin-app-layout-navbar-offset-bottom);
          padding-inline-start: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'] {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          inset-inline: 0;
          transition: inset-inline-start var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host([primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          inset-inline-start: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          inset-inline: var(--vaadin-app-layout-navbar-offset-left, 0) auto;
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: var(--_vaadin-app-layout-drawer-width);
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
          display: flex;
          flex-direction: column;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          inset: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          transform: translateX(100%);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host([drawer-opened]:not([overlay])) {
          padding-inline-start: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
            --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, 20em);
          }
        }

        /* If a vaadin-scroller is used in the drawer, allow it to take all remaining space and contain scrolling */
        [part='drawer'] ::slotted(vaadin-scroller) {
          flex: 1;
          overscroll-behavior: contain;
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer">
        <slot name="drawer" id="drawerSlot" on-slotchange="_updateDrawerSize"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden>
        <slot id="touchSlot" name="navbar touch-optimized" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__ariaModalController=new ml(this,()=>[...this.querySelectorAll('vaadin-drawer-toggle, [slot="drawer"]')]),this.__focusTrapController=new _l(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),vl(this,this._afterFirstRender),this._updateTouchOptimizedMode(),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this.__isDrawerAnimating?this.__updateOffsetSizePending=!0:this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded(),this.$.drawer.addEventListener("transitionstart",()=>{this.__isDrawerAnimating=!0}),this.$.drawer.addEventListener("transitionend",()=>{this.__updateOffsetSizePending&&(this.__updateOffsetSizePending=!1,this._updateOffsetSize()),requestAnimationFrame(()=>{this.__isDrawerAnimating=!1})})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?this.__trapFocusInDrawer():e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;t===0?(e.setAttribute("hidden",""),this.style.setProperty("--_vaadin-app-layout-drawer-width",0)):(e.removeAttribute("hidden"),this.style.removeProperty("--_vaadin-app-layout-drawer-width")),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),i=this.$.navbarBottom.getBoundingClientRect(),a=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${i.height}px`),this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${a.width}px`)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__ariaModalController.close(),this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(r=>{r.getAttribute("slot").indexOf("touch-optimized")>-1&&(r.__touchOptimized=!0),t&&r.__touchOptimized?r.setAttribute("slot","navbar-bottom"):r.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),this.$.navbarBottom.querySelector("[name=navbar-bottom]").assignedNodes().length===0?this.$.navbarBottom.setAttribute("hidden",""):this.$.navbarBottom.removeAttribute("hidden"),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),oo(this,()=>{this.removeAttribute("no-anim")})}}b(cd);const no=_`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;m("vaadin-button",no,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hd=_`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,pd=o=>o`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-button",hd,{moduleId:"vaadin-button-styles"});class ao extends Hi(P(A(V(w)))){static get is(){return"vaadin-button"}static get template(){return pd(x)}ready(){super.ready(),this._tooltipController=new Q(this),this.addController(this._tooltipController)}}b(ao);function fd({currentTarget:o}){o.disabled=o.hasAttribute("disableOnClick")}window.Vaadin.Flow.button={initDisableOnClick:o=>{o.__hasDisableOnClickListener||(o.addEventListener("click",fd),o.__hasDisableOnClickListener=!0)}};const md=_`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }

  :host([slot~='navbar']) {
    color: var(--lumo-secondary-text-color);
  }
`;m("vaadin-drawer-toggle",[no,md],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-drawer-toggle",_`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: default;
      position: relative;
      outline: none;
      height: 24px;
      width: 24px;
      padding: 4px;
    }

    [part='icon'],
    [part='icon']::after,
    [part='icon']::before {
      position: absolute;
      top: 8px;
      height: 3px;
      width: 24px;
      background-color: #000;
    }

    [part='icon']::after,
    [part='icon']::before {
      content: '';
    }

    [part='icon']::after {
      top: 6px;
    }

    [part='icon']::before {
      top: 12px;
    }
  `,{moduleId:"vaadin-drawer-toggle-styles"});class _d extends ao{static get template(){return x`
      <slot id="slot">
        <div part="icon"></div>
      </slot>
      <div part="icon" hidden$="[[!_showFallbackIcon]]"></div>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}ready(){super.ready(),this._toggleFallbackIcon(),this.$.slot.addEventListener("slotchange",()=>{this._toggleFallbackIcon()})}_toggleFallbackIcon(){const t=this.$.slot.assignedNodes();this._showFallbackIcon=t.length>0&&t.every(e=>gl(e))}}b(_d);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ue=_`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;m("",ue,{moduleId:"lumo-overlay"});const vd=_`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;m("vaadin-tooltip-overlay",[ue,vd],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gd=o=>class extends Ge(le(o)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(r=>{this.style.setProperty(`--vaadin-tooltip-offset-${r}`,e.getPropertyValue(`--vaadin-tooltip-offset-${r}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),r=this.$.overlay.getBoundingClientRect(),i=e.width/2-r.width/2;if(this.style.left){const n=r.left+i;n>0&&(this.style.left=`${n}px`)}if(this.style.right){const n=parseFloat(this.style.right)+i;n>0&&(this.style.right=`${n}px`)}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),r=this.$.overlay.getBoundingClientRect(),i=e.height/2-r.height/2;this.style.top=`${r.top+i}px`}}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bd=_`
  :host {
    z-index: 1100;
  }

  [part='overlay'] {
    max-width: 40ch;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, 0);
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 1px dashed;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-tooltip-overlay",[de,bd],{moduleId:"vaadin-tooltip-overlay-styles"});class yd extends gd(F(A(w))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}}b(yd);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const We=500;let qa=We,ja=We,Ga=We;const ot=new Set;let it=!1,nt=null,at=null;class wd{constructor(t){this.host=t}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>0?t.focusDelay:qa}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>0?t.hoverDelay:ja}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>0?t.hideDelay:Ga}get isClosing(){return ot.has(this.host)}open(t={immediate:!1}){const{immediate:e,hover:r,focus:i}=t,n=r&&this.hoverDelay>0,a=i&&this.focusDelay>0;!e&&(n||a)&&!this.__closeTimeout?this.__warmupTooltip(a):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),it&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){ot.forEach(t=>{t._stateController.close(!0),ot.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),it=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||(it?this.__showTooltip():this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){at&&(clearTimeout(at),at=null)}__abortWarmUp(){nt&&(clearTimeout(nt),nt=null)}__scheduleClose(){this._isOpened()&&(ot.add(this.host),this.__closeTimeout=setTimeout(()=>{ot.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){at=setTimeout(()=>{at=null,it=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;nt=setTimeout(()=>{nt=null,it=!0,this.__showTooltip()},e)}}const xd=o=>class extends Ce(o){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},position:{type:String},shouldShow:{type:Object,value:()=>(e,r)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_position:{type:String,value:"bottom"},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(e){qa=e!=null&&e>=0?e:We}static setDefaultHideDelay(e){Ga=e!=null&&e>=0?e:We}static setDefaultHoverDelay(e){ja=e!=null&&e>=0?e:We}constructor(){super(),this._uniqueId=`vaadin-tooltip-${ke()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(r=>this.__onTargetVisibilityChange(r.isIntersecting))},{threshold:0}),this._stateController=new wd(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new N(this,"sr-label","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this._srLabel=e}}),this.addController(this._srLabelController)}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computeOpened(e,r,i,n){return n&&(e?r:i)}__computePosition(e,r){return e||r}__autoOpenedChanged(e,r){e?document.addEventListener("keydown",this.__onKeyDown,!0):r&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(e){e&&(this.__setTargetByIdDebouncer=ce.debounce(this.__setTargetByIdDebouncer,bl,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const r=this.getRootNode().getElementById(e);r?this.target=r:console.warn(`No element with id="${e}" found to show tooltip.`)}__targetChanged(e,r){r&&(r.removeEventListener("mouseenter",this.__onMouseEnter),r.removeEventListener("mouseleave",this.__onMouseLeave),r.removeEventListener("focusin",this.__onFocusin),r.removeEventListener("focusout",this.__onFocusout),r.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(r)),e&&(e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)}))}__onFocusin(e){this.manual||Aa()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const r=this.__isTargetHidden;if(this.__isTargetHidden=!e,r&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,r){this._overlayElement&&(e||r)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=e.textContent}__computeAriaTarget(e,r){const i=a=>a&&a.nodeType===Node.ELEMENT_NODE;return(Array.isArray(e)?e.some(i):e)?e:r}__effectiveAriaTargetChanged(e,r){r&&[r].flat().forEach(i=>{Ca(i,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(i=>{ka(i,"aria-describedby",this._uniqueId)})}__generatorChanged(e,r,i){e&&((r!==this.__oldTextGenerator||i!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=r,this.__oldContext=i)}__updateSrLabelText(e,r){e&&(e.textContent=r)}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $e extends xd(vt(P(V(w)))){static get is(){return"vaadin-tooltip"}static get template(){return x`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseenter="__onOverlayMouseEnter"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>

      <slot name="sr-label"></slot>
    `}}b($e);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ad=_`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`;wa("user-color-props",Ad);const Qa=document.createElement("style");Qa.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(Qa);m("vaadin-avatar",_`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ka=document.createElement("template");Ka.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Ka.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cd=o=>class extends ne(o){static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},withTooltip:{type:Boolean,value:!1,observer:"__withTooltipChanged"},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean,__tooltipNode:Object}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n)","__tooltipChanged(__tooltipNode, name, abbr)"]}ready(){super.ready(),this.__updateVisibility(),this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),!this.name&&!this.abbr&&this.__setTooltip()}__colorIndexChanged(e){if(e!=null){const r=`--vaadin-user-color-${e}`;!!getComputedStyle(document.documentElement).getPropertyValue(r)?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${r})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${e} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(e,r,i){this.__updateVisibility(),!(r&&r!==this.__generatedAbbr)&&(i?this.abbr=this.__generatedAbbr=i.split(" ").map(n=>n.charAt(0)).join(""):this.abbr=void 0)}__tooltipChanged(e,r,i){e&&(i&&i!==this.__generatedAbbr?this.__setTooltip(r?`${r} (${i})`:i):this.__setTooltip(r))}__withTooltipChanged(e,r){if(e){const i=document.createElement("vaadin-tooltip");i.setAttribute("slot","tooltip"),this.appendChild(i),this.__tooltipNode=i}else r&&(this.__tooltipNode.target=null,this.__tooltipNode.remove(),this.__tooltipNode=null)}__i18nChanged(e){e&&e.anonymous&&(this.__oldAnonymous&&this.__tooltipNode&&this.__tooltipNode.text===this.__oldAnonymous&&this.__setTooltip(),this.__oldAnonymous=e.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTooltip(e){const r=this.__tooltipNode;r&&(r.text=e||this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kd=_`
  :host {
    display: inline-block;
    flex: none;
    border-radius: 50%;
    overflow: hidden;
    height: var(--vaadin-avatar-size, 64px);
    width: var(--vaadin-avatar-size, 64px);
    border: var(--vaadin-avatar-outline-width) solid transparent;
    margin: calc(var(--vaadin-avatar-outline-width) * -1);
    background-clip: content-box;
    --vaadin-avatar-outline-width: var(--vaadin-focus-ring-width, 2px);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  [part='icon'] {
    font-size: 5.6em;
  }

  [part='abbr'] {
    font-size: 2.2em;
  }

  [part='icon'] > text {
    font-family: 'vaadin-avatar-icons';
  }

  :host([hidden]) {
    display: none !important;
  }

  svg[hidden] {
    display: none !important;
  }

  :host([has-color-index]) {
    position: relative;
    background-color: var(--vaadin-avatar-user-color);
  }

  :host([has-color-index])::before {
    position: absolute;
    content: '';
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
  }
`;/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-avatar",kd,{moduleId:"vaadin-avatar-styles"});class Id extends Cd(P(A(V(w)))){static get template(){return x`
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">&#xea01;</text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-avatar"}ready(){super.ready(),this._tooltipController=new Q(this),this.addController(this._tooltipController)}}b(Id);const De=_`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;m("vaadin-item",De,{moduleId:"lumo-item"});const xt=_`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;m("vaadin-list-box",xt,{moduleId:"lumo-list-box"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xe=_`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;m("",Xe,{moduleId:"lumo-menu-overlay-core"});const Od=_`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,At=[ue,Xe,Od];m("",At,{moduleId:"lumo-menu-overlay"});m("vaadin-avatar-group",_`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const Ed=_`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;m("vaadin-avatar-group-overlay",[ue,Xe,Ed],{moduleId:"lumo-avatar-group-overlay"});m("vaadin-avatar-group-menu",xt,{moduleId:"lumo-avatar-group-menu"});m("vaadin-avatar-group-menu-item",[De,_`
      :host {
        padding: var(--lumo-space-xs);
        padding-inline-end: var(--lumo-space-m);
      }

      [part='content'] {
        display: flex;
        align-items: center;
      }

      [part='content'] ::slotted(vaadin-avatar) {
        width: var(--lumo-size-xs);
        height: var(--lumo-size-xs);
        margin-inline-end: var(--lumo-space-s);
      }
    `],{moduleId:"lumo-avatar-group-menu-item"});/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Td extends gt(A(F(V(w)))){static get is(){return"vaadin-avatar-group-menu"}static get template(){return x`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}b(Td);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sd extends bt(A(F(w))){static get is(){return"vaadin-avatar-group-menu-item"}static get template(){return x`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}b(Sd);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-avatar-group-overlay",[de],{moduleId:"vaadin-avatar-group-overlay-styles"});class Pd extends Ge(le(F(A(w)))){static get is(){return"vaadin-avatar-group-overlay"}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}b(Pd);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function st(o,t,e){return{index:o,removed:t,addedCount:e}}const Xa=0,Za=1,yo=2,wo=3;function Dd(o,t,e,r,i,n){let a=n-i+1,s=e-t+1,l=new Array(a);for(let d=0;d<a;d++)l[d]=new Array(s),l[d][0]=d;for(let d=0;d<s;d++)l[0][d]=d;for(let d=1;d<a;d++)for(let f=1;f<s;f++)if(Ui(o[t+f-1],r[i+d-1]))l[d][f]=l[d-1][f-1];else{let p=l[d-1][f]+1,y=l[d][f-1]+1;l[d][f]=p<y?p:y}return l}function zd(o){let t=o.length-1,e=o[0].length-1,r=o[t][e],i=[];for(;t>0||e>0;){if(t==0){i.push(yo),e--;continue}if(e==0){i.push(wo),t--;continue}let n=o[t-1][e-1],a=o[t-1][e],s=o[t][e-1],l;a<s?l=a<n?a:n:l=s<n?s:n,l==n?(n==r?i.push(Xa):(i.push(Za),r=n),t--,e--):l==a?(i.push(wo),t--,r=a):(i.push(yo),e--,r=s)}return i.reverse(),i}function Md(o,t,e,r,i,n){let a=0,s=0,l,d=Math.min(e-t,n-i);if(t==0&&i==0&&(a=$d(o,r,d)),e==o.length&&n==r.length&&(s=Bd(o,r,d-a)),t+=a,i+=a,e-=s,n-=s,e-t==0&&n-i==0)return[];if(t==e){for(l=st(t,[],0);i<n;)l.removed.push(r[i++]);return[l]}else if(i==n)return[st(t,[],e-t)];let f=zd(Dd(o,t,e,r,i,n));l=void 0;let p=[],y=t,v=i;for(let k=0;k<f.length;k++)switch(f[k]){case Xa:l&&(p.push(l),l=void 0),y++,v++;break;case Za:l||(l=st(y,[],0)),l.addedCount++,y++,l.removed.push(r[v]),v++;break;case yo:l||(l=st(y,[],0)),l.addedCount++,y++;break;case wo:l||(l=st(y,[],0)),l.removed.push(r[v]),v++;break}return l&&p.push(l),p}function $d(o,t,e){for(let r=0;r<e;r++)if(!Ui(o[r],t[r]))return r;return e}function Bd(o,t,e){let r=o.length,i=t.length,n=0;for(;n<e&&Ui(o[--r],t[--i]);)n++;return n}function Ja(o,t){return Md(o,0,o.length,t,0,t.length)}function Ui(o,t){return o===t}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _r=o=>o??yl;/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lo=2;class Rd extends Qe(Ce(P(A(V(w))))){static get template(){return x`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        ::slotted(vaadin-avatar:not(:first-child)) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        ::slotted(vaadin-avatar:not([dir='rtl']):not(:first-child)) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        ::slotted(vaadin-avatar[dir='rtl']:not(:first-child)) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-avatar-group-overlay
        id="overlay"
        opened="{{_opened}}"
        position-target="[[_overflow]]"
        no-vertical-overlap
        on-vaadin-overlay-close="_onVaadinOverlayClose"
      ></vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},_avatars:{type:Array,value:()=>[]},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__items:{type:Array},__itemsInView:{type:Number,value:null},_overflow:{type:Object},_overflowItems:{type:Array,observer:"__overflowItemsChanged",computed:"__computeOverflowItems(items.*, __itemsInView, maxItemsVisible)"},_overflowTooltip:{type:Object},_opened:{type:Boolean,observer:"__openedChanged"}}}static get observers(){return["__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)","__updateAvatarsTheme(_overflow, _avatars, _theme)","__updateAvatars(items.*, __itemsInView, maxItemsVisible, _overflow, i18n)","__updateOverflowAbbr(_overflow, items.length, __itemsInView, maxItemsVisible)","__updateOverflowHidden(_overflow, items.length, __itemsInView, __maxReached)","__updateOverflowTooltip(_overflowTooltip, items.length, __itemsInView, maxItemsVisible)"]}ready(){super.ready(),this._overflowController=new N(this,"overflow","vaadin-avatar",{initializer:e=>{e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded","false"),e.addEventListener("click",i=>this._onOverflowClick(i)),e.addEventListener("keydown",i=>this._onOverflowKeyDown(i));const r=document.createElement("vaadin-tooltip");r.setAttribute("slot","tooltip"),e.appendChild(r),this._overflow=e,this._overflowTooltip=r}}),this.addController(this._overflowController);const t=this.$.overlay;t.renderer=this.__overlayRenderer.bind(this),this._overlayElement=t,oo(this,()=>{this.__setItemsInView()})}disconnectedCallback(){super.disconnectedCallback(),this._opened=!1}__getMessage(t,e){return e.replace("{user}",t.name||t.abbr||this.i18n.anonymous)}__overlayRenderer(t){let e=t.firstElementChild;e||(e=document.createElement("vaadin-avatar-group-menu"),e.addEventListener("keydown",r=>this._onListKeyDown(r)),t.appendChild(e)),e.textContent="",this._overflowItems&&this._overflowItems.forEach(r=>{e.appendChild(this.__createItemElement(r))})}__createItemElement(t){const e=document.createElement("vaadin-avatar-group-menu-item"),r=document.createElement("vaadin-avatar");if(e.appendChild(r),r.setAttribute("aria-hidden","true"),r.setAttribute("tabindex","-1"),r.i18n=this.i18n,this._theme&&r.setAttribute("theme",this._theme),r.name=t.name,r.abbr=t.abbr,r.img=t.img,r.colorIndex=t.colorIndex,t.className&&(r.className=t.className),t.name){const i=document.createTextNode(t.name);e.appendChild(i)}return e}_onOverflowClick(t){t.stopPropagation(),this._opened?this.$.overlay.close():t.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(t){this._opened||/^(Enter|SpaceBar|\s)$/u.test(t.key)&&(t.preventDefault(),this._opened=!0)}_onListKeyDown(t){(t.key==="Escape"||t.key==="Tab")&&(this._opened=!1)}_onResize(){this.__setItemsInView()}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}__renderAvatars(t){Ke(se`
        ${t.map(e=>se`
              <vaadin-avatar
                .name="${e.name}"
                .abbr="${e.abbr}"
                .img="${e.img}"
                .colorIndex="${e.colorIndex}"
                .i18n="${this.i18n}"
                class="${_r(e.className)}"
                with-tooltip
              ></vaadin-avatar>
            `)}
      `,this,{renderBefore:this._overflow})}__updateAvatars(t,e,r,i){if(!i)return;const n=t.base||[],a=this.__getLimit(n.length,e,r);this.__renderAvatars(a?n.slice(0,a):n),this._avatars=[...this.querySelectorAll("vaadin-avatar")]}__computeOverflowItems(t,e,r){const i=t.base||[],n=this.__getLimit(i.length,e,r);return n?i.slice(n):[]}__computeMaxReached(t,e){return e!=null&&t>this.__getMax(e)}__updateOverflowAbbr(t,e,r,i){t&&(t.abbr=`+${e-this.__getLimit(e,r,i)}`)}__updateOverflowHidden(t,e,r,i){t&&t.toggleAttribute("hidden",!i&&!(r&&r<e))}__updateAvatarsTheme(t,e,r){t&&[t,...e].forEach(i=>{r?i.setAttribute("theme",r):i.removeAttribute("theme")})}__updateOverflowTooltip(t,e,r,i){if(!t)return;const n=this.__getLimit(e,r,i);if(n==null)return;const a=[];for(let s=n;s<e;s++){const l=this.items[s];l&&a.push(l.name||l.abbr||"anonymous")}t.text=a.join(`
`)}__getLimit(t,e,r){let i=null;const n=this.__getMax(r);return r!=null&&n<t?i=n-1:e&&e<t&&(i=e),Math.min(i,this.__calculateAvatarsFitWidth())}__getMax(t){return Math.max(t,lo)}__itemsChanged(t,e){const r=e.base;this.__setItemsInView(),t&&Array.isArray(t.indexSplices)?t.indexSplices.forEach(i=>{this.__announceItemsChange(r,i)}):Array.isArray(r)&&Array.isArray(this.__oldItems)&&Ja(r,this.__oldItems).forEach(n=>{this.__announceItemsChange(r,n)}),this.__oldItems=r}__announceItemsChange(t,e){const{addedCount:r,index:i,removed:n}=e;let a=[],s=[];r&&(a=t.slice(i,i+r).map(d=>this.__getMessage(d,this.i18n.joined||"{user} joined"))),n&&(s=n.map(d=>this.__getMessage(d,this.i18n.left||"{user} left")));const l=s.concat(a);l.length>0&&xe(l.join(", "))}__i18nItemsChanged(t,e){const{base:r}=t;if(r&&r.activeUsers){const i=e===1?"one":"many";r.activeUsers[i]&&this.setAttribute("aria-label",r.activeUsers[i].replace("{count}",e||0)),this._avatars.forEach(n=>{n.i18n=r})}}__openedChanged(t,e){t?(this._menuElement||(this._menuElement=this.$.overlay.querySelector("vaadin-avatar-group-menu")),this._openedWithFocusRing=this._overflow.hasAttribute("focus-ring"),this._menuElement.focus()):e&&(this._overflow.focus(),this._openedWithFocusRing&&this._overflow.setAttribute("focus-ring","")),this._overflow.setAttribute("aria-expanded",t===!0)}__overflowItemsChanged(t,e){(t||e)&&this.$.overlay.requestContentUpdate()}__setItemsInView(){const t=this._avatars,e=this.items;if(!e||!t||t.length<3)return;let r=this.__calculateAvatarsFitWidth();r===e.length-1&&(r=e.length),r>=e.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=r}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<lo)return lo;const t=this._avatars,e=t[0].clientWidth,{marginLeft:r,marginRight:i}=getComputedStyle(t[1]),n=this.__isRTL?parseInt(i,0)-parseInt(r,0):parseInt(r,0)-parseInt(i,0);return Math.floor((this.$.container.offsetWidth-e)/(e+n))}}b(Rd);m("vaadin-checkbox",_`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const es=Fi(o=>class extends _t(Fe(Ia(o))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const r=e.target;this._toggleChecked(r.checked)}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fd=o=>class extends Oa(es(je(to(o)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new Le(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Pe(this.inputElement,this._labelController))}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ld=_`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-checkbox",Ld,{moduleId:"vaadin-checkbox-styles"});class ts extends Fd(P(A(w))){static get is(){return"vaadin-checkbox"}static get template(){return x`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Q(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}b(ts);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ct=_`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ze=_`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;m("",Ze,{moduleId:"lumo-required-field"});const Nd=_`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;m("vaadin-checkbox-group",[Ze,Ct,Nd],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vd extends yt(ne(Fe(P(A(w))))){static get is(){return"vaadin-checkbox-group"}static get template(){return x`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        [part='group-field'] {
          display: flex;
          flex-wrap: wrap;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this),this._tooltipController=new Q(this),this._tooltipController.addEventListener("tooltip-changed",t=>{const e=t.detail.node;if(e&&e.isConnected){const r=this.__checkboxes.map(i=>i.inputElement);this._tooltipController.setAriaTarget(r)}else this._tooltipController.setAriaTarget([])})}get __checkboxes(){return this.__filterCheckboxes([...this.children])}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group");const t=this.shadowRoot.querySelector("slot:not([name])");this._observer=new ro(t,({addedNodes:e,removedNodes:r})=>{const i=this.__filterCheckboxes(e),n=this.__filterCheckboxes(r);i.forEach(this.__registerCheckbox),n.forEach(this.__unregisterCheckbox);const a=this.__checkboxes.map(s=>s.inputElement);this._tooltipController.setAriaTarget(a),this.__warnOfCheckboxesWithoutValue(i)}),this.addController(this._tooltipController)}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(t){return t.filter(e=>e instanceof ts)}__warnOfCheckboxesWithoutValue(t){t.some(r=>{const{value:i}=r;return!r.hasAttribute("value")&&(!i||i==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(t){t.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(t.disabled=!0),t.checked?this.__addCheckboxToValue(t.value):this.value.includes(t.value)&&(t.checked=!0)}__unregisterCheckbox(t){t.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),t.checked&&this.__removeCheckboxFromValue(t.value)}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__checkboxes.forEach(r=>{r.disabled=t})}__addCheckboxToValue(t){this.value.includes(t)||(this.value=[...this.value,t])}__removeCheckboxFromValue(t){this.value.includes(t)&&(this.value=this.value.filter(e=>e!==t))}__onCheckboxCheckedChanged(t){const e=t.target;e.checked?this.__addCheckboxToValue(e.value):this.__removeCheckboxFromValue(e.value)}__valueChanged(t,e){t.length===0&&e===void 0||(this.toggleAttribute("has-value",t.length>0),this.__checkboxes.forEach(r=>{r.checked=t.includes(r.value)}),e!==void 0&&this.validate())}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this.validate()}}b(Vd);const Yi=_`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }
  }
`;m("vaadin-combo-box-item",[De,Yi],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wi=_`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,qi=_`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,rs=_`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;m("vaadin-combo-box-overlay",[ue,Xe,qi,Wi,rs,_`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});m("vaadin-input-container",_`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid])::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Je=_`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;m("",Je,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hd=_`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-input-field-value-font-weight, 400);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,he=[Ze,Je,Ct,Hd];m("",he,{moduleId:"lumo-input-field-shared-styles"});const Ud=_`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;m("vaadin-combo-box",[he,Ud],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ji=o=>class extends o{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}static get observedAttributes(){return[...super.observedAttributes,"hidden"]}attributeChangedCallback(e,r,i){e==="hidden"&&i!==null?this.index=void 0:super.attributeChangedCallback(e,r,i)}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const e=this._owner.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,e)}__rendererOrItemChanged(e,r,i){i===void 0||r===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,r){r||(this.textContent=e)}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yd extends ji(A(F(w))){static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}}b(Yd);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gi=o=>class extends Ge(o){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}connectedCallback(){super.connectedCallback();const e=this._comboBox,r=e&&e.getAttribute("dir");r&&this.setAttribute("dir",r)}_shouldCloseOnOutsideClick(e){const r=e.composedPath();return!r.includes(this.positionTarget)&&!r.includes(this)}_updateOverlayWidth(){const e=this.localName;this.style.setProperty(`--_${e}-default-width`,`${this.positionTarget.clientWidth}px`);const r=getComputedStyle(this._comboBox).getPropertyValue(`--${e}-width`);r===""?this.style.removeProperty(`--${e}-width`):this.style.setProperty(`--${e}-width`,r)}_setOverlayWidth(e,r){e&&r&&(this._updateOverlayWidth(),this._updatePosition())}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wd=_`
  #overlay {
    width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;m("vaadin-combo-box-overlay",[de,Wd],{moduleId:"vaadin-combo-box-overlay-styles"});class qd extends Gi(le(F(A(w)))){static get is(){return"vaadin-combo-box-overlay"}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="loader"></div>
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}b(qd);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ae=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qi=o=>class extends o{static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(r=>parseInt(r,10)).reduce((r,i)=>r+i)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${ke()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new Ea({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const r=this._visibleItemsCount();let i=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),i=e-r+1):e>this.__virtualizer.firstVisibleIndex&&(i=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,i));const n=[...this.children].find(d=>!d.hidden&&d.index===this.__virtualizer.lastVisibleIndex);if(!n||e!==n.index)return;const a=n.getBoundingClientRect(),s=this.getBoundingClientRect(),l=a.bottom-s.bottom+this._viewportTotalPaddingBottom;l>0&&(this.scrollTop+=l)}_isItemSelected(e,r,i){return e instanceof Ae?!1:i&&e!==void 0&&r!==void 0?ct(i,e)===ct(i,r):e===r}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__openedChanged(e){e&&this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(e,r){e!==r&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,r){(e||r)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const r=document.createElement(`${this.__hostTagName}-item`);return r.addEventListener("click",this.__boundOnItemClick),r.tabIndex="-1",r.style.width="100%",r})}_updateElement(e,r){const i=this.items[r],n=this.focusedIndex,a=this._isItemSelected(i,this.selectedItem,this.itemIdPath);e.setProperties({item:i,index:r,label:this.getItemLabel(i),selected:a,renderer:this.renderer,focused:!this.loading&&n===r}),e.id=`${this.__hostTagName}-item-${r}`,e.setAttribute("role",r!==void 0?"option":!1),e.setAttribute("aria-selected",a.toString()),e.setAttribute("aria-posinset",r+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),i instanceof Ae&&this.__requestItemByIndex(r)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const r=this.scrollTop===0,i=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(r&&e.deltaY<0||i&&e.deltaY>0)&&e.preventDefault()})}__requestItemByIndex(e){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jd extends Qi(w){static get is(){return"vaadin-combo-box-scroller"}static get template(){return x`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}b(jd);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const os=o=>class extends Ta(o){static get properties(){return{pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const is=o=>class extends o{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Ae},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{const r=e.detail.index,i=e.detail.currentScrollerPos,n=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(r,n,i)&&r!==void 0){const a=this._getPageForIndex(r);this._shouldLoadPage(a)&&this._loadPage(a)}})}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,r,i){return i!==0&&e>=i-r&&e<=i+r}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const r=this.filteredItems[e*this.pageSize];return r!==void 0?r instanceof Ae:this.size===void 0}_loadPage(e){if(this._pendingRequests[e]||!this.dataProvider)return;const r={page:e,pageSize:this.pageSize,filter:this.filter},i=(n,a)=>{if(this._pendingRequests[e]!==i)return;const s=this.filteredItems?[...this.filteredItems]:[];s.splice(r.page*r.pageSize,n.length,...n),this.filteredItems=s,!this.opened&&!this._isInputFocused()&&this._commitValue(),a!==void 0&&(this.size=a),delete this._pendingRequests[e],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[e]=i,this.loading=!0,this.dataProvider(r,i)}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let r=0;r<(this.size||0);r++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const r=(this.filteredItems||[]).slice(0,e);for(let i=0;i<e;i++)r[i]=r[i]!==void 0?r[i]:this.__placeHolder;this.filteredItems=r,this._flushPendingRequests(e)}_pageSizeChanged(e,r){if(Math.floor(e)!==e||e<1)throw this.pageSize=r,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,r){this._ensureItemsOrDataProvider(()=>{this.dataProvider=r}),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,r){if(e&&r!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const i=this.__getItemIndexByValue(this.filteredItems,r);(i<0||!this._getItemLabel(this.filteredItems[i]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const r=Math.ceil(e/this.pageSize);Object.entries(this._pendingRequests).forEach(([i,n])=>{parseInt(i)>=r&&n([],e)})}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ns{constructor(t){this.host=t,t.addEventListener("opened-changed",()=>{t.opened||this.__setVirtualKeyboardEnabled(!1)}),t.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),t.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(t){this.host.inputElement&&(this.host.inputElement.inputMode=t?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function _n(o){return o!=null}function vn(o,t){return o.findIndex(e=>e instanceof Ae?!1:t(e))}const Ki=o=>class extends Ce(V(wl(ne(wt(Ia(Fe(o))))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_dropdownItems:{type:Array},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, _dropdownItems, loading)","_updateScroller(_scroller, _dropdownItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const r=this._nativeInput;r&&(r.autocomplete="off",r.autocapitalize="off",r.setAttribute("role","combobox"),r.setAttribute("aria-autocomplete","list"),r.setAttribute("aria-expanded",!!this.opened),r.setAttribute("spellcheck","false"),r.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),Ne(this),this.addController(new ns(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,r,i){super._propertiesChanged(e,r,i),r.filter!==void 0&&this._filterChanged(r.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",r=>r.preventDefault()),e.addEventListener("opened-changed",r=>{this._overlayOpened=r.detail.value}),this._overlayElement=e}_initScroller(e){const r=`${this._tagNamePrefix}-scroller`,i=this._overlayElement;i.renderer=a=>{a.firstChild||a.appendChild(document.createElement(r))},i.requestContentUpdate();const n=i.querySelector(r);n.owner=e||this,n.getItemLabel=this._getItemLabel.bind(this),n.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=n}_updateScroller(e,r,i,n,a,s,l,d,f){e&&(i&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:i?r:[],opened:i,loading:n,selectedItem:a,itemIdPath:s,focusedIndex:l,renderer:d,theme:f}))}_openedOrItemsChanged(e,r,i){this._overlayOpened=!!(e&&(i||r&&r.length))}_overlayOpenedChanged(e,r){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):r&&this._dropdownItems&&this._dropdownItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,r){r!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&Bi(this.inputElement)}_updateActiveDescendant(e){const r=this._nativeInput;if(!r)return;const i=this._getItemElements().find(n=>n.index===e);i?r.setAttribute("aria-activedescendant",i.id):r.removeAttribute("aria-activedescendant")}_openedChanged(e,r){if(r===void 0)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!mr&&this.inputElement&&this.inputElement.focus(),this._overlayElement.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const i=this._nativeInput;i&&(i.setAttribute("aria-expanded",!!e),e?i.setAttribute("aria-controls",this._scroller.id):i.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onClearButtonClick(e){e.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._isClearButton(e)?this._onClearButtonClick(e):e.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="Tab"?this._overlayElement.restoreFocusOnClose=!1:e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let r=e&&this.itemLabelPath?ct(this.itemLabelPath,e):void 0;return r==null&&(r=e?e.toString():""),r}_getItemValue(e){let r=e&&this.itemValuePath?ct(this.itemValuePath,e):void 0;return r===void 0&&(r=e?e.toString():""),r}_onArrowDown(){if(this.opened){const e=this._dropdownItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._dropdownItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,r){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,r)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){const r=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;if(!this.allowCustomValue&&r){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._onClearAction()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",r=>r.preventDefault()),e.addEventListener("click",()=>{mr&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem),this._focusedIndex=-1}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[this.selectedItem,...this._dropdownItems||[]],r=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!r){const i=this._inputElementValue;this._lastCustomValue=i;const n=new CustomEvent("custom-value-set",{detail:i,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(n),n.defaultPrevented||(this.value=i)}else!this.allowCustomValue&&!this.opened&&r?this.value=this._getItemValue(r):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}_onInput(e){const r=this._inputElementValue,i={};this.filter===r?this._filterChanged(this.filter):i.filter=r,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(i.opened=!0),this.setProperties(i)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const r=this._getItemValue(e);if(this.value!==r&&(this.value=r,this.value!==r))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}}_valueChanged(e,r){e===""&&r===void 0||(_n(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){document.hasFocus()&&this.validate(),this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,r){this._ensureItemsOrDataProvider(()=>{this.items=r}),e?this.filteredItems=e.slice(0):r&&(this.filteredItems=null)}_filteredItemsChanged(e,r){this._setDropdownItems(e);const i=r?r[this._focusedIndex]:null,n=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&n>=0&&(this.selectedItem=e[n]);const a=this.__getItemIndexByValue(e,this._getItemValue(i));a>-1?this._focusedIndex=a:this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(e,r){return e&&e.filter(n=>(r=r?r.toString().toLowerCase():"",this._getItemLabel(n).toString().toLowerCase().indexOf(r)>-1))}_selectItemForValue(e){const r=this.__getItemIndexByValue(this.filteredItems,e),i=this.selectedItem;r>=0?this.selectedItem=this.filteredItems[r]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&i===null&&this._selectedItemChanged(this.selectedItem)}_setDropdownItems(e){this._dropdownItems=e}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,r){return!e||!_n(r)?-1:vn(e,i=>this._getItemValue(i)===r)}__getItemIndexByLabel(e,r){return!e||!r?-1:vn(e,i=>this._getItemLabel(i).toString().toLowerCase()===r.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof Ae)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}_setFocused(e){if(super._setFocused(e),!e&&!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}_shouldRemoveFocus(e){return e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`?!1:e.relatedTarget===this._overlayElement?(e.composedPath()[0].focus(),!1):!0}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-combo-box",Ve,{moduleId:"vaadin-combo-box-styles"});class Gd extends is(Ki(os(io(A(P(w)))))){static get is(){return"vaadin-combo-box"}static get template(){return x`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Le(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Pe(this.inputElement,this._labelController)),this._tooltipController=new Q(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(t=>!t.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_onClearButtonClick(t){t.stopPropagation(),super._onClearButtonClick(t)}_onHostClick(t){const e=t.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(t)}}b(Gd);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ae{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,pt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),pt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,r){return t instanceof ae?t._cancelAsync():t=new ae,t.setConfig(e,r),t}}let pt=new Set;const as=function(o){pt.add(o)},Qd=function(){const o=!!pt.size;return pt.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),o};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xi=function(){let o,t;do o=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Qd();while(o||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let gn=!1;function ss(){if(xl&&!Al){if(!gn){gn=!0;const o=document.createElement("style");o.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(o)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Zi(o,t,e,r,i){let n;i&&(n=typeof e=="object"&&e!==null,n&&(r=o.__dataTemp[t]));let a=r!==e&&(r===r||e===e);return n&&a&&(o.__dataTemp[t]=e),a}const Ji=Fi(o=>{class t extends o{_shouldPropertyChange(r,i,n){return Zi(this,r,i,n,!0)}}return t}),Kd=Fi(o=>{class t extends o{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(r,i,n){return Zi(this,r,i,n,this.mutableData)}}return t});Ji._mutablePropertyChange=Zi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let xo=null;function Ao(){return xo}Ao.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ao,writable:!0}});const ls=Sa(Ao),Xd=Ji(ls);function Zd(o,t){xo=o,Object.setPrototypeOf(o,t.prototype),new t,xo=null}const Jd=Sa(class{});function ds(o,t){for(let e=0;e<t.length;e++){let r=t[e];if(!!o!=!!r.__hideTemplateChildren__)if(r.nodeType===Node.TEXT_NODE)o?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if(r.localName==="slot")if(o)r.__polymerReplaced__=document.createComment("hidden-slot"),q(q(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const i=r.__polymerReplaced__;i&&q(q(i).parentNode).replaceChild(r,i)}else r.style&&(o?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=o,r._showHideChildren&&r._showHideChildren(o)}}class ze extends Jd{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let i=this.root.firstChild;i;i=i.nextSibling)e.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let r in this.__hostProps)this._setPendingProperty(r,this.__dataHost["_host_"+r]);for(let r in t)this._setPendingProperty(r,t[r])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,i=>{i.model=this,r(i)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,e,r)}}_showHideChildren(t){ds(t,this.children)}_setUnmanagedPropertyToNode(t,e,r){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(t,e,r)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}ze.prototype.__dataHost;ze.prototype.__templatizeOptions;ze.prototype._methodHost;ze.prototype.__templatizeOwner;ze.prototype.__hostProps;const eu=Ji(ze);function bn(o){let t=o.__dataHost;return t&&t._methodHost||t}function tu(o,t,e){let r=e.mutableData?eu:ze;vr.mixin&&(r=vr.mixin(r));let i=class extends r{};return i.prototype.__templatizeOptions=e,i.prototype._bindTemplate(o),iu(i,o,t,e),i}function ru(o,t,e,r){let i=e.forwardHostProp;if(i&&t.hasHostProps){const n=o.localName=="template";let a=t.templatizeTemplateClass;if(!a){if(n){let l=e.mutableData?Xd:ls;class d extends l{}a=t.templatizeTemplateClass=d}else{const l=o.constructor;class d extends l{}a=t.templatizeTemplateClass=d}let s=t.hostProps;for(let l in s)a.prototype._addPropertyEffect("_host_"+l,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:ou(l,i)}),a.prototype._createNotifyingProperty("_host_"+l);Cl&&r&&su(t,e,r)}if(o.__dataProto&&Object.assign(o.__data,o.__dataProto),n)Zd(o,a),o.__dataTemp={},o.__dataPending=null,o.__dataOld=null,o._enableProperties();else{Object.setPrototypeOf(o,a.prototype);const s=t.hostProps;for(let l in s)if(l="_host_"+l,l in o){const d=o[l];delete o[l],o.__data[l]=d}}}}function ou(o,t){return function(r,i,n){t.call(r.__templatizeOwner,i.substring(6),n[i])}}function iu(o,t,e,r){let i=e.hostProps||{};for(let n in r.instanceProps){delete i[n];let a=r.notifyInstanceProp;a&&o.prototype._addPropertyEffect(n,o.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:nu(n,a)})}if(r.forwardHostProp&&t.__dataHost)for(let n in i)e.hasHostProps||(e.hasHostProps=!0),o.prototype._addPropertyEffect(n,o.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:au()})}function nu(o,t){return function(r,i,n){t.call(r.__templatizeOwner,r,i,n[i])}}function au(){return function(t,e,r){t.__dataHost._setPendingPropertyOrPath("_host_"+e,r[e],!0,!0)}}function vr(o,t,e){if(Pa&&!bn(o))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},o.__templatizeOwner)throw new Error("A <template> can only be templatized once");o.__templatizeOwner=t;let i=(t?t.constructor:ze)._parseTemplate(o),n=i.templatizeInstanceClass;n||(n=tu(o,i,e),i.templatizeInstanceClass=n);const a=bn(o);ru(o,i,e,a);let s=class extends n{};return s.prototype._methodHost=a,s.prototype.__dataHost=o,s.prototype.__templatizeOwner=t,s.prototype.__hostProps=i.hostProps,s=s,s}function su(o,t,e){const r=e.constructor._properties,{propertyEffects:i}=o,{instanceProps:n}=t;for(let a in i)if(!r[a]&&!(n&&n[a])){const s=i[a];for(let l=0;l<s.length;l++){const{part:d}=s[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${a}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function lu(o,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=o)t=e.__dataHost;else return e;else t=q(t).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class us extends w{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=ae.debounce(this.__renderDebouncer,za,()=>this.__render()),as(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=q(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!q(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),ss()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:q(t).querySelector("template");if(!e){let r=new MutationObserver(()=>{if(q(this).querySelector("template"))r.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return r.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=q(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&q(this).previousSibling!==e[e.length-1])for(let i=0,n;i<e.length&&(n=e[i]);i++)q(t).insertBefore(n,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Xi()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!vo||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class du extends us{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(Pa&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const r=e._bindTemplate(this.__template,!0);r.runEffects=(i,n,a)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),n=Object.assign(s.changedProps,n)),i(n,a);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:i,changedProps:{}}),a)for(const l in n){const d=Da(l);s.changedProps[d]=this.__dataHost[d]}else Object.assign(s.changedProps,n)},this.__instance=e._stampTemplate(this.__template,r),q(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,ds(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class uu extends us{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=vr(this.__template,this,{mutableData:!0,forwardHostProp:function(e,r){this.__instance&&(this.if?this.__instance.forwardHostProp(e,r):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Da(e)]=!0))}})),this.__instance=new this.__ctor,q(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=q(t[0]).parentNode;if(e){e=q(e);for(let r=0,i;r<t.length&&(i=t[r]);r++)e.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const yn=kl?du:uu;customElements.define(yn.is,yn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=(o,t)=>{var r;const e=o._$disconnectableChildren;if(e===void 0)return!1;for(const i of e)(r=i._$notifyDirectiveConnectionChanged)==null||r.call(i,t,!1),ut(i,t);return!0},gr=o=>{let t,e;do{if((t=o._$parent)===void 0)break;e=t._$disconnectableChildren,e.delete(o),o=t}while((e==null?void 0:e.size)===0)},cs=o=>{for(let t;t=o._$parent;o=t){let e=t._$disconnectableChildren;if(e===void 0)t._$disconnectableChildren=e=new Set;else if(e.has(o))break;e.add(o),pu(t)}};function cu(o){this._$disconnectableChildren!==void 0?(gr(this),this._$parent=o,cs(this)):this._$parent=o}function hu(o,t=!1,e=0){const r=this._$committedValue,i=this._$disconnectableChildren;if(!(i===void 0||i.size===0))if(t)if(Array.isArray(r))for(let n=e;n<r.length;n++)ut(r[n],!1),gr(r[n]);else r!=null&&(ut(r,!1),gr(r));else ut(this,o)}const pu=o=>{o.type==Ma.CHILD&&(o._$notifyConnectionChanged??(o._$notifyConnectionChanged=hu),o._$reparentDisconnectables??(o._$reparentDisconnectables=cu))};class fu extends Il{constructor(){super(...arguments),this._$disconnectableChildren=void 0}_$initialize(t,e,r){super._$initialize(t,e,r),cs(this),this.isConnected=t._$isConnected}_$notifyDirectiveConnectionChanged(t,e=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),e&&(ut(this,t),gr(this))}setValue(t){if(Ol(this.__part))this.__part._$setValue(t,this);else{if(this.__attributeIndex===void 0)throw new Error("Expected this.__attributeIndex to be a number");const e=[...this.__part._$committedValue];e[this.__attributeIndex]=t,this.__part._$setValue(e,this,0)}}disconnected(){}reconnected(){}}class mu extends fu{constructor(t){if(super(t),t.type!==Ma.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}update(t,[e,r]){return this.updateContent(t,e,r),Tl}updateContent(t,e,r){const{parentNode:i,startNode:n}=t,a=r!=null,s=a?this.getNewNode(e,r):null,l=this.getOldNode(t);if(clearTimeout(this.__nodeRetryTimeout),a&&!s)this.__nodeRetryTimeout=setTimeout(()=>this.updateContent(t,e,r));else{if(l===s)return;l&&s?i.replaceChild(s,l):l?i.removeChild(l):s&&n.after(s)}}getNewNode(t,e){return window.Vaadin.Flow.clients[t].getByNodeId(e)}getOldNode(t){const{startNode:e,endNode:r}=t;if(e.nextSibling!==r)return e.nextSibling}disconnected(){clearTimeout(this.__nodeRetryTimeout)}}const hs=El(mu);function _u(o,t){return hs(o,t)}function vu(o,t,e){Ke(se`${t.map(r=>hs(o,r))}`,e)}function gu(o){const t=o.insertBefore;o.insertBefore=function(e,r){return r&&r.parentNode===this?t.call(this,e,r):t.call(this,e,null)}}window.Vaadin||(window.Vaadin={});var ga;(ga=window.Vaadin).FlowComponentHost||(ga.FlowComponentHost={patchVirtualContainer:gu,getNode:_u,setChildNodes:vu});class wn extends w{static get template(){return x`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(t){this.firstChild&&typeof this.firstChild.click=="function"&&t.target===this&&(t.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=ae.debounce(this._debouncer,Sl,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const t=this._getRenderedComponent();this.firstChild?t?this.firstChild!==t?(this.replaceChild(t,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():t?(this.appendChild(t),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(t){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(t)}return null}onComponentRendered(){}_defineFocusTarget(){var t=this._getFirstFocusableDescendant(this.firstChild);t!==null&&t.setAttribute("focus-target","true")}_getFirstFocusableDescendant(t){if(this._isFocusable(t))return t;if(t.hasAttribute&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))||!t.children)return null;for(var e=0;e<t.children.length;e++){var r=this._getFirstFocusableDescendant(t.children[e]);if(r!==null)return r}return null}_isFocusable(t){return t.hasAttribute&&typeof t.hasAttribute=="function"&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))?!1:t.tabIndex===0}_onAnimationEnd(t){t.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(wn.is,wn);(function(){const o=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:t=>o(function(e){if(e.$connector)return;e.$connector={};const r={};let i={},n="";const a=new window.Vaadin.ComboBoxPlaceholder,s=(()=>{let p="",y=!1;return{needsDataCommunicatorReset:()=>y=!0,getLastFilterSentToServer:()=>p,requestData:(I,$,E)=>{const B=$-I,U=E.filter;e.$server.setRequestedRange(I,B,U),p=U,y&&(e.$server.resetDataCommunicator(),y=!1)}}})(),l=(p=Object.keys(r))=>{p.forEach(y=>{r[y]([],e.size),delete r[y];const v=parseInt(y)*e.pageSize,k=v+e.pageSize,O=Math.min(k,e.filteredItems.length);for(let I=v;I<O;I++)e.filteredItems[I]=a})};e.dataProvider=function(p,y){if(p.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter)if(i[0]){f(i[0],p.filter,y);return}else p.filter="";if(p.filter!==n){i={},n=p.filter,this._filterDebouncer=ae.debounce(this._filterDebouncer,ht.after(500),()=>{if(s.getLastFilterSentToServer()===p.filter&&s.needsDataCommunicatorReset(),p.filter!==n)throw new Error("Expected params.filter to be '"+n+"' but was '"+p.filter+"'");this._filterDebouncer=void 0,l(),e.dataProvider(p,y)});return}if(this._filterDebouncer){r[p.page]=y;return}if(i[p.page])d(p.page,y);else{r[p.page]=y;const k=Math.max(p.pageSize*2,500),O=Object.keys(r).map(E=>parseInt(E)),I=Math.min(...O),$=Math.max(...O);if(O.length*p.pageSize>k)p.page===I?l([String($)]):l([String(I)]),e.dataProvider(p,y);else if($-I+1!==O.length)l();else{const E=p.pageSize*I,B=p.pageSize*($+1);s.requestData(E,B,p)}}},e.$connector.clear=o((p,y)=>{const v=Math.floor(p/e.pageSize),k=Math.ceil(y/e.pageSize);for(let O=v;O<v+k;O++)delete i[O]}),e.$connector.filter=o(function(p,y){return y=y?y.toString().toLowerCase():"",e._getItemLabel(p,e.itemLabelPath).toString().toLowerCase().indexOf(y)>-1}),e.$connector.set=o(function(p,y,v){if(v!=s.getLastFilterSentToServer())return;if(p%e.pageSize!=0)throw"Got new data to index "+p+" which is not aligned with the page size of "+e.pageSize;if(p===0&&y.length===0&&r[0]){i[0]=[];return}const k=p/e.pageSize,O=Math.ceil(y.length/e.pageSize);for(let I=0;I<O;I++){let $=k+I,E=y.slice(I*e.pageSize,(I+1)*e.pageSize);i[$]=E}}),e.$connector.updateData=o(function(p){const y=new Map(p.map(v=>[v.key,v]));e.filteredItems=e.filteredItems.map(v=>y.get(v.key)||v)}),e.$connector.updateSize=o(function(p){e._clientSideFilter||(e.size=p)}),e.$connector.reset=o(function(){l(),i={},e.clearCache()}),e.$connector.confirm=o(function(p,y){if(y!=s.getLastFilterSentToServer())return;let v=Object.getOwnPropertyNames(r);for(let k=0;k<v.length;k++){let O=v[k];i[O]&&d(O,r[O])}e.$server.confirmUpdate(p)});const d=o(function(p,y){let v=i[p];e._clientSideFilter?f(v,e.filter,y):(delete i[p],y(v,e.size))}),f=o(function(p,y,v){let k=p;y&&(k=p.filter(O=>e.$connector.filter(O,y))),v(k,k.length)});e.addEventListener("custom-value-set",o(p=>p.preventDefault()))})(t)}})();window.Vaadin.ComboBoxPlaceholder=Ae;m("vaadin-overlay",ue,{moduleId:"lumo-vaadin-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-overlay",de,{moduleId:"vaadin-overlay-styles"});class ps extends le(A(F(w))){static get template(){return x`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}ready(){super.ready(),Ne(this)}}b(ps);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bu=_`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host([slot='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([slot='overflow'])::before,
  :host([slot='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([slot='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([slot='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([count='2']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([count='2'])::after {
    display: none;
  }

  :host([count='1']) {
    margin-inline-start: 0;
  }

  :host([count='1'])::before,
  :host([count='1'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;m("vaadin-multi-select-combo-box-chip",[Je,bu],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yu=_`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;m("vaadin-multi-select-combo-box-item",[De,Yi,yu],{moduleId:"lumo-multi-select-combo-box-item"});m("vaadin-multi-select-combo-box-overlay",[ue,Xe,qi,Wi,rs,_`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-multi-select-combo-box-overlay"});m("vaadin-multi-select-combo-box-container",_`
    :host([auto-expand-vertically]) {
      padding-block: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-multi-select-combo-box-container"});const wu=_`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  [part='label'] {
    flex-shrink: 0;
  }

  /* Override input-container styles */
  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    min-height: auto;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([auto-expand-vertically]) ::slotted([slot='chip']) {
    margin-block: calc(var(--lumo-space-xs) / 2);
  }

  ::slotted([slot='chip']:not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  :host([auto-expand-vertically]) ::slotted([slot='input']) {
    min-height: calc(var(--lumo-text-field-size, var(--lumo-size-m)) - 2 * var(--lumo-space-xs));
  }

  ::slotted([slot='chip']:not(:last-of-type)),
  ::slotted([slot='overflow']:not(:last-of-type)) {
    margin-inline-end: var(--lumo-space-xs);
  }

  ::slotted([slot='chip'][focused]) {
    background-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    color: var(--lumo-primary-contrast-color);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;m("vaadin-multi-select-combo-box",[he,wu],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xu extends A(w){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return x`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host([hidden]),
        :host(:is([readonly], [disabled], [slot='overflow'])) [part='remove-button'] {
          display: none !important;
        }

        @media (forced-colors: active) {
          :host {
            outline: 1px solid;
            outline-offset: -1px;
          }
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}b(xu);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-multi-select-combo-box-container",_`
    #wrapper {
      display: flex;
      width: 100%;
      min-width: 0;
    }

    :host([auto-expand-vertically]) #wrapper {
      flex-wrap: wrap;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let Et;class Au extends Pl{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!Et){Et=super.template.cloneNode(!0);const t=Et.content,e=t.querySelectorAll("slot"),r=document.createElement("div");r.setAttribute("id","wrapper"),t.insertBefore(r,e[2]),r.appendChild(e[0]),r.appendChild(e[1])}return Et}static get properties(){return{autoExpandVertically:{type:Boolean,reflectToAttribute:!0}}}}b(Au);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cu extends ji(A(F(w))){static get is(){return"vaadin-multi-select-combo-box-item"}static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}b(Cu);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-multi-select-combo-box-overlay",_`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});let Tt;class ku extends Gi(ps){static get is(){return"vaadin-multi-select-combo-box-overlay"}static get template(){if(!Tt){Tt=super.template.cloneNode(!0);const t=Tt.content.querySelector('[part~="overlay"]');t.removeAttribute("tabindex");const e=document.createElement("div");e.setAttribute("part","loader"),t.insertBefore(e,t.firstElementChild)}return Tt}}b(ku);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Iu extends Qi(w){static get is(){return"vaadin-multi-select-combo-box-scroller"}static get template(){return x`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-multi-select-combo-box-items-container-border-width);
          border-style: var(--_vaadin-multi-select-combo-box-items-container-border-style);
          border-color: var(--_vaadin-multi-select-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}_isItemSelected(t,e,r){return t instanceof Ae||this.owner.readonly?!1:this.owner._findIndex(t,this.owner.selectedItems,r)>-1}_updateElement(t,e){super._updateElement(t,e),t.toggleAttribute("readonly",this.owner.readonly)}}b(Iu);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ou extends is(Ki(A(w))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return x`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},selectedItemsOnTop:{type:Boolean,value:!1},lastFilter:{type:String,notify:!0},topGroup:{type:Array,observer:"_topGroupChanged"},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_setDropdownItems(t){if(this.readonly){this._dropdownItems=this.selectedItems;return}if(this.filter||!this.selectedItemsOnTop){this._dropdownItems=t;return}if(t&&t.length&&this.topGroup&&this.topGroup.length){const e=t.filter(r=>this._comboBox._findIndex(r,this.topGroup,this.itemIdPath)===-1);this._dropdownItems=this.topGroup.concat(e);return}this._dropdownItems=t}_topGroupChanged(t){t&&this._setDropdownItems(this.filteredItems)}_initScroller(){const t=this.getRootNode().host;this._comboBox=t,super._initScroller(t)}_onEnter(t){if(this.opened){if(t.preventDefault(),t.stopPropagation(),this.readonly)this.close();else{const e=this._dropdownItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this._dropdownItems.indexOf(e)}return}super._onEnter(t)}_onEscape(t){if(this.readonly){t.stopPropagation(),this.opened&&this.close();return}super._onEscape(t)}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_setFocused(t){t||(this._ignoreCommitValue=!0),super._setFocused(t),!t&&this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(t){t.stopPropagation(),!this.readonly&&(t.detail.item instanceof Ae||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:t.detail.item}})))}_shouldLoadPage(t){return this.readonly?!1:super._shouldLoadPage(t)}clearCache(){this.readonly||super.clearCache()}}b(Ou);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eu=_`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
    --_chip-min-width: var(--vaadin-multi-select-combo-box-chip-min-width, 50px);
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    flex: 0 1 auto;
  }

  ::slotted([slot='chip']) {
    overflow: hidden;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }

  :host([auto-expand-vertically]) #chips {
    display: contents;
  }

  :host([auto-expand-horizontally]) [class$='container'] {
    width: auto;
  }
`;m("vaadin-multi-select-combo-box",[Ve,Eu],{moduleId:"vaadin-multi-select-combo-box-styles"});class Tu extends Qe(io(A(P(w)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return x`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          overlay-class="[[overlayClass]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          selected-items-on-top="[[selectedItemsOnTop]]"
          top-group="[[_topGroup]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            auto-expand-vertically="[[autoExpandVertically]]"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="overflow" slot="prefix"></slot>
            <div id="chips" part="chips" slot="prefix">
              <slot name="chip"></slot>
            </div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{autoExpandHorizontally:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandHorizontallyChanged"},autoExpandVertically:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandVerticallyChanged"},autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},overlayClass:{type:String},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,selectedItemsOnTop:{type:Boolean,value:!1},value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String},_topGroup:{type:Array}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)","__updateOverflowChip(_overflow, _overflowItems, disabled, readonly)","__updateTopGroup(selectedItemsOnTop, selectedItems, opened)"]}get slotStyles(){const t=this.localName;return[...super.slotStyles,`
        ${t}[has-value] input::placeholder {
          color: transparent !important;
          forced-color-adjust: none;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return[...this.querySelectorAll('[slot="chip"]')]}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}ready(){super.ready(),this.addController(new Le(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Pe(this.inputElement,this._labelController)),this._tooltipController=new Q(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(t=>!t.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this._overflowController=new N(this,"overflow","vaadin-multi-select-combo-box-chip",{initializer:t=>{t.addEventListener("mousedown",e=>this._preventBlur(e)),this._overflow=t}}),this.addController(this._overflowController),this.__updateChips(),Ne(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),xe(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(t,e){super._disabledChanged(t,e),(t||e)&&this.__updateChips()}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(t,e){if(this.stateTarget){if(t==="required"){this._delegateAttribute("aria-required",e?"true":!1);return}super._delegateAttribute(t,e)}}_autoExpandHorizontallyChanged(t,e){(t||e)&&this.__updateChips()}_autoExpandVerticallyChanged(t,e){(t||e)&&this.__updateChips()}_clearButtonVisibleChanged(t,e){(t||e)&&this.__updateChips()}_onFilteredItemsChanged(t){const{value:e}=t.detail;(Array.isArray(e)||e==null)&&(this.filteredItems=e)}_readonlyChanged(t,e){(t||e)&&this.__updateChips(),this.dataProvider&&this.clearCache()}_pageSizeChanged(t,e){(Math.floor(t)!==t||t<=0)&&(this.pageSize=e,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(t){const e=this.__tmpA11yPlaceholder;e!==t&&(this.__savedPlaceholder=t,e&&(this.placeholder=e))}_selectedItemsChanged(t){if(this._toggleHasValue(this._hasValue),this._hasValue){const e=this._mergeItemLabels(t);this.__tmpA11yPlaceholder=e,this.placeholder=e}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate(),this.opened&&this.$.comboBox.$.overlay._updateOverlayWidth()}_getItemLabel(t){return this.$.comboBox._getItemLabel(t)}_mergeItemLabels(t){return t.map(e=>this._getItemLabel(e)).join(", ")}_findIndex(t,e,r){if(r&&t){for(let i=0;i<e.length;i++)if(e[i]&&e[i][r]===t[r])return i;return-1}return e.indexOf(t)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(t,e,r){const i=e?"selected":"deselected",n=this.i18n.total.replace("{count}",r||0);xe(`${t} ${this.i18n[i]} ${n}`)}__removeItem(t){const e=[...this.selectedItems];e.splice(e.indexOf(t),1),this.__updateSelection(e);const r=this._getItemLabel(t);this.__announceItem(r,!1,e.length)}__selectItem(t){const e=[...this.selectedItems],r=this._findIndex(t,e,this.itemIdPath),i=this._getItemLabel(t);let n=!1;if(r!==-1){const a=this._lastFilter;if(a&&a.toLowerCase()===i.toLowerCase()){this.__clearFilter();return}e.splice(r,1)}else e.push(t),n=!0;this.__updateSelection(e),this.__clearFilter(),this.__announceItem(i,n,e.length)}__updateSelection(t){this.selectedItems=t,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__updateTopGroup(t,e,r){t?r||(this._topGroup=[...e]):this._topGroup=[]}__createChip(t){const e=document.createElement("vaadin-multi-select-combo-box-chip");e.setAttribute("slot","chip"),e.item=t,e.disabled=this.disabled,e.readonly=this.readonly;const r=this._getItemLabel(t);return e.label=r,e.setAttribute("title",r),e.addEventListener("item-removed",i=>this._onItemRemoved(i)),e.addEventListener("mousedown",i=>this._preventBlur(i)),e}__getOverflowWidth(){const t=this._overflow;t.style.visibility="hidden",t.removeAttribute("hidden");const e=t.getAttribute("count");t.setAttribute("count","99");const r=getComputedStyle(t),i=t.clientWidth+parseInt(r.marginInlineStart);return t.setAttribute("count",e),t.setAttribute("hidden",""),t.style.visibility="",i}__updateChips(){if(!this._inputField||!this.inputElement)return;this._chips.forEach(a=>{a.remove()});const t=[...this.selectedItems],e=this._inputField.$.wrapper.clientWidth,r=parseInt(getComputedStyle(this.inputElement).flexBasis);let i=e-r;t.length>1&&(i-=this.__getOverflowWidth());const n=parseInt(getComputedStyle(this).getPropertyValue("--_chip-min-width"));if(this.autoExpandHorizontally){const a=[];for(let d=t.length-1,f=null;d>=0;d--){const p=this.__createChip(t[d]);this.insertBefore(p,f),f=p,a.unshift(p)}const s=[],l=this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth;if(!this.autoExpandVertically&&l<r){for(;a.length>1;){a.pop().remove(),s.unshift(t.pop());const f=s.length>0?r+this.__getOverflowWidth():r;if(this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth>=f)break}a.length===1&&(a[0].style.maxWidth=`${Math.max(n,i)}px`)}this._overflowItems=s;return}for(let a=t.length-1,s=null;a>=0;a--){const l=this.__createChip(t[a]);if(this.insertBefore(l,s),!this.autoExpandVertically&&this.$.chips.clientWidth>i)if(s===null)l.style.maxWidth=`${Math.max(n,i)}px`;else{l.remove();break}t.pop(),s=l}this._overflowItems=t}__updateOverflowChip(t,e,r,i){if(t){const n=e.length;t.label=`${n}`,t.setAttribute("count",`${n}`),t.setAttribute("title",this._mergeItemLabels(e)),t.toggleAttribute("hidden",n===0),t.disabled=r,t.readonly=i}}_onClearButtonTouchend(t){t.preventDefault(),this.clear()}_onClearButtonClick(t){t.stopPropagation(),this.clear()}_onChange(t){t.stopPropagation()}_onEscape(t){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(t.stopPropagation(),this.selectedItems=[])}_onKeyDown(t){super._onKeyDown(t);const e=this._chips;if(!this.readonly&&e.length>0)switch(t.key){case"Backspace":this._onBackSpace(e);break;case"ArrowLeft":this._onArrowLeft(e,t);break;case"ArrowRight":this._onArrowRight(e,t);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(t,e){if(this.inputElement.selectionStart!==0)return;const r=this._focusedChipIndex;r!==-1&&e.preventDefault();let i;this.__isRTL?r===t.length-1?i=-1:r>-1&&(i=r+1):r===-1?i=t.length-1:r>0&&(i=r-1),i!==void 0&&(this._focusedChipIndex=i)}_onArrowRight(t,e){if(this.inputElement.selectionStart!==0)return;const r=this._focusedChipIndex;r!==-1&&e.preventDefault();let i;this.__isRTL?r===-1?i=t.length-1:r>0&&(i=r-1):r===t.length-1?i=-1:r>-1&&(i=r+1),i!==void 0&&(this._focusedChipIndex=i)}_onBackSpace(t){if(this.inputElement.selectionStart!==0)return;const e=this._focusedChipIndex;e===-1?this._focusedChipIndex=t.length-1:(this.__removeItem(t[e].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(t,e){if(t>-1||e>-1){const r=this._chips;if(r.forEach((i,n)=>{i.toggleAttribute("focused",n===t)}),t>-1){const i=r[t].item,n=this._getItemLabel(i);xe(`${n} ${this.i18n.focused}`)}}}_onComboBoxChange(){const t=this.$.comboBox.selectedItem;t&&this.__selectItem(t)}_onComboBoxItemSelected(t){this.__selectItem(t.detail.item)}_onCustomValueSet(t){t.preventDefault(),t.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:t.detail,composed:!0,bubbles:!0}))}_onItemRemoved(t){this.__removeItem(t.detail.item)}_preventBlur(t){t.preventDefault()}__computeEffectiveItems(t,e,r){return t&&r?e:t}__computeEffectiveFilteredItems(t,e,r,i){return!t&&i?r:e}}b(Tu);const fs=_`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0 !important;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;m("vaadin-dialog-overlay",[ue,fs],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Su=o=>class extends le(o){static get properties(){return{headerTitle:{type:String},headerRenderer:{type:Object},footerRenderer:{type:Object}}}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(e){const r=document.createElement("div");return r.setAttribute("slot",e),r}__clearContainer(e){e.innerHTML="",delete e._$litPart$}__initContainer(e,r){return e?this.__clearContainer(e):e=this.__createContainer(r),e}_headerFooterRendererChange(e,r,i){const n=this.__oldHeaderRenderer!==e;this.__oldHeaderRenderer=e;const a=this.__oldFooterRenderer!==r;this.__oldFooterRenderer=r;const s=this._oldOpenedFooterHeader!==i;this._oldOpenedFooterHeader=i,this.toggleAttribute("has-header",!!e),this.toggleAttribute("has-footer",!!r),n&&(e?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),a&&(r?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(e&&(n||s)||r&&(a||s))&&i&&this.requestContentUpdate()}_headerTitleChanged(e,r){this.toggleAttribute("has-title",!!e),r&&(e||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=e}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(e){const r=this.$.overlay,i={...e};r.style.position!=="absolute"&&(r.style.position="absolute",this.setAttribute("has-bounds-set","")),Object.keys(i).forEach(n=>{typeof i[n]=="number"&&(i[n]=`${i[n]}px`)}),Object.assign(r.style,i)}getBounds(){const e=this.$.overlay.getBoundingClientRect(),r=this.getBoundingClientRect(),i=e.top-r.top,n=e.left-r.left,a=e.width,s=e.height;return{top:i,left:n,width:a,height:s}}__updateOverflow(){let e="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const i=this.$.content;i.scrollTop>0&&(e+=" top"),i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom")}const r=e.trim();r.length>0&&this.getAttribute("overflow")!==r?this.setAttribute("overflow",r):r.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ms=_`
  [part='header'],
  [part='header-content'],
  [part='footer'] {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: none;
    pointer-events: none;
    z-index: 1;
  }

  [part='header'] {
    flex-wrap: nowrap;
  }

  ::slotted([slot='header-content']),
  ::slotted([slot='title']),
  ::slotted([slot='footer']) {
    display: contents;
    pointer-events: auto;
  }

  ::slotted([slot='title']) {
    font: inherit !important;
    overflow-wrap: anywhere;
  }

  [part='header-content'] {
    flex: 1;
  }

  :host([has-title]) [part='header-content'],
  [part='footer'] {
    justify-content: flex-end;
  }

  :host(:not([has-title]):not([has-header])) [part='header'],
  :host(:not([has-header])) [part='header-content'],
  :host(:not([has-title])) [part='title'],
  :host(:not([has-footer])) [part='footer'] {
    display: none !important;
  }

  :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
    height: auto;
  }

  @media (min-height: 320px) {
    :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      flex: 1;
      overflow: auto;
    }
  }

  /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
  [part='content'] {
    min-width: 12em; /* matches the default <vaadin-text-field> width */
  }

  :host([has-bounds-set]) [part='overlay'] {
    max-width: none;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`,Pu=_`
  [part='overlay'] {
    position: relative;
    overflow: visible;
    max-height: 100%;
    display: flex;
  }

  [part='content'] {
    box-sizing: border-box;
    height: 100%;
  }

  .resizer-container {
    overflow: auto;
    flex-grow: 1;
    border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
  }

  [part='overlay'][style] .resizer-container {
    min-height: 100%;
    width: 100%;
  }

  :host(:not([resizable])) .resizer {
    display: none;
  }

  :host([resizable]) [part='title'] {
    cursor: move;
    -webkit-user-select: none;
    user-select: none;
  }

  .resizer {
    position: absolute;
    height: 16px;
    width: 16px;
  }

  .resizer.edge {
    height: 8px;
    width: 8px;
    inset: -4px;
  }

  .resizer.edge.n {
    width: auto;
    bottom: auto;
    cursor: ns-resize;
  }

  .resizer.ne {
    top: -4px;
    right: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.e {
    height: auto;
    left: auto;
    cursor: ew-resize;
  }

  .resizer.se {
    bottom: -4px;
    right: -4px;
    cursor: nwse-resize;
  }

  .resizer.edge.s {
    width: auto;
    top: auto;
    cursor: ns-resize;
  }

  .resizer.sw {
    bottom: -4px;
    left: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.w {
    height: auto;
    right: auto;
    cursor: ew-resize;
  }

  .resizer.nw {
    top: -4px;
    left: -4px;
    cursor: nwse-resize;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-dialog-overlay",[de,ms,Pu],{moduleId:"vaadin-dialog-overlay-styles"});class Du extends Su(F(A(w))){static get is(){return"vaadin-dialog-overlay"}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <section id="resizerContainer" class="resizer-container">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="header-content"><slot name="header-content"></slot></div>
          </header>
          <div part="content" id="content"><slot></slot></div>
          <footer part="footer"><slot name="footer"></slot></footer>
        </section>
      </div>
    `}}b(Du);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _s=o=>class extends o{static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},modeless:{type:Boolean,value:!1}}}ready(){super.ready();const e=this.$.overlay;e.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),e.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._overlayElement=e}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),setTimeout(()=>{this.isConnected||(this.__restoreOpened=this.opened,this.opened=!1)})}_onOverlayOpened(e){e.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}_bringOverlayToFront(){this.modeless&&this._overlayElement.bringToFront()}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function br(o){return o.touches?o.touches[0]:o}function vs(o){return o.clientX>=0&&o.clientX<=window.innerWidth&&o.clientY>=0&&o.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zu=o=>class extends o{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:mr},__dragHandleClassName:{type:String}}}async ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),await new Promise(requestAnimationFrame),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!(e.type==="touchstart"&&e.touches.length>1)&&this.draggable&&(e.button===0||e.touches)){const r=this.$.overlay.$.resizerContainer,i=e.target===r,n=e.offsetX>r.clientWidth||e.offsetY>r.clientHeight,a=e.target===this.$.overlay.$.content,s=e.composedPath().some((l,d)=>{if(!l.classList)return!1;const f=l.classList.contains(this.__dragHandleClassName||"draggable"),p=l.classList.contains("draggable-leaf-only"),y=d===0;return p&&y||f&&(!p||y)});if(i&&!n||a||s){s||e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const l=br(e);this._originalMouseCoords={top:l.pageY,left:l.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(e){const r=br(e);if(vs(r)){const i=this._originalBounds.top+(r.pageY-this._originalMouseCoords.top),n=this._originalBounds.left+(r.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:i,left:n})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mu=o=>class extends o{static get properties(){return{renderer:{type:Object},headerTitle:String,headerRenderer:{type:Object},footerRenderer:{type:Object}}}requestContentUpdate(){this._overlayElement&&this._overlayElement.requestContentUpdate()}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $u=o=>class extends o{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}async ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},await new Promise(requestAnimationFrame),this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const r=document.createElement("div");this._resizeListeners.start[e]=i=>this._startResize(i,e),this._resizeListeners.resize[e]=i=>this._resize(i,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),e.length===1&&r.classList.add("edge"),r.classList.add("resizer"),r.classList.add(e),r.addEventListener("mousedown",this._resizeListeners.start[e]),r.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(r)})}_startResize(e,r){if(!(e.type==="touchstart"&&e.touches.length>1)&&(e.button===0||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const i=br(e);this._originalMouseCoords={top:i.pageY,left:i.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[r]),window.addEventListener("touchmove",this._resizeListeners.resize[r]),window.addEventListener("mouseup",this._resizeListeners.stop[r]),window.addEventListener("touchend",this._resizeListeners.stop[r]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,r){const i=br(e);vs(i)&&r.split("").forEach(a=>{switch(a){case"n":{const s=this._originalBounds.height-(i.pageY-this._originalMouseCoords.top),l=this._originalBounds.top+(i.pageY-this._originalMouseCoords.top);s>40&&this.$.overlay.setBounds({top:l,height:s});break}case"e":{const s=this._originalBounds.width+(i.pageX-this._originalMouseCoords.left);s>40&&this.$.overlay.setBounds({width:s});break}case"s":{const s=this._originalBounds.height+(i.pageY-this._originalMouseCoords.top);s>40&&this.$.overlay.setBounds({height:s});break}case"w":{const s=this._originalBounds.width-(i.pageX-this._originalMouseCoords.left),l=this._originalBounds.left+(i.pageX-this._originalMouseCoords.left);s>40&&this.$.overlay.setBounds({left:l,width:s});break}}})}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:r,height:i}=getComputedStyle(this.$.overlay.$.overlay),n=this.$.overlay.$.content;n.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:a,height:s}=getComputedStyle(n);return n.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:r,height:i,contentWidth:a,contentHeight:s}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bu extends zu($u(Mu(_s(Ce(vt(P(w))))))){static get template(){return x`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        restore-focus-on-close
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{ariaLabel:{type:String,value:""}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready(),this._overlayElement.setAttribute("role","dialog"),Ne(this)}_rendererChanged(t,e,r){this.$.overlay.setProperties({owner:this,renderer:t,headerRenderer:e,footerRenderer:r})}_openedChanged(t){this.$.overlay.opened=t}_ariaLabelChanged(t,e){t||e?this.$.overlay.setAttribute("aria-label",t||e):this.$.overlay.removeAttribute("aria-label")}}b(Bu);m("vaadin-confirm-dialog-overlay",[ue,fs,_`
      [part='header'] ::slotted(h3) {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
      }

      [part='message'] {
        width: 25em;
        min-width: 100%;
        max-width: 100%;
      }

      ::slotted([slot$='button'][theme~='tertiary']) {
        padding-left: var(--lumo-space-s);
        padding-right: var(--lumo-space-s);
      }

      [part='cancel-button'] {
        flex-grow: 1;
      }

      @media (max-width: 360px) {
        [part='footer'] {
          flex-direction: column-reverse;
          align-items: stretch;
          padding: var(--lumo-space-s) var(--lumo-space-l);
          gap: var(--lumo-space-s);
        }

        ::slotted([slot$='button']) {
          width: 100%;
          margin: 0;
        }
      }
    `],{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ru=o=>class extends o{static get properties(){return{ariaLabel:{type:String,value:""},contentHeight:{type:String},contentWidth:{type:String}}}static get observers(){return["__updateContentHeight(contentHeight, _overlayElement)","__updateContentWidth(contentWidth, _overlayElement)"]}__updateDimension(e,r,i){const n=`--_vaadin-confirm-dialog-content-${r}`;i?e.style.setProperty(n,i):e.style.removeProperty(n)}__updateContentHeight(e,r){r&&this.__updateDimension(r,"height",e)}__updateContentWidth(e,r){r&&this.__updateDimension(r,"width",e)}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fu=_`
  :host {
    --_vaadin-confirm-dialog-content-width: auto;
    --_vaadin-confirm-dialog-content-height: auto;
  }

  [part='overlay'] {
    width: var(--_vaadin-confirm-dialog-content-width);
    height: var(--_vaadin-confirm-dialog-content-height);
  }

  ::slotted([slot='header']) {
    pointer-events: auto;
  }

  /* Make buttons clickable */
  [part='footer'] > * {
    pointer-events: all;
  }
`;/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-confirm-dialog-overlay",[de,ms,Fu],{moduleId:"vaadin-confirm-dialog-overlay-styles"});class Lu extends le(F(A(w))){static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){return x`
      <div part="backdrop" id="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <section id="resizerContainer" class="resizer-container">
          <header part="header"><slot name="header"></slot></header>
          <div part="content" id="content">
            <div part="message"><slot></slot></div>
          </div>
          <footer part="footer" role="toolbar">
            <div part="cancel-button">
              <slot name="cancel-button"></slot>
            </div>
            <div part="reject-button">
              <slot name="reject-button"></slot>
            </div>
            <div part="confirm-button">
              <slot name="confirm-button"></slot>
            </div>
          </footer>
        </section>
      </div>
    `}ready(){super.ready(),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}b(Lu);class Nu extends Ru(_s(Ce(vt(w)))){static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return x`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        opened="[[opened]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        aria-label$="[[ariaLabel]]"
        restore-focus-on-close
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}}b(Nu);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vu=o=>class extends o{static get properties(){return{accessibleDescriptionRef:{type:String},opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},rejectButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancelButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},overlayClass:{type:String},_cancelButton:{type:Object},_confirmButton:{type:Object},_headerNode:{type:Object},_messageNodes:{type:Array,value:()=>[]},_overlayElement:{type:Object,sync:!0},_rejectButton:{type:Object},_contentHeight:{type:String},_contentWidth:{type:String}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancelButtonVisible)","__updateHeaderNode(_headerNode, header)","__updateMessageNodes(_messageNodes, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, rejectButtonVisible)","__accessibleDescriptionRefChanged(_overlayElement, _messageNodes, accessibleDescriptionRef)"]}constructor(){super(),this.__cancel=this.__cancel.bind(this),this.__confirm=this.__confirm.bind(this),this.__reject=this.__reject.bind(this)}get __slottedNodes(){return[this._headerNode,...this._messageNodes,this._cancelButton,this._confirmButton,this._rejectButton]}ready(){super.ready(),this._headerController=new N(this,"header","h3",{initializer:e=>{this._headerNode=e}}),this.addController(this._headerController),this._messageController=new N(this,"","div",{multiple:!0,observe:!1,initializer:e=>{const r=document.createElement("div");r.style.display="contents";const i=`confirm-dialog-message-${ke()}`;r.id=i,this.appendChild(r),r.appendChild(e),this._messageNodes=[...this._messageNodes,r]}}),this.addController(this._messageController),this._cancelController=new N(this,"cancel-button","vaadin-button",{initializer:e=>{this.__setupSlottedButton("cancel",e)}}),this.addController(this._cancelController),this._rejectController=new N(this,"reject-button","vaadin-button",{initializer:e=>{this.__setupSlottedButton("reject",e)}}),this.addController(this._rejectController),this._confirmController=new N(this,"confirm-button","vaadin-button",{initializer:e=>{this.__setupSlottedButton("confirm",e)}}),this.addController(this._confirmController)}_initOverlay(e){e.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),e.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),e.addEventListener("vaadin-overlay-closed",()=>this.__onDialogClosed()),e.setAttribute("role","alertdialog")}__onDialogOpened(){const e=this._overlayElement;this.__slottedNodes.forEach(i=>{e.appendChild(i)});const r=e.querySelector('[slot="confirm-button"]');r&&r.focus()}__onDialogClosed(){this.__slottedNodes.forEach(e=>{this.appendChild(e)})}__accessibleDescriptionRefChanged(e,r,i){!e||!r||(i!==void 0?go(e,"aria-describedby",{newId:i,oldId:this.__oldAccessibleDescriptionRef,fromUser:!0}):r.forEach(n=>{go(e,"aria-describedby",{newId:n.id})}),this.__oldAccessibleDescriptionRef=i)}__setupSlottedButton(e,r){const i=`_${e}Button`,n=`__${e}`;this[i]&&this[i]!==r&&this[i].remove(),r.addEventListener("click",this[n]),this[i]=r}__updateCancelButton(e,r,i,n){e&&(e===this._cancelController.defaultNode&&(e.textContent=r,e.setAttribute("theme",i)),e.toggleAttribute("hidden",!n))}__updateConfirmButton(e,r,i){e&&e===this._confirmController.defaultNode&&(e.textContent=r,e.setAttribute("theme",i))}__updateHeaderNode(e,r){e&&e===this._headerController.defaultNode&&(e.textContent=r)}__updateMessageNodes(e,r){if(e&&e.length>0){const i=e.find(n=>this._messageController.defaultNode&&n===this._messageController.defaultNode.parentElement);i&&(i.firstChild.textContent=r)}}__updateRejectButton(e,r,i,n){e&&(e===this._rejectController.defaultNode&&(e.textContent=r,e.setAttribute("theme",i)),e.toggleAttribute("hidden",!n))}_escPressed(e){e.defaultPrevented||this.__cancel()}__confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}__cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}__reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(e){return e||"confirmation"}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hu extends Vu(P(vt(V(w)))){static get template(){return x`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        overlay-class="[[overlayClass]]"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
        content-height="[[_contentHeight]]"
        content-width="[[_contentWidth]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}ready(){super.ready(),this._overlayElement=this.$.dialog.$.overlay,this._initOverlay(this._overlayElement)}}b(Hu);const gs=_`
  /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
  :host(:hover) {
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  :host([role='menuitem'][menu-item-checked]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([aria-haspopup='true'])::after {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-xs);
    content: var(--lumo-icons-angle-right);
    color: var(--lumo-tertiary-text-color);
  }

  :host(:not([dir='rtl'])[aria-haspopup='true'])::after {
    margin-right: calc(var(--lumo-space-m) * -1);
    padding-left: var(--lumo-space-m);
  }

  :host([expanded]) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl'][aria-haspopup='true'])::after {
    content: var(--lumo-icons-angle-left);
    margin-left: calc(var(--lumo-space-m) * -1);
    padding-right: var(--lumo-space-m);
  }
`;m("vaadin-context-menu-item",[De,gs],{moduleId:"lumo-context-menu-item"});const bs=_`
  :host {
    --_lumo-list-box-item-selected-icon-display: block;
  }

  /* Normal item */
  [part='items'] ::slotted([role='menuitem']) {
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    cursor: default;
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    padding-left: calc(var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
  }

  /* Hovered item */
  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  [part='items'] ::slotted([role='menuitem']:hover:not([disabled])),
  [part='items'] ::slotted([role='menuitem'][expanded]:not([disabled])) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='items'] ::slotted([role='menuitem']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-border-radius-m) / 4);
  }

  /* Focused item */
  @media (pointer: coarse) {
    [part='items'] ::slotted([role='menuitem']:hover:not([expanded]):not([disabled])) {
      background-color: transparent;
    }
  }
`;m("vaadin-context-menu-list-box",[xt,bs],{moduleId:"lumo-context-menu-list-box"});const ys=_`
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;m("vaadin-context-menu-overlay",[At,ys],{moduleId:"lumo-context-menu-overlay"});(function(){function o(s){return window.Vaadin.Flow.tryCatchWrapper(s,"Vaadin Context Menu")}function t(s,l){try{return window.Vaadin.Flow.clients[s].getByNodeId(l)}catch(d){console.error("Could not get node %s from app %s",l,s),console.error(d)}}function e(s,l){s.$connector||(s.$connector={generateItems:o(d=>{const f=r(l,d);s.items=f})})}function r(s,l){const d=t(s,l);if(d)return Array.from(d.children).map(f=>{const p={component:f,checked:f._checked,keepOpen:f._keepOpen,className:f.className,theme:f.__theme};return f._hasVaadinItemMixin&&f._containerNodeId&&(p.children=r(s,f._containerNodeId)),f._item=p,p})}function i(s,l){s._item&&(s._item.checked=l,s._item.keepOpen&&s.toggleAttribute("menu-item-checked",l))}function n(s,l){s._item&&(s._item.keepOpen=l)}function a(s,l){s._item&&(s._item.theme=l)}window.Vaadin.Flow.contextMenuConnector={initLazy(...s){return o(e)(...s)},generateItemsTree(...s){return o(r)(...s)},setChecked(...s){return o(i)(...s)},setKeepOpen(...s){return o(n)(...s)},setTheme(...s){return o(a)(...s)}}})();(function(){function o(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu Target")}function t(e){e.$contextMenuTargetConnector||(e.$contextMenuTargetConnector={openOnHandler:o(function(r){r.preventDefault(),r.stopPropagation(),this.$contextMenuTargetConnector.openEvent=r;let i={};e.getContextMenuBeforeOpenDetail&&(i=e.getContextMenuBeforeOpenDetail(r)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:i}))}),updateOpenOn:o(function(r){this.removeListener(),this.openOnEventType=r,customElements.whenDefined("vaadin-context-menu").then(o(()=>{cn[r]?oe(e,r,this.openOnHandler):e.addEventListener(r,this.openOnHandler)}))}),removeListener:o(function(){this.openOnEventType&&(cn[this.openOnEventType]?Dl(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:o(function(r){r.open(this.openEvent)}),removeConnector:o(function(){this.removeListener(),e.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...e){return o(t)(...e)}}})();/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ws=_`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;m("vaadin-custom-field",[Ze,Ct,ws],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uu=o=>o.split("	"),Yu=o=>o.join("	"),Wu=o=>class extends yt(ne(wt(o))){static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},formatValue:{type:Function},parseValue:{type:Function}}}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__childrenObserver=new MutationObserver(()=>{this.__setInputsFromSlot()}),this.__setInputsFromSlot(),this.$.slot.addEventListener("slotchange",()=>{this.__setInputsFromSlot(),hn(this.$.slot).filter(e=>!this.__isInput(e)).forEach(e=>{this.__childrenObserver.observe(e,{childList:!0})})}),this._tooltipController=new Q(this),this.addController(this._tooltipController),this._tooltipController.setShouldShow(e=>!(e.inputs||[]).some(i=>i.opened))}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){const{relatedTarget:r}=e;return!this.inputs.some(i=>r===(i.focusElement||i))}checkValidity(){return!(this.inputs.filter(r=>!(r.validate||r.checkValidity).call(r)).length||this.required&&!this.value.trim())}_onKeyDown(e){e.key==="Tab"&&(this.inputs.indexOf(e.target)<this.inputs.length-1&&!e.shiftKey||this.inputs.indexOf(e.target)>0&&e.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue())}_onInputChange(e){e.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0;const e=this.formatValue||Yu;this.value=e.apply(this,[this.inputs.map(r=>r.value)]),this.__settingValue=!1}__isInput(e){return!(e.getAttribute("slot")==="input"||e.getAttribute("slot")==="textarea")&&(e.validate||e.checkValidity)}__getInputsFromSlot(){return hn(this.$.slot).filter(e=>this.__isInput(e))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(e){this.toggleAttribute("has-value",e!==null&&e.trim()!=="")}__valueChanged(e,r){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(e);const n=(this.parseValue||Uu).apply(this,[e]);if(!n||n.length===0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((a,s)=>{a.value=n[s]}),r!==void 0&&this.validate()}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qu=_`
  :host {
    display: inline-flex;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  .vaadin-custom-field-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .inputs-wrapper {
    flex: none;
  }
`;/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-custom-field",qu,{moduleId:"vaadin-custom-field-styles"});class ju extends Wu(A(P(w))){static get is(){return"vaadin-custom-field"}static get template(){return x`
      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" part="input-fields" on-change="_onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}}b(ju);const Gu=_`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;m("vaadin-date-picker-overlay",[At,Gu],{moduleId:"lumo-date-picker-overlay"});m("vaadin-date-picker-year",_`
    :host([current]) [part='year-number'] {
      color: var(--lumo-primary-text-color);
    }

    :host(:not([current])) [part='year-number'],
    [part='year-separator'] {
      opacity: var(--_lumo-date-picker-year-opacity, 0.7);
      transition: 0.2s opacity;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '\\2022';
    }
  `,{moduleId:"lumo-date-picker-year"});m("vaadin-date-picker-overlay-content",_`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    ::slotted([slot='months']) {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    ::slotted([slot='years']) {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    ::slotted([slot='years']:hover) {
      --_lumo-date-picker-year-opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO fix this in vaadin-date-picker that it adapts to the width of the year scroller */
    :host([desktop]) ::slotted([slot='months']) {
      right: auto;
    }

    /* Year scroller position indicator */
    ::slotted([slot='years'])::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    [part='toolbar'] ::slotted(vaadin-button) {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='toolbar'],
      ::slotted([slot='months']) {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      ::slotted([slot='years']) {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
        background-color: var(--lumo-shade-5pct);
      }

      :host([years-visible]) ::slotted([slot='months']) {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});m("vaadin-month-calendar",_`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part~='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part~='date'] {
      transition: color 0.1s;
    }

    [part~='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part~='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part~='date'][part~='today'] {
      color: var(--_selection-color-text);
    }

    /* Focused date */

    [part~='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part~='date'][part~='focused']::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color);
    }

    :host(:not([focused])) [part~='date'][part~='focused']::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) transparent;
      }
    }

    [part~='date']:not(:empty):not([part~='disabled']):not([part~='selected']):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part~='date'][part~='selected'] {
      color: var(--lumo-primary-contrast-color);
    }

    [part~='date'][part~='selected']::before {
      background-color: var(--_selection-color);
    }

    [part~='date'][part~='disabled'] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part~='date']:hover:not([part~='selected'])::before,
      [part~='focused']:not([part~='selected'])::before {
        display: none;
      }

      [part~='date']:not(:empty):not([part~='disabled']):active::before {
        display: block;
      }

      [part~='date'][part~='selected']::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const xs=document.createElement("template");xs.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 var(--_focus-ring-width) transparent;
      }
    }
  </style>
`;document.head.appendChild(xs.content);const Qu=_`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;m("vaadin-date-picker",[he,Qu],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ku=_`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-date-picker-overlay",[de,Ku],{moduleId:"vaadin-date-picker-overlay-styles"});class Xu extends Ge(le(F(A(w)))){static get is(){return"vaadin-date-picker-overlay"}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}b(Xu);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Zu(o){let t=o.getDay();t===0&&(t=7);const e=4-t,r=new Date(o.getTime()+e*24*3600*1e3),i=new Date(0,0);i.setFullYear(r.getFullYear());const n=r.getTime()-i.getTime(),a=Math.round(n/(24*3600*1e3));return Math.floor(a/7+1)}function ie(o,t){return o instanceof Date&&t instanceof Date&&o.getFullYear()===t.getFullYear()&&o.getMonth()===t.getMonth()&&o.getDate()===t.getDate()}function ft(o,t,e){return(!t||o>=t)&&(!e||o<=e)}function As(o,t){return t.filter(e=>e!==void 0).reduce((e,r)=>{if(!r)return e;if(!e)return r;const i=Math.abs(o.getTime()-r.getTime()),n=Math.abs(e.getTime()-o.getTime());return i<n?r:e})}function en(o){return{day:o.getDate(),month:o.getMonth(),year:o.getFullYear()}}function Cs(o){const t=new Date,e=new Date(t);return e.setDate(1),e.setMonth(parseInt(o)+t.getMonth()),e}function Ju(o,t,e=0,r=1){if(t>99)throw new Error("The provided year cannot have more than 2 digits.");if(t<0)throw new Error("The provided year cannot be negative.");let i=t+Math.floor(o.getFullYear()/100)*100;return o<new Date(i-50,e,r)?i-=100:o>new Date(i+50,e,r)&&(i+=100),i}function Te(o){const t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(o);if(!t)return;const e=new Date(0,0);return e.setFullYear(parseInt(t[1],10)),e.setMonth(parseInt(t[2],10)-1),e.setDate(parseInt(t[3],10)),e}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ks=document.createElement("template");ks.innerHTML=`
  <style>
    :host {
      display: block;
      overflow: hidden;
      height: 500px;
    }

    #scroller {
      position: relative;
      height: 100%;
      overflow: auto;
      outline: none;
      margin-right: -40px;
      -webkit-overflow-scrolling: touch;
      overflow-x: hidden;
    }

    #scroller.notouchscroll {
      -webkit-overflow-scrolling: auto;
    }

    #scroller::-webkit-scrollbar {
      display: none;
    }

    .buffer {
      position: absolute;
      width: var(--vaadin-infinite-scroller-buffer-width, 100%);
      box-sizing: border-box;
      padding-right: 40px;
      top: var(--vaadin-infinite-scroller-buffer-offset, 0);
      animation: fadein 0.2s;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  </style>

  <div id="scroller">
    <div class="buffer"></div>
    <div class="buffer"></div>
    <div id="fullHeight"></div>
  </div>
`;class Is extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(ks.content.cloneNode(!0)),this.bufferSize=20,this._initialScroll=5e5,this._initialIndex=0,this._activated=!1}get active(){return this._activated}set active(t){t&&!this._activated&&(this._createPool(),this._activated=!0)}get bufferOffset(){return this._buffers[0].offsetTop}get itemHeight(){if(!this._itemHeightVal){const t=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,t);const r=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(r)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(t){this._preventScrollEvent=!0,t>this._firstIndex&&t<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(t-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~t,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=t%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}connectedCallback(){this._ready||(this._ready=!0,this.$={},this.shadowRoot.querySelectorAll("[id]").forEach(t=>{this.$[t.id]=t}),this.$.scroller.addEventListener("scroll",()=>this._scroll()),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`,zl&&(this.$.scroller.tabIndex=-1))}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_createElement(){}_updateElement(t,e){}_finishInit(){this._initDone||(this._buffers.forEach(t=>{[...t.children].forEach(e=>{this._ensureStampedInstance(e._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0,this.dispatchEvent(new CustomEvent("init-done")))}_translateBuffer(t){const e=t?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const t=this.$.scroller.scrollTop;(t<this._bufferHeight||t>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,r=t>this._buffers[1].translateY+e,i=t<this._buffers[0].translateY+e;(r||i)&&(this._translateBuffer(i),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=ce.debounce(this._debouncerScrollFinish,Se.after(200),()=>{const n=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],n)&&!this._isVisible(this._buffers[1],n)&&(this.position=this.position)})}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(t=>{t.style.transform=`translate3d(0, ${t.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=ce.debounce(this._debouncerUpdateClones,Se.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const t=this.getBoundingClientRect();this._buffers.forEach(e=>{for(let r=0;r<this.bufferSize;r++){const i=document.createElement("div");i.style.height=`${this.itemHeight}px`,i.instance={};const n=`vaadin-infinite-scroller-item-content-${ke()}`,a=document.createElement("slot");a.setAttribute("name",n),a._itemWrapper=i,e.appendChild(a),i.setAttribute("slot",n),this.appendChild(i),this._isVisible(i,t)&&this._ensureStampedInstance(i)}}),requestAnimationFrame(()=>{this._finishInit()})}_ensureStampedInstance(t){if(t.firstElementChild)return;const e=t.instance;t.instance=this._createElement(),t.appendChild(t.instance),Object.keys(e).forEach(r=>{t.instance[r]=e[r]})}_updateClones(t){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=t?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((r,i)=>{if(!r.updated){const n=this._firstIndex+this.bufferSize*i;[...r.children].forEach((a,s)=>{const l=a._itemWrapper;(!t||this._isVisible(l,e))&&this._updateElement(l.instance,n+s)}),r.updated=!0}})}_isVisible(t,e){const r=t.getBoundingClientRect();return r.bottom>e.top&&r.top<e.bottom}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Os=document.createElement("template");Os.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
    }
  </style>
`;class ec extends Is{static get is(){return"vaadin-date-picker-month-scroller"}constructor(){super(),this.bufferSize=3,this.shadowRoot.appendChild(Os.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(t,e){t.month=Cs(e)}}b(ec);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Es=document.createElement("template");Es.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 80px;
      width: 50px;
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      /* Center the year scroller position. */
      --vaadin-infinite-scroller-buffer-offset: 50%;
    }

    :host::before {
      content: '';
      display: block;
      background: transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent;
      border-left-color: #000;
    }
  </style>
`;class tc extends Is{static get is(){return"vaadin-date-picker-year-scroller"}constructor(){super(),this.bufferSize=12,this.shadowRoot.appendChild(Es.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-date-picker-year")}_updateElement(t,e){t.year=this._yearAfterXYears(e)}_yearAfterXYears(t){const e=new Date,r=new Date(e);return r.setFullYear(parseInt(t)+e.getFullYear()),r.getFullYear()}}b(tc);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rc=o=>class extends o{static get properties(){return{year:{type:String,sync:!0},selectedDate:{type:Object,sync:!0}}}static get observers(){return["__updateSelected(year, selectedDate)"]}__updateSelected(e,r){this.toggleAttribute("selected",r&&r.getFullYear()===e),this.toggleAttribute("current",e===new Date().getFullYear())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oc extends A(rc(w)){static get is(){return"vaadin-date-picker-year"}static get template(){return x`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>
      <div part="year-number">[[year]]</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}}b(oc);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ic=Kd(w);class xn extends ic{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!vo,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),ss()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=q(q(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let i=new MutationObserver(()=>{if(this.querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return i.observe(this,{childList:!0}),!1}let r={};r[this.as]=!0,r[this.indexAs]=!0,r[this.itemsIndexAs]=!0,this.__ctor=vr(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:r,forwardHostProp:function(i,n){let a=this.__instances;for(let s=0,l;s<a.length&&(l=a[s]);s++)l.forwardHostProp(i,n)},notifyInstanceProp:function(i,n,a){if(Ml(this.as,n)){let s=i[this.itemsIndexAs];n==this.as&&(this.items[s]=a);let l=$l(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,n);this.notifyPath(l,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let e=t,r=this.__getMethodHost();return function(){return r[e].apply(r,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let e=this.__observePaths;for(let r=0;r<e.length;r++)t.indexOf(e[r])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=ae.debounce(this.__renderDebouncer,e>0?ht.after(e):za,t.bind(this)),as(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Xi()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),r=this.__calculateLimit(e.length);this.__updateInstances(t,r,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!vo||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=r;return this.__filterFn&&(e=e.filter((r,i,n)=>this.__filterFn(t[r],i,n))),this.__sortFn&&e.sort((r,i)=>this.__sortFn(t[r],t[i])),e}__calculateLimit(t){let e=t;const r=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),i=Math.max(e-r,0),this.__chunkCount=i||1):(i=Math.min(Math.max(t-r,0),this.__chunkCount),e=Math.min(r+i,t)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,r){const i=this.__itemsIdxToInstIdx={};let n;for(n=0;n<e;n++){let a=this.__instances[n],s=r[n],l=t[s];i[s]=n,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,n),a._setPendingProperty(this.itemsIndexAs,s),a._flushProperties()):this.__insertInstance(l,n,s)}for(let a=this.__instances.length-1;a>=n;a--)this.__detachAndRemoveInstance(a)}__detachInstance(t){let e=this.__instances[t];const r=q(e.root);for(let i=0;i<e.children.length;i++){let n=e.children[i];r.appendChild(n)}return e}__attachInstance(t,e){let r=this.__instances[t];e.insertBefore(r.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,r){let i={};return i[this.as]=t,i[this.indexAs]=e,i[this.itemsIndexAs]=r,new this.__ctor(i)}__insertInstance(t,e,r){const i=this.__stampInstance(t,e,r);let n=this.__instances[e+1],a=n?n.children[0]:this;return q(q(this).parentNode).insertBefore(i.root,a),this.__instances[e]=i,i}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let r=t.slice(6),i=r.indexOf("."),n=i<0?r:r.substring(0,i);if(n==parseInt(n,10)){let a=i<0?"":r.substring(i+1);this.__handleObservedPaths(a);let s=this.__itemsIdxToInstIdx[n],l=this.__instances[s];if(l){let d=this.as+(a?"."+a:"");l._setPendingPropertyOrPath(d,e,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return lu(this.template,t)}}customElements.define(xn.is,xn);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nc=o=>class extends ne(o){static get properties(){return{month:{type:Object,value:new Date,sync:!0},selectedDate:{type:Object,notify:!0,sync:!0},focusedDate:{type:Object},showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:{type:Boolean},minDate:{type:Date,value:null,sync:!0},maxDate:{type:Date,value:null,sync:!0},disabled:{type:Boolean,reflectToAttribute:!0},_days:{type:Array},_weeks:{type:Array},_notTapping:{type:Boolean}}}static get observers(){return["__focusedDateChanged(focusedDate, _days)"]}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part~=date]")].find(e=>ie(e.date,this.focusedDate))}ready(){super.ready(),oe(this.$.monthGrid,"tap",this._handleTap.bind(this))}_isDisabled(e,r,i){const n=new Date(0,0);n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()),n.setDate(1);const a=new Date(0,0);return a.setFullYear(e.getFullYear()),a.setMonth(e.getMonth()+1),a.setDate(0),r&&i&&r.getMonth()===i.getMonth()&&r.getMonth()===e.getMonth()&&i.getDate()-r.getDate()>=0?!1:!ft(n,r,i)&&!ft(a,r,i)}_getTitle(e,r){if(!(e===void 0||r===void 0))return r.formatTitle(r.monthNames[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(e,r){e.setDate(e.getDate()+r)}_applyFirstDayOfWeek(e,r){if(!(e===void 0||r===void 0))return e.slice(r).concat(e.slice(0,r))}_getWeekDayNames(e,r){if(e===void 0||r===void 0)return[];const{weekdays:i,weekdaysShort:n,firstDayOfWeek:a}=e,s=this._applyFirstDayOfWeek(n,a);return this._applyFirstDayOfWeek(i,a).map((d,f)=>({weekDay:d,weekDayShort:s[f]}))}__focusedDateChanged(e,r){Array.isArray(r)&&r.some(i=>ie(i,e))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(e){return e?e.getDate():""}_showWeekSeparator(e,r){return e&&r&&r.firstDayOfWeek===1}_isToday(e){return ie(new Date,e)}_getDays(e,r){if(e===void 0||r===void 0)return[];const i=new Date(0,0);for(i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);i.getDay()!==r.firstDayOfWeek;)this._dateAdd(i,-1);const n=[],a=i.getMonth(),s=e.getMonth();for(;i.getMonth()===s||i.getMonth()===a;)n.push(i.getMonth()===s?new Date(i.getTime()):null),this._dateAdd(i,1);return n}_getWeeks(e){return e.reduce((r,i,n)=>(n%7===0&&r.push([]),r[r.length-1].push(i),r),[])}_handleTap(e){!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")&&(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:e.target.date},bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}__getWeekNumber(e){const r=e.reduce((i,n)=>!i&&n?n:i);return Zu(r)}__getDayAriaLabel(e){if(!e)return"";let r=`${this._getDate(e)} ${this.i18n.monthNames[e.getMonth()]} ${e.getFullYear()}, ${this.i18n.weekdays[e.getDay()]}`;return this._isToday(e)&&(r+=`, ${this.i18n.today}`),r}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ac=_`
  :host {
    display: block;
  }

  #monthGrid {
    width: 100%;
    border-collapse: collapse;
  }

  #days-container tr,
  #weekdays-container tr {
    display: flex;
  }

  [part~='date'] {
    outline: none;
  }

  [part~='disabled'] {
    pointer-events: none;
  }

  [part='week-number'][hidden],
  [part='weekday'][hidden] {
    display: none;
  }

  [part='weekday'],
  [part~='date'] {
    width: calc(100% / 7);
    padding: 0;
    font-weight: normal;
  }

  [part='weekday']:empty,
  [part='week-number'] {
    width: 12.5%;
    flex-shrink: 0;
    padding: 0;
  }

  :host([week-numbers]) [part='weekday']:not(:empty),
  :host([week-numbers]) [part~='date'] {
    width: 12.5%;
  }

  @media (forced-colors: active) {
    [part~='date'][part~='focused'] {
      outline: 1px solid;
    }

    [part~='date'][part~='selected'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-month-calendar",ac,{moduleId:"vaadin-month-calendar-styles"});class sc extends nc(A(w)){static get template(){return x`
      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th part="weekday" aria-hidden="true" hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n)]]"></th>
            <template is="dom-repeat" items="[[_getWeekDayNames(i18n, showWeekNumbers)]]">
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td part="week-number" aria-hidden="true" hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n)]]">
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part$="[[__getDatePart(item, focusedDate, selectedDate, minDate, maxDate)]]"
                  date="[[item]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{_days:{type:Array,computed:"_getDays(month, i18n, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n)"]}_showWeekNumbersChanged(t,e){t&&e&&e.firstDayOfWeek===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}__getDatePart(t,e,r,i,n){const a=["date"];return this.__isDayDisabled(t,i,n)&&a.push("disabled"),this.__isDayFocused(t,e)&&a.push("focused"),this.__isDaySelected(t,r)&&a.push("selected"),this._isToday(t)&&a.push("today"),a.join(" ")}__isDayFocused(t,e){return ie(t,e)}__isDaySelected(t,e){return ie(t,e)}__getDayAriaSelected(t,e){if(this.__isDaySelected(t,e))return"true"}__isDayDisabled(t,e,r){return!ft(t,e,r)}__getDayAriaDisabled(t,e,r){if(!(t===void 0||e===void 0||r===void 0)&&this.__isDayDisabled(t,e,r))return"true"}__getDayTabindex(t,e){return this.__isDayFocused(t,e)?"0":"-1"}}b(sc);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lc=o=>class extends o{static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Object,value:null,sync:!0},focusedDate:{type:Object,notify:!0,observer:"_focusedDateChanged",sync:!0},_focusedMonthDate:Number,initialPosition:{type:Object,observer:"_initialPositionChanged"},_originDate:{type:Object,value:new Date},_visibleMonthIndex:Number,_desktopMode:{type:Boolean,observer:"_desktopModeChanged"},_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean,value:!1},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Object,sync:!0},maxDate:{type:Object,sync:!0},label:String,_cancelButton:{type:Object},_todayButton:{type:Object},calendars:{type:Array,value:()=>[]},years:{type:Array,value:()=>[]}}}static get observers(){return["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme)","__updateCancelButton(_cancelButton, i18n)","__updateTodayButton(_todayButton, i18n, minDate, maxDate)","__updateYears(years, selectedDate, _theme)"]}get __useSubMonthScrolling(){return this._monthScroller.clientHeight<this._monthScroller.itemHeight+this._monthScroller.bufferOffset}get focusableDateElement(){return this.calendars.map(e=>e.focusableDateElement).find(Boolean)}_addListeners(){Bl(this.$.scrollers,"pan-y"),oe(this.$.scrollers,"track",this._track.bind(this)),oe(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),oe(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),oe(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this))}_initControllers(){this.addController(new Li(this._desktopMediaQuery,e=>{this._desktopMode=e})),this.addController(new N(this,"today-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",r=>this.__onTodayButtonKeyDown(r)),oe(e,"tap",this._onTodayTap.bind(this)),this._todayButton=e}})),this.addController(new N(this,"cancel-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",r=>this.__onCancelButtonKeyDown(r)),oe(e,"tap",this._cancel.bind(this)),this._cancelButton=e}})),this.__initMonthScroller(),this.__initYearScroller()}reset(){this._closeYearScroller(),this._toggleAnimateClass(!0)}focusCancel(){this._cancelButton.focus()}scrollToDate(e,r){const i=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(e):0;this._scrollToPosition(this._differenceInMonths(e,this._originDate)+i,r),this._monthScroller.forceUpdate()}__initMonthScroller(){this.addController(new N(this,"months","vaadin-date-picker-month-scroller",{observe:!1,initializer:e=>{e.addEventListener("custom-scroll",()=>{this._onMonthScroll()}),e.addEventListener("touchstart",()=>{this._onMonthScrollTouchStart()}),e.addEventListener("keydown",r=>{this.__onMonthCalendarKeyDown(r)}),e.addEventListener("init-done",()=>{const r=[...this.querySelectorAll("vaadin-month-calendar")];r.forEach(i=>{i.addEventListener("selected-date-changed",n=>{this.selectedDate=n.detail.value})}),this.calendars=r}),this._monthScroller=e}}))}__initYearScroller(){this.addController(new N(this,"years","vaadin-date-picker-year-scroller",{observe:!1,initializer:e=>{e.setAttribute("aria-hidden","true"),oe(e,"tap",r=>{this._onYearTap(r)}),e.addEventListener("custom-scroll",()=>{this._onYearScroll()}),e.addEventListener("touchstart",()=>{this._onYearScrollTouchStart()}),e.addEventListener("init-done",()=>{this.years=[...this.querySelectorAll("vaadin-date-picker-year")]}),this._yearScroller=e}}))}__updateCancelButton(e,r){e&&(e.textContent=r&&r.cancel)}__updateTodayButton(e,r,i,n){e&&(e.textContent=r&&r.today,e.disabled=!this._isTodayAllowed(i,n))}__updateCalendars(e,r,i,n,a,s,l,d,f){e&&e.length&&e.forEach(p=>{p.i18n=r,p.minDate=i,p.maxDate=n,p.focusedDate=s,p.selectedDate=a,p.showWeekNumbers=l,p.ignoreTaps=d,f?p.setAttribute("theme",f):p.removeAttribute("theme")})}__updateYears(e,r,i){e&&e.length&&e.forEach(n=>{n.selectedDate=r,i?n.setAttribute("theme",i):n.removeAttribute("theme")})}_selectDate(e){this.selectedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0}))}_desktopModeChanged(e){this.toggleAttribute("desktop",e)}_focusedDateChanged(e){this.revealDate(e)}revealDate(e,r=!0){if(!e)return;const i=this._differenceInMonths(e,this._originDate);if(this.__useSubMonthScrolling){const d=this._calculateWeekScrollOffset(e);this._scrollToPosition(i+d,r);return}const n=this._monthScroller.position>i,s=Math.max(this._monthScroller.itemHeight,this._monthScroller.clientHeight-this._monthScroller.bufferOffset*2)/this._monthScroller.itemHeight,l=this._monthScroller.position+s-1<i;n?this._scrollToPosition(i,r):l&&this._scrollToPosition(i-s+1,r)}_calculateWeekScrollOffset(e){const r=new Date(0,0);r.setFullYear(e.getFullYear()),r.setMonth(e.getMonth()),r.setDate(1);let i=0;for(;r.getDate()<e.getDate();)r.setDate(r.getDate()+1),r.getDay()===this.i18n.firstDayOfWeek&&(i+=1);return i/6}_initialPositionChanged(e){this._monthScroller&&this._yearScroller&&(this._monthScroller.active=!0,this._yearScroller.active=!0),this.scrollToDate(e)}_repositionYearScroller(){const e=this._monthScroller.position;this._visibleMonthIndex=Math.floor(e),this._yearScroller.position=(e+this._originDate.getMonth())/12}_repositionMonthScroller(){this._monthScroller.position=this._yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this._monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=ce.debounce(this._debouncer,Se.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(e,r,i){return e&&r&&typeof r.formatDate=="function"?r.formatDate(en(e)):i}_onTodayTap(){const e=new Date;Math.abs(this._monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this._selectDate(e),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){const i=(e.detail.y-(this._yearScroller.getBoundingClientRect().top+this._yearScroller.clientHeight/2))/this._yearScroller.itemHeight;this._scrollToPosition(this._monthScroller.position+i*12,!0)}}_scrollToPosition(e,r){if(this._targetPosition!==void 0){this._targetPosition=e;return}if(!r){this._monthScroller.position=e,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=e;let i;this._revealPromise=new Promise(d=>{i=d});const n=(d,f,p,y)=>(d/=y/2,d<1?p/2*d*d+f:(d-=1,-p/2*(d*(d-2)-1)+f));let a=0;const s=this._monthScroller.position,l=d=>{a||(a=d);const f=d-a;if(f<this.scrollDuration){const p=n(f,s,this._targetPosition-s,this.scrollDuration);this._monthScroller.position=p,window.requestAnimationFrame(l)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:s}})),this._monthScroller.position=this._targetPosition,this._targetPosition=void 0,i(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(l)}_limit(e,r){return Math.min(r.max,Math.max(r.min,e))}_handleTrack(e){if(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)return;Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const r=this._translateX+e.detail.ddx;this._translateX=this._limit(r,{min:0,max:this._yearScrollerWidth})}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this._monthScroller.style.transform=`translateX(${e-this._yearScrollerWidth}px)`,this._yearScroller.style.transform=`translateX(${e}px)`)}_yearAfterXMonths(e){return Cs(e).getFullYear()}_differenceInMonths(e,r){return(e.getFullYear()-r.getFullYear())*12-r.getMonth()+e.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}__toggleDate(e){ie(e,this.selectedDate)?(this._clear(),this.focusedDate=e):this._selectDate(e)}__onMonthCalendarKeyDown(e){let r=!1;switch(e.key){case"ArrowDown":this._moveFocusByDays(7),r=!0;break;case"ArrowUp":this._moveFocusByDays(-7),r=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),r=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),r=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),r=!0;break;case" ":this.__toggleDate(this.focusedDate),r=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),r=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),r=!0;break;case"PageDown":this._moveFocusByMonths(e.shiftKey?12:1),r=!0;break;case"PageUp":this._moveFocusByMonths(e.shiftKey?-12:-1),r=!0;break;case"Tab":this._onTabKeyDown(e,"calendar");break}r&&(e.preventDefault(),e.stopPropagation())}_onTabKeyDown(e,r){switch(e.stopPropagation(),r){case"calendar":e.shiftKey&&(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusCancel():this.__focusInput());break;case"today":e.shiftKey&&(e.preventDefault(),this.focusDateElement());break;case"cancel":e.shiftKey||(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"today")}__onCancelButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const r=this.focusableDateElement;r&&ie(r.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,r.focus())}}async focusDate(e,r){const i=e||this.selectedDate||this.initialPosition||new Date;this.focusedDate=i,r||(this._focusedMonthDate=i.getDate()),await this.focusDateElement(!1)}async focusDateElement(e=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(r=>{oo(this,()=>{Xi(),r()})}),e&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(e){this.focusDate(As(e,[this.minDate,this.maxDate]))}_focusAllowedDate(e,r,i){this._dateAllowed(e)?this.focusDate(e,i):this._dateAllowed(this.focusedDate)?r>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(this.focusedDate)}_getDateDiff(e,r){const i=new Date(0,0);return i.setFullYear(this.focusedDate.getFullYear()),i.setMonth(this.focusedDate.getMonth()+e),r&&i.setDate(this.focusedDate.getDate()+r),i}_moveFocusByDays(e){const r=this._getDateDiff(0,e);this._focusAllowedDate(r,e,!1)}_moveFocusByMonths(e){const r=this._getDateDiff(e),i=r.getMonth();this._focusedMonthDate||(this._focusedMonthDate=this.focusedDate.getDate()),r.setDate(this._focusedMonthDate),r.getMonth()!==i&&r.setDate(0),this._focusAllowedDate(r,e,!0)}_moveFocusInsideMonth(e,r){const i=new Date(0,0);i.setFullYear(e.getFullYear()),r==="minDate"?(i.setMonth(e.getMonth()),i.setDate(1)):(i.setMonth(e.getMonth()+1),i.setDate(0)),this._dateAllowed(i)?this.focusDate(i):this._dateAllowed(e)?this.focusDate(this[r]):this._focusClosestDate(e)}_dateAllowed(e,r=this.minDate,i=this.maxDate){return(!r||e>=r)&&(!i||e<=i)}_isTodayAllowed(e,r){const i=new Date,n=new Date(0,0);return n.setFullYear(i.getFullYear()),n.setMonth(i.getMonth()),n.setDate(i.getDate()),this._dateAllowed(n,e,r)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dc=_`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    outline: none;
  }

  [part='overlay-header'] {
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    align-items: center;
  }

  :host(:not([fullscreen])) [part='overlay-header'] {
    display: none;
  }

  [part='label'] {
    flex-grow: 1;
  }

  [hidden] {
    display: none !important;
  }

  [part='years-toggle-button'] {
    display: flex;
  }

  #scrollers {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  :host([desktop]) ::slotted([slot='months']) {
    right: 50px;
    transform: none !important;
  }

  :host([desktop]) ::slotted([slot='years']) {
    transform: none !important;
  }

  :host(.animate) ::slotted([slot='months']),
  :host(.animate) ::slotted([slot='years']) {
    transition: all 200ms;
  }

  [part='toolbar'] {
    display: flex;
    justify-content: space-between;
    z-index: 2;
    flex-shrink: 0;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-date-picker-overlay-content",dc,{moduleId:"vaadin-date-picker-overlay-content-styles"});class uc extends lc(V(A(F(w)))){static get template(){return x`
      <div part="overlay-header" on-touchend="_preventDefault" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers">
        <slot name="months"></slot>
        <slot name="years"></slot>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <slot name="cancel-button"></slot>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}ready(){super.ready(),this.setAttribute("role","dialog"),this._addListeners(),this._initControllers()}}b(uc);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cc=o=>class extends Ce(V(je(Ta(wt(o))))){static get properties(){return{_selectedDate:{type:Object,sync:!0},_focusedDate:{type:Object,sync:!0},value:{type:String,notify:!0,value:"",sync:!0},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged",sync:!0},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean,value:!1,sync:!0},_fullscreen:{type:Boolean,value:!1,sync:!0},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,sync:!0,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,today:"Today",cancel:"Cancel",referenceDate:"",formatDate(e){const r=String(e.year).replace(/\d+/u,i=>"0000".substr(i.length)+i);return[e.month+1,e.day,r].join("/")},parseDate(e){const r=e.split("/"),i=new Date;let n,a=i.getMonth(),s=i.getFullYear();if(r.length===3){if(a=parseInt(r[0])-1,n=parseInt(r[1]),s=parseInt(r[2]),r[2].length<3&&s>=0){const l=this.referenceDate?Te(this.referenceDate):new Date;s=Ju(l,s,a,n)}}else r.length===2?(a=parseInt(r[0])-1,n=parseInt(r[1])):r.length===1&&(n=parseInt(r[0]));if(n!==void 0)return{day:n,month:a,year:s}},formatTitle:(e,r)=>`${e} ${r}`})},min:{type:String,sync:!0},max:{type:String,sync:!0},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)",sync:!0},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)",sync:!0},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:Ri},_focusOverlayOnOpen:Boolean,_overlayContent:{type:Object,sync:!0},_hasInputValue:{type:Boolean}}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n)","_focusedDateChanged(_focusedDate, i18n)","__updateOverlayContent(_overlayContent, i18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers)","__updateOverlayContentTheme(_overlayContent, _theme)","__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"]}static get constraints(){return[...super.constraints,"min","max"]}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this),this._boundOverlayRenderer=this._overlayRenderer.bind(this)}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e,this._hasInputValue=!1}get clearElement(){return null}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}get __unparsableValue(){return!this._inputElementValue||this.__parseDate(this._inputElementValue)?"":this._inputElementValue}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){super._onBlur(e),this.opened||(this.__commitParsedOrFocusedDate(),document.hasFocus()&&this.validate())}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new Li(this._fullscreenMediaQuery,r=>{this._fullscreen=r})),this.addController(new ns(this));const e=this.$.overlay;this._overlayElement=e,e.renderer=this._boundOverlayRenderer,this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.$.overlay.close()}_overlayRenderer(e){if(e.firstChild)return;const r=document.createElement("vaadin-date-picker-overlay-content");e.appendChild(r),this._overlayContent=r,r.addEventListener("close",()=>{this._close()}),r.addEventListener("focus-input",this._focusAndSelect.bind(this)),r.addEventListener("date-tap",i=>{this.__commitDate(i.detail.date),this._close()}),r.addEventListener("date-selected",i=>{this.__commitDate(i.detail.date)}),r.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),r.addEventListener("focused-date-changed",i=>{this._focusedDate=i.detail.value})}__parseDate(e){if(!this.i18n.parseDate)return;let r=this.i18n.parseDate(e);if(r&&(r=Te(`${r.year}-${r.month+1}-${r.day}`)),r&&!isNaN(r.getTime()))return r}__formatDate(e){if(this.i18n.formatDate)return this.i18n.formatDate(en(e))}checkValidity(){const e=this._inputElementValue,r=!e||!!this._selectedDate&&e===this.__formatDate(this._selectedDate),i=!this._selectedDate||ft(this._selectedDate,this._minDate,this._maxDate);let n=!0;return this.inputElement&&(this.inputElement.checkValidity?n=this.inputElement.checkValidity():this.inputElement.validate&&(n=this.inputElement.validate())),r&&i&&n}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldRemoveFocus(e){return!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}__commitValueChange(){const e=this.__unparsableValue;this.__committedValue!==this.value?(this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.__committedUnparsableValue!==e&&(this.validate(),this.dispatchEvent(new CustomEvent("unparsable-change"))),this.__committedValue=this.value,this.__committedUnparsableValue=e}__commitDate(e){this.__keepCommittedValue=!0,this._selectedDate=e,this.__keepCommittedValue=!1,this.__commitValueChange()}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(e,r,i,n,a,s){return!e||r&&(!s||a)||i&&a||!n.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const r=(f,p="00")=>(p+f).substr((p+f).length-p.length);let i="",n="0000",a=e.getFullYear();a<0?(a=-a,i="-",n="000000"):e.getFullYear()>=1e4&&(i="+",n="000000");const s=i+r(a,n),l=r(e.getMonth()+1),d=r(e.getDate());return[s,l,d].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,r){e===void 0||r===void 0||(this.__keepInputValue||this._applyInputValue(e),this.value=this._formatISO(e),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1)}_focusedDateChanged(e,r){e===void 0||r===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}_valueChanged(e,r){const i=Te(e);if(e&&!i){this.value=r;return}e?ie(this._selectedDate,i)||(this._selectedDate=i,r!==void 0&&this.validate()):this._selectedDate=null,this.__keepCommittedValue||(this.__committedValue=this.value,this.__committedUnparsableValue=""),this._toggleHasValue(this._hasValue)}__updateOverlayContent(e,r,i,n,a,s,l,d){e&&(e.i18n=r,e.label=i,e.minDate=n,e.maxDate=a,e.focusedDate=s,e.selectedDate=l,e.showWeekNumbers=d)}__updateOverlayContentTheme(e,r){e&&(r?e.setAttribute("theme",r):e.removeAttribute("theme"))}__updateOverlayContentFullScreen(e,r){e&&e.toggleAttribute("fullscreen",r)}_onOverlayEscapePress(){this._focusedDate=this._selectedDate,this._close()}_onOverlayOpened(){const e=this._overlayContent;e.reset();const r=this._getInitialPosition();e.initialPosition=r;const i=e.focusedDate||r;e.scrollToDate(i),this._ignoreFocusedDateChange=!0,e.focusedDate=i,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(e.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus();const n=this._nativeInput;this._noInput&&n&&(n.blur(),this._overlayContent.focusDateElement());const a=this._noInput?e:[n,e];this.__showOthers=Rl(a)}_getInitialPosition(){const e=Te(this.initialPosition),r=this._selectedDate||this._overlayContent.initialPosition||e||new Date;return e||ft(r,this._minDate,this._maxDate)?r:As(r,[this._minDate,this._maxDate])}__commitParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputElementValue||"",r=this.__parseDate(e);r?this.__commitDate(r):(this.__keepInputValue=!0,this.__commitDate(null),this.__keepInputValue=!1)}else this._focusedDate&&this.__commitDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null),window.removeEventListener("scroll",this._boundOnScroll,!0),this.__commitParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),!this.value&&!this._keyboardActive&&this.validate()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputElementValue.length)}_applyInputValue(e){this._inputElementValue=e?this.__formatDate(e):""}_setSelectionRange(e,r){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,r)}_onChange(e){e.stopPropagation()}_onClick(e){this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this.__commitDate(null)}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&[9].indexOf(e.keyCode)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){this.opened?this.close():this.__commitParsedOrFocusedDate()}_onEscape(e){if(!this.opened){if(this.clearButtonVisible&&this.value){e.stopPropagation(),this._onClearButtonClick(e);return}this.inputElement.value===""?this.__commitDate(null):this._applyInputValue(this._selectedDate)}}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){if(!this.opened&&this._inputElementValue&&!this.autoOpenDisabled&&this.open(),this._inputElementValue){const e=this.__parseDate(this._inputElementValue);e&&(this._ignoreFocusedDateChange=!0,ie(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}__computeMinOrMaxDate(e){return Te(e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hc=_`
  :host([opened]) {
    pointer-events: auto;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-date-picker",[Ve,hc],{moduleId:"vaadin-date-picker-styles"});class tn extends cc(io(A(P(w)))){static get is(){return"vaadin-date-picker"}static get template(){return x`
      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[_theme]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
      ></vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Le(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Pe(this.inputElement,this._labelController)),this._tooltipController=new Q(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(e=>!e.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault()),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}_toggle(t){t.stopPropagation(),this.$.overlay.opened?this.close():this.open()}_openedChanged(t){super._openedChanged(t),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}b(tn);function K(o,t){if(t.length<o)throw new TypeError(o+" argument"+(o>1?"s":"")+" required, but only "+t.length+" present")}function Pt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pt=function(e){return typeof e}:Pt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pt(o)}function pc(o){return K(1,arguments),o instanceof Date||Pt(o)==="object"&&Object.prototype.toString.call(o)==="[object Date]"}function Dt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Dt=function(e){return typeof e}:Dt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dt(o)}function ee(o){K(1,arguments);var t=Object.prototype.toString.call(o);return o instanceof Date||Dt(o)==="object"&&t==="[object Date]"?new Date(o.getTime()):typeof o=="number"||t==="[object Number]"?new Date(o):((typeof o=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Co(o){if(K(1,arguments),!pc(o)&&typeof o!="number")return!1;var t=ee(o);return!isNaN(Number(t))}function re(o){if(o===null||o===!0||o===!1)return NaN;var t=Number(o);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function fc(o,t){K(2,arguments);var e=ee(o).getTime(),r=re(t);return new Date(e+r)}function Ts(o,t){K(2,arguments);var e=re(t);return fc(o,-e)}var mc=864e5;function _c(o){K(1,arguments);var t=ee(o),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),i=e-r;return Math.floor(i/mc)+1}function qe(o){K(1,arguments);var t=1,e=ee(o),r=e.getUTCDay(),i=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-i),e.setUTCHours(0,0,0,0),e}function Ss(o){K(1,arguments);var t=ee(o),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var i=qe(r),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=qe(n);return t.getTime()>=i.getTime()?e+1:t.getTime()>=a.getTime()?e:e-1}function vc(o){K(1,arguments);var t=Ss(o),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=qe(e);return r}var gc=6048e5;function Ps(o){K(1,arguments);var t=ee(o),e=qe(t).getTime()-vc(t).getTime();return Math.round(e/gc)+1}var bc={};function et(){return bc}function Re(o,t){var e,r,i,n,a,s,l,d;K(1,arguments);var f=et(),p=re((e=(r=(i=(n=t==null?void 0:t.weekStartsOn)!==null&&n!==void 0?n:t==null||(a=t.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&e!==void 0?e:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=ee(o),v=y.getUTCDay(),k=(v<p?7:0)+v-p;return y.setUTCDate(y.getUTCDate()-k),y.setUTCHours(0,0,0,0),y}function rn(o,t){var e,r,i,n,a,s,l,d;K(1,arguments);var f=ee(o),p=f.getUTCFullYear(),y=et(),v=re((e=(r=(i=(n=t==null?void 0:t.firstWeekContainsDate)!==null&&n!==void 0?n:t==null||(a=t.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&i!==void 0?i:y.firstWeekContainsDate)!==null&&r!==void 0?r:(l=y.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var k=new Date(0);k.setUTCFullYear(p+1,0,v),k.setUTCHours(0,0,0,0);var O=Re(k,t),I=new Date(0);I.setUTCFullYear(p,0,v),I.setUTCHours(0,0,0,0);var $=Re(I,t);return f.getTime()>=O.getTime()?p+1:f.getTime()>=$.getTime()?p:p-1}function yc(o,t){var e,r,i,n,a,s,l,d;K(1,arguments);var f=et(),p=re((e=(r=(i=(n=t==null?void 0:t.firstWeekContainsDate)!==null&&n!==void 0?n:t==null||(a=t.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1),y=rn(o,t),v=new Date(0);v.setUTCFullYear(y,0,p),v.setUTCHours(0,0,0,0);var k=Re(v,t);return k}var wc=6048e5;function Ds(o,t){K(1,arguments);var e=ee(o),r=Re(e,t).getTime()-yc(e,t).getTime();return Math.round(r/wc)+1}function R(o,t){for(var e=o<0?"-":"",r=Math.abs(o).toString();r.length<t;)r="0"+r;return e+r}var Ee={y:function(t,e){var r=t.getUTCFullYear(),i=r>0?r:1-r;return R(e==="yy"?i%100:i,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):R(r+1,2)},d:function(t,e){return R(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return R(t.getUTCHours()%12||12,e.length)},H:function(t,e){return R(t.getUTCHours(),e.length)},m:function(t,e){return R(t.getUTCMinutes(),e.length)},s:function(t,e){return R(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,i=t.getUTCMilliseconds(),n=Math.floor(i*Math.pow(10,r-3));return R(n,e.length)}},Ye={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},xc={G:function(t,e,r){var i=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var i=t.getUTCFullYear(),n=i>0?i:1-i;return r.ordinalNumber(n,{unit:"year"})}return Ee.y(t,e)},Y:function(t,e,r,i){var n=rn(t,i),a=n>0?n:1-n;if(e==="YY"){var s=a%100;return R(s,2)}return e==="Yo"?r.ordinalNumber(a,{unit:"year"}):R(a,e.length)},R:function(t,e){var r=Ss(t);return R(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return R(r,e.length)},Q:function(t,e,r){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return R(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return R(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){var i=t.getUTCMonth();switch(e){case"M":case"MM":return Ee.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){var i=t.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return R(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){var n=Ds(t,i);return e==="wo"?r.ordinalNumber(n,{unit:"week"}):R(n,e.length)},I:function(t,e,r){var i=Ps(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):R(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):Ee.d(t,e)},D:function(t,e,r){var i=_c(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):R(i,e.length)},E:function(t,e,r){var i=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){var n=t.getUTCDay(),a=(n-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return R(a,2);case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){var n=t.getUTCDay(),a=(n-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return R(a,e.length);case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(t,e,r){var i=t.getUTCDay(),n=i===0?7:i;switch(e){case"i":return String(n);case"ii":return R(n,e.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){var i=t.getUTCHours(),n=i/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,r){var i=t.getUTCHours(),n;switch(i===12?n=Ye.noon:i===0?n=Ye.midnight:n=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,r){var i=t.getUTCHours(),n;switch(i>=17?n=Ye.evening:i>=12?n=Ye.afternoon:i>=4?n=Ye.morning:n=Ye.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var i=t.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Ee.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Ee.H(t,e)},K:function(t,e,r){var i=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):R(i,e.length)},k:function(t,e,r){var i=t.getUTCHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):R(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Ee.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Ee.s(t,e)},S:function(t,e){return Ee.S(t,e)},X:function(t,e,r,i){var n=i._originalDate||t,a=n.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return Cn(a);case"XXXX":case"XX":return Me(a);case"XXXXX":case"XXX":default:return Me(a,":")}},x:function(t,e,r,i){var n=i._originalDate||t,a=n.getTimezoneOffset();switch(e){case"x":return Cn(a);case"xxxx":case"xx":return Me(a);case"xxxxx":case"xxx":default:return Me(a,":")}},O:function(t,e,r,i){var n=i._originalDate||t,a=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+An(a,":");case"OOOO":default:return"GMT"+Me(a,":")}},z:function(t,e,r,i){var n=i._originalDate||t,a=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+An(a,":");case"zzzz":default:return"GMT"+Me(a,":")}},t:function(t,e,r,i){var n=i._originalDate||t,a=Math.floor(n.getTime()/1e3);return R(a,e.length)},T:function(t,e,r,i){var n=i._originalDate||t,a=n.getTime();return R(a,e.length)}};function An(o,t){var e=o>0?"-":"+",r=Math.abs(o),i=Math.floor(r/60),n=r%60;if(n===0)return e+String(i);var a=t;return e+String(i)+a+R(n,2)}function Cn(o,t){if(o%60===0){var e=o>0?"-":"+";return e+R(Math.abs(o)/60,2)}return Me(o,t)}function Me(o,t){var e=t||"",r=o>0?"-":"+",i=Math.abs(o),n=R(Math.floor(i/60),2),a=R(i%60,2);return r+n+e+a}var kn=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},zs=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ac=function(t,e){var r=t.match(/(P+)(p+)?/)||[],i=r[1],n=r[2];if(!n)return kn(t,e);var a;switch(i){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;case"PPPP":default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",kn(i,e)).replace("{{time}}",zs(n,e))},ko={p:zs,P:Ac};function Ms(o){var t=new Date(Date.UTC(o.getFullYear(),o.getMonth(),o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds()));return t.setUTCFullYear(o.getFullYear()),o.getTime()-t.getTime()}var Cc=["D","DD"],kc=["YY","YYYY"];function $s(o){return Cc.indexOf(o)!==-1}function Bs(o){return kc.indexOf(o)!==-1}function yr(o,t,e){if(o==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(o==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(o==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(o==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Ic={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Oc=function(t,e,r){var i,n=Ic[t];return typeof n=="string"?i=n:e===1?i=n.one:i=n.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function uo(o){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):o.defaultWidth,r=o.formats[e]||o.formats[o.defaultWidth];return r}}var Ec={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Tc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Sc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Pc={date:uo({formats:Ec,defaultWidth:"full"}),time:uo({formats:Tc,defaultWidth:"full"}),dateTime:uo({formats:Sc,defaultWidth:"full"})},Dc={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},zc=function(t,e,r,i){return Dc[t]};function lt(o){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",i;if(r==="formatting"&&o.formattingValues){var n=o.defaultFormattingWidth||o.defaultWidth,a=e!=null&&e.width?String(e.width):n;i=o.formattingValues[a]||o.formattingValues[n]}else{var s=o.defaultWidth,l=e!=null&&e.width?String(e.width):o.defaultWidth;i=o.values[l]||o.values[s]}var d=o.argumentCallback?o.argumentCallback(t):t;return i[d]}}var Mc={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$c={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Bc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Rc={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Fc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Lc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Nc=function(t,e){var r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Vc={ordinalNumber:Nc,era:lt({values:Mc,defaultWidth:"wide"}),quarter:lt({values:$c,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:lt({values:Bc,defaultWidth:"wide"}),day:lt({values:Rc,defaultWidth:"wide"}),dayPeriod:lt({values:Fc,defaultWidth:"wide",formattingValues:Lc,defaultFormattingWidth:"wide"})};function dt(o){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,i=r&&o.matchPatterns[r]||o.matchPatterns[o.defaultMatchWidth],n=t.match(i);if(!n)return null;var a=n[0],s=r&&o.parsePatterns[r]||o.parsePatterns[o.defaultParseWidth],l=Array.isArray(s)?Uc(s,function(p){return p.test(a)}):Hc(s,function(p){return p.test(a)}),d;d=o.valueCallback?o.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var f=t.slice(a.length);return{value:d,rest:f}}}function Hc(o,t){for(var e in o)if(o.hasOwnProperty(e)&&t(o[e]))return e}function Uc(o,t){for(var e=0;e<o.length;e++)if(t(o[e]))return e}function Yc(o){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(o.matchPattern);if(!r)return null;var i=r[0],n=t.match(o.parsePattern);if(!n)return null;var a=o.valueCallback?o.valueCallback(n[0]):n[0];a=e.valueCallback?e.valueCallback(a):a;var s=t.slice(i.length);return{value:a,rest:s}}}var Wc=/^(\d+)(th|st|nd|rd)?/i,qc=/\d+/i,jc={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Gc={any:[/^b/i,/^(a|c)/i]},Qc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Kc={any:[/1/i,/2/i,/3/i,/4/i]},Xc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Zc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Jc={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},eh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},th={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},rh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},oh={ordinalNumber:Yc({matchPattern:Wc,parsePattern:qc,valueCallback:function(t){return parseInt(t,10)}}),era:dt({matchPatterns:jc,defaultMatchWidth:"wide",parsePatterns:Gc,defaultParseWidth:"any"}),quarter:dt({matchPatterns:Qc,defaultMatchWidth:"wide",parsePatterns:Kc,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:dt({matchPatterns:Xc,defaultMatchWidth:"wide",parsePatterns:Zc,defaultParseWidth:"any"}),day:dt({matchPatterns:Jc,defaultMatchWidth:"wide",parsePatterns:eh,defaultParseWidth:"any"}),dayPeriod:dt({matchPatterns:th,defaultMatchWidth:"any",parsePatterns:rh,defaultParseWidth:"any"})},Rs={code:"en-US",formatDistance:Oc,formatLong:Pc,formatRelative:zc,localize:Vc,match:oh,options:{weekStartsOn:0,firstWeekContainsDate:1}},ih=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ah=/^'([^]*?)'?$/,sh=/''/g,lh=/[a-zA-Z]/;function dh(o,t,e){var r,i,n,a,s,l,d,f,p,y,v,k,O,I;K(2,arguments);var $=String(t),E=et(),B=(r=(i=void 0)!==null&&i!==void 0?i:E.locale)!==null&&r!==void 0?r:Rs,U=re((n=(a=(s=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&s!==void 0?s:E.firstWeekContainsDate)!==null&&a!==void 0?a:(d=E.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var te=re((p=(y=(v=(k=void 0)!==null&&k!==void 0?k:void 0)!==null&&v!==void 0?v:E.weekStartsOn)!==null&&y!==void 0?y:(O=E.locale)===null||O===void 0||(I=O.options)===null||I===void 0?void 0:I.weekStartsOn)!==null&&p!==void 0?p:0);if(!(te>=0&&te<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!B.localize)throw new RangeError("locale must contain localize property");if(!B.formatLong)throw new RangeError("locale must contain formatLong property");var J=ee(o);if(!Co(J))throw new RangeError("Invalid time value");var pe=Ms(J),ye=Ts(J,pe),Ie={firstWeekContainsDate:U,weekStartsOn:te,locale:B,_originalDate:J},He=$.match(nh).map(function(W){var X=W[0];if(X==="p"||X==="P"){var fe=ko[X];return fe(W,B.formatLong)}return W}).join("").match(ih).map(function(W){if(W==="''")return"'";var X=W[0];if(X==="'")return uh(W);var fe=xc[X];if(fe)return Bs(W)&&yr(W,t,String(o)),$s(W)&&yr(W,t,String(o)),fe(ye,W,B.localize,Ie);if(X.match(lh))throw new RangeError("Format string contains an unescaped latin alphabet character `"+X+"`");return W}).join("");return He}function uh(o){var t=o.match(ah);return t?t[1].replace(sh,"'"):o}function ch(o,t){if(o==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e]);return o}function zt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?zt=function(e){return typeof e}:zt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zt(o)}function Fs(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Io(o,t)}function Io(o,t){return Io=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Io(o,t)}function Ls(o){var t=ph();return function(){var r=wr(o),i;if(t){var n=wr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return hh(this,i)}}function hh(o,t){return t&&(zt(t)==="object"||typeof t=="function")?t:Oo(o)}function Oo(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function ph(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wr(o){return wr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},wr(o)}function on(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function fh(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function nn(o,t,e){return t&&fh(o.prototype,t),o}function Eo(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var mh=10,Ns=function(){function o(){on(this,o),Eo(this,"subPriority",0)}return nn(o,[{key:"validate",value:function(e,r){return!0}}]),o}(),_h=function(o){Fs(e,o);var t=Ls(e);function e(r,i,n,a,s){var l;return on(this,e),l=t.call(this),l.value=r,l.validateValue=i,l.setValue=n,l.priority=a,s&&(l.subPriority=s),l}return nn(e,[{key:"validate",value:function(i,n){return this.validateValue(i,this.value,n)}},{key:"set",value:function(i,n,a){return this.setValue(i,n,this.value,a)}}]),e}(Ns),vh=function(o){Fs(e,o);var t=Ls(e);function e(){var r;on(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Eo(Oo(r),"priority",mh),Eo(Oo(r),"subPriority",-1),r}return nn(e,[{key:"set",value:function(i,n){if(n.timestampIsSet)return i;var a=new Date(0);return a.setFullYear(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),a.setHours(i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),a}}]),e}(Ns);function gh(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function bh(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function yh(o,t,e){return t&&bh(o.prototype,t),o}var M=function(){function o(){gh(this,o)}return yh(o,[{key:"run",value:function(e,r,i,n){var a=this.parse(e,r,i,n);return a?{setter:new _h(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}},{key:"validate",value:function(e,r,i){return!0}}]),o}();function Mt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Mt=function(e){return typeof e}:Mt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mt(o)}function wh(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function xh(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Ah(o,t,e){return t&&xh(o.prototype,t),o}function Ch(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&To(o,t)}function To(o,t){return To=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},To(o,t)}function kh(o){var t=Oh();return function(){var r=xr(o),i;if(t){var n=xr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Ih(this,i)}}function Ih(o,t){return t&&(Mt(t)==="object"||typeof t=="function")?t:So(o)}function So(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Oh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xr(o){return xr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},xr(o)}function In(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Eh=function(o){Ch(e,o);var t=kh(e);function e(){var r;wh(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),In(So(r),"priority",140),In(So(r),"incompatibleTokens",["R","u","t","T"]),r}return Ah(e,[{key:"parse",value:function(i,n,a){switch(n){case"G":case"GG":case"GGG":return a.era(i,{width:"abbreviated"})||a.era(i,{width:"narrow"});case"GGGGG":return a.era(i,{width:"narrow"});case"GGGG":default:return a.era(i,{width:"wide"})||a.era(i,{width:"abbreviated"})||a.era(i,{width:"narrow"})}}},{key:"set",value:function(i,n,a){return n.era=a,i.setUTCFullYear(a,0,1),i.setUTCHours(0,0,0,0),i}}]),e}(M),Th=6e4,Sh=36e5,Ph=1e3,j={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},ge={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function G(o,t){return o&&{value:t(o.value),rest:o.rest}}function H(o,t){var e=t.match(o);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function be(o,t){var e=t.match(o);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};var r=e[1]==="+"?1:-1,i=e[2]?parseInt(e[2],10):0,n=e[3]?parseInt(e[3],10):0,a=e[5]?parseInt(e[5],10):0;return{value:r*(i*Sh+n*Th+a*Ph),rest:t.slice(e[0].length)}}function Vs(o){return H(j.anyDigitsSigned,o)}function Y(o,t){switch(o){case 1:return H(j.singleDigit,t);case 2:return H(j.twoDigits,t);case 3:return H(j.threeDigits,t);case 4:return H(j.fourDigits,t);default:return H(new RegExp("^\\d{1,"+o+"}"),t)}}function Ar(o,t){switch(o){case 1:return H(j.singleDigitSigned,t);case 2:return H(j.twoDigitsSigned,t);case 3:return H(j.threeDigitsSigned,t);case 4:return H(j.fourDigitsSigned,t);default:return H(new RegExp("^-?\\d{1,"+o+"}"),t)}}function an(o){switch(o){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Hs(o,t){var e=t>0,r=e?t:1-t,i;if(r<=50)i=o||100;else{var n=r+50,a=Math.floor(n/100)*100,s=o>=n%100;i=o+a-(s?100:0)}return e?i:1-i}function Us(o){return o%400===0||o%4===0&&o%100!==0}function $t(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$t=function(e){return typeof e}:$t=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t(o)}function Dh(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function zh(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Mh(o,t,e){return t&&zh(o.prototype,t),o}function $h(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Po(o,t)}function Po(o,t){return Po=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Po(o,t)}function Bh(o){var t=Fh();return function(){var r=Cr(o),i;if(t){var n=Cr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Rh(this,i)}}function Rh(o,t){return t&&($t(t)==="object"||typeof t=="function")?t:Do(o)}function Do(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Fh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Cr(o){return Cr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Cr(o)}function On(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Lh=function(o){$h(e,o);var t=Bh(e);function e(){var r;Dh(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),On(Do(r),"priority",130),On(Do(r),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),r}return Mh(e,[{key:"parse",value:function(i,n,a){var s=function(d){return{year:d,isTwoDigitYear:n==="yy"}};switch(n){case"y":return G(Y(4,i),s);case"yo":return G(a.ordinalNumber(i,{unit:"year"}),s);default:return G(Y(n.length,i),s)}}},{key:"validate",value:function(i,n){return n.isTwoDigitYear||n.year>0}},{key:"set",value:function(i,n,a){var s=i.getUTCFullYear();if(a.isTwoDigitYear){var l=Hs(a.year,s);return i.setUTCFullYear(l,0,1),i.setUTCHours(0,0,0,0),i}var d=!("era"in n)||n.era===1?a.year:1-a.year;return i.setUTCFullYear(d,0,1),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Bt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Bt=function(e){return typeof e}:Bt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bt(o)}function Nh(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Vh(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Hh(o,t,e){return t&&Vh(o.prototype,t),o}function Uh(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&zo(o,t)}function zo(o,t){return zo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},zo(o,t)}function Yh(o){var t=qh();return function(){var r=kr(o),i;if(t){var n=kr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Wh(this,i)}}function Wh(o,t){return t&&(Bt(t)==="object"||typeof t=="function")?t:Mo(o)}function Mo(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function qh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function kr(o){return kr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},kr(o)}function En(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var jh=function(o){Uh(e,o);var t=Yh(e);function e(){var r;Nh(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),En(Mo(r),"priority",130),En(Mo(r),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),r}return Hh(e,[{key:"parse",value:function(i,n,a){var s=function(d){return{year:d,isTwoDigitYear:n==="YY"}};switch(n){case"Y":return G(Y(4,i),s);case"Yo":return G(a.ordinalNumber(i,{unit:"year"}),s);default:return G(Y(n.length,i),s)}}},{key:"validate",value:function(i,n){return n.isTwoDigitYear||n.year>0}},{key:"set",value:function(i,n,a,s){var l=rn(i,s);if(a.isTwoDigitYear){var d=Hs(a.year,l);return i.setUTCFullYear(d,0,s.firstWeekContainsDate),i.setUTCHours(0,0,0,0),Re(i,s)}var f=!("era"in n)||n.era===1?a.year:1-a.year;return i.setUTCFullYear(f,0,s.firstWeekContainsDate),i.setUTCHours(0,0,0,0),Re(i,s)}}]),e}(M);function Rt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Rt=function(e){return typeof e}:Rt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rt(o)}function Gh(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Qh(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Kh(o,t,e){return t&&Qh(o.prototype,t),o}function Xh(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&$o(o,t)}function $o(o,t){return $o=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$o(o,t)}function Zh(o){var t=ep();return function(){var r=Ir(o),i;if(t){var n=Ir(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Jh(this,i)}}function Jh(o,t){return t&&(Rt(t)==="object"||typeof t=="function")?t:Bo(o)}function Bo(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function ep(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ir(o){return Ir=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ir(o)}function Tn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var tp=function(o){Xh(e,o);var t=Zh(e);function e(){var r;Gh(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Tn(Bo(r),"priority",130),Tn(Bo(r),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),r}return Kh(e,[{key:"parse",value:function(i,n){return Ar(n==="R"?4:n.length,i)}},{key:"set",value:function(i,n,a){var s=new Date(0);return s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0),qe(s)}}]),e}(M);function Ft(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ft=function(e){return typeof e}:Ft=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(o)}function rp(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function op(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function ip(o,t,e){return t&&op(o.prototype,t),o}function np(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Ro(o,t)}function Ro(o,t){return Ro=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ro(o,t)}function ap(o){var t=lp();return function(){var r=Or(o),i;if(t){var n=Or(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return sp(this,i)}}function sp(o,t){return t&&(Ft(t)==="object"||typeof t=="function")?t:Fo(o)}function Fo(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function lp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Or(o){return Or=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Or(o)}function Sn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var dp=function(o){np(e,o);var t=ap(e);function e(){var r;rp(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Sn(Fo(r),"priority",130),Sn(Fo(r),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),r}return ip(e,[{key:"parse",value:function(i,n){return Ar(n==="u"?4:n.length,i)}},{key:"set",value:function(i,n,a){return i.setUTCFullYear(a,0,1),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Lt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Lt=function(e){return typeof e}:Lt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lt(o)}function up(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function cp(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function hp(o,t,e){return t&&cp(o.prototype,t),o}function pp(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Lo(o,t)}function Lo(o,t){return Lo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Lo(o,t)}function fp(o){var t=_p();return function(){var r=Er(o),i;if(t){var n=Er(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return mp(this,i)}}function mp(o,t){return t&&(Lt(t)==="object"||typeof t=="function")?t:No(o)}function No(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function _p(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Er(o){return Er=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Er(o)}function Pn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var vp=function(o){pp(e,o);var t=fp(e);function e(){var r;up(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Pn(No(r),"priority",120),Pn(No(r),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),r}return hp(e,[{key:"parse",value:function(i,n,a){switch(n){case"Q":case"QQ":return Y(n.length,i);case"Qo":return a.ordinalNumber(i,{unit:"quarter"});case"QQQ":return a.quarter(i,{width:"abbreviated",context:"formatting"})||a.quarter(i,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(i,{width:"wide",context:"formatting"})||a.quarter(i,{width:"abbreviated",context:"formatting"})||a.quarter(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,n){return n>=1&&n<=4}},{key:"set",value:function(i,n,a){return i.setUTCMonth((a-1)*3,1),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Nt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Nt=function(e){return typeof e}:Nt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(o)}function gp(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function bp(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function yp(o,t,e){return t&&bp(o.prototype,t),o}function wp(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Vo(o,t)}function Vo(o,t){return Vo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Vo(o,t)}function xp(o){var t=Cp();return function(){var r=Tr(o),i;if(t){var n=Tr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Ap(this,i)}}function Ap(o,t){return t&&(Nt(t)==="object"||typeof t=="function")?t:Ho(o)}function Ho(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Cp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Tr(o){return Tr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Tr(o)}function Dn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var kp=function(o){wp(e,o);var t=xp(e);function e(){var r;gp(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Dn(Ho(r),"priority",120),Dn(Ho(r),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),r}return yp(e,[{key:"parse",value:function(i,n,a){switch(n){case"q":case"qq":return Y(n.length,i);case"qo":return a.ordinalNumber(i,{unit:"quarter"});case"qqq":return a.quarter(i,{width:"abbreviated",context:"standalone"})||a.quarter(i,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(i,{width:"wide",context:"standalone"})||a.quarter(i,{width:"abbreviated",context:"standalone"})||a.quarter(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,n){return n>=1&&n<=4}},{key:"set",value:function(i,n,a){return i.setUTCMonth((a-1)*3,1),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Vt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Vt=function(e){return typeof e}:Vt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vt(o)}function Ip(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Op(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Ep(o,t,e){return t&&Op(o.prototype,t),o}function Tp(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Uo(o,t)}function Uo(o,t){return Uo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Uo(o,t)}function Sp(o){var t=Dp();return function(){var r=Sr(o),i;if(t){var n=Sr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Pp(this,i)}}function Pp(o,t){return t&&(Vt(t)==="object"||typeof t=="function")?t:Yo(o)}function Yo(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Dp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Sr(o){return Sr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Sr(o)}function zn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var zp=function(o){Tp(e,o);var t=Sp(e);function e(){var r;Ip(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),zn(Yo(r),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),zn(Yo(r),"priority",110),r}return Ep(e,[{key:"parse",value:function(i,n,a){var s=function(d){return d-1};switch(n){case"M":return G(H(j.month,i),s);case"MM":return G(Y(2,i),s);case"Mo":return G(a.ordinalNumber(i,{unit:"month"}),s);case"MMM":return a.month(i,{width:"abbreviated",context:"formatting"})||a.month(i,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(i,{width:"wide",context:"formatting"})||a.month(i,{width:"abbreviated",context:"formatting"})||a.month(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,n){return n>=0&&n<=11}},{key:"set",value:function(i,n,a){return i.setUTCMonth(a,1),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Ht(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ht=function(e){return typeof e}:Ht=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ht(o)}function Mp(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function $p(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Bp(o,t,e){return t&&$p(o.prototype,t),o}function Rp(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Wo(o,t)}function Wo(o,t){return Wo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Wo(o,t)}function Fp(o){var t=Np();return function(){var r=Pr(o),i;if(t){var n=Pr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Lp(this,i)}}function Lp(o,t){return t&&(Ht(t)==="object"||typeof t=="function")?t:qo(o)}function qo(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Np(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Pr(o){return Pr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Pr(o)}function Mn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Vp=function(o){Rp(e,o);var t=Fp(e);function e(){var r;Mp(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Mn(qo(r),"priority",110),Mn(qo(r),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),r}return Bp(e,[{key:"parse",value:function(i,n,a){var s=function(d){return d-1};switch(n){case"L":return G(H(j.month,i),s);case"LL":return G(Y(2,i),s);case"Lo":return G(a.ordinalNumber(i,{unit:"month"}),s);case"LLL":return a.month(i,{width:"abbreviated",context:"standalone"})||a.month(i,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(i,{width:"wide",context:"standalone"})||a.month(i,{width:"abbreviated",context:"standalone"})||a.month(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,n){return n>=0&&n<=11}},{key:"set",value:function(i,n,a){return i.setUTCMonth(a,1),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Hp(o,t,e){K(2,arguments);var r=ee(o),i=re(t),n=Ds(r,e)-i;return r.setUTCDate(r.getUTCDate()-n*7),r}function Ut(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ut=function(e){return typeof e}:Ut=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ut(o)}function Up(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Yp(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Wp(o,t,e){return t&&Yp(o.prototype,t),o}function qp(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&jo(o,t)}function jo(o,t){return jo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},jo(o,t)}function jp(o){var t=Qp();return function(){var r=Dr(o),i;if(t){var n=Dr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Gp(this,i)}}function Gp(o,t){return t&&(Ut(t)==="object"||typeof t=="function")?t:Go(o)}function Go(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Qp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Dr(o){return Dr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Dr(o)}function $n(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Kp=function(o){qp(e,o);var t=jp(e);function e(){var r;Up(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),$n(Go(r),"priority",100),$n(Go(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),r}return Wp(e,[{key:"parse",value:function(i,n,a){switch(n){case"w":return H(j.week,i);case"wo":return a.ordinalNumber(i,{unit:"week"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){return n>=1&&n<=53}},{key:"set",value:function(i,n,a,s){return Re(Hp(i,a,s),s)}}]),e}(M);function Xp(o,t){K(2,arguments);var e=ee(o),r=re(t),i=Ps(e)-r;return e.setUTCDate(e.getUTCDate()-i*7),e}function Yt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Yt=function(e){return typeof e}:Yt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yt(o)}function Zp(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Jp(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function ef(o,t,e){return t&&Jp(o.prototype,t),o}function tf(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Qo(o,t)}function Qo(o,t){return Qo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Qo(o,t)}function rf(o){var t=nf();return function(){var r=zr(o),i;if(t){var n=zr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return of(this,i)}}function of(o,t){return t&&(Yt(t)==="object"||typeof t=="function")?t:Ko(o)}function Ko(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function nf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function zr(o){return zr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},zr(o)}function Bn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var af=function(o){tf(e,o);var t=rf(e);function e(){var r;Zp(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Bn(Ko(r),"priority",100),Bn(Ko(r),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),r}return ef(e,[{key:"parse",value:function(i,n,a){switch(n){case"I":return H(j.week,i);case"Io":return a.ordinalNumber(i,{unit:"week"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){return n>=1&&n<=53}},{key:"set",value:function(i,n,a){return qe(Xp(i,a))}}]),e}(M);function Wt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Wt=function(e){return typeof e}:Wt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wt(o)}function sf(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function lf(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function df(o,t,e){return t&&lf(o.prototype,t),o}function uf(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Xo(o,t)}function Xo(o,t){return Xo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Xo(o,t)}function cf(o){var t=pf();return function(){var r=Mr(o),i;if(t){var n=Mr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return hf(this,i)}}function hf(o,t){return t&&(Wt(t)==="object"||typeof t=="function")?t:qt(o)}function qt(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function pf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Mr(o){return Mr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Mr(o)}function co(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var ff=[31,28,31,30,31,30,31,31,30,31,30,31],mf=[31,29,31,30,31,30,31,31,30,31,30,31],_f=function(o){uf(e,o);var t=cf(e);function e(){var r;sf(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),co(qt(r),"priority",90),co(qt(r),"subPriority",1),co(qt(r),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),r}return df(e,[{key:"parse",value:function(i,n,a){switch(n){case"d":return H(j.date,i);case"do":return a.ordinalNumber(i,{unit:"date"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){var a=i.getUTCFullYear(),s=Us(a),l=i.getUTCMonth();return s?n>=1&&n<=mf[l]:n>=1&&n<=ff[l]}},{key:"set",value:function(i,n,a){return i.setUTCDate(a),i.setUTCHours(0,0,0,0),i}}]),e}(M);function jt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?jt=function(e){return typeof e}:jt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jt(o)}function vf(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function gf(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function bf(o,t,e){return t&&gf(o.prototype,t),o}function yf(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Zo(o,t)}function Zo(o,t){return Zo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Zo(o,t)}function wf(o){var t=Af();return function(){var r=$r(o),i;if(t){var n=$r(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return xf(this,i)}}function xf(o,t){return t&&(jt(t)==="object"||typeof t=="function")?t:Gt(o)}function Gt(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Af(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $r(o){return $r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},$r(o)}function ho(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Cf=function(o){yf(e,o);var t=wf(e);function e(){var r;vf(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),ho(Gt(r),"priority",90),ho(Gt(r),"subpriority",1),ho(Gt(r),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),r}return bf(e,[{key:"parse",value:function(i,n,a){switch(n){case"D":case"DD":return H(j.dayOfYear,i);case"Do":return a.ordinalNumber(i,{unit:"date"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){var a=i.getUTCFullYear(),s=Us(a);return s?n>=1&&n<=366:n>=1&&n<=365}},{key:"set",value:function(i,n,a){return i.setUTCMonth(0,a),i.setUTCHours(0,0,0,0),i}}]),e}(M);function sn(o,t,e){var r,i,n,a,s,l,d,f;K(2,arguments);var p=et(),y=re((r=(i=(n=(a=e==null?void 0:e.weekStartsOn)!==null&&a!==void 0?a:e==null||(s=e.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:p.weekStartsOn)!==null&&i!==void 0?i:(d=p.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.weekStartsOn)!==null&&r!==void 0?r:0);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=ee(o),k=re(t),O=v.getUTCDay(),I=k%7,$=(I+7)%7,E=($<y?7:0)+k-O;return v.setUTCDate(v.getUTCDate()+E),v}function Qt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qt=function(e){return typeof e}:Qt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qt(o)}function kf(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function If(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Of(o,t,e){return t&&If(o.prototype,t),o}function Ef(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Jo(o,t)}function Jo(o,t){return Jo=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Jo(o,t)}function Tf(o){var t=Pf();return function(){var r=Br(o),i;if(t){var n=Br(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Sf(this,i)}}function Sf(o,t){return t&&(Qt(t)==="object"||typeof t=="function")?t:ei(o)}function ei(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Pf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Br(o){return Br=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Br(o)}function Rn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Df=function(o){Ef(e,o);var t=Tf(e);function e(){var r;kf(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Rn(ei(r),"priority",90),Rn(ei(r),"incompatibleTokens",["D","i","e","c","t","T"]),r}return Of(e,[{key:"parse",value:function(i,n,a){switch(n){case"E":case"EE":case"EEE":return a.day(i,{width:"abbreviated",context:"formatting"})||a.day(i,{width:"short",context:"formatting"})||a.day(i,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(i,{width:"short",context:"formatting"})||a.day(i,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(i,{width:"wide",context:"formatting"})||a.day(i,{width:"abbreviated",context:"formatting"})||a.day(i,{width:"short",context:"formatting"})||a.day(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,n){return n>=0&&n<=6}},{key:"set",value:function(i,n,a,s){return i=sn(i,a,s),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Kt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Kt=function(e){return typeof e}:Kt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kt(o)}function zf(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Mf(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function $f(o,t,e){return t&&Mf(o.prototype,t),o}function Bf(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&ti(o,t)}function ti(o,t){return ti=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ti(o,t)}function Rf(o){var t=Lf();return function(){var r=Rr(o),i;if(t){var n=Rr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Ff(this,i)}}function Ff(o,t){return t&&(Kt(t)==="object"||typeof t=="function")?t:ri(o)}function ri(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Lf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Rr(o){return Rr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Rr(o)}function Fn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Nf=function(o){Bf(e,o);var t=Rf(e);function e(){var r;zf(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Fn(ri(r),"priority",90),Fn(ri(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),r}return $f(e,[{key:"parse",value:function(i,n,a,s){var l=function(f){var p=Math.floor((f-1)/7)*7;return(f+s.weekStartsOn+6)%7+p};switch(n){case"e":case"ee":return G(Y(n.length,i),l);case"eo":return G(a.ordinalNumber(i,{unit:"day"}),l);case"eee":return a.day(i,{width:"abbreviated",context:"formatting"})||a.day(i,{width:"short",context:"formatting"})||a.day(i,{width:"narrow",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"})||a.day(i,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})||a.day(i,{width:"abbreviated",context:"formatting"})||a.day(i,{width:"short",context:"formatting"})||a.day(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,n){return n>=0&&n<=6}},{key:"set",value:function(i,n,a,s){return i=sn(i,a,s),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Xt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xt=function(e){return typeof e}:Xt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xt(o)}function Vf(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Hf(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Uf(o,t,e){return t&&Hf(o.prototype,t),o}function Yf(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&oi(o,t)}function oi(o,t){return oi=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},oi(o,t)}function Wf(o){var t=jf();return function(){var r=Fr(o),i;if(t){var n=Fr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return qf(this,i)}}function qf(o,t){return t&&(Xt(t)==="object"||typeof t=="function")?t:ii(o)}function ii(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function jf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Fr(o){return Fr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Fr(o)}function Ln(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Gf=function(o){Yf(e,o);var t=Wf(e);function e(){var r;Vf(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Ln(ii(r),"priority",90),Ln(ii(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),r}return Uf(e,[{key:"parse",value:function(i,n,a,s){var l=function(f){var p=Math.floor((f-1)/7)*7;return(f+s.weekStartsOn+6)%7+p};switch(n){case"c":case"cc":return G(Y(n.length,i),l);case"co":return G(a.ordinalNumber(i,{unit:"day"}),l);case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"})||a.day(i,{width:"short",context:"standalone"})||a.day(i,{width:"narrow",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"})||a.day(i,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})||a.day(i,{width:"abbreviated",context:"standalone"})||a.day(i,{width:"short",context:"standalone"})||a.day(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,n){return n>=0&&n<=6}},{key:"set",value:function(i,n,a,s){return i=sn(i,a,s),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Qf(o,t){K(2,arguments);var e=re(t);e%7===0&&(e=e-7);var r=1,i=ee(o),n=i.getUTCDay(),a=e%7,s=(a+7)%7,l=(s<r?7:0)+e-n;return i.setUTCDate(i.getUTCDate()+l),i}function Zt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zt=function(e){return typeof e}:Zt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zt(o)}function Kf(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Xf(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Zf(o,t,e){return t&&Xf(o.prototype,t),o}function Jf(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&ni(o,t)}function ni(o,t){return ni=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ni(o,t)}function em(o){var t=rm();return function(){var r=Lr(o),i;if(t){var n=Lr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return tm(this,i)}}function tm(o,t){return t&&(Zt(t)==="object"||typeof t=="function")?t:ai(o)}function ai(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function rm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Lr(o){return Lr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Lr(o)}function Nn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var om=function(o){Jf(e,o);var t=em(e);function e(){var r;Kf(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Nn(ai(r),"priority",90),Nn(ai(r),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),r}return Zf(e,[{key:"parse",value:function(i,n,a){var s=function(d){return d===0?7:d};switch(n){case"i":case"ii":return Y(n.length,i);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return G(a.day(i,{width:"abbreviated",context:"formatting"})||a.day(i,{width:"short",context:"formatting"})||a.day(i,{width:"narrow",context:"formatting"}),s);case"iiiii":return G(a.day(i,{width:"narrow",context:"formatting"}),s);case"iiiiii":return G(a.day(i,{width:"short",context:"formatting"})||a.day(i,{width:"narrow",context:"formatting"}),s);case"iiii":default:return G(a.day(i,{width:"wide",context:"formatting"})||a.day(i,{width:"abbreviated",context:"formatting"})||a.day(i,{width:"short",context:"formatting"})||a.day(i,{width:"narrow",context:"formatting"}),s)}}},{key:"validate",value:function(i,n){return n>=1&&n<=7}},{key:"set",value:function(i,n,a){return i=Qf(i,a),i.setUTCHours(0,0,0,0),i}}]),e}(M);function Jt(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Jt=function(e){return typeof e}:Jt=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jt(o)}function im(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function nm(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function am(o,t,e){return t&&nm(o.prototype,t),o}function sm(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&si(o,t)}function si(o,t){return si=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},si(o,t)}function lm(o){var t=um();return function(){var r=Nr(o),i;if(t){var n=Nr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return dm(this,i)}}function dm(o,t){return t&&(Jt(t)==="object"||typeof t=="function")?t:li(o)}function li(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function um(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Nr(o){return Nr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Nr(o)}function Vn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var cm=function(o){sm(e,o);var t=lm(e);function e(){var r;im(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Vn(li(r),"priority",80),Vn(li(r),"incompatibleTokens",["b","B","H","k","t","T"]),r}return am(e,[{key:"parse",value:function(i,n,a){switch(n){case"a":case"aa":case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"})||a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})||a.dayPeriod(i,{width:"abbreviated",context:"formatting"})||a.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,n,a){return i.setUTCHours(an(a),0,0,0),i}}]),e}(M);function er(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?er=function(e){return typeof e}:er=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},er(o)}function hm(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function pm(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function fm(o,t,e){return t&&pm(o.prototype,t),o}function mm(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&di(o,t)}function di(o,t){return di=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},di(o,t)}function _m(o){var t=gm();return function(){var r=Vr(o),i;if(t){var n=Vr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return vm(this,i)}}function vm(o,t){return t&&(er(t)==="object"||typeof t=="function")?t:ui(o)}function ui(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function gm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vr(o){return Vr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Vr(o)}function Hn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var bm=function(o){mm(e,o);var t=_m(e);function e(){var r;hm(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Hn(ui(r),"priority",80),Hn(ui(r),"incompatibleTokens",["a","B","H","k","t","T"]),r}return fm(e,[{key:"parse",value:function(i,n,a){switch(n){case"b":case"bb":case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"})||a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})||a.dayPeriod(i,{width:"abbreviated",context:"formatting"})||a.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,n,a){return i.setUTCHours(an(a),0,0,0),i}}]),e}(M);function tr(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?tr=function(e){return typeof e}:tr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tr(o)}function ym(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function wm(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function xm(o,t,e){return t&&wm(o.prototype,t),o}function Am(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&ci(o,t)}function ci(o,t){return ci=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ci(o,t)}function Cm(o){var t=Im();return function(){var r=Hr(o),i;if(t){var n=Hr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return km(this,i)}}function km(o,t){return t&&(tr(t)==="object"||typeof t=="function")?t:hi(o)}function hi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Im(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Hr(o){return Hr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Hr(o)}function Un(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Om=function(o){Am(e,o);var t=Cm(e);function e(){var r;ym(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Un(hi(r),"priority",80),Un(hi(r),"incompatibleTokens",["a","b","t","T"]),r}return xm(e,[{key:"parse",value:function(i,n,a){switch(n){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"})||a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})||a.dayPeriod(i,{width:"abbreviated",context:"formatting"})||a.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,n,a){return i.setUTCHours(an(a),0,0,0),i}}]),e}(M);function rr(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?rr=function(e){return typeof e}:rr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rr(o)}function Em(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Tm(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Sm(o,t,e){return t&&Tm(o.prototype,t),o}function Pm(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&pi(o,t)}function pi(o,t){return pi=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},pi(o,t)}function Dm(o){var t=Mm();return function(){var r=Ur(o),i;if(t){var n=Ur(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return zm(this,i)}}function zm(o,t){return t&&(rr(t)==="object"||typeof t=="function")?t:fi(o)}function fi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Mm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ur(o){return Ur=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ur(o)}function Yn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var $m=function(o){Pm(e,o);var t=Dm(e);function e(){var r;Em(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Yn(fi(r),"priority",70),Yn(fi(r),"incompatibleTokens",["H","K","k","t","T"]),r}return Sm(e,[{key:"parse",value:function(i,n,a){switch(n){case"h":return H(j.hour12h,i);case"ho":return a.ordinalNumber(i,{unit:"hour"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){return n>=1&&n<=12}},{key:"set",value:function(i,n,a){var s=i.getUTCHours()>=12;return s&&a<12?i.setUTCHours(a+12,0,0,0):!s&&a===12?i.setUTCHours(0,0,0,0):i.setUTCHours(a,0,0,0),i}}]),e}(M);function or(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?or=function(e){return typeof e}:or=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},or(o)}function Bm(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Rm(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function Fm(o,t,e){return t&&Rm(o.prototype,t),o}function Lm(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&mi(o,t)}function mi(o,t){return mi=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},mi(o,t)}function Nm(o){var t=Hm();return function(){var r=Yr(o),i;if(t){var n=Yr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Vm(this,i)}}function Vm(o,t){return t&&(or(t)==="object"||typeof t=="function")?t:_i(o)}function _i(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Hm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Yr(o){return Yr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Yr(o)}function Wn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Um=function(o){Lm(e,o);var t=Nm(e);function e(){var r;Bm(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Wn(_i(r),"priority",70),Wn(_i(r),"incompatibleTokens",["a","b","h","K","k","t","T"]),r}return Fm(e,[{key:"parse",value:function(i,n,a){switch(n){case"H":return H(j.hour23h,i);case"Ho":return a.ordinalNumber(i,{unit:"hour"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){return n>=0&&n<=23}},{key:"set",value:function(i,n,a){return i.setUTCHours(a,0,0,0),i}}]),e}(M);function ir(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ir=function(e){return typeof e}:ir=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ir(o)}function Ym(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Wm(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function qm(o,t,e){return t&&Wm(o.prototype,t),o}function jm(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&vi(o,t)}function vi(o,t){return vi=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},vi(o,t)}function Gm(o){var t=Km();return function(){var r=Wr(o),i;if(t){var n=Wr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return Qm(this,i)}}function Qm(o,t){return t&&(ir(t)==="object"||typeof t=="function")?t:gi(o)}function gi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Km(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Wr(o){return Wr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Wr(o)}function qn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var Xm=function(o){jm(e,o);var t=Gm(e);function e(){var r;Ym(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),qn(gi(r),"priority",70),qn(gi(r),"incompatibleTokens",["h","H","k","t","T"]),r}return qm(e,[{key:"parse",value:function(i,n,a){switch(n){case"K":return H(j.hour11h,i);case"Ko":return a.ordinalNumber(i,{unit:"hour"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){return n>=0&&n<=11}},{key:"set",value:function(i,n,a){var s=i.getUTCHours()>=12;return s&&a<12?i.setUTCHours(a+12,0,0,0):i.setUTCHours(a,0,0,0),i}}]),e}(M);function nr(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?nr=function(e){return typeof e}:nr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nr(o)}function Zm(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Jm(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function e_(o,t,e){return t&&Jm(o.prototype,t),o}function t_(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&bi(o,t)}function bi(o,t){return bi=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},bi(o,t)}function r_(o){var t=i_();return function(){var r=qr(o),i;if(t){var n=qr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return o_(this,i)}}function o_(o,t){return t&&(nr(t)==="object"||typeof t=="function")?t:yi(o)}function yi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function i_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function qr(o){return qr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},qr(o)}function jn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var n_=function(o){t_(e,o);var t=r_(e);function e(){var r;Zm(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),jn(yi(r),"priority",70),jn(yi(r),"incompatibleTokens",["a","b","h","H","K","t","T"]),r}return e_(e,[{key:"parse",value:function(i,n,a){switch(n){case"k":return H(j.hour24h,i);case"ko":return a.ordinalNumber(i,{unit:"hour"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){return n>=1&&n<=24}},{key:"set",value:function(i,n,a){var s=a<=24?a%24:a;return i.setUTCHours(s,0,0,0),i}}]),e}(M);function ar(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ar=function(e){return typeof e}:ar=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ar(o)}function a_(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function s_(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function l_(o,t,e){return t&&s_(o.prototype,t),o}function d_(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&wi(o,t)}function wi(o,t){return wi=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},wi(o,t)}function u_(o){var t=h_();return function(){var r=jr(o),i;if(t){var n=jr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return c_(this,i)}}function c_(o,t){return t&&(ar(t)==="object"||typeof t=="function")?t:xi(o)}function xi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function h_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function jr(o){return jr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},jr(o)}function Gn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var p_=function(o){d_(e,o);var t=u_(e);function e(){var r;a_(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Gn(xi(r),"priority",60),Gn(xi(r),"incompatibleTokens",["t","T"]),r}return l_(e,[{key:"parse",value:function(i,n,a){switch(n){case"m":return H(j.minute,i);case"mo":return a.ordinalNumber(i,{unit:"minute"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){return n>=0&&n<=59}},{key:"set",value:function(i,n,a){return i.setUTCMinutes(a,0,0),i}}]),e}(M);function sr(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?sr=function(e){return typeof e}:sr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sr(o)}function f_(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function m_(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function __(o,t,e){return t&&m_(o.prototype,t),o}function v_(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Ai(o,t)}function Ai(o,t){return Ai=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ai(o,t)}function g_(o){var t=y_();return function(){var r=Gr(o),i;if(t){var n=Gr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return b_(this,i)}}function b_(o,t){return t&&(sr(t)==="object"||typeof t=="function")?t:Ci(o)}function Ci(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function y_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Gr(o){return Gr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Gr(o)}function Qn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var w_=function(o){v_(e,o);var t=g_(e);function e(){var r;f_(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Qn(Ci(r),"priority",50),Qn(Ci(r),"incompatibleTokens",["t","T"]),r}return __(e,[{key:"parse",value:function(i,n,a){switch(n){case"s":return H(j.second,i);case"so":return a.ordinalNumber(i,{unit:"second"});default:return Y(n.length,i)}}},{key:"validate",value:function(i,n){return n>=0&&n<=59}},{key:"set",value:function(i,n,a){return i.setUTCSeconds(a,0),i}}]),e}(M);function lr(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?lr=function(e){return typeof e}:lr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lr(o)}function x_(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function A_(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function C_(o,t,e){return t&&A_(o.prototype,t),o}function k_(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&ki(o,t)}function ki(o,t){return ki=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ki(o,t)}function I_(o){var t=E_();return function(){var r=Qr(o),i;if(t){var n=Qr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return O_(this,i)}}function O_(o,t){return t&&(lr(t)==="object"||typeof t=="function")?t:Ii(o)}function Ii(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function E_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qr(o){return Qr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Qr(o)}function Kn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var T_=function(o){k_(e,o);var t=I_(e);function e(){var r;x_(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Kn(Ii(r),"priority",30),Kn(Ii(r),"incompatibleTokens",["t","T"]),r}return C_(e,[{key:"parse",value:function(i,n){var a=function(l){return Math.floor(l*Math.pow(10,-n.length+3))};return G(Y(n.length,i),a)}},{key:"set",value:function(i,n,a){return i.setUTCMilliseconds(a),i}}]),e}(M);function dr(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?dr=function(e){return typeof e}:dr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dr(o)}function S_(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function P_(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function D_(o,t,e){return t&&P_(o.prototype,t),o}function z_(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Oi(o,t)}function Oi(o,t){return Oi=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Oi(o,t)}function M_(o){var t=B_();return function(){var r=Kr(o),i;if(t){var n=Kr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return $_(this,i)}}function $_(o,t){return t&&(dr(t)==="object"||typeof t=="function")?t:Ei(o)}function Ei(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function B_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Kr(o){return Kr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Kr(o)}function Xn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var R_=function(o){z_(e,o);var t=M_(e);function e(){var r;S_(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Xn(Ei(r),"priority",10),Xn(Ei(r),"incompatibleTokens",["t","T","x"]),r}return D_(e,[{key:"parse",value:function(i,n){switch(n){case"X":return be(ge.basicOptionalMinutes,i);case"XX":return be(ge.basic,i);case"XXXX":return be(ge.basicOptionalSeconds,i);case"XXXXX":return be(ge.extendedOptionalSeconds,i);case"XXX":default:return be(ge.extended,i)}}},{key:"set",value:function(i,n,a){return n.timestampIsSet?i:new Date(i.getTime()-a)}}]),e}(M);function ur(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ur=function(e){return typeof e}:ur=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ur(o)}function F_(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function L_(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function N_(o,t,e){return t&&L_(o.prototype,t),o}function V_(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Ti(o,t)}function Ti(o,t){return Ti=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ti(o,t)}function H_(o){var t=Y_();return function(){var r=Xr(o),i;if(t){var n=Xr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return U_(this,i)}}function U_(o,t){return t&&(ur(t)==="object"||typeof t=="function")?t:Si(o)}function Si(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Y_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Xr(o){return Xr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Xr(o)}function Zn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var W_=function(o){V_(e,o);var t=H_(e);function e(){var r;F_(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Zn(Si(r),"priority",10),Zn(Si(r),"incompatibleTokens",["t","T","X"]),r}return N_(e,[{key:"parse",value:function(i,n){switch(n){case"x":return be(ge.basicOptionalMinutes,i);case"xx":return be(ge.basic,i);case"xxxx":return be(ge.basicOptionalSeconds,i);case"xxxxx":return be(ge.extendedOptionalSeconds,i);case"xxx":default:return be(ge.extended,i)}}},{key:"set",value:function(i,n,a){return n.timestampIsSet?i:new Date(i.getTime()-a)}}]),e}(M);function cr(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?cr=function(e){return typeof e}:cr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cr(o)}function q_(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function j_(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function G_(o,t,e){return t&&j_(o.prototype,t),o}function Q_(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&Pi(o,t)}function Pi(o,t){return Pi=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Pi(o,t)}function K_(o){var t=Z_();return function(){var r=Zr(o),i;if(t){var n=Zr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return X_(this,i)}}function X_(o,t){return t&&(cr(t)==="object"||typeof t=="function")?t:Di(o)}function Di(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Z_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Zr(o){return Zr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Zr(o)}function Jn(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var J_=function(o){Q_(e,o);var t=K_(e);function e(){var r;q_(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),Jn(Di(r),"priority",40),Jn(Di(r),"incompatibleTokens","*"),r}return G_(e,[{key:"parse",value:function(i){return Vs(i)}},{key:"set",value:function(i,n,a){return[new Date(a*1e3),{timestampIsSet:!0}]}}]),e}(M);function hr(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hr=function(e){return typeof e}:hr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hr(o)}function ev(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function tv(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function rv(o,t,e){return t&&tv(o.prototype,t),o}function ov(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),t&&zi(o,t)}function zi(o,t){return zi=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},zi(o,t)}function iv(o){var t=av();return function(){var r=Jr(o),i;if(t){var n=Jr(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return nv(this,i)}}function nv(o,t){return t&&(hr(t)==="object"||typeof t=="function")?t:Mi(o)}function Mi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function av(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Jr(o){return Jr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Jr(o)}function ea(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var sv=function(o){ov(e,o);var t=iv(e);function e(){var r;ev(this,e);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return r=t.call.apply(t,[this].concat(n)),ea(Mi(r),"priority",20),ea(Mi(r),"incompatibleTokens","*"),r}return rv(e,[{key:"parse",value:function(i){return Vs(i)}},{key:"set",value:function(i,n,a){return[new Date(a),{timestampIsSet:!0}]}}]),e}(M),lv={G:new Eh,y:new Lh,Y:new jh,R:new tp,u:new dp,Q:new vp,q:new kp,M:new zp,L:new Vp,w:new Kp,I:new af,d:new _f,D:new Cf,E:new Df,e:new Nf,c:new Gf,i:new om,a:new cm,b:new bm,B:new Om,h:new $m,H:new Um,K:new Xm,k:new n_,m:new p_,s:new w_,S:new T_,X:new R_,x:new W_,t:new J_,T:new sv};function pr(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pr=function(e){return typeof e}:pr=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pr(o)}function ta(o,t){var e;if(typeof Symbol>"u"||o[Symbol.iterator]==null){if(Array.isArray(o)||(e=dv(o))||t){e&&(o=e);var r=0,i=function(){};return{s:i,n:function(){return r>=o.length?{done:!0}:{done:!1,value:o[r++]}},e:function(d){throw d},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,a=!1,s;return{s:function(){e=o[Symbol.iterator]()},n:function(){var d=e.next();return n=d.done,d},e:function(d){a=!0,s=d},f:function(){try{!n&&e.return!=null&&e.return()}finally{if(a)throw s}}}}function dv(o,t){if(o){if(typeof o=="string")return ra(o,t);var e=Object.prototype.toString.call(o).slice(8,-1);if(e==="Object"&&o.constructor&&(e=o.constructor.name),e==="Map"||e==="Set")return Array.from(o);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ra(o,t)}}function ra(o,t){(t==null||t>o.length)&&(t=o.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=o[e];return r}var uv=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cv=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,hv=/^'([^]*?)'?$/,pv=/''/g,fv=/\S/,mv=/[a-zA-Z]/;function _v(o,t,e,r){var i,n,a,s,l,d,f,p,y,v,k,O,I,$;K(3,arguments);var E=String(o),B=String(t),U=et(),te=(i=(n=void 0)!==null&&n!==void 0?n:U.locale)!==null&&i!==void 0?i:Rs;if(!te.match)throw new RangeError("locale must contain match property");var J=re((a=(s=(l=(d=void 0)!==null&&d!==void 0?d:void 0)!==null&&l!==void 0?l:U.firstWeekContainsDate)!==null&&s!==void 0?s:(f=U.locale)===null||f===void 0||(p=f.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(J>=1&&J<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var pe=re((y=(v=(k=(O=void 0)!==null&&O!==void 0?O:void 0)!==null&&k!==void 0?k:U.weekStartsOn)!==null&&v!==void 0?v:(I=U.locale)===null||I===void 0||($=I.options)===null||$===void 0?void 0:$.weekStartsOn)!==null&&y!==void 0?y:0);if(!(pe>=0&&pe<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(B==="")return E===""?ee(e):new Date(NaN);var ye={firstWeekContainsDate:J,weekStartsOn:pe,locale:te},Ie=[new vh],He=B.match(cv).map(function(z){var T=z[0];if(T in ko){var L=ko[T];return L(z,te.formatLong)}return z}).join("").match(uv),W=[],X=ta(He),fe;try{var Ue=function(){var T=fe.value;!(r!=null&&r.useAdditionalWeekYearTokens)&&Bs(T)&&yr(T,B,o),!(r!=null&&r.useAdditionalDayOfYearTokens)&&$s(T)&&yr(T,B,o);var L=T[0],Z=lv[L];if(Z){var me=Z.incompatibleTokens;if(Array.isArray(me)){var _e=W.find(function(Oe){return me.includes(Oe.token)||Oe.token===L});if(_e)throw new RangeError("The format string mustn't contain `".concat(_e.fullToken,"` and `").concat(T,"` at the same time"))}else if(Z.incompatibleTokens==="*"&&W.length>0)throw new RangeError("The format string mustn't contain `".concat(T,"` and any other token at the same time"));W.push({token:L,fullToken:T});var ve=Z.run(E,T,te.match,ye);if(!ve)return{v:new Date(NaN)};Ie.push(ve.setter),E=ve.rest}else{if(L.match(mv))throw new RangeError("Format string contains an unescaped latin alphabet character `"+L+"`");if(T==="''"?T="'":L==="'"&&(T=vv(T)),E.indexOf(T)===0)E=E.slice(T.length);else return{v:new Date(NaN)}}};for(X.s();!(fe=X.n()).done;){var rt=Ue();if(pr(rt)==="object")return rt.v}}catch(z){X.e(z)}finally{X.f()}if(E.length>0&&fv.test(E))return new Date(NaN);var kt=Ie.map(function(z){return z.priority}).sort(function(z,T){return T-z}).filter(function(z,T,L){return L.indexOf(z)===T}).map(function(z){return Ie.filter(function(T){return T.priority===z}).sort(function(T,L){return L.subPriority-T.subPriority})}).map(function(z){return z[0]}),u=ee(e);if(isNaN(u.getTime()))return new Date(NaN);var h=Ts(u,Ms(u)),c={},g=ta(kt),C;try{for(g.s();!(C=g.n()).done;){var D=C.value;if(!D.validate(h,ye))return new Date(NaN);var S=D.set(h,c,ye);Array.isArray(S)?(h=S[0],ch(c,S[1])):h=S}}catch(z){g.e(z)}finally{g.f()}return h}function vv(o){return o.match(hv)[1].replace(pv,"'")}(function(){const o=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Date Picker")};window.Vaadin.Flow.datepickerConnector={initLazy:t=>o(function(e){if(e.$connector)return;e.$connector={};const r=function(a){try{new Date().toLocaleDateString(a)}catch{return console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd"}let l=new Date(Date.UTC(1234,4,6)).toLocaleDateString(a,{timeZone:"UTC"});return l=l.replace(/([a-zA-Z]+)/g,"'$1'").replace("06","dd").replace("6","d").replace("05","MM").replace("5","M").replace("1234","yyyy"),l.includes("d")&&l.includes("M")&&l.includes("y")?l:(console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd")},i=o(function(a){if(!a||a.length===0)throw new Error("Array of custom date formats is null or empty");function s(v){if(v.includes("yyyy")&&!v.includes("yyyyy"))return v.replace("yyyy","yy");if(v.includes("YYYY")&&!v.includes("YYYYY"))return v.replace("YYYY","YY")}function l(v){return v.includes("y")?!v.includes("yyy"):v.includes("Y")?!v.includes("YYY"):!1}function d(v){if(e.$connector._lastParseStatus==="error")return;if(e.$connector._lastParseStatus==="successful"){e.$connector._lastParsedDate.day===v.getDate()&&e.$connector._lastParsedDate.month===v.getMonth()&&e.$connector._lastParsedDate.year%100===v.getFullYear()%100&&v.setFullYear(e.$connector._lastParsedDate.year);return}const k=Te(e.value);Co(k)&&k.getDate()===v.getDate()&&k.getMonth()===v.getMonth()&&k.getFullYear()%100===v.getFullYear()%100&&v.setFullYear(k.getFullYear())}function f(v){const k=a[0],O=Te(`${v.year}-${v.month+1}-${v.day}`);return dh(O,k)}function p(v,k,O){const I=_v(v,k,O);if(Co(I))return l(k)&&d(I),{day:I.getDate(),month:I.getMonth(),year:I.getFullYear()}}function y(v){const k=n();for(let O of a){if(!l(O)){const E=p(v,s(O),k);if(E)return e.$connector._lastParseStatus="successful",e.$connector._lastParsedDate=E,E}const $=p(v,O,k);if($)return e.$connector._lastParseStatus="successful",e.$connector._lastParsedDate=$,$}return e.$connector._lastParseStatus="error",!1}return{formatDate:f,parseDate:y}});function n(){const{referenceDate:a}=e.i18n;return a?new Date(a.year,a.month,a.day):new Date}e.$connector.updateI18n=o(function(a,s){const l=s&&s.dateFormats&&s.dateFormats.length>0;s&&s.referenceDate&&(s.referenceDate=en(new Date(s.referenceDate)));const d=l?s.dateFormats:[r(a)],f=i(d);e.i18n=Object.assign({},e.i18n,s,f)}),e.addEventListener("opened-changed",()=>e.$connector._lastParseStatus=void 0)})(t)}})();/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-time-picker-item",[De,Yi],{moduleId:"lumo-time-picker-item"});m("vaadin-time-picker-overlay",[ue,Xe,qi,_`
      :host {
        --_vaadin-time-picker-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-time-picker-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-time-picker-overlay"});const gv=_`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;m("vaadin-time-picker",[he,gv],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bv extends ji(A(F(w))){static get is(){return"vaadin-time-picker-item"}static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}b(bv);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yv=_`
  #overlay {
    width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;m("vaadin-time-picker-overlay",[de,yv],{moduleId:"vaadin-time-picker-overlay-styles"});class wv extends Gi(le(F(A(w)))){static get is(){return"vaadin-time-picker-overlay"}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}b(wv);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xv extends Qi(w){static get is(){return"vaadin-time-picker-scroller"}static get template(){return x`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-time-picker-items-container-border-width);
          border-style: var(--_vaadin-time-picker-items-container-border-style);
          border-color: var(--_vaadin-time-picker-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}b(xv);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Av extends Ki(A(w)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return x`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(t){super._inputElementValue=t,this._hasInputValue=t.length>0}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}b(Av);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oa="00:00:00.000",ia="23:59:59.999";m("vaadin-time-picker",Ve,{moduleId:"vaadin-time-picker-styles"});class mt extends os(io(A(P(w)))){static get is(){return"vaadin-time-picker"}static get template(){return x`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          opened="{{opened}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          overlay-class="[[overlayClass]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
          on-has-input-value-changed="__onComboBoxHasInputValueChanged"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,overlayClass:{type:String},__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:t=>{if(!t)return;const e=(i=0,n="00")=>(n+i).substr((n+i).length-n.length);let r=`${e(t.hours)}:${e(t.minutes)}`;return t.seconds!==void 0&&(r+=`:${e(t.seconds)}`),t.milliseconds!==void 0&&(r+=`.${e(t.milliseconds,"000")}`),r},parseTime:t=>{const e="(\\d|[0-1]\\d|2[0-3])",r="(\\d|[0-5]\\d)",i=r,n="(\\d{1,3})",s=new RegExp(`^${e}(?::${r}(?::${i}(?:\\.${n})?)?)?$`,"u").exec(t);if(s){if(s[4])for(;s[4].length<3;)s[4]+="0";return{hours:s[1],minutes:s[2],seconds:s[3],milliseconds:s[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}get __unparsableValue(){return this._inputElementValue&&!this.i18n.parseTime(this._inputElementValue)?this._inputElementValue:""}ready(){super.ready(),this.addController(new Le(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Pe(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._tooltipController=new Q(this),this._tooltipController.setShouldShow(t=>!t.opened),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(t){super._setFocused(t),t||(this.__commitValueChange(),document.hasFocus()&&this.validate())}__validDayDivisor(t){return!t||24*3600%t===0||t<1&&t%1*1e3%1===0}_onKeyDown(t){if(super._onKeyDown(t),this.readonly||this.disabled||this.__dropdownItems.length)return;const e=this.__validDayDivisor(this.step)&&this.step||60;t.keyCode===40?this.__onArrowPressWithStep(-e):t.keyCode===38&&this.__onArrowPressWithStep(e)}_onEscape(){}__onArrowPressWithStep(t){const e=this.__addStep(this.__getMsec(this.__memoValue),t,!0);this.__memoValue=e,this.__useMemo=!0,this._comboBoxValue=this.i18n.formatTime(e),this.__useMemo=!1,this.__commitValueChange()}__commitValueChange(){const t=this.__unparsableValue;this.__committedValue!==this.value?(this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.__committedUnparsableValue!==t&&(this.validate(),this.dispatchEvent(new CustomEvent("unparsable-change"))),this.__committedValue=this.value,this.__committedUnparsableValue=t}__getMsec(t){let e=(t&&t.hours||0)*60*60*1e3;return e+=(t&&t.minutes||0)*60*1e3,e+=(t&&t.seconds||0)*1e3,e+=t&&parseInt(t.milliseconds)||0,e}__getSec(t){let e=(t&&t.hours||0)*60*60;return e+=(t&&t.minutes||0)*60,e+=t&&t.seconds||0,e+=t&&t.milliseconds/1e3||0,e}__addStep(t,e,r){t===0&&e<0&&(t=24*60*60*1e3);const i=e*1e3,n=t%i;i<0&&n&&r?t-=n:i>0&&n&&r?t-=n-i:t+=i;const a=Math.floor(t/1e3/60/60);t-=a*1e3*60*60;const s=Math.floor(t/1e3/60);t-=s*1e3*60;const l=Math.floor(t/1e3);return t-=l*1e3,{hours:a<24?a:0,minutes:s,seconds:l,milliseconds:t}}__updateDropdownItems(t,e,r,i){const n=this.__validateTime(this.__parseISO(e||oa)),a=this.__getSec(n),s=this.__validateTime(this.__parseISO(r||ia)),l=this.__getSec(s);if(this.__dropdownItems=this.__generateDropdownList(a,l,i),i!==this.__oldStep){this.__oldStep=i;const d=this.__validateTime(this.__parseISO(this.value));this.__updateValue(d)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(t,e,r){if(r<15*60||!this.__validDayDivisor(r))return[];const i=[];r||(r=3600);let n=-r+t;for(;n+r>=t&&n+r<=e;){const a=this.__validateTime(this.__addStep(n*1e3,r));n+=r;const s=this.i18n.formatTime(a);i.push({label:s,value:s})}return i}_valueChanged(t,e){const r=this.__memoValue=this.__parseISO(t),i=this.__formatISO(r)||"";this.__keepCommittedValue||(this.__committedValue=t,this.__committedUnparsableValue=""),t!==""&&t!==null&&!r?this.value=e===void 0?"":e:t!==i?this.value=i:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(r),this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(t,e){if(t===""&&e===void 0)return;const r=this.__useMemo?this.__memoValue:this.i18n.parseTime(t),i=this.i18n.formatTime(r)||"";r?t!==i?this._comboBoxValue=i:(this.__keepCommittedValue=!0,this.__updateValue(r),this.__keepCommittedValue=!1):(this.value!==""&&t!==""&&(this.__keepInvalidInput=!0),this.__keepCommittedValue=!0,this.value="",this.__keepCommittedValue=!1)}__onComboBoxChange(t){t.stopPropagation(),this.__commitValueChange()}__onComboBoxHasInputValueChanged(){this._hasInputValue=this.$.comboBox._hasInputValue}__updateValue(t){const e=this.__formatISO(this.__validateTime(t))||"";this.value=e}__updateInputValue(t){const e=this.i18n.formatTime(this.__validateTime(t))||"";this._comboBoxValue=e}__validateTime(t){if(t){const e=this.__getStepSegment();t.hours=parseInt(t.hours),t.minutes=parseInt(t.minutes||0),t.seconds=e<3?void 0:parseInt(t.seconds||0),t.milliseconds=e<4?void 0:parseInt(t.milliseconds||0)}return t}__getStepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(t){return mt.properties.i18n.value().formatTime(t)}__parseISO(t){return mt.properties.i18n.value().parseTime(t)}_timeAllowed(t){const e=this.i18n.parseTime(this.min||oa),r=this.i18n.parseTime(this.max||ia);return(!this.__getMsec(e)||this.__getMsec(t)>=this.__getMsec(e))&&(!this.__getMsec(r)||this.__getMsec(t)<=this.__getMsec(r))}_onClearButtonClick(){}_onChange(){}_onInput(){}}b(mt);const Cv=_`
  ::slotted([slot='date-picker']) {
    margin-inline-end: 2px;
    --vaadin-input-field-top-end-radius: 0;
    --vaadin-input-field-bottom-end-radius: 0;
  }

  ::slotted([slot='time-picker']) {
    --vaadin-input-field-top-start-radius: 0;
    --vaadin-input-field-bottom-start-radius: 0;
  }
`;m("vaadin-date-time-picker",[Cv,Ze,Ct,ws],{moduleId:"lumo-date-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-date-time-picker",Ve,{moduleId:"vaadin-date-time-picker"});function Ys(o,t){for(;o;){if(o.properties&&o.properties[t])return o.properties[t];o=Object.getPrototypeOf(o)}}const Ws=Ys(tn,"i18n").value(),fr=Ys(mt,"i18n").value(),na=Object.keys(Ws),aa=Object.keys(fr);class sa extends N{constructor(t,e){super(t,`${e}-picker`,`vaadin-${e}-picker`,{initializer:(r,i)=>{const n=`__${e}Picker`;i[n]=r}})}}class kv extends yt(Fe(ne(A(P(w))))){static get template(){return x`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        .slots ::slotted([slot='date-picker']) {
          min-width: 0;
          flex: 1 1 auto;
        }

        .slots ::slotted([slot='time-picker']) {
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...Ws,...fr})},overlayClass:{type:String},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder, __datePicker)","__timePlaceholderChanged(timePlaceholder, __timePicker)","__stepChanged(step, __timePicker)","__initialPositionChanged(initialPosition, __datePicker)","__showWeekNumbersChanged(showWeekNumbers, __datePicker)","__requiredChanged(required, __datePicker, __timePicker)","__invalidChanged(invalid, __datePicker, __timePicker)","__disabledChanged(disabled, __datePicker, __timePicker)","__readonlyChanged(readonly, __datePicker, __timePicker)","__i18nChanged(i18n, __datePicker, __timePicker)","__autoOpenDisabledChanged(autoOpenDisabled, __datePicker, __timePicker)","__themeChanged(_theme, __datePicker, __timePicker)","__overlayClassChanged(overlayClass, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)","__labelOrAccessibleNameChanged(label, accessibleName, i18n, __datePicker, __timePicker)"]}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this)}get __inputs(){return[this.__datePicker,this.__timePicker]}get __formattedValue(){const[t,e]=this.__inputs.map(r=>r.value);return t&&e?[t,e].join("T"):""}ready(){super.ready(),this._datePickerController=new sa(this,"date"),this.addController(this._datePickerController),this._timePickerController=new sa(this,"time"),this.addController(this._timePickerController),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this._tooltipController=new Q(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(t=>t.__datePicker&&!t.__datePicker.opened&&t.__timePicker&&!t.__timePicker.opened),this.ariaTarget=this}focus(){this.__datePicker.focus()}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this.validate()}_shouldRemoveFocus(t){const e=t.relatedTarget,r=this.__datePicker._overlayContent;return!(this.__datePicker.contains(e)||this.__timePicker.contains(e)||r&&r.contains(e))}__syncI18n(t,e,r=Object.keys(e.i18n)){r.forEach(i=>{e.i18n&&e.i18n.hasOwnProperty(i)&&t.set(`i18n.${i}`,e.i18n[i])})}__changeEventHandler(t){t.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.validate(),this.__dispatchChange()),this.__dispatchChangeForValue=void 0}__addInputListeners(t){t.addEventListener("change",this.__changeEventHandler),t.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(t){t.removeEventListener("change",this.__changeEventHandler),t.removeEventListener("value-changed",this.__valueChangedEventHandler)}__isDefaultPicker(t,e){const r=this[`_${e}PickerController`];return r&&t===r.defaultNode}__datePickerChanged(t,e){t&&(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),this.__isDefaultPicker(t,"date")?(t.placeholder=this.datePlaceholder,t.invalid=this.invalid,t.initialPosition=this.initialPosition,t.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(t,this,na)):(this.datePlaceholder=t.placeholder,this.initialPosition=t.initialPosition,this.showWeekNumbers=t.showWeekNumbers,this.__syncI18n(this,t,na)),t.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),t.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),t.validate=()=>{},t._validateInput=()=>{})}__timePickerChanged(t,e){t&&(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),this.__isDefaultPicker(t,"time")?(t.placeholder=this.timePlaceholder,t.step=this.step,t.invalid=this.invalid,this.__syncI18n(t,this,aa)):(this.timePlaceholder=t.placeholder,this.step=t.step,this.__syncI18n(this,t,aa)),this.__updateTimePickerMinMax(),t.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const t=this.__parseDate(this.__datePicker.value),e=ie(this.__minDateTime,this.__maxDateTime),r=this.__timePicker.value;this.__minDateTime&&ie(t,this.__minDateTime)||e?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&ie(t,this.__maxDateTime)||e?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==r&&(this.__timePicker.value=r)}}__i18nChanged(t,e,r){e&&(e.i18n={...e.i18n,...t}),r&&(r.i18n={...r.i18n,...t})}__labelOrAccessibleNameChanged(t,e,r,i,n){const a=e||t||"";i&&(i.accessibleName=`${a} ${r.dateLabel||""}`.trim()),n&&(n.accessibleName=`${a} ${r.timeLabel||""}`.trim())}__datePlaceholderChanged(t,e){e&&(e.placeholder=t)}__timePlaceholderChanged(t,e){e&&(e.placeholder=t)}__stepChanged(t,e){e&&e.step!==t&&(e.step=t)}__initialPositionChanged(t,e){e&&(e.initialPosition=t)}__showWeekNumbersChanged(t,e){e&&(e.showWeekNumbers=t)}__invalidChanged(t,e,r){e&&(e.invalid=t),r&&(r.invalid=t)}__requiredChanged(t,e,r){e&&(e.required=t),r&&(r.required=t)}__disabledChanged(t,e,r){e&&(e.disabled=t),r&&(r.disabled=t)}__readonlyChanged(t,e,r){e&&(e.readonly=t),r&&(r.readonly=t)}__parseDate(t){return Te(t)}__formatDateISO(t,e){return t?tn.prototype._formatISO(t):e}__formatTimeISO(t){return fr.formatTime(t)}__parseTimeISO(t){return fr.parseTime(t)}__parseDateTime(t){const[e,r]=t.split("T");if(!(e&&r))return;const i=this.__parseDate(e);if(!i)return;const n=this.__parseTimeISO(r);if(n)return i.setHours(parseInt(n.hours)),i.setMinutes(parseInt(n.minutes||0)),i.setSeconds(parseInt(n.seconds||0)),i.setMilliseconds(parseInt(n.milliseconds||0)),i}__formatDateTime(t){if(!t)return"";const e=this.__formatDateISO(t,""),r=this.__dateToIsoTimeString(t);return`${e}T${r}`}__dateToIsoTimeString(t){return this.__formatTimeISO(this.__validateTime({hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds(),milliseconds:t.getMilliseconds()}))}__validateTime(t){if(t){const e=this.__getStepSegment();t.seconds=e<3?void 0:t.seconds,t.milliseconds=e<4?void 0:t.milliseconds}return t}checkValidity(){const t=this.__inputs.some(r=>!r.checkValidity()),e=this.required&&this.__inputs.some(r=>!r.value);return!(t||e)}__getStepSegment(){const t=this.step==null?60:parseFloat(this.step);if(t%3600===0)return 1;if(t%60===0||!t)return 2;if(t%1===0)return 3;if(t<1)return 4}__dateTimeEquals(t,e){return ie(t,e)?t.getHours()===e.getHours()&&t.getMinutes()===e.getMinutes()&&t.getSeconds()===e.getSeconds()&&t.getMilliseconds()===e.getMilliseconds():!1}__handleDateTimeChange(t,e,r,i){if(!r){this[t]="",this[e]="";return}const n=this.__parseDateTime(r);if(!n){this[t]=i;return}this.__dateTimeEquals(this[e],n)||(this[e]=n)}__valueChanged(t,e){this.__handleDateTimeChange("value","__selectedDateTime",t,e),e!==void 0&&(this.__dispatchChangeForValue=t),this.toggleAttribute("has-value",!!t),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(t,e){this.__handleDateTimeChange("min","__minDateTime",t,e),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__maxChanged(t,e){this.__handleDateTimeChange("max","__maxDateTime",t,e),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__selectedDateTimeChanged(t){const e=this.__formatDateTime(t);if(this.value!==e&&(this.value=e),!!(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[i,n]=this.value.split("T");this.__datePicker.value=i||"",this.__timePicker.value=n||"",this.__ignoreInputValueChange=!1}}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const t=this.__formattedValue,[e,r]=t.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),e&&r?t!==this.value&&(this.value=t):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(t,e,r){e&&(e.autoOpenDisabled=t),r&&(r.autoOpenDisabled=t)}__themeChanged(t,e,r){!e||!r||[e,r].forEach(i=>{t?i.setAttribute("theme",t):i.removeAttribute("theme")})}__overlayClassChanged(t,e,r){!e||!r||(e.overlayClass=t,r.overlayClass=t)}__pickersChanged(t,e){!t||!e||this.__isDefaultPicker(t,"date")===this.__isDefaultPicker(e,"time")&&(t.value?this.__valueChangedEventHandler():this.value&&(this.__selectedDateTimeChanged(this.__selectedDateTime),(this.min||this.max)&&this.validate()))}}b(kv);const Iv={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"};function Ov(o){return o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qs(o){return o.replace(/[\u0660-\u0669]/g,function(t){const e="\\u0"+t.charCodeAt(0).toString(16);return Iv[e]})}function js(o,t){const e=t.toLocaleTimeString(o),r=/[^\d\u0660-\u0669]/,i=e.match(new RegExp(`${r.source}+$`,"g"))||e.match(new RegExp(`^${r.source}+`,"g"));return i&&i[0].trim()}function Ev(o){let t=ln.toLocaleTimeString(o);const e=Gs(o);e&&t.startsWith(e)&&(t=t.replace(e,""));const r=t.match(/[^\u0660-\u0669\s\d]/);return r&&r[0]}function la(o,t){if(!t)return null;const e=t.split(/\s*/).map(Ov).join("\\s*"),r=new RegExp(e,"i"),i=o.match(r);if(i)return i[0]}const ln=new Date("August 19, 1975 23:15:30"),Tv=new Date("August 19, 1975 05:15:30");function Gs(o){return js(o,ln)}function Sv(o){return js(o,Tv)}function po(o){return parseInt(qs(o))}function Pv(o){return o=qs(o),o.length===1?o+="00":o.length===2&&(o+="0"),parseInt(o)}function Dv(o,t,e,r){let i=o;if(o.endsWith(e)?i=o.replace(" "+e,""):o.endsWith(r)&&(i=o.replace(" "+r,"")),t){let n=t<10?"0":"";n+=t<100?"0":"",n+=t,i+="."+n}else i+=".000";return o.endsWith(e)?i=i+" "+e:o.endsWith(r)&&(i=i+" "+r),i}(function(){const o=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker")};function t(e,r,i=0){e()?r():setTimeout(()=>t(e,r,200),i)}window.Vaadin.Flow.timepickerConnector={initLazy:e=>o(function(r){r.$connector||(r.$connector={},r.$connector.setLocale=o(function(i){let n;r.value&&r.value!==""&&(n=r.i18n.parseTime(r.value));try{ln.toLocaleTimeString(i)}catch{throw i="en-US",new Error("vaadin-time-picker: The locale "+i+" is not supported, falling back to default locale setting(en-US).")}const a=Gs(i),s=Sv(i),l=Ev(i),d=function(){return r.step&&r.step<60},f=function(){return r.step&&r.step<1};let p,y;r.i18n={formatTime:o(function(v){if(!v)return;const k=new Date;k.setHours(v.hours),k.setMinutes(v.minutes),k.setSeconds(v.seconds!==void 0?v.seconds:0);let O=k.toLocaleTimeString(i,{hour:"numeric",minute:"numeric",second:d()?"numeric":void 0});return f()&&(O=Dv(O,v.milliseconds,s,a)),O}),parseTime:o(function(v){if(v&&v===p&&y)return y;if(!v)return;const k=la(v,s),O=la(v,a),I=v.replace(k||"","").replace(O||"","").trim(),$=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+l+")?","g");let E=$.exec(I);if(E){E=po(E[0].replace(l,"")),k!==O&&(E===12&&k&&(E=0),E!==12&&O&&(E+=12));const B=$.exec(I),U=B&&$.exec(I),te=/[[\.][\d\u0660-\u0669]{1,3}$/;let J=U&&f()&&te.exec(I);return J&&J.index<=U.index&&(J=void 0),y=E!==void 0&&{hours:E,minutes:B?po(B[0].replace(l,"")):0,seconds:U?po(U[0].replace(l,"")):0,milliseconds:B&&U&&J?Pv(J[0].replace(".","")):0},p=v,y}})},n&&t(()=>r.$,()=>{const v=r.i18n.formatTime(n);r.inputElement.value!==v&&(r.inputElement.value=v,r.$.comboBox.value=v)})}))})(e)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.dndConnector={__ondragenterListener:function(o){const t=o.currentTarget.__dropEffect;o.currentTarget.hasAttribute("disabled")||(t&&(o.dataTransfer.dropEffect=t),t!=="none"&&(o.currentTarget.classList.contains("v-drag-over-target")?o.currentTarget["__skip-leave"]=!0:o.currentTarget.classList.add("v-drag-over-target"),o.preventDefault(),o.stopPropagation()))},__ondragoverListener:function(o){if(!o.currentTarget.hasAttribute("disabled")){const t=o.currentTarget.__dropEffect;t&&(o.dataTransfer.dropEffect=t),o.preventDefault(),o.stopPropagation()}},__ondragleaveListener:function(o){o.currentTarget["__skip-leave"]?o.currentTarget["__skip-leave"]=!1:o.currentTarget.classList.remove("v-drag-over-target"),o.stopPropagation()},__ondropListener:function(o){const t=o.currentTarget.__dropEffect;t&&(o.dataTransfer.dropEffect=t),o.currentTarget.classList.remove("v-drag-over-target"),o.preventDefault(),o.stopPropagation()},updateDropTarget:function(o){o.__active?(o.addEventListener("dragenter",this.__ondragenterListener,!1),o.addEventListener("dragover",this.__ondragoverListener,!1),o.addEventListener("dragleave",this.__ondragleaveListener,!1),o.addEventListener("drop",this.__ondropListener,!1)):(o.removeEventListener("dragenter",this.__ondragenterListener,!1),o.removeEventListener("dragover",this.__ondragoverListener,!1),o.removeEventListener("dragleave",this.__ondragleaveListener,!1),o.removeEventListener("drop",this.__ondropListener,!1),o.classList.remove("v-drag-over-target"))},__dragstartListener:function(o){o.stopPropagation(),o.dataTransfer.setData("text/plain",""),o.currentTarget.hasAttribute("disabled")?o.preventDefault():(o.currentTarget.__effectAllowed&&(o.dataTransfer.effectAllowed=o.currentTarget.__effectAllowed),o.currentTarget.classList.add("v-dragged"))},__dragendListener:function(o){o.currentTarget.classList.remove("v-dragged")},updateDragSource:function(o){o.draggable?(o.addEventListener("dragstart",this.__dragstartListener,!1),o.addEventListener("dragend",this.__dragendListener,!1)):(o.removeEventListener("dragstart",this.__dragstartListener,!1),o.removeEventListener("dragend",this.__dragendListener,!1))}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-field-outline",_`
    :host {
      transition: opacity 0.3s;
      -webkit-mask-image: none !important;
      mask-image: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      inset: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius-s);
      transition: box-shadow 0.3s;
    }

    :host([context$='checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context$='radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context$='item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-field-outline"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-user-tags-overlay",[ue,_`
      [part='overlay'] {
        will-change: opacity, transform;
      }

      :host([opening]) [part='overlay'] {
        animation: 0.1s lumo-user-tags-enter ease-out both;
      }

      @keyframes lumo-user-tags-enter {
        0% {
          opacity: 0;
        }
      }

      :host([closing]) [part='overlay'] {
        animation: 0.1s lumo-user-tags-exit both;
      }

      @keyframes lumo-user-tags-exit {
        100% {
          opacity: 0;
        }
      }
    `],{moduleId:"lumo-user-tags-overlay"});m("vaadin-user-tag",_`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zv extends A(F(w)){static get is(){return"vaadin-user-tag"}static get template(){return x`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(t){t!=null&&this.style.setProperty("--vaadin-user-tag-color",`var(--vaadin-user-color-${t})`)}_onClick(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}b(zv);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mv=_`
  :host {
    background: transparent;
    box-shadow: none;
  }

  [part='overlay'] {
    box-shadow: none;
    background: transparent;
    position: relative;
    left: -4px;
    padding: 4px;
    outline: none;
    overflow: visible;
  }

  ::slotted([part='tags']) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  :host([dir='rtl']) [part='overlay'] {
    left: auto;
    right: -4px;
  }

  [part='content'] {
    padding: 0;
  }

  :host([opening]),
  :host([closing]) {
    animation: 0.14s user-tags-overlay-dummy-animation;
  }

  @keyframes user-tags-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;m("vaadin-user-tags-overlay",[de,Mv]);class $v extends Ge(le(F(A(w)))){static get is(){return"vaadin-user-tags-overlay"}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}b($v);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const da=(o,t)=>new Promise(e=>{const r=()=>{o.removeEventListener(t,r),e()};o.addEventListener(t,r)});class Bv extends w{static get is(){return"vaadin-user-tags"}static get template(){return x`
      <style>
        :host {
          position: absolute;
        }
      </style>
      <vaadin-user-tags-overlay
        id="overlay"
        modeless
        opened="[[opened]]"
        no-vertical-overlap
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1},flashing:{type:Boolean,value:!1},target:{type:Object,observer:"__targetChanged"},users:{type:Array,value:()=>[]},duration:{type:Number,value:200},delay:{type:Number,value:2e3},__flashQueue:{type:Array,value:()=>[]},__isTargetVisible:{type:Boolean,value:!1}}}constructor(){super(),this.__targetVisibilityObserver=new IntersectionObserver(([t])=>{this.__onTargetVisibilityChange(t.isIntersecting)},{threshold:1})}get wrapper(){return this.$.overlay.querySelector('[part="tags"]')}connectedCallback(){super.connectedCallback(),this.target&&this.__targetVisibilityObserver.observe(this.target)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1,this.target&&this.__targetVisibilityObserver.unobserve(this.target)}ready(){super.ready(),this.$.overlay.renderer=t=>{if(!t.firstChild){const e=document.createElement("div");e.setAttribute("part","tags"),t.appendChild(e)}},this.$.overlay.requestContentUpdate()}__onTargetVisibilityChange(t){if(this.__isTargetVisible=t,t&&this.__flashQueue.length>0&&!this.flashing){this.flashTags(this.__flashQueue.shift());return}if(t&&this.hasFocus){this.opened=!0;return}!t&&this.opened&&(this.opened=!1)}__targetChanged(t,e){this.$.overlay.positionTarget=t,e&&this.__targetVisibilityObserver.unobserve(e),t&&this.__targetVisibilityObserver.observe(t)}_hasFocusChanged(t){t&&this.flashing&&this.stopFlash()}createUserTag(t){const e=document.createElement("vaadin-user-tag");return e.name=t.name,e.uid=t.id,e.colorIndex=t.colorIndex,e}getTagForUser(t){return Array.from(this.wrapper.children).find(e=>e.uid===t.id)}getChangedTags(t,e){const r=e.map(n=>this.getTagForUser(n));return{added:t.map(n=>this.getTagForUser(n)||this.createUserTag(n)),removed:r}}getChangedUsers(t,e){const r=[],i=[];e.forEach(s=>{s.removed.forEach(l=>{i.push(l)});for(let l=s.addedCount-1;l>=0;l--)r.push(t[s.index+l])});const n=r.filter(s=>!i.some(l=>s.id===l.id)),a=i.filter(s=>!r.some(l=>s.id===l.id));return{addedUsers:n,removedUsers:a}}applyTagsStart({added:t,removed:e}){const r=this.wrapper;e.forEach(i=>{i&&(i.classList.add("removing"),i.classList.remove("show"))}),t.forEach(i=>r.insertBefore(i,r.firstChild))}applyTagsEnd({added:t,removed:e}){const r=this.wrapper;e.forEach(i=>{i&&i.parentNode===r&&r.removeChild(i)}),t.forEach(i=>i&&i.classList.add("show"))}setUsers(t){this.requestContentUpdate();const e=Ja(t,this.users);if(e.length===0)return;const{addedUsers:r,removedUsers:i}=this.getChangedUsers(t,e);if(r.length===0&&i.length===0)return;const n=this.getChangedTags(r,i);if(this.__flashQueue.length>0&&i.forEach((a,s)=>{n.removed[s]!==null&&this.__flashQueue.forEach(l=>{l.some(d=>d.uid===a.id)&&this.splice("__flashQueue",s,1)})}),this.opened&&this.hasFocus)this.updateTags(t,n);else if(r.length>0&&document.visibilityState!=="hidden"){const a=n.added,s=n.removed;this.updateTagsSync(t,{added:[],removed:s}),this.flashing||!this.__isTargetVisible?this.push("__flashQueue",a):this.flashTags(a)}else this.updateTagsSync(t,n)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(t=>{t.classList.contains("removing")||t.classList.add("show")})}flashTags(t){this.flashing=!0;const e=this.wrapper,r=Array.from(e.children);r.forEach(i=>{i.style.display="none"}),t.forEach(i=>{e.insertBefore(i,e.firstChild)}),this.flashPromise=new Promise(i=>{da(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=ce.debounce(this._debounceFlashStart,Se.after(this.duration+this.delay),()=>{this.hasFocus||t.forEach(n=>n.classList.remove("show")),this._debounceFlashEnd=ce.debounce(this._debounceFlashEnd,Se.after(this.duration),()=>{const n=()=>{r.forEach(a=>{a.style.display="block"}),this.flashing=!1,i()};this.hasFocus?n():(da(this.$.overlay,"animationend").then(()=>{n()}),this.opened=!1)})})})}).then(()=>{if(this.__flashQueue.length>0){const i=this.__flashQueue[0];this.splice("__flashQueue",0,1),this.flashTags(i)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(t,e){this.applyTagsStart(e),this._debounceRender=ce.debounce(this._debounceRender,Se.after(this.duration),()=>{this.set("users",t),this.applyTagsEnd(e),t.length===0&&this.opened&&(this.opened=!1)})}updateTagsSync(t,e){this.applyTagsStart(e),this.set("users",t),this.applyTagsEnd(e)}show(){this.hasFocus=!0,this.__isTargetVisible&&(this.opened=!0)}hide(){this.hasFocus=!1,this.opened=!1}requestContentUpdate(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}b(Bv);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rv extends A(F(w)){static get is(){return"vaadin-field-outline"}static get template(){return x`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(t){this.toggleAttribute("has-active-user",!!t);const e=t?`var(--vaadin-user-color-${t.colorIndex})`:"transparent",r="--_active-user-color";this.style.setProperty(r,e),this._field&&this._field.style.setProperty(r,e)}}b(Rv);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fv=(o,t)=>{switch(t){case"vaadin-big-decimal-field":case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-email-field":case"vaadin-integer-field":case"vaadin-number-field":case"vaadin-password-field":case"vaadin-select":case"vaadin-text-area":case"vaadin-text-field":case"vaadin-time-picker":return o.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return o.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return o.shadowRoot.querySelector('[part="radio"]');default:return o}},fo=new WeakMap,Lv=o=>{if(!fo.has(o)){const t=o.tagName.toLowerCase(),e=Fv(o,t);e.style.position="relative",t.endsWith("text-area")&&(e.style.overflow="visible");const r=document.createElement("style");r.textContent=`
      :host([active]) [part="outline"],
      :host([focus-ring]) [part="outline"] {
        display: none;
      }
    `,o.shadowRoot.appendChild(r);const i=document.createElement("vaadin-field-outline");(e===o?o.shadowRoot:e).appendChild(i),i.setAttribute("context",t),fo.set(o,{root:o,target:e,outline:i})}return fo.get(o)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dn{constructor(t){this.component=t,this.initTags(t)}getFields(){return[this.component]}getFieldIndex(t){return this.getFields().indexOf(t)}getFocusTarget(t){return this.component}initTags(t){const e=document.createElement("vaadin-user-tags");t.shadowRoot.appendChild(e),e.target=t,this._tags=e,t.addEventListener("mouseenter",r=>{r.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=ce.debounce(this._mouseDebouncer,Se.after(200),()=>{this._mouse&&this._tags.show()}))}),t.addEventListener("mouseleave",r=>{r.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),t.addEventListener("vaadin-highlight-show",r=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),t.addEventListener("vaadin-highlight-hide",r=>{this._hasFocus=!1,this._mouse||(this._debouncer=ce.debounce(this._debouncer,Se.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",r=>{r.relatedTarget!==t&&(this._mouse=!1,t.hasAttribute("focused")||this._tags.hide())})}setOutlines(t){const e=this.getFields();e.forEach((r,i)=>{const{outline:n}=Lv(r),a=e.length===1?0:t.map(s=>s.fieldIndex).indexOf(i);n.user=t[a]})}showOutline(t){this.fire("show",t)}hideOutline(t){this.fire("hide",t)}fire(t,e){this.component.dispatchEvent(new CustomEvent(`vaadin-highlight-${t}`,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(e)}}))}redraw(t){this._tags.setUsers(t),this.setOutlines(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tt extends dn{constructor(t){super(t),this.addListeners(t)}addListeners(t){t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}onFocusIn(t){const e=this.getFocusTarget(t);this.showOutline(e)}onFocusOut(t){const e=this.getFocusTarget(t);this.hideOutline(e)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Nv extends tt{getFields(){return this.component.__checkboxes}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).find(r=>e.includes(r))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qs extends dn{constructor(t){super(t),this.datePicker=t,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(t)}addListeners(t){this.overlay=t.$.overlay,t.addEventListener("blur",e=>this.onBlur(e),!0),t.addEventListener("opened-changed",e=>this.onOpenedChanged(e)),this.overlay.addEventListener("focusout",e=>this.onOverlayFocusOut(e)),t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}isEventInOverlay(t){return this.datePicker._overlayContent&&this.datePicker._overlayContent.contains(t)}onBlur(t){this.datePicker._fullscreen&&!this.isEventInOverlay(t.relatedTarget)&&(this.fullscreenFocus=!0)}onFocusIn(t){if(!this.isEventInOverlay(t.relatedTarget)){if(this.blurWhileOpened){this.blurWhileOpened=!1;return}this.showOutline(this.datePicker)}}onFocusOut(t){this.fullscreenFocus||this.isEventInOverlay(t.relatedTarget)||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(t){this.datePicker.contains(t.relatedTarget)||(this.blurWhileOpened=!0)}onOpenedChanged(t){t.detail.value===!0&&this.fullscreenFocus&&(this.fullscreenFocus=!1,this.showOutline(this.datePicker)),t.detail.value===!1&&this.blurWhileOpened&&(this.blurWhileOpened=!1,this.hideOutline(this.datePicker))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vv extends Qs{constructor(t,e){super(t),this.component=e}getFieldIndex(){return 0}}class Hv extends tt{constructor(t,e){super(t),this.component=e,this.timePicker=t}getFocusTarget(t){return this.timePicker}getFieldIndex(){return 1}}class Uv extends dn{constructor(t){super(t);const[e,r]=this.getFields();this.dateObserver=new Vv(e,t),this.timeObserver=new Hv(r,t)}getFields(){return this.component.__inputs}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yv extends tt{getFields(){return this.component.items||[]}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).find(r=>e.includes(r))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wv extends tt{getFields(){return this.component.__radioButtons}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).find(r=>e.includes(r))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qv extends tt{constructor(t){super(t),this.blurWhileOpened=!1,this.overlay=t._overlayElement}addListeners(t){super.addListeners(t),t.addEventListener("opened-changed",e=>{t._phone&&e.detail.value===!1&&this.hideOutline(t)})}onFocusIn(t){this.overlay.contains(t.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(t)}onFocusOut(t){this.overlay.contains(t.relatedTarget)||super.onFocusOut(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jv=o=>{let t;switch(o.tagName.toLowerCase()){case"vaadin-date-picker":t=new Qs(o);break;case"vaadin-date-time-picker":t=new Uv(o);break;case"vaadin-select":t=new qv(o);break;case"vaadin-checkbox-group":t=new Nv(o);break;case"vaadin-radio-group":t=new Wv(o);break;case"vaadin-list-box":t=new Yv(o);break;default:t=new tt(o)}return t};class Gv{constructor(t){this.host=t,this.user=null,this.users=[]}get user(){return this._user}set user(t){if(this._user=t,t){const e=`${t.name} started editing`,{label:r}=this.host;xe(r?`${e} ${r}`:e)}}hostConnected(){this.redraw()}addUser(t){t&&(this.users.push(t),this.redraw(),this.user=t)}setUsers(t){Array.isArray(t)&&(this.users=t,this.redraw(),this.user=t[t.length-1]||null)}removeUser(t){if(t&&t.id!==void 0){let e;for(let r=0;r<this.users.length;r++)if(this.users[r].id===t.id){e=r;break}e!==void 0&&(this.users.splice(e,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw([...this.users].reverse())}}class Qv extends HTMLElement{static get is(){return"vaadin-field-highlighter"}static init(t){if(!t._highlighterController){const e=new Gv(t);t.setAttribute("has-highlighter",""),e.observer=jv(t),t.addController(e),t._highlighterController=e}return t._highlighterController}static addUser(t,e){this.init(t).addUser(e)}static removeUser(t,e){this.init(t).removeUser(e)}static setUsers(t,e){this.init(t).setUsers(e)}}b(Qv);m("vaadin-form-layout",_`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kv extends Qe(P(A(w))){static get template(){return x`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const t={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(r=>{r.type==="attributes"&&(r.attributeName==="colspan"||r.attributeName==="hidden")&&this._updateLayout()})}),[...this.children].forEach(e=>{this.__mutationObserver.observe(e,t)}),this.__childObserver=new MutationObserver(e=>{const r=[],i=[];e.forEach(n=>{r.push(...this._getObservableNodes(n.addedNodes)),i.push(...this._getObservableNodes(n.removedNodes))}),r.forEach(n=>{this.__mutationObserver.observe(n,t)}),(r.length>0||i.length>0)&&this._updateLayout()}),this.__childObserver.observe(this,{childList:!0})}_getObservableNodes(t){const e=["template","style","dom-repeat","dom-if"];return Array.from(t).filter(r=>r.nodeType===Node.ELEMENT_NODE&&e.indexOf(r.localName.toLowerCase())===-1)}_naturalNumberOrOne(t){return typeof t=="number"&&t>=1&&t<1/0?Math.floor(t):1}_isValidCSSLength(t){return t==="inherit"||t==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${t}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(t,e){try{if(!Array.isArray(t))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(t.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');t.forEach(r=>{if(this._naturalNumberOrOne(r.columns)!==r.columns)throw new Error(`Invalid 'columns' value of ${r.columns}, a natural number is required.`);if(r.minWidth!==void 0&&!this._isValidCSSLength(r.minWidth))throw new Error(`Invalid 'minWidth' value of ${r.minWidth}, a valid CSS length required.`);if(r.labelsPosition!==void 0&&["aside","top"].indexOf(r.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${r.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(r){e&&e!==t?(console.warn(`${r.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(console.warn(`${r.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(t){t.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let t;const e="background-position";this.responsiveSteps.forEach(r=>{this.$.layout.style.setProperty(e,r.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(t=r)}),this.$.layout.style.removeProperty(e),t&&(this._columnCount=t.columns,this._labelsOnTop=t.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}_updateLayout(){const t=getComputedStyle(this),e=t.getPropertyValue("--vaadin-form-layout-column-spacing"),r=t.direction,i=`margin-${r==="ltr"?"left":"right"}`,n=`margin-${r==="ltr"?"right":"left"}`,a=this.offsetWidth;let s=0;Array.from(this.children).filter(l=>l.localName==="br"||getComputedStyle(l).display!=="none").forEach((l,d,f)=>{if(l.localName==="br"){s=0;return}let p;p=this._naturalNumberOrOne(parseFloat(l.getAttribute("colspan"))),p=Math.min(p,this._columnCount);const y=p/this._columnCount;l.style.width=`calc(${y*99.9}% - ${1-y} * ${e})`,s+p>this._columnCount&&(s=0),s===0?l.style.setProperty(i,"0px"):l.style.removeProperty(i);const v=d+1,k=v<f.length&&f[v].localName==="br";if(s+p===this._columnCount)l.style.setProperty(n,"0px");else if(k){const O=(this._columnCount-s-p)/this._columnCount;l.style.setProperty(n,`calc(${O*a}px + ${O} * ${e})`)}else l.style.removeProperty(n);s=(s+p)%this._columnCount,l.localName==="vaadin-form-item"&&(this._labelsOnTop?l.getAttribute("label-position")!=="top"&&(l.__useLayoutLabelPosition=!0,l.setAttribute("label-position","top")):l.__useLayoutLabelPosition&&(delete l.__useLayoutLabelPosition,l.removeAttribute("label-position")))})}_onResize(){this._selectResponsiveStep()}}b(Kv);m("vaadin-form-item",_`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '\\2022');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xv extends A(w){static get template(){return x`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(t){return t.ariaTarget||t}__linkLabelToField(t){ka(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(t){Ca(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__onLabelClick(){const t=this.__fieldNode;t&&(t.focus(),t.click())}__getValidateFunction(t){return t.validate||t.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const t=this.$.labelSlot.assignedElements()[0];t&&(this.__labelNode=t,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${ke()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const t=this.$.contentSlot.assignedElements();t.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const e=t.find(r=>!!this.__getValidateFunction(r));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(t){t?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const t=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",t===!1)}}b(Xv);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zv=o=>class extends Fl(o){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(t,e){t==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(t)&&this._updateFlexAndWidth(),t==="frozen"&&!this.frozen&&(this.frozen=e),t==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=e),t==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=e),t==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=e)}_groupOrderChanged(t,e){if(e){const r=e.slice(0);if(!t){r.forEach(s=>{s._order=0});return}const i=/(0+)$/u.exec(t).pop().length,n=~~(Math.log(e.length)/Math.LN10)+1,a=10**(i-n);r[0]&&r[0]._order&&r.sort((s,l)=>s._order-l._order),Ll(r,a,t)}}_groupReorderStatusChanged(t,e){t===void 0||e===void 0||e.forEach(r=>{r._reorderStatus=t})}_groupResizableChanged(t,e){t===void 0||e===void 0||e.forEach(r=>{r.resizable=t})}_updateVisibleChildColumns(t){this._visibleChildColumns=Array.prototype.filter.call(t,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const t=this._visibleChildColumns.reduce((e,r)=>(e+=` + ${(r.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${t})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(t,e)=>t+e.flexGrow,0))}}__scheduleAutoFreezeWarning(t,e){if(this._grid){const r=e.replace(/([A-Z])/gu,"-$1").toLowerCase(),i=t[0][e]||t[0].hasAttribute(r);t.every(a=>(a[e]||a.hasAttribute(r))===i)||(this._grid.__autoFreezeWarningDebouncer=ce.debounce(this._grid.__autoFreezeWarningDebouncer,$a,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(r=>{r.frozen=t}))}_groupFrozenToEndChanged(t,e){e===void 0||t===void 0||t!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(r=>{r.frozenToEnd=t}))}_groupHiddenChanged(t){(t||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const t=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(t||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(t=>{t.hidden=this.hidden})}_colSpanChanged(t,e,r){e&&(e.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(e,t)),r&&(r.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(r,t))}_getChildColumns(t){return pn.getColumns(t)}_addNodeObserver(){this._observer=new pn(this,()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()}),this._observer.flush()}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Jv extends Zv(w){static get is(){return"vaadin-grid-column-group"}}b(Jv);m("vaadin-grid",_`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});m("vaadin-grid-sorter",_`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ks=document.createElement("template");Ks.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Ks.content);m("vaadin-grid-sorter",_`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const eg=o=>class extends o{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,r){r!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return e===null?"":e+1}_onClick(e){if(e.defaultPrevented)return;const r=this.getRootNode().activeElement;this!==r&&this.contains(r)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tg extends eg(A(F(w))){static get template(){return x`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}b(tg);(function(){const o=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Grid")};window.Vaadin.Flow.gridConnector={initLazy:t=>o(function(e){if(e.$connector)return;const r=e._dataProviderController;r.ensureFlatIndexHierarchyOriginal=r.ensureFlatIndexHierarchy,r.ensureFlatIndexHierarchy=o(function(u){const{item:h}=this.getFlatIndexContext(u);if(!h||!this.isExpanded(h))return;e.$connector.hasCacheForParentKey(e.getItemId(h))?this.ensureFlatIndexHierarchyOriginal(u):e.$connector.beforeEnsureFlatIndexHierarchy(u,h)}),r.isLoadingOriginal=r.isLoading,r.isLoading=o(function(){return e.$connector.hasEnsureSubCacheQueue()||this.isLoadingOriginal()});const i={},n={},a={},s=50,l=20;let d=[],f,p=[],y;const v=150;let k,O={};const I="null";O[I]=[0,0];const $=["SINGLE","NONE","MULTI"];let E={},B="SINGLE",U=!1;e.size=0,e.itemIdPath="key";function te(u){return{[e.itemIdPath]:u}}e.$connector={},e.$connector.hasCacheForParentKey=o(u=>a[u]!==void 0&&a[u].size!==void 0),e.$connector.hasEnsureSubCacheQueue=o(()=>p.length>0),e.$connector.hasParentRequestQueue=o(()=>d.length>0),e.$connector.hasRootRequestQueue=o(()=>Object.keys(i).length>0||!!k&&k.isActive()),e.$connector.beforeEnsureFlatIndexHierarchy=o(function(u,h){p.push({flatIndex:u,itemkey:e.getItemId(h)}),y=ae.debounce(y,fn,()=>{for(;p.length;)e.$connector.flushEnsureSubCache()})}),e.$connector.doSelection=o(function(u,h){B==="NONE"||!u.length||h&&e.hasAttribute("disabled")||(B==="SINGLE"&&(E={}),u.forEach(c=>{c&&(E[c.key]=c,c.selected=!0,h&&e.$server.select(c.key));const g=!e.activeItem||!c||c.key!=e.activeItem.key;!h&&B==="SINGLE"&&g&&(e.activeItem=c)}),e.selectedItems=Object.values(E))}),e.$connector.doDeselection=o(function(u,h){if(B==="NONE"||!u.length||h&&e.hasAttribute("disabled"))return;const c=e.selectedItems.slice();for(;u.length;){const g=u.shift();for(let C=0;C<c.length;C++){const D=c[C];if(g&&g.key===D.key){c.splice(C,1);break}}g&&(delete E[g.key],delete g.selected,h&&e.$server.deselect(g.key))}e.selectedItems=c}),e.__activeItemChanged=o(function(u,h){B=="SINGLE"&&(u?E[u.key]||e.$connector.doSelection([u],!0):h&&E[h.key]&&(e.__deselectDisallowed?e.activeItem=h:e.$connector.doDeselection([h],!0)))}),e._createPropertyObserver("activeItem","__activeItemChanged",!0),e.__activeItemChangedDetails=o(function(u,h){e.__disallowDetailsOnClick||u==null&&h===void 0||(u&&!u.detailsOpened?e.$server.setDetailsVisible(u.key):e.$server.setDetailsVisible(null))}),e._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),e.$connector._getSameLevelPage=o(function(u,h,c){if((h.parentItem?e.getItemId(h.parentItem):I)===u)return Math.floor(c/e.pageSize);const{parentCache:C,parentCacheIndex:D}=h;return C?this._getSameLevelPage(u,C,D):null}),e.$connector.flushEnsureSubCache=o(function(){const u=p.shift();return u?(r.ensureFlatIndexHierarchyOriginal(u.flatIndex),!0):!1}),e.$connector.flushParentRequests=o(function(){let u=d.splice(0,l);return u.length?(e.$server.setParentRequestedRanges(u),!0):!1}),e.$connector.beforeParentRequest=o(function(u,h,c){d.push({firstIndex:u,size:h,parentKey:c}),f=ae.debounce(f,ht.after(s),()=>{for(;d.length;)e.$connector.flushParentRequests()})}),e.$connector.fetchPage=o(function(u,h,c){const g=e._getRenderedRows();let C=g.length>0?g[0].index:0,D=g.length>0?g[g.length-1].index:0,S=D-C,z=Math.max(0,C-S),T=Math.min(D+S,e._flatSize),L=h,Z=h;for(let Oe=z;Oe<=T;Oe++){const{cache:dl,index:ul}=r.getFlatIndexContext(Oe),so=e.$connector._getSameLevelPage(c,dl,ul);so!==null&&(L=Math.min(L,so),Z=Math.max(Z,so))}let me=Math.max(0,L),_e=c!==I?Z:Math.min(Z,Math.floor(e.size/e.pageSize)),ve=O[c];if(ve||(ve=[-1,-1]),ve[0]!=me||ve[1]!=_e){ve=[me,_e],O[c]=ve;let Oe=_e-me+1;u(me*e.pageSize,Oe*e.pageSize)}}),e.dataProvider=o(function(u,h){if(u.pageSize!=e.pageSize)throw"Invalid pageSize";let c=u.page;if(u.parentItem){let g=e.getItemId(u.parentItem);n[g]||(n[g]={});const C=r.getItemContext(u.parentItem);a[g]&&a[g][c]&&C.subCache?(c=Math.min(c,Math.floor(a[g].size/e.pageSize)),p=[],h(a[g][c],a[g].size)):(n[g][c]=h,e.$connector.fetchPage((D,S)=>e.$connector.beforeParentRequest(D,S,u.parentItem.key),c,g))}else{if(c=Math.min(c,Math.floor(e.size/e.pageSize)),e.size===0){h([],0);return}a[I]&&a[I][c]?h(a[I][c]):(i[c]=h,k=ae.debounce(k,ht.after(e._hasData?v:0),()=>{e.$connector.fetchPage((g,C)=>e.$server.setRequestedRange(g,C),c,I)}))}}),e.$connector.setSorterDirections=o(function(u){U=!0,setTimeout(o(()=>{try{const h=Array.from(e.querySelectorAll("vaadin-grid-sorter"));e._sorters.forEach(c=>{h.includes(c)||h.push(c)}),h.forEach(c=>{c.direction=null}),e.multiSortPriority!=="append"&&(u=u.reverse()),u.forEach(({column:c,direction:g})=>{h.forEach(C=>{C.getAttribute("path")===c&&(C.direction=g)})})}finally{U=!1}}))}),e._updateItem=o(function(u,h){Ot.prototype._updateItem.call(e,u,h),u.hidden||Array.from(u.children).forEach(c=>{c._content&&c._content.__templateInstance&&c._content.__templateInstance.children&&Array.from(c._content.__templateInstance.children).forEach(g=>{g._attachRenderedComponentIfAble&&g._attachRenderedComponentIfAble(),g.children&&Array.from(g.children).forEach(C=>{C._attachRenderedComponentIfAble&&C._attachRenderedComponentIfAble()})})}),B===$[1]&&(u.removeAttribute("aria-selected"),Array.from(u.children).forEach(c=>c.removeAttribute("aria-selected")))});const J=o(function(u,h){if(u==null||e.$server.updateExpandedState==null)return;let c=e.getItemId(u);e.$server.updateExpandedState(c,h)});e.expandItem=o(function(u){J(u,!0),Ot.prototype.expandItem.call(e,u)}),e.collapseItem=o(function(u){J(u,!1),Ot.prototype.collapseItem.call(e,u)});const pe=function(u){if(!u||!Array.isArray(u))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(u);let h=Array.from(e.detailsOpenedItems),c=!1;for(let g=0;g<u.length;++g){const C=u[g];C&&(C.detailsOpened?e._getItemIndexInArray(C,h)<0&&h.push(C):e._getItemIndexInArray(C,h)>=0&&h.splice(e._getItemIndexInArray(C,h),1),E[C.key]&&(E[C.key]=C,C.selected=!0,c=!0))}e.detailsOpenedItems=h,c&&e.selectedItems.splice(0,e.selectedItems.length,...Object.values(E))},ye=function(u,h){let c;if((h||I)!==I){c=a[h][u];const g=te(h),C=r.getItemContext(g);if(C&&C.subCache){const D=n[h],S=D&&D[u];Ie(u,c,S,C.subCache)}}else c=a[I][u],Ie(u,c,i[u],r.rootCache);return c},Ie=function(u,h,c,g){if(!c){let C=u*e.pageSize,D=C+e.pageSize;if(h){if(g&&g.items)for(let S=C;S<D;S++)g.items[S]&&(g.items[S]=h[S-C])}else if(g&&g.items)for(let S=C;S<D;S++)delete g.items[S]}},He=function(){W(),e.__updateVisibleRows()},W=function(){r.recalculateFlatSize(),e._flatSize=r.flatSize},X=function(u){if(!u||!e.$||e.$.items.childElementCount===0)return;const h=u.map(g=>g.key),c=e._getRenderedRows().filter(g=>g._item&&h.includes(g._item.key)).map(g=>g.index);c.length>0&&e.__updateVisibleRows(c[0],c[c.length-1])};e.$connector.set=o(function(u,h,c){if(u%e.pageSize!=0)throw"Got new data to index "+u+" which is not aligned with the page size of "+e.pageSize;let g=c||I;const C=u/e.pageSize,D=Math.ceil(h.length/e.pageSize);for(let S=0;S<D;S++){let z=C+S,T=h.slice(S*e.pageSize,(S+1)*e.pageSize);a[g]||(a[g]={}),a[g][z]=T,e.$connector.doSelection(T.filter(Z=>Z.selected)),e.$connector.doDeselection(T.filter(Z=>!Z.selected&&E[Z.key]));const L=ye(z,g);L&&(pe(L),X(L))}});const fe=function(u){let h=u.parentUniqueKey||I;if(a[h]){for(let c in a[h])for(let g in a[h][c])if(e.getItemId(a[h][c][g])===e.getItemId(u))return{page:c,index:g,parentKey:h}}return null};e.$connector.updateHierarchicalData=o(function(u){let h=[];for(let g=0;g<u.length;g++){let C=fe(u[g]);if(C){a[C.parentKey][C.page][C.index]=u[g];let D=C.parentKey+":"+C.page;h[D]||(h[D]={parentKey:C.parentKey,page:C.page})}}let c=Object.keys(h);for(let g=0;g<c.length;g++){let C=h[c[g]];const D=ye(C.page,C.parentKey);D&&(pe(D),X(D))}}),e.$connector.updateFlatData=o(function(u){for(let h=0;h<u.length;h++){let c=fe(u[h]);if(c){a[c.parentKey][c.page][c.index]=u[h];const g=parseInt(c.page)*e.pageSize+parseInt(c.index),{rootCache:C}=r;C.items[g]&&(C.items[g]=u[h])}}pe(u),X(u)}),e.$connector.clearExpanded=o(function(){e.expandedItems=[],p=[],d=[]}),e.$connector.clear=o(function(u,h,c){let g=c||I;if(!a[g]||Object.keys(a[g]).length===0)return;if(u%e.pageSize!=0)throw"Got cleared data for index "+u+" which is not aligned with the page size of "+e.pageSize;let C=Math.floor(u/e.pageSize),D=Math.ceil(h/e.pageSize);for(let T=0;T<D;T++){let L=C+T,Z=a[g][L];e.$connector.doDeselection(Z.filter(_e=>E[_e.key])),Z.forEach(_e=>e.closeItemDetails(_e)),delete a[g][L];const me=ye(L,c);me&&pe(me),X(Z)}let S=r.rootCache;if(c){const T=te(g);S=r.getItemContext(T).subCache}const z=u+D*e.pageSize;for(let T=u;T<z;T++)delete S.items[T],S.removeSubCache(T);W()}),e.$connector.reset=o(function(){e.size=0,Ue(a),Ue(r.rootCache.items),Ue(O),y&&y.cancel(),f&&f.cancel(),k&&k.cancel(),y=void 0,f=void 0,p=[],d=[],He()});const Ue=u=>Object.keys(u).forEach(h=>delete u[h]);e.$connector.updateSize=u=>e.size=u,e.$connector.updateUniqueItemIdPath=u=>e.itemIdPath=u,e.$connector.expandItems=o(function(u){let h=Array.from(e.expandedItems);u.filter(c=>!e._isExpanded(c)).forEach(c=>h.push(c)),e.expandedItems=h}),e.$connector.collapseItems=o(function(u){let h=Array.from(e.expandedItems);u.forEach(c=>{let g=e._getItemIndexInArray(c,h);g>=0&&h.splice(g,1)}),e.expandedItems=h,u.forEach(c=>e.$connector.removeFromQueue(c))}),e.$connector.removeFromQueue=o(function(u){let h=e.getItemId(u);Object.values(n[h]||{}).forEach(c=>c([])),delete n[h],p=p.filter(c=>c.itemkey!==h),d=d.filter(c=>c.parentKey!==h)}),e.$connector.confirmParent=o(function(u,h,c){a[h]||(a[h]={});const g=a[h].size!==c;a[h].size=c,c===0&&(a[h][0]=[]);let C=Object.getOwnPropertyNames(n[h]||{});for(let D=0;D<C.length;D++){let S=C[D],z=O[h]||[0,0];const T=n[h][S];if(a[h]&&a[h][S]||S<z[0]||S>z[1]){delete n[h][S];let L=a[h][S]||new Array(c);T(L,c)}else T&&c===0&&(delete n[h][S],T([],c))}if(g&&C.length===0){const D=te(h),S=r.getItemContext(D);S&&S.subCache&&(S.subCache.size=c),W()}e.$server.confirmParentUpdate(u,h),e.loading||(e.__confirmParentUpdateDebouncer=ae.debounce(e.__confirmParentUpdateDebouncer,fn,()=>e.__updateVisibleRows()))}),e.$connector.confirm=o(function(u){let h=Object.getOwnPropertyNames(i);for(let c=0;c<h.length;c++){let g=h[c],C=O[I]||[0,0];const D=e.size?Math.ceil(e.size/e.pageSize)-1:0,S=Math.min(C[1],D),z=i[g];a[I]&&a[I][g]||g<C[0]||+g>S?(delete i[g],a[I][g]?z(a[I][g]):(z(new Array(e.pageSize)),e.requestContentUpdate())):z&&e.size===0&&(delete i[g],z([]))}Object.keys(i).length&&delete O[I],e.$server.confirmUpdate(u)}),e.$connector.ensureHierarchy=o(function(){for(let u in a)u!==I&&delete a[u];Ue(O),r.rootCache.removeSubCaches(),He()}),e.$connector.setSelectionMode=o(function(u){if((typeof u=="string"||u instanceof String)&&$.indexOf(u)>=0)B=u,E={},e.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),e.$connector.updateMultiSelectable=o(function(){e.$&&(B===$[0]?e.$.table.setAttribute("aria-multiselectable",!1):B===$[1]?e.$.table.removeAttribute("aria-multiselectable"):e.$.table.setAttribute("aria-multiselectable",!0))}),e._createPropertyObserver("isAttached",()=>e.$connector.updateMultiSelectable());const rt=u=>h=>{u&&(u(h),u=null)};e.$connector.setHeaderRenderer=o(function(u,h){const{content:c,showSorter:g,sorterPath:C}=h;if(c===null){u.headerRenderer=null;return}u.headerRenderer=rt(D=>{D.innerHTML="";let S=D;if(g){const z=document.createElement("vaadin-grid-sorter");z.setAttribute("path",C);const T=c instanceof Node?c.textContent:c;T&&z.setAttribute("aria-label",`Sort by ${T}`),D.appendChild(z),S=z}c instanceof Node?S.appendChild(c):S.textContent=c})}),e.__applySorters=()=>{const u=e._mapSorters(),h=JSON.stringify(e._previousSorters)!==JSON.stringify(u);e._previousSorters=u,Ot.prototype.__applySorters.call(e),h&&!U&&e.$server.sortersChanged(u)},e.$connector.setFooterRenderer=o(function(u,h){const{content:c}=h;if(c===null){u.footerRenderer=null;return}u.footerRenderer=rt(g=>{g.innerHTML="",c instanceof Node?g.appendChild(c):g.textContent=c})}),e.addEventListener("vaadin-context-menu-before-open",o(function(u){const{key:h,columnId:c}=u.detail;e.$server.updateContextMenuTargetItem(h,c)})),e.getContextMenuBeforeOpenDetail=o(function(u){const h=u.detail.sourceEvent||u,c=e.getEventContext(h),g=c.item&&c.item.key||"",C=c.column&&c.column.id||"";return{key:g,columnId:C}}),e.addEventListener("click",o(u=>kt(u,"item-click"))),e.addEventListener("dblclick",o(u=>kt(u,"item-double-click"))),e.addEventListener("column-resize",o(u=>{e._getColumnsInOrder().filter(c=>!c.hidden).forEach(c=>{c.dispatchEvent(new CustomEvent("column-drag-resize"))}),e.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:u.detail.resizedColumn._flowId}}))})),e.addEventListener("column-reorder",o(u=>{const h=e._columnTree.slice(0).pop().filter(c=>c._flowId).sort((c,g)=>c._order-g._order).map(c=>c._flowId);e.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:h}}))})),e.addEventListener("cell-focus",o(u=>{const h=e.getEventContext(u);["header","body","footer"].indexOf(h.section)!==-1&&e.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:h.item?h.item.key:null,internalColumnId:h.column?h.column._flowId:null,section:h.section}}))}));function kt(u,h){if(u.defaultPrevented)return;const c=u.target;if(Nl(c)||c instanceof HTMLLabelElement)return;const g=e.getEventContext(u),C=g.section;g.item&&C!=="details"&&(u.itemKey=g.item.key,g.column&&(u.internalColumnId=g.column._flowId),e.dispatchEvent(new CustomEvent(h,{detail:u})))}e.cellClassNameGenerator=o(function(u,h){const c=h.item.style;if(c)return(c.row||"")+" "+(u&&c[u._flowId]||"")}),e.cellPartNameGenerator=o(function(u,h){const c=h.item.part;if(c)return(c.row||"")+" "+(u&&c[u._flowId]||"")}),e.dropFilter=o(u=>u.item&&!u.item.dropDisabled),e.dragFilter=o(u=>u.item&&!u.item.dragDisabled),e.addEventListener("grid-dragstart",o(u=>{e._isSelected(u.detail.draggedItems[0])?(e.__selectionDragData?Object.keys(e.__selectionDragData).forEach(h=>{u.detail.setDragData(h,e.__selectionDragData[h])}):(e.__dragDataTypes||[]).forEach(h=>{u.detail.setDragData(h,u.detail.draggedItems.map(c=>c.dragData[h]).join(`
`))}),e.__selectionDraggedItemsCount>1&&u.detail.setDraggedItemsCount(e.__selectionDraggedItemsCount)):(e.__dragDataTypes||[]).forEach(h=>{u.detail.setDragData(h,u.detail.draggedItems[0].dragData[h])})}))})(t)}})();/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rg=o=>class extends o{static get properties(){return{width:{type:String,value:"58px",sync:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(e,r){let i=e.firstElementChild;i||(i=document.createElement("vaadin-checkbox"),i.setAttribute("aria-label","Select All"),i.classList.add("vaadin-grid-select-all-checkbox"),e.appendChild(i),i.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));const n=this.__isChecked(this.selectAll,this._indeterminate);i.__rendererChecked=n,i.checked=n,i.hidden=this._selectAllHidden,i.indeterminate=this._indeterminate}_defaultRenderer(e,r,{item:i,selected:n}){let a=e.firstElementChild;a||(a=document.createElement("vaadin-checkbox"),a.setAttribute("aria-label","Select Row"),e.appendChild(a),a.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),oe(e,"track",this.__onCellTrack.bind(this)),e.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),e.addEventListener("click",this.__onCellClick.bind(this))),a.__item=i,a.__rendererChecked=n,a.checked=n}__onSelectAllCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(this._indeterminate||e.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(e.target.checked?this._selectItem(e.target.__item):this._deselectItem(e.target.__item))}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,e.detail.state==="start"){const i=this._grid._getRenderedRows().find(n=>n.contains(e.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(i._item),this.__dragStartIndex=i.index,this.__dragStartItem=i._item,this.__dragAutoScroller()}else e.detail.state==="end"&&(this.__dragStartItem&&(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){this.__dragStartIndex!==void 0&&e.preventDefault()}__dragAutoScroller(){if(this.__dragStartIndex===void 0)return;const e=this._grid._getRenderedRows(),r=e.find(l=>{const d=l.getBoundingClientRect();return this.__dragCurrentY>=d.top&&this.__dragCurrentY<=d.bottom});let i=r?r.index:void 0;const n=this.__getScrollableArea();this.__dragCurrentY<n.top?i=this._grid._firstVisibleIndex:this.__dragCurrentY>n.bottom&&(i=this._grid._lastVisibleIndex),i!==void 0&&e.forEach(l=>{(i>this.__dragStartIndex&&l.index>=this.__dragStartIndex&&l.index<=i||i<this.__dragStartIndex&&l.index<=this.__dragStartIndex&&l.index>=i)&&(this.__selectOnDrag?this._selectItem(l._item):this._deselectItem(l._item),this.__dragStartItem=void 0)});const a=n.height*.15,s=10;if(this.__dragDy<0&&this.__dragCurrentY<n.top+a){const l=n.top+a-this.__dragCurrentY,d=Math.min(1,l/a);this._grid.$.table.scrollTop-=d*s}if(this.__dragDy>0&&this.__dragCurrentY>n.bottom-a){const l=this.__dragCurrentY-(n.bottom-a),d=Math.min(1,l/a);this._grid.$.table.scrollTop+=d*s}setTimeout(()=>this.__dragAutoScroller(),10)}__getScrollableArea(){const e=this._grid.$.table.getBoundingClientRect(),r=this._grid.$.header.getBoundingClientRect(),i=this._grid.$.footer.getBoundingClientRect();return{top:e.top+r.height,bottom:e.bottom-i.height,left:e.left,right:e.right,height:e.height-r.height-i.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__isChecked(e,r){return r||e}};class ua extends rg(Vl){static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"}}}_defaultHeaderRenderer(t,e){super._defaultHeaderRenderer(t,e);const r=t.firstElementChild;r&&(r.id="selectAllCheckbox")}_selectAll(){this.selectAll=!0,this.$server.selectAll()}_deselectAll(){this.selectAll=!1,this.$server.deselectAll()}_selectItem(t){this._grid.$connector.doSelection([t],!0)}_deselectItem(t){this._grid.$connector.doDeselection([t],!0),this.selectAll=!1}}customElements.define(ua.is,ua);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const og=o=>class extends gt(o){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:()=>[]}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, disabled, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,r,i,n,a){if(!(!e||!r)){if(a){const s=a.map(l=>e[l]);e.forEach(l=>{l.selected=s.includes(l)})}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){const r=this._filterItems(e.composedPath())[0],i=r&&!r.disabled?this.items.indexOf(r):-1;i<0||!this.multiple||(e.preventDefault(),this.selectedValues.includes(i)?this.selectedValues=this.selectedValues.filter(n=>n!==i):this.selectedValues=this.selectedValues.concat(i))}_multipleChanged(e,r){!e&&r&&(this.selectedValues=[],this.items.forEach(i=>{i.selected=!1}),this.removeAttribute("aria-multiselectable")),e&&!r&&(this.setAttribute("aria-multiselectable","true"),this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ig extends P(og(A(V(w)))){static get template(){return x`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-list-box"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox"),setTimeout(this._checkImport.bind(this),2e3),this._tooltipController=new Q(this),this.addController(this._tooltipController)}_checkImport(){const t=this.querySelector("vaadin-item");t&&!(t instanceof w)&&console.warn("Make sure you have imported the vaadin-item element.")}}b(ig);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ng extends bt(A(F(w))){static get template(){return x`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value,this.label}ready(){super.ready(),this.setAttribute("role","option")}}b(ng);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-text-field",he,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ag=_`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;m("vaadin-password-field-button",[no,ag],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sg=_`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;m("vaadin-password-field",[he,sg],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lg extends ao{static get is(){return"vaadin-password-field-button"}static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot name="tooltip"></slot>
    `}}b(lg);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dg=x`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let St;class ug extends Ba{static get is(){return"vaadin-password-field"}static get template(){if(!St){St=super.template.cloneNode(!0);const t=dg.content.querySelector('[part="reveal-button"]');St.content.querySelector('[part="input-field"]').appendChild(t)}return St}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonMouseDown=this._onRevealButtonMouseDown.bind(this),this.__lastChange=""}get slotStyles(){const t=this.localName;return[...super.slotStyles,`
        ${t} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new N(this,"reveal","vaadin-password-field-button",{initializer:t=>{t.disabled=this.disabled,t.addEventListener("click",this.__boundRevealButtonClick),t.addEventListener("mousedown",this.__boundRevealButtonMouseDown)}}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_onChange(t){super._onChange(t),this.__lastChange=this.inputElement.value}_shouldSetFocus(t){return t.target===this.inputElement||t.target===this._revealNode}_shouldRemoveFocus(t){return!(t.relatedTarget===this._revealNode||t.relatedTarget===this.inputElement&&t.target===this._revealNode)}_setFocused(t){if(super._setFocused(t),!t)this._setPasswordVisible(!1),this.__lastChange!==this.inputElement.value&&(this.__lastChange=this.inputElement.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})));else{const e=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!e)}}__updateAriaLabel(t){t.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",t.reveal)}__i18nChanged(t){this.__updateAriaLabel(t.base)}_revealButtonHiddenChanged(t){this._toggleRevealHidden(t)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonMouseDown(t){t.preventDefault(),this.inputElement.focus()}_toggleRevealHidden(t){this._revealNode&&(t?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(t){this._revealNode&&this._revealNode.setAttribute("aria-pressed",t?"true":"false")}_passwordVisibleChanged(t){this._setType(t?"text":"password"),this._updateToggleState(t)}_disabledChanged(t,e){super._disabledChanged(t,e),this._revealNode&&(this._revealNode.disabled=t)}}b(ug);const cg=_`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  ::slotted([slot='submit']) {
    margin-top: var(--lumo-space-l);
    margin-bottom: var(--lumo-space-s);
  }

  ::slotted([slot='forgot-password']) {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;m("vaadin-login-form-wrapper",[Ni,Vi,cg],{moduleId:"lumo-login-form-wrapper"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hg=_`
  :host {
    overflow: hidden;
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='form'] {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  [part='form-title'] {
    margin: 0;
  }

  [part='error-message'] {
    position: relative;
  }
`;/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-login-form-wrapper",hg,{moduleId:"vaadin-login-form-wrapper-styles"});class pg extends A(w){static get template(){return x`
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <slot name="custom-form-area"></slot>

        <slot name="submit"></slot>

        <slot name="forgot-password"></slot>

        <div part="footer">
          <slot name="footer"></slot>
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}static get properties(){return{error:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object}}}}b(pg);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xs=o=>class extends o{static get properties(){return{action:{type:String,value:null},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again.",username:"Username is required",password:"Password is required"}}}},_preventAutoEnable:{type:Boolean,value:!1}}}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fg=o=>class extends Xs(o){static get observers(){return["_errorChanged(error)"]}get _customFields(){return[...this.$.vaadinLoginFormWrapper.children].filter(e=>e.getAttribute("slot")==="custom-form-area"&&e.hasAttribute("name"))}async connectedCallback(){super.connectedCallback(),this.noAutofocus||(await new Promise(requestAnimationFrame),this.$.vaadinLoginUsername.focus())}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){const e=this.$.vaadinLoginUsername,r=this.$.vaadinLoginPassword;if(this.disabled||!(e.validate()&&r.validate()))return;this.error=!1,this.disabled=!0;const i={username:e.value,password:r.value},n=this._customFields;n.length&&(i.custom={},n.forEach(l=>{i.custom[l.name]=l.value}));const a={bubbles:!0,cancelable:!0,detail:i},s=this.dispatchEvent(new CustomEvent("login",a));if(this.action&&s){const l=document.querySelector("meta[name=_csrf_parameter]"),d=document.querySelector("meta[name=_csrf]");l&&d&&(this.$.csrf.name=l.content,this.$.csrf.value=d.content),this.querySelector("form").submit()}}_onFormData(e){const{formData:r}=e;this._customFields.length&&this._customFields.forEach(i=>{r.append(i.name,i.value)})}_handleInputKeydown(e){if(e.key==="Enter"){const{currentTarget:r}=e,i=r.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;r.validate()&&(i.checkValidity()?this.submit():i.focus())}}_handleInputKeyup(e){const r=e.currentTarget;e.key==="Tab"&&r instanceof HTMLInputElement&&r.select()}_onForgotPasswordClick(){this.dispatchEvent(new CustomEvent("forgot-password"))}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class mg extends fg(P(A(w))){static get template(){return x`
      <style>
        vaadin-login-form-wrapper > form > * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper id="vaadinLoginFormWrapper" theme$="[[_theme]]" error="[[error]]" i18n="[[i18n]]">
        <form method="POST" action$="[[action]]" on-formdata="_onFormData" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            error-message="[[i18n.errorMessage.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autocomplete="username"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            error-message="[[i18n.errorMessage.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>
        </form>

        <vaadin-button slot="submit" theme="primary contained submit" on-click="submit" disabled$="[[disabled]]">
          [[i18n.form.submit]]
        </vaadin-button>

        <vaadin-button
          slot="forgot-password"
          theme="tertiary small"
          on-click="_onForgotPasswordClick"
          hidden$="[[noForgotPassword]]"
        >
          [[i18n.form.forgotPassword]]
        </vaadin-button>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}_attachDom(t){this.appendChild(t)}}b(mg);const _g=_`
  :host {
    inset: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;m("vaadin-login-overlay-wrapper",[Ni,Vi,ue,_g],{moduleId:"lumo-login-overlay-wrapper"});const vg=_`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;m("vaadin-login-form-wrapper",[Ni,Vi,vg],{moduleId:"lumo-login-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gg=_`
  [part='overlay'] {
    outline: none;
  }

  [part='card'] {
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  [part='brand'] {
    box-sizing: border-box;
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  [part='brand'] h1 {
    color: inherit;
    margin: 0;
  }
`;/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-login-overlay-wrapper",[de,gg],{moduleId:"vaadin-login-overlay-wrapper-styles"});class bg extends le(F(A(w))){static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <section part="card">
            <div part="brand">
              <slot name="title">
                <h1 part="title">[[title]]</h1>
              </slot>
              <p part="description">[[description]]</p>
            </div>
            <div part="form">
              <slot></slot>
            </div>
          </section>
        </div>
      </div>
    `}}b(bg);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yg=o=>class extends Ce(Xs(o)){static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n)"]}ready(){super.ready(),this._overlayElement=this.$.vaadinLoginOverlayWrapper}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}__i18nChanged(e){const r=e&&e.header;r&&(this.title=r.title,this.description=r.description)}_preventClosingLogin(e){e.preventDefault()}_retargetEvent(e){e.stopPropagation();const{detail:r,composed:i,cancelable:n,bubbles:a}=e;this.dispatchEvent(new CustomEvent(e.type,{bubbles:a,cancelable:n,composed:i,detail:r}))||e.preventDefault()}async _onOpenedChange(){const e=this.$.vaadinLoginForm;!e.$&&this.updateComplete&&await this.updateComplete,this.opened?(this._undoTitleTeleport=this._teleport("title",this.$.vaadinLoginOverlayWrapper),this._undoFieldsTeleport=this._teleport("custom-form-area",e.$.vaadinLoginFormWrapper,e.querySelector("vaadin-button")),this._undoFooterTeleport=this._teleport("footer",e.$.vaadinLoginFormWrapper),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(e.$.vaadinLoginUsername.value="",e.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTitleTeleport&&this._undoTitleTeleport(),this._undoFieldsTeleport&&this._undoFieldsTeleport(),this._undoFooterTeleport&&this._undoFooterTeleport())}_teleport(e,r,i){const n=[...this.querySelectorAll(`[slot="${e}"]`)].map(a=>(i?r.insertBefore(a,i):r.appendChild(a),a));return()=>{this.append(...n)}}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wg extends yg(P(A(w))){static get template(){return x`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[_theme]]"
        on-vaadin-overlay-escape-press="_preventClosingLogin"
        on-vaadin-overlay-outside-click="_preventClosingLogin"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="[[action]]"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="[[noForgotPassword]]"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>

      <div hidden>
        <slot name="custom-form-area"></slot>
        <slot name="footer"></slot>
      </div>
    `}static get is(){return"vaadin-login-overlay"}}b(wg);(function(){const o=function(r){return window.Vaadin.Flow.tryCatchWrapper(r,"Vaadin Menu Bar")};function t(r,i){if(r.$connector)return;const n=new MutationObserver(a=>{a.some(l=>{const d=l.oldValue,f=l.target.getAttribute(l.attributeName);return d!==f})&&r.$connector.generateItems()});r.$connector={generateItems:o(a=>{if(!r.shadowRoot){setTimeout(()=>r.$connector.generateItems(a));return}a&&(r.__generatedItems=window.Vaadin.Flow.contextMenuConnector.generateItemsTree(i,a));let s=r.__generatedItems||[];s.forEach(l=>l.disabled=l.component.disabled),s.forEach(l=>{n.observe(l.component,{attributeFilter:["hidden","disabled"],attributeOldValue:!0})}),s=s.filter(l=>!l.component.hidden),r.items=s,r._buttons.forEach(l=>{l.item&&l.item.component&&l.addEventListener("click",d=>{d.composedPath().indexOf(l.item.component)===-1&&(l.item.component.click(),d.stopPropagation())})})})}}function e(r){r._item&&(r._item.className=r.className)}window.Vaadin.Flow.menubarConnector={initLazy(...r){return o(t)(...r)},setClassName(...r){return o(e)(...r)}}})();const xg=_`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-menu-bar-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([slot='overflow']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([slot='overflow']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([slot='overflow']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([slot='overflow']) [part='prefix'],
  :host([slot='overflow']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][slot='overflow']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;m("vaadin-menu-bar-button",[no,xg],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-menu-bar-button",_`
    :host {
      flex-shrink: 0;
    }

    :host([slot='overflow']) {
      margin-inline-end: 0;
    }

    [part='label'] ::slotted(vaadin-menu-bar-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class Ag extends ao{static get is(){return"vaadin-menu-bar-button"}}b(Ag);const Cg=_`
  [part='content'] {
    display: flex;
    /* tweak to inherit centering from menu bar button */
    align-items: inherit;
    justify-content: inherit;
  }

  [part='content'] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: var(--lumo-space-xs);
    box-sizing: border-box !important;
  }
`;m("vaadin-menu-bar-item",[De,gs,Cg],{moduleId:"lumo-menu-bar-item"});m("vaadin-menu-bar-list-box",[xt,bs],{moduleId:"lumo-menu-bar-list-box"});const kg=_`
  :host(:first-of-type) {
    padding-top: var(--lumo-space-xs);
  }
`;m("vaadin-menu-bar-overlay",[At,ys,kg],{moduleId:"lumo-menu-bar-overlay"});m("vaadin-menu-bar",_`
    :host([has-single-button]) ::slotted(vaadin-menu-bar-button) {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) ::slotted(vaadin-menu-bar-button:first-of-type),
    :host([theme~='end-aligned'][has-single-button]) ::slotted(vaadin-menu-bar-button) {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ig extends bt(A(F(w))){static get is(){return"vaadin-menu-bar-item"}static get template(){return x`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem")}}b(Ig);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Og extends gt(A(F(V(w)))){static get is(){return"vaadin-menu-bar-list-box"}static get template(){return x`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}b(Og);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-menu-bar-overlay",[de,Ul],{moduleId:"vaadin-menu-bar-overlay-styles"});class Eg extends Hl(le(F(A(w)))){static get is(){return"vaadin-menu-bar-overlay"}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}b(Eg);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tg extends Yl{static get is(){return"vaadin-menu-bar-submenu"}static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>
    `}constructor(){super(),this.openOn="opensubmenu"}get _tagNamePrefix(){return"vaadin-menu-bar"}_openedChanged(t){this._overlayElement.opened=t}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}b(Tg);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sg=o=>class extends $i(Qe(ne(Fe(V(o))))){static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})},overlayClass:{type:String},openOnHover:{type:Boolean},_hasOverflow:{type:Boolean,value:!1},_overflow:{type:Object},_container:{type:Object}}}static get observers(){return["_themeChanged(_theme, _overflow, _container)","__hasOverflowChanged(_hasOverflow, _overflow)","__i18nChanged(i18n, _overflow)","_menuItemsChanged(items, _overflow, _container)"]}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}get focused(){return(this._getItems()||[]).find(Bi)||this._expandedButton}get _vertical(){return!1}get _observeParent(){return!0}get _buttons(){return Array.from(this.querySelectorAll("vaadin-menu-bar-button"))}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}ready(){super.ready(),this.setAttribute("role","menubar"),this._overflowController=new N(this,"overflow","vaadin-menu-bar-button",{initializer:i=>{i.setAttribute("hidden","");const n=document.createElement("div");n.setAttribute("aria-hidden","true"),n.innerHTML="&centerdot;".repeat(3),i.appendChild(n),this._overflow=i,this._initButtonAttrs(i)}}),this.addController(this._overflowController),this.addEventListener("mousedown",()=>this._hideTooltip()),this.addEventListener("mouseleave",()=>this._hideTooltip()),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this)),this._subMenu._overlayElement.addEventListener("keydown",this.__boundOnContextMenuKeydown);const r=this.shadowRoot.querySelector('[part="container"]');r.addEventListener("click",this.__onButtonClick.bind(this)),r.addEventListener("mouseover",i=>this._onMouseOver(i)),this._container=r}_getItems(){return this._buttons}disconnectedCallback(){super.disconnectedCallback(),this._hideTooltip(!0)}_onResize(){this.__detectOverflow()}_disabledChanged(e,r){super._disabledChanged(e,r),r!==e&&this.__updateButtonsDisabled(e)}_themeChanged(e,r,i){r&&i&&(this._buttons.forEach(n=>this._setButtonTheme(n,e)),this.__detectOverflow()),e?this._subMenu.setAttribute("theme",e):this._subMenu.removeAttribute("theme")}__hasOverflowChanged(e,r){r&&r.toggleAttribute("hidden",!e)}_menuItemsChanged(e,r,i){if(!r||!i)return;e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e));const n=this._subMenu;n&&n.opened&&n.close()}__i18nChanged(e,r){r&&e&&e.moreOptions!==void 0&&(e.moreOptions?r.setAttribute("aria-label",e.moreOptions):r.removeAttribute("aria-label"))}__getOverflowCount(e){return e.item&&e.item.children&&e.item.children.length||0}__restoreButtons(e){e.forEach(r=>{r.disabled=r.item&&r.item.disabled||this.disabled,r.style.visibility="",r.style.position="";const i=r.item&&r.item.component;i instanceof HTMLElement&&i.getAttribute("role")==="menuitem"&&this.__restoreItem(r,i)}),this.__updateOverflow([])}__restoreItem(e,r){e.appendChild(r),r.removeAttribute("role"),r.removeAttribute("aria-expanded"),r.removeAttribute("aria-haspopup"),r.removeAttribute("tabindex")}__updateButtonsDisabled(e){this._buttons.forEach(r=>{r.disabled=e||r.item&&r.item.disabled})}__updateOverflow(e){this._overflow.item={children:e},this._hasOverflow=e.length>0}__setOverflowItems(e,r){const i=this._container;if(i.offsetWidth<i.scrollWidth){this._hasOverflow=!0;const n=this.__isRTL,a=i.getBoundingClientRect().left;let s;for(s=e.length;s>0;s--){const f=e[s-1],p=getComputedStyle(f),y=f.getBoundingClientRect().left-a;if(!n&&y+f.offsetWidth<i.offsetWidth-r.offsetWidth||n&&y>=r.offsetWidth)break;f.disabled=!0,f.style.visibility="hidden",f.style.position="absolute",f.style.width=p.width}const l=e.filter((f,p)=>p>=s).map(f=>f.item);this.__updateOverflow(l);const d=e.slice(0,s);s>0&&!d.some(f=>f.getAttribute("tabindex")==="0")&&this._setTabindex(d[s-1],!0)}}__detectOverflow(){const e=this._overflow,r=this._buttons.filter(s=>s!==e),i=this.__getOverflowCount(e);this.__restoreButtons(r),this.__setOverflowItems(r,e);const n=this.__getOverflowCount(e);i!==n&&this._subMenu.opened&&this._subMenu.close();const a=n===r.length||n===0&&r.length===1;this.toggleAttribute("has-single-button",a)}_removeButtons(){this._buttons.forEach(e=>{e!==this._overflow&&this.removeChild(e)})}_initButton(e){const r=document.createElement("vaadin-menu-bar-button"),i={...e};if(r.item=i,e.component){const n=this.__getComponent(i);i.component=n,n.item=i,r.appendChild(n)}else e.text&&(r.textContent=e.text);return e.className&&(r.className=e.className),r}_initButtonAttrs(e){e.setAttribute("role","menuitem"),(e===this._overflow||e.item&&e.item.children)&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded","false"))}_setButtonDisabled(e,r){e.disabled=r,e.setAttribute("tabindex",r?"-1":"0")}_setButtonTheme(e,r){let i=r;const n=e.item&&e.item.theme;n!=null&&(i=Array.isArray(n)?n.join(" "):n),i?e.setAttribute("theme",i):e.removeAttribute("theme")}__getComponent(e){const r=e.component;let i;const n=r instanceof HTMLElement;if(n&&r.localName==="vaadin-menu-bar-item"?i=r:(i=document.createElement("vaadin-menu-bar-item"),i.appendChild(n?r:document.createElement(r))),e.text){const a=i.firstChild||i;a.textContent=e.text}return i}__renderButtons(e=[]){this._removeButtons(),e.length!==0&&(e.forEach(r=>{const i=this._initButton(r);this.insertBefore(i,this._overflow),this._setButtonDisabled(i,r.disabled),this._initButtonAttrs(i),this._setButtonTheme(i,this._theme)}),this.__detectOverflow())}_showTooltip(e,r){const i=this._tooltipController.node;i&&i.isConnected&&(i.generator===void 0&&(i.generator=({item:n})=>n&&n.tooltip),this._subMenu.opened||(this._tooltipController.setTarget(e),this._tooltipController.setContext({item:e.item}),i._stateController.open({hover:r,focus:!r})))}_hideTooltip(e){const r=this._tooltipController&&this._tooltipController.node;r&&r._stateController.close(e)}_setExpanded(e,r){e.toggleAttribute("expanded",r),e.toggleAttribute("active",r),e.setAttribute("aria-expanded",r?"true":"false")}_setTabindex(e,r){e.setAttribute("tabindex",r?"0":"-1")}_focusItem(e,r){const i=r&&this.focused===this._expandedButton;i&&this._close(),super._focusItem(e,r),this._buttons.forEach(n=>{this._setTabindex(n,n===e)}),i&&e.item&&e.item.children?this.__openSubMenu(e,!0,{keepFocus:!0}):e===this._overflow?this._hideTooltip():this._showTooltip(e)}_getButtonFromEvent(e){return Array.from(e.composedPath()).find(r=>r.localName==="vaadin-menu-bar-button")}_setFocused(e){if(e){const r=this.querySelector('[tabindex="0"]');r&&this._buttons.forEach(i=>{this._setTabindex(i,i===r),i===r&&i!==this._overflow&&Aa()&&this._showTooltip(i)})}else this._hideTooltip()}_onArrowDown(e){e.preventDefault();const r=this._getButtonFromEvent(e);r===this._expandedButton?this._focusFirstItem():this.__openSubMenu(r,!0)}_onArrowUp(e){e.preventDefault();const r=this._getButtonFromEvent(e);r===this._expandedButton?this._focusLastItem():this.__openSubMenu(r,!0,{focusLast:!0})}_onEscape(e){e.composedPath().includes(this._expandedButton)&&this._close(!0),this._hideTooltip(!0)}_onKeyDown(e){switch(e.key){case"ArrowDown":this._onArrowDown(e);break;case"ArrowUp":this._onArrowUp(e);break;default:super._onKeyDown(e);break}}_onMouseOver(e){const r=this._getButtonFromEvent(e);if(!r)this._hideTooltip();else if(r!==this._expandedButton){const i=this._subMenu.opened;r.item.children&&(this.openOnHover||i)?this.__openSubMenu(r,!1):i&&this._close(),r===this._overflow||this.openOnHover&&r.item.children?this._hideTooltip():this._showTooltip(r,!0)}}__onContextMenuKeydown(e){const r=Array.from(e.composedPath()).find(i=>i._item);if(r){const i=r.parentNode;e.keyCode===38&&r===i.items[0]&&this._close(!0),(e.keyCode===37||e.keyCode===39&&!r._item.children)&&(e.stopImmediatePropagation(),this._onKeyDown(e))}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const r=this._getButtonFromEvent(e);r&&this.__openSubMenu(r,!1)}__openSubMenu(e,r,i={}){const n=this._subMenu,a=e.item;if(n.opened&&(this._close(),n.listenOn===e))return;const s=a&&a.children;if(!s||s.length===0){this.__fireItemSelected(a);return}n.items=s,n.listenOn=e;const l=n._overlayElement;l.positionTarget=e,l.noVerticalOverlap=!0,this._expandedButton=e,requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:s}})),this._hideTooltip(!0),this._setExpanded(e,!0)}),this.style.pointerEvents="auto",l.addEventListener("vaadin-overlay-open",()=>{i.focusLast&&this._focusLastItem(),i.keepFocus&&this._focusItem(this._expandedButton,!1),r||l.$.overlay.focus(),l._updatePosition()},{once:!0})}_focusFirstItem(){this._subMenu._overlayElement.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu._overlayElement.firstElementChild,r=e.items[e.items.length-1];r&&r.focus()}__onItemSelected(e){e.stopPropagation(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(e){const r=this._expandedButton;r&&r.hasAttribute("expanded")&&(this._setExpanded(r,!1),e&&this._focusItem(r,!1),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pg extends Sg(P(A(w))){static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }
      </style>

      <div part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-menu-bar-submenu is-root overlay-class="[[overlayClass]]"></vaadin-menu-bar-submenu>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-menu-bar"}ready(){super.ready(),this._tooltipController=new Q(this),this._tooltipController.setManual(!0),this.addController(this._tooltipController)}}b(Pg);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dg=_`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;m("vaadin-text-area",[he,Dg],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zg extends N{constructor(t,e){super(t,"textarea","textarea",{initializer:(r,i)=>{const n=i.getAttribute("value");n&&(r.value=n);const a=i.getAttribute("name");a&&r.setAttribute("name",a),r.id=this.defaultId,typeof e=="function"&&e(r)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mg=o=>class extends Qe(Ra(o)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}get clearElement(){return this.$.clearButton}_onResize(){this._updateHeight(),this.__scrollPositionUpdated()}_onScroll(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new zg(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Pe(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",e=>{const r=this._inputField.scrollTop;this._inputField.scrollTop+=e.deltaY,r!==this._inputField.scrollTop&&(e.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(e){e.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(e,r){super._valueChanged(e,r),this._updateHeight()}_updateHeight(){const e=this.inputElement,r=this._inputField;if(!e||!r)return;const i=r.scrollTop,n=this.value?this.value.length:0;if(this._oldValueLength>=n){const s=getComputedStyle(r).height,l=getComputedStyle(e).width;r.style.display="block",r.style.height=s,e.style.maxWidth=l,e.style.height="auto"}this._oldValueLength=n;const a=e.scrollHeight;a>e.clientHeight&&(e.style.height=`${a}px`),e.style.removeProperty("max-width"),r.style.removeProperty("display"),r.style.removeProperty("height"),r.scrollTop=i}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const e=this.inputElement.value.match(this.pattern);return e?e[0]===e.input:!1}catch{return!0}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $g=_`
  :host {
    animation: 1ms vaadin-text-area-appear;
  }

  .vaadin-text-area-container {
    flex: auto;
  }

  /* The label, helper text and the error message should neither grow nor shrink. */
  [part='label'],
  [part='helper-text'],
  [part='error-message'] {
    flex: none;
  }

  [part='input-field'] {
    flex: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    margin: 0;
    padding: 0 0.25em;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  /* Override styles from <vaadin-input-container> */
  [part='input-field'] ::slotted(textarea) {
    align-self: stretch;
    white-space: pre-wrap;
  }

  [part='input-field'] ::slotted(:not(textarea)) {
    align-self: flex-start;
  }

  /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
  :host([disabled]) ::slotted(textarea) {
    user-select: none;
  }

  @keyframes vaadin-text-area-appear {
    to {
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-text-area",[Ve,$g],{moduleId:"vaadin-text-area-styles"});class Bg extends Mg(A(P(w))){static get is(){return"vaadin-text-area"}static get template(){return x`
      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="_onScroll"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Q(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}b(Bg);m("vaadin-message-input",_`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }

    ::slotted([slot='textarea']) {
      margin-inline-end: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rg extends P(A(V(w))){static get properties(){return{value:{type:String,value:""},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},_button:{type:Object},_textArea:{type:Object}}}static get template(){return x`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }

        :host([hidden]) {
          display: none !important;
        }

        ::slotted([slot='button']) {
          flex-shrink: 0;
        }

        ::slotted([slot='textarea']) {
          align-self: stretch;
          flex-grow: 1;
        }
      </style>
      <slot name="textarea"></slot>

      <slot name="button"></slot>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-message-input"}static get observers(){return["__buttonPropsChanged(_button, disabled, i18n)","__textAreaPropsChanged(_textArea, disabled, i18n, value)"]}ready(){super.ready(),this._buttonController=new N(this,"button","vaadin-button",{initializer:t=>{t.setAttribute("theme","primary contained"),t.addEventListener("click",()=>{this.__submit()}),this._button=t}}),this.addController(this._buttonController),this._textAreaController=new N(this,"textarea","vaadin-text-area",{initializer:t=>{t.addEventListener("value-changed",r=>{this.value=r.detail.value}),t.addEventListener("keydown",r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),r.stopImmediatePropagation(),this.__submit())});const e=t.inputElement;e.removeAttribute("aria-labelledby"),e.setAttribute("rows",1),e.style.minHeight="0",this._textArea=t}}),this.addController(this._textAreaController),this._tooltipController=new Q(this),this.addController(this._tooltipController)}__buttonPropsChanged(t,e,r){t&&(t.disabled=e,t.textContent=r.send)}__textAreaPropsChanged(t,e,r,i){if(t){t.disabled=e,t.value=i;const n=r.message;t.placeholder=n,n?t.inputElement.setAttribute("aria-label",n):t.inputElement.removeAttribute("aria-label")}}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this._textArea.focus()}}b(Rg);(function(){const o=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(t,e,r)=>o(function(i,n,a){const s=new Intl.DateTimeFormat(a,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});i.items=n.map(l=>l.time?Object.assign(l,{time:s.format(new Date(l.time))}):l)})(t,e,r)}})();m("vaadin-message",_`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }

    ::slotted([slot='avatar']) {
      --vaadin-avatar-size: var(--lumo-size-m);
      margin-top: calc(var(--lumo-space-s));
      margin-inline-end: calc(var(--lumo-space-m));
    }
  `,{moduleId:"lumo-message"});m("vaadin-message-list",_``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zs extends ne(P(A(V(w)))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number},_avatar:{ttype:Object}}}static get template(){return x`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }

        ::slotted([slot='avatar']) {
          --vaadin-avatar-outline-width: 0px;
          flex-shrink: 0;
        }
      </style>
      <slot name="avatar"></slot>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}static get observers(){return["__avatarChanged(_avatar, userName, userAbbr, userImg, userColorIndex)"]}ready(){super.ready(),this._avatarController=new N(this,"avatar","vaadin-avatar",{initializer:t=>{t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),this._avatar=t}}),this.addController(this._avatarController)}__avatarChanged(t,e,r,i,n){t&&t.setProperties({name:e,abbr:r,img:i,colorIndex:n})}}b(Zs);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fg extends $i(P(A(w))){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:()=>[],observer:"_itemsChanged"}}}static get template(){return x`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <slot></slot>
      </div>
    `}get _messages(){return[...this.querySelectorAll("vaadin-message")]}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log")}_getItems(){return this._messages}_itemsChanged(t,e){const r=t||[],i=e||[];if(r.length||i.length){const n=this._getIndexOfFocusableElement(),a=this.scrollHeight<this.clientHeight+this.scrollTop+50;this._renderMessages(r),this._setTabIndexesByIndex(n),requestAnimationFrame(()=>{r.length>i.length&&a&&this._scrollToLastMessage()})}}_renderMessages(t){Ke(se`
        ${t.map(e=>se`
              <vaadin-message
                role="listitem"
                .time="${e.time}"
                .userAbbr="${e.userAbbr}"
                .userName="${e.userName}"
                .userImg="${e.userImg}"
                .userColorIndex="${e.userColorIndex}"
                theme="${_r(e.theme)}"
                class="${_r(e.className)}"
                @focusin="${this._onMessageFocusIn}"
                >${e.text}</vaadin-message
              >
            `)}
      `,this,{host:this})}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onMessageFocusIn(t){const e=t.composedPath().find(r=>r instanceof Zs);this._setTabIndexesByMessage(e)}_setTabIndexesByIndex(t){const e=this._messages[t]||this._messages[0];this._setTabIndexesByMessage(e)}_setTabIndexesByMessage(t){this._messages.forEach(e=>{e.tabIndex=e===t?0:-1})}_getIndexOfFocusableElement(){const t=this._messages.findIndex(e=>e.tabIndex===0);return t!==-1?t:0}}b(Fg);m("vaadin-notification-card",_`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-primary-contrast-color);
      --vaadin-button-primary-background: var(--lumo-primary-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --vaadin-button-background: var(--lumo-contrast-20pct);
      --vaadin-button-text-color: var(--lumo-base-color);
      --vaadin-button-primary-background: var(--lumo-base-color);
      --vaadin-button-primary-text-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-success-contrast-color);
      --vaadin-button-primary-background: var(--lumo-success-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-error-contrast-color);
      --vaadin-button-primary-background: var(--lumo-error-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-error-text-color);
    }

    :host([theme~='warning']) [part='overlay'] {
      background: var(--lumo-warning-color);
      color: var(--lumo-warning-contrast-color);
      box-shadow: inset 0 0 0 1px var(--lumo-contrast-20pct), var(--lumo-box-shadow-l);
    }

    :host([theme~='warning']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-warning-contrast-color);
      --vaadin-button-primary-background: var(--lumo-shade-50pct);
      --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lg extends A(P(w)){static get template(){return x`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),Ri&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(t){t?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const t=window.innerHeight,r=window.innerWidth>t,i=document.documentElement.clientHeight;r&&i>t?this.style.bottom=`${i-t}px`:this.style.bottom="0"}_onVaadinOverlayClose(t){const e=t.detail.sourceEvent;e&&e.composedPath().indexOf(this)>=0&&t.preventDefault()}}class Ng extends A(w){static get template(){return x`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }

        @media (forced-colors: active) {
          [part='overlay'] {
            outline: 3px solid;
          }
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class we extends Ce(vt(P(w))){static get template(){return x`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _overlayElement)"]}static show(t,e){return Wl(t)?we._createAndShowNotification(r=>{Ke(t,r)},e):we._createAndShowNotification(r=>{r.innerText=t},e)}static _createAndShowNotification(t,e){const r=document.createElement(we.is);return e&&Number.isFinite(e.duration)&&(r.duration=e.duration),e&&e.position&&(r.position=e.position),e&&e.theme&&r.setAttribute("theme",e.theme),r.renderer=t,document.body.appendChild(r),r.opened=!0,r.addEventListener("opened-changed",i=>{i.detail.value||r.remove()}),r}get _container(){return we._container||(we._container=document.createElement("vaadin-notification-container"),document.body.appendChild(we._container)),we._container}get _card(){return this._overlayElement}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-notification-card"),Ne(this)}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected||(this.opened=!1)})}requestContentUpdate(){this.renderer&&this.renderer(this._card,this)}_rendererChanged(t,e,r){if(!r)return;const i=this._oldRenderer!==t;this._oldRenderer=t,i&&(r.innerHTML="",delete r._$litPart$),e&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}_openedChanged(t){t?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/u.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=!!this._container.firstElementChild}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&t!=="none"){const e=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",e)};this._card.addEventListener("animationend",e)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,e){e&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}}b(Lg);b(Ng);b(we);const Vg=_`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;m("vaadin-horizontal-layout",Vg,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hg extends P(A(w)){static get template(){return x`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}b(Hg);const Ug=_`
  :host {
    outline: none;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Show dividers when content overflows */

  :host([theme~='overflow-indicators'])::before,
  :host([theme~='overflow-indicators'])::after {
    content: '';
    display: none;
    position: sticky;
    inset: 0;
    z-index: 9999;
    height: 1px;
    margin-bottom: -1px;
    background: var(--lumo-contrast-10pct);
  }

  :host([theme~='overflow-indicators'])::after {
    margin-bottom: 0;
    margin-top: -1px;
  }

  :host([theme~='overflow-indicators'][overflow~='top'])::before,
  :host([theme~='overflow-indicators'][overflow~='bottom'])::after {
    display: block;
  }
`;m("vaadin-scroller",Ug,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class un{constructor(t,e){this.host=t,this.scrollTarget=e||t,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){const{host:t}=this;this.__resizeObserver=new ResizeObserver(e=>{this.__debounceOverflow=ce.debounce(this.__debounceOverflow,$a,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(t),[...t.children].forEach(e=>{this.__resizeObserver.observe(e)}),this.__childObserver=new MutationObserver(e=>{e.forEach(({addedNodes:r,removedNodes:i})=>{r.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(n)}),i.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(n)})}),this.__updateOverflow()}),this.__childObserver.observe(t,{childList:!0}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const t=this.scrollTarget;let e="";t.scrollTop>0&&(e+=" top"),Math.ceil(t.scrollTop)<Math.ceil(t.scrollHeight-t.clientHeight)&&(e+=" bottom");const r=Math.abs(t.scrollLeft);r>0&&(e+=" start"),Math.ceil(r)<Math.ceil(t.scrollWidth-t.clientWidth)&&(e+=" end"),e=e.trim(),e.length>0&&this.host.getAttribute("overflow")!==e?this.host.setAttribute("overflow",e):e.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Js extends ne(P(V(A(w)))){static get template(){return x`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new un(this),this.addController(this.__overflowController)}_shouldSetFocus(t){return t.target===this}}b(Js);const Yg=_`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;m("vaadin-vertical-layout",Yg,{moduleId:"lumo-vertical-layout"});m("vaadin-progress-bar",_`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const el=document.createElement("template");el.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(el.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wg=_`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }

  @media (forced-colors: active) {
    [part='bar'] {
      outline: 1px solid;
    }

    [part='value'] {
      background-color: AccentColor !important;
      forced-color-adjust: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qg=o=>class extends o{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,r,i){const n=this._normalizeValue(e,r,i);this.style.setProperty("--vaadin-progress-value",n)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,r,i){let n;return!e&&e!==0?n=0:r>=i?n=1:(n=(e-r)/(i-r),n=Math.min(Math.max(n,0),1)),n}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-progress-bar",Wg,{moduleId:"vaadin-progress-bar-styles"});class jg extends P(A(qg(w))){static get is(){return"vaadin-progress-bar"}static get template(){return x`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}b(jg);m("vaadin-radio-button",_`
    :host {
      color: var(--vaadin-radio-button-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-radio-button-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_radio-button-size: var(--vaadin-radio-button-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-radio-button-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='radio'] {
      width: var(--_radio-button-size);
      height: var(--_radio-button-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background: var(--vaadin-radio-button-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_radio-button-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: var(--vaadin-radio-button-dot-size, 3px) solid
        var(--vaadin-radio-button-dot-color, var(--lumo-primary-contrast-color));
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--_selection-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background: var(--vaadin-radio-button-background-hover, var(--lumo-contrast-30pct));
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gg=o=>class extends Oa(es(je(to(o)))){static get properties(){return{name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new Le(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Pe(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qg=_`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-radio-button-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='radio'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='radio'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='radio'] {
    width: var(--vaadin-radio-button-size, 1em);
    height: var(--vaadin-radio-button-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='radio']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-radio-button-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='radio'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) [part='radio'] {
      outline-width: 2px;
    }

    :host([disabled]) [part='radio'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-radio-button",Qg,{moduleId:"vaadin-radio-button-styles"});class Kg extends Gg(P(A(V(w)))){static get is(){return"vaadin-radio-button"}static get template(){return x`
      <div class="vaadin-radio-button-container">
        <div part="radio" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
    `}}b(Kg);const Xg=_`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;m("vaadin-radio-group",[Ze,Ct,Xg],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zg=o=>class extends yt(ne(Fe(wt(o)))){static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this),this._tooltipController=new Q(this),this._tooltipController.addEventListener("tooltip-changed",e=>{const r=e.detail.node;if(r&&r.isConnected){const i=this.__radioButtons.map(n=>n.inputElement);this._tooltipController.setAriaTarget(i)}else this._tooltipController.setAriaTarget([])})}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(e=>e.checked)}get isHorizontalRTL(){return this.__isRTL&&this._theme!=="vertical"}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${ke()}`;const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new ro(e,({addedNodes:r,removedNodes:i})=>{this.__filterRadioButtons(r).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(i).forEach(this.__unregisterRadioButton);const n=this.__radioButtons.map(a=>a.inputElement);this._tooltipController.setAriaTarget(n)}),this.addController(this._tooltipController)}__filterRadioButtons(e){return e.filter(r=>r.nodeType===Node.ELEMENT_NODE&&r.localName==="vaadin-radio-button")}_onKeyDown(e){super._onKeyDown(e);const r=e.composedPath().find(i=>i.nodeType===Node.ELEMENT_NODE&&i.localName==="vaadin-radio-button");["ArrowLeft","ArrowUp"].includes(e.key)&&(e.preventDefault(),this.__selectNextRadioButton(r)),["ArrowRight","ArrowDown"].includes(e.key)&&(e.preventDefault(),this.__selectPrevRadioButton(r))}_invalidChanged(e){super._invalidChanged(e),e?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(e){const r=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(r,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(e){const r=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(r,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(e,r){const i=(this.__radioButtons.length+e+r)%this.__radioButtons.length,n=this.__radioButtons[i];n.disabled?this.__selectIncRadioButton(i,r):(n.focusElement.focus(),n.focusElement.click())}__registerRadioButton(e){e.name=this._fieldName,e.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(e.disabled=!0),e.checked&&this.__selectRadioButton(e)}__unregisterRadioButton(e){e.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),e.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(e){e.target.checked&&this.__selectRadioButton(e.target)}__valueChanged(e,r){if(!(r===void 0&&e==="")){if(e){const i=this.__radioButtons.find(n=>n.value===e);i?(this.__selectRadioButton(i),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${e}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");r!==void 0&&this.validate()}}__readonlyChanged(e,r){!e&&r===void 0||r!==e&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(e,r){super._disabledChanged(e,r),!(!e&&r===void 0)&&r!==e&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}__selectRadioButton(e){e?this.value=e.value:this.value="",this.__radioButtons.forEach(r=>{r.checked=r===e}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(e=>{this.readonly?e.disabled=e!==this.__selectedRadioButton:e.disabled=this.disabled})}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jg=_`
  :host {
    display: inline-flex;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  .vaadin-group-field-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  [part='group-field'] {
    display: flex;
    flex-wrap: wrap;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-radio-group",Jg,{moduleId:"vaadin-radio-group-styles"});class eb extends Zg(P(A(w))){static get is(){return"vaadin-radio-group"}static get template(){return x`
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}}b(eb);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-select-item",De,{moduleId:"lumo-select-item"});m("vaadin-select-list-box",xt,{moduleId:"lumo-select-list-box"});const tb=_`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  :host(:is([readonly], [disabled])) ::slotted([slot='value'][placeholder]) {
    opacity: 0;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;m("vaadin-select",[he,tb],{moduleId:"lumo-select"});m("vaadin-select-value-button",_`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const rb=_`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;m("vaadin-select-overlay",[At,rb],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ob extends bt(A(F(w))){static get is(){return"vaadin-select-item"}static get template(){return x`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","option")}}b(ob);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ib extends gt(A(F(V(w)))){static get is(){return"vaadin-select-list-box"}static get template(){return x`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox")}}b(ib);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nb=_`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;m("vaadin-select-overlay",[de,nb],{moduleId:"vaadin-select-overlay-styles"});class ab extends Ge(le(F(A(w)))){static get is(){return"vaadin-select-overlay"}static get template(){return x`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const t=this._getMenuElement();this.owner._assignMenuElement(t)}}_getMenuElement(){return Array.from(this.children).find(t=>t.localName!=="style")}}b(ab);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sb=_`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    min-width: 0;
    width: 0;
  }

  ::slotted(*) {
    padding-left: 0;
    padding-right: 0;
    flex: auto;
  }

  /* placeholder styles */
  ::slotted(*:not([selected])) {
    line-height: 1;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: inherit;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    line-height: inherit;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-select-value-button",sb,{moduleId:"vaadin-select-value-button-styles"});class lb extends Hi(A(w)){static get is(){return"vaadin-select-value-button"}static get template(){return x`
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}b(lb);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tl=_`
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class db extends N{constructor(t){super(t,"value","vaadin-select-value-button",{initializer:(e,r)=>{r._setFocusElement(e),r.ariaTarget=e,r.stateTarget=e,e.setAttribute("aria-haspopup","listbox")}})}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ub=o=>class extends Ce(je(_t(wt(yt(o))))){static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:{type:Object},value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened, focusElement)","_updateSelectedItem(value, _items, placeholder)"]}constructor(){super(),this._itemId=`value-${this.localName}-${ke()}`,this._srLabelController=new ql(this),this._srLabelController.slotName="sr-label"}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready();const e=this.shadowRoot.querySelector("vaadin-select-overlay");e.owner=this,this._overlayElement=e,this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new db(this),this.addController(this._valueButtonController),this.addController(this._srLabelController),this.addController(new Li(this._phoneMediaQuery,r=>{this._phone=r})),this._tooltipController=new Q(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.focusElement),this.addController(this._tooltipController)}requestContentUpdate(){this._overlayElement&&(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(e){super._requiredChanged(e),e===!1&&this.validate()}__itemsChanged(e,r){(e||r)&&this.requestContentUpdate()}_assignMenuElement(e){e&&e!==this.__lastMenuElement&&(this._menuElement=e,this.__initMenuItems(e),e.addEventListener("items-changed",()=>{this.__initMenuItems(e)}),e.addEventListener("selected-changed",()=>this.__updateValueButton()),e.addEventListener("keydown",r=>this._onKeyDownInside(r),!0),e.addEventListener("click",()=>{this.__dispatchChangePending=!0},!0),this.__lastMenuElement=e)}__initMenuItems(e){e.items&&(this._items=e.items)}_valueChanged(e,r){this.toggleAttribute("has-value",!!e),r!==void 0&&!this.__dispatchChangePending&&this.validate()}_onClick(e){e.preventDefault(),this.opened=!this.readonly}_onToggleMouseDown(e){e.preventDefault()}_onKeyDown(e){if(e.target===this.focusElement&&!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/u.test(e.key))e.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(e.key)&&e.key.length===1){const r=this._menuElement.selected,i=r!==void 0?r:-1,n=this._menuElement._searchKey(i,e.key);n>=0&&(this.__dispatchChangePending=!0,this._updateAriaLive(!0),this._menuElement.selected=n)}}}_onKeyDownInside(e){/^(Tab)$/u.test(e.key)&&(this.opened=!1)}_openedChanged(e,r){if(e){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",`${this._inputContainer.offsetWidth}px`);const i=this.hasAttribute("focus-ring");this._openedWithFocusRing=i,i&&this.removeAttribute("focus-ring")}else r&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),!this.__dispatchChangePending&&!this._keyboardActive&&this.validate())}_updateAriaExpanded(e,r){r&&r.setAttribute("aria-expanded",e?"true":"false")}_updateAriaLive(e){this.focusElement&&(e?this.focusElement.setAttribute("aria-live","polite"):this.focusElement.removeAttribute("aria-live"))}__attachSelectedItem(e){let r;const i=e.getAttribute("label");i?r=this.__createItemElement({label:i}):r=e.cloneNode(!0),r._sourceItem=e,this.__appendValueItemElement(r,this.focusElement),r.selected=!0}__createItemElement(e){const r=document.createElement(e.component||"vaadin-select-item");return e.label&&(r.textContent=e.label),e.value&&(r.value=e.value),e.disabled&&(r.disabled=e.disabled),e.className&&(r.className=e.className),r}__appendValueItemElement(e,r){r.appendChild(e),e.removeAttribute("tabindex"),e.removeAttribute("aria-selected"),e.removeAttribute("role"),e.removeAttribute("focused"),e.removeAttribute("focus-ring"),e.removeAttribute("active"),e.setAttribute("id",this._itemId)}_accessibleNameChanged(e){this._srLabelController.setLabel(e),this._setCustomAriaLabelledBy(e?this._srLabelController.defaultId:null)}_accessibleNameRefChanged(e){this._setCustomAriaLabelledBy(e)}_setCustomAriaLabelledBy(e){const r=this._getLabelIdWithItemId(e);this._fieldAriaController.setLabelId(r,!0)}_getLabelIdWithItemId(e){const i=(this._items?this._items[this._menuElement.selected]:!1)||this.placeholder?this._itemId:"";return e?`${e} ${i}`.trim():null}__updateValueButton(){const e=this.focusElement;if(!e)return;e.innerHTML="";const r=this._items[this._menuElement.selected];if(e.removeAttribute("placeholder"),r)this.__attachSelectedItem(r),this._valueChanging||(this._selectedChanging=!0,this.value=r.value||"",this.__dispatchChangePending&&(this.opened=!1,this.__dispatchChange()),delete this._selectedChanging);else if(this.placeholder){const n=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(n,e),e.setAttribute("placeholder","")}const i=r||this.placeholder?{newId:this._itemId}:{oldId:this._itemId};go(e,"aria-labelledby",i),(this.accessibleName||this.accessibleNameRef)&&this._setCustomAriaLabelledBy(this.accessibleNameRef||this._srLabelController.defaultId)}_updateSelectedItem(e,r){if(r){const i=e==null?e:e.toString();this._menuElement.selected=r.reduce((n,a,s)=>n===void 0&&a.value===i?s:n,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(e,r){if(!this.items||this.items.length===0){e.textContent="";return}let i=e.firstElementChild;i||(i=document.createElement("vaadin-select-list-box"),e.appendChild(i)),i.textContent="",this.items.forEach(n=>{i.appendChild(this.__createItemElement(n))})}async __dispatchChange(){this.updateComplete&&await this.updateComplete,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChangePending=!1}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-select",[jl,Gl,tl],{moduleId:"vaadin-select-styles"});class cb extends ub(P(A(w))){static get is(){return"vaadin-select"}static get template(){return x`
      <style>
        :host {
          position: relative;
        }

        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-select-overlay>

      <slot name="tooltip"></slot>
      <div class="sr-only">
        <slot name="sr-label"></slot>
      </div>
    `}static get observers(){return["_rendererChanged(renderer, _overlayElement)"]}ready(){super.ready(),Ne(this)}_rendererChanged(t,e){e&&(e.renderer=t||this.__defaultRenderer,this.requestContentUpdate())}_onOverlayOpen(){this._menuElement&&this._menuElement.focus()}}b(cb);(function(){const o=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:t=>o(function(e){const r=o(function(){for(let i=0;i<e.childElementCount;i++){const n=e.children[i];if(n.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return n}});e.$connector||(e.$connector={},e.renderer=o(function(i){const n=r();n&&(i.firstChild&&i.removeChild(i.firstChild),i.appendChild(n))}))})(t)}})();const Be=window;Be.Vaadin||(Be.Vaadin={});var ba;(ba=Be.Vaadin).Flow||(ba.Flow={});var ya;(ya=Be.Vaadin.Flow).tooltip||(ya.tooltip={});Object.assign(Be.Vaadin.Flow.tooltip,{setDefaultHideDelay:o=>$e.setDefaultHideDelay(o),setDefaultFocusDelay:o=>$e.setDefaultFocusDelay(o),setDefaultHoverDelay:o=>$e.setDefaultHoverDelay(o)});const{defaultHideDelay:ca,defaultFocusDelay:ha,defaultHoverDelay:pa}=Be.Vaadin.Flow.tooltip;ca&&$e.setDefaultHideDelay(ca);ha&&$e.setDefaultFocusDelay(ha);pa&&$e.setDefaultHoverDelay(pa);const hb=_`
  :host {
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  [part='link'] {
    width: 100%;
    gap: var(--lumo-space-xs);
    padding: var(--lumo-space-s);
    padding-inline-start: calc(var(--lumo-space-s) + var(--_child-indent, 0px));
    border-radius: var(--lumo-border-radius-m);
    transition: background-color 140ms, color 140ms;
    cursor: var(--lumo-clickable-cursor, default);
    min-height: var(--lumo-icon-size-m);
  }

  [part='link'][href] {
    cursor: pointer;
  }

  :host([disabled]) [part='link'] {
    color: var(--lumo-disabled-text-color);
  }

  [part='toggle-button'] {
    margin-inline-end: calc(var(--lumo-space-xs) * -1);
    width: var(--lumo-size-s);
    height: var(--lumo-size-s);
  }

  :host([has-children]) [part='content'] {
    padding-inline-end: var(--lumo-space-s);
  }

  @media (any-hover: hover) {
    [part='link']:hover {
      color: var(--lumo-header-text-color);
    }

    [part='toggle-button']:hover {
      color: var(--lumo-body-text-color);
    }
  }

  [part='link']:active:focus {
    background-color: var(--lumo-contrast-5pct);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
    transform: rotate(-90deg);
    transition: transform 140ms;
  }

  :host([dir='rtl']) [part='toggle-button']::before {
    transform: rotate(90deg);
  }

  :host([expanded]) [part='toggle-button']::before {
    transform: none;
  }

  @supports selector(:focus-visible) {
    [part='link'],
    [part='toggle-button'] {
      outline: none;
    }

    [part='link']:focus-visible,
    [part='toggle-button']:focus-visible {
      border-radius: var(--lumo-border-radius-m);
      box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }
  }

  [part='link']:active {
    color: var(--lumo-header-text-color);
  }

  slot:not([name]) {
    margin: 0 var(--lumo-space-s);
  }

  slot[name='prefix']::slotted(:is(vaadin-icon, [class*='icon'])) {
    padding: 0.1em;
    flex-shrink: 0;
    color: var(--lumo-contrast-60pct);
  }

  :host([disabled]) slot[name='prefix']::slotted(:is(vaadin-icon, [class*='icon'])) {
    color: var(--lumo-disabled-text-color);
  }

  :host([current]) slot[name='prefix']::slotted(:is(vaadin-icon, [class*='icon'])) {
    color: inherit;
  }

  slot[name='children'] {
    --_child-indent: calc(var(--_child-indent-2, 0px) + var(--vaadin-side-nav-child-indent, var(--lumo-space-l)));
  }

  slot[name='children']::slotted(*) {
    --_child-indent-2: var(--_child-indent);
  }

  :host([current]) [part='content'] {
    background-color: var(--lumo-primary-color-10pct);
    color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    border-radius: var(--lumo-border-radius-m);
  }
`;m("vaadin-side-nav-item",[Je,hb],{moduleId:"lumo-side-nav-item"});const rl=new WeakMap;function pb(o,t){let e=t;for(;e;){if(rl.get(e)===o)return!0;e=Object.getPrototypeOf(e)}return!1}function fb(o){return t=>{if(pb(o,t))return t;const e=o(t);return rl.set(e,o),e}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mo={},mb=/([A-Z])/gu;function fa(o){return mo[o]||(mo[o]=o.replace(mb,"-$1").toLowerCase()),mo[o]}function ma(o){return o[0].toUpperCase()+o.substring(1)}function _o(o){const[t,e]=o.split("("),r=e.replace(")","").split(",").map(i=>i.trim());return{method:t,observerProps:r}}function _a(o,t){return Object.prototype.hasOwnProperty.call(o,t)||(o[t]=new Map(o[t])),o[t]}const _b=o=>{class t extends o{static createProperty(r,i){[String,Boolean,Number,Array].includes(i)&&(i={type:i}),i.reflectToAttribute&&(i.reflect=!0),super.createProperty(r,i)}static getOrCreateMap(r){return _a(this,r)}static finalize(){if(super.finalize(),Array.isArray(this.observers)){const r=this.getOrCreateMap("__complexObservers");this.observers.forEach(i=>{const{method:n,observerProps:a}=_o(i);r.set(n,a)})}}static addCheckedInitializer(r){super.addInitializer(i=>{i instanceof this&&r(i)})}static getPropertyDescriptor(r,i,n){const a=super.getPropertyDescriptor(r,i,n);let s=a;if(n.sync&&(s={get:a.get,set(l){const d=this[r];this[i]=l,this.requestUpdate(r,d,n),this.hasUpdated&&this.performUpdate()},configurable:!0,enumerable:!0}),n.readOnly){const l=a.set;this.addCheckedInitializer(d=>{d[`_set${ma(r)}`]=function(f){l.call(d,f),n.sync&&this.performUpdate()}}),s={get:a.get,set(){},configurable:!0,enumerable:!0}}if("value"in n&&this.addCheckedInitializer(l=>{const d=typeof n.value=="function"?n.value.call(l):n.value;n.readOnly?l[`_set${ma(r)}`](d):l[r]=d}),n.observer){const l=n.observer;this.getOrCreateMap("__observers").set(r,l),this.addCheckedInitializer(d=>{d[l]||console.warn(`observer method ${l} not defined`)})}if(n.notify){if(!this.__notifyProps)this.__notifyProps=new Set;else if(!this.hasOwnProperty("__notifyProps")){const l=this.__notifyProps;this.__notifyProps=new Set(l)}this.__notifyProps.add(r)}if(n.computed){const l=`__assignComputed${r}`,d=_o(n.computed);this.prototype[l]=function(...f){this[r]=this[d.method](...f)},this.getOrCreateMap("__complexObservers").set(l,d.observerProps)}return n.attribute||(n.attribute=fa(r)),s}firstUpdated(){super.firstUpdated(),this.$||(this.$={}),this.renderRoot.querySelectorAll("[id]").forEach(r=>{this.$[r.id]=r})}ready(){}updated(r){this.constructor.__observers&&this.__runObservers(r,this.constructor.__observers),this.constructor.__complexObservers&&this.__runComplexObservers(r,this.constructor.__complexObservers),this.__dynamicObservers&&this.__runComplexObservers(r,this.__dynamicObservers),this.constructor.__notifyProps&&this.__runNotifyProps(r,this.constructor.__notifyProps),this.__isReadyInvoked||(this.__isReadyInvoked=!0,this.ready())}_createMethodObserver(r){const i=_a(this,"__dynamicObservers"),{method:n,observerProps:a}=_o(r);i.set(n,a)}__runComplexObservers(r,i){i.forEach((n,a)=>{n.some(s=>r.has(s))&&(this[a]?this[a](...n.map(s=>this[s])):console.warn(`observer method ${a} not defined`))})}__runObservers(r,i){r.forEach((n,a)=>{const s=i.get(a);s!==void 0&&this[s]&&this[s](this[a],n)})}__runNotifyProps(r,i){r.forEach((n,a)=>{i.has(a)&&this.dispatchEvent(new CustomEvent(`${fa(a)}-changed`,{detail:{value:this[a]}}))})}_get(r,i){return ct(r,i)}_set(r,i,n){Ql(r,i,n)}}return t},ol=fb(_b);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function va(o,t){const e=document.baseURI,r=new URL(o,e),i=new URL(t,e);return r.origin===i.origin&&r.pathname===i.pathname}/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vb=_`
  :host {
    display: block;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  [part='content'] {
    display: flex;
    align-items: center;
  }

  [part='link'] {
    flex: auto;
    min-width: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font: inherit;
  }

  button {
    -webkit-appearance: none;
    appearance: none;
    flex: none;
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
  }

  [part='children'] {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  :host(:not([has-children])) button {
    display: none !important;
  }

  slot[name='prefix'],
  slot[name='suffix'] {
    flex: none;
  }

  slot:not([name]) {
    display: block;
    flex: auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,gb=_`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none !important;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: inherit;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: initial;
    color: inherit;
    border: initial;
    outline: none;
    font: inherit;
    text-align: inherit;
  }

  [part='children'] {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bb extends N{constructor(t,e){super(t,e,null,{observe:!0,multiple:!0})}initAddedNode(){this.host.requestUpdate()}teardownNode(){this.host.requestUpdate()}}const il=o=>class extends o{static get properties(){return{i18n:{type:Object,value:()=>({toggle:"Toggle child items"})},_itemsCount:{type:Number,value:0}}}constructor(){super(),this._childrenController=new bb(this,this._itemsSlotName)}get _items(){return this._childrenController.nodes}get _itemsSlotName(){return"children"}firstUpdated(){super.firstUpdated(),this.addController(this._childrenController)}willUpdate(e){super.willUpdate(e),this._itemsCount=this._items.length}updated(e){super.updated(e),e.has("_itemsCount")&&this.toggleAttribute("has-children",this._itemsCount>0),(e.has("_itemsCount")||e.has("i18n"))&&this._items.forEach(r=>{r.i18n=this.i18n})}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yb extends il(Fe(P(A(ol(bo))))){static get is(){return"vaadin-side-nav-item"}static get properties(){return{path:String,pathAliases:{type:Array,value:()=>[]},expanded:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},current:{type:Boolean,value:!1,readOnly:!0,reflectToAttribute:!0}}}static get styles(){return[tl,vb]}constructor(){super(),this.__boundUpdateCurrent=this.__updateCurrent.bind(this)}get _button(){return this.shadowRoot.querySelector("button")}firstUpdated(){super.firstUpdated(),this.hasAttribute("role")||this.setAttribute("role","listitem")}updated(t){super.updated(t),(t.has("path")||t.has("pathAliases"))&&this.__updateCurrent(),(t.has("disabled")||t.has("_itemsCount"))&&this._items.forEach(e=>{e.disabled=this.disabled})}connectedCallback(){super.connectedCallback(),this.__updateCurrent(),window.addEventListener("popstate",this.__boundUpdateCurrent)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.__boundUpdateCurrent)}render(){return se`
      <div part="content" @click="${this._onContentClick}">
        <a
          id="link"
          ?disabled="${this.disabled}"
          tabindex="${this.disabled||this.path==null?"-1":"0"}"
          href="${_r(this.disabled?null:this.path)}"
          part="link"
          aria-current="${this.current?"page":"false"}"
        >
          <slot name="prefix"></slot>
          <slot></slot>
          <slot name="suffix"></slot>
        </a>
        <button
          part="toggle-button"
          ?disabled="${this.disabled}"
          @click="${this._onButtonClick}"
          aria-controls="children"
          aria-expanded="${this.expanded}"
          aria-labelledby="link i18n"
        ></button>
      </div>
      <ul part="children" role="list" ?hidden="${!this.expanded}" aria-hidden="${this.expanded?"false":"true"}">
        <slot name="children"></slot>
      </ul>
      <div class="sr-only" id="i18n">${this.i18n.toggle}</div>
    `}_onButtonClick(t){t.stopPropagation(),this.__toggleExpanded()}_onContentClick(){this.path==null&&this.hasAttribute("has-children")&&this.__toggleExpanded()}__toggleExpanded(){this.expanded=!this.expanded}__updateCurrent(){this._setCurrent(this.__isCurrent()),this.current&&(this.expanded=this._items.length>0)}__isCurrent(){return this.path==null?!1:va(document.location.pathname,this.path)||this.pathAliases.some(t=>va(document.location.pathname,t))}}b(yb);const wb=_`
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-body-text-color);
    -webkit-tap-highlight-color: transparent;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  [part='label'] {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    box-sizing: border-box;
    border-radius: var(--lumo-border-radius-m);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] ::slotted([slot='label']) {
    color: var(--lumo-secondary-text-color);
    margin: var(--lumo-space-s);
  }

  :host([focus-ring]) [part='label'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part='toggle-button'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--lumo-size-s);
    height: var(--lumo-size-s);
    margin-inline-start: auto;
    margin-inline-end: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-angle-right);
    transition: transform 140ms;
  }

  :host(:not([collapsible])) [part='toggle-button'] {
    display: none !important;
  }

  :host(:not([collapsed])) [part='toggle-button']::before {
    transform: rotate(90deg);
  }

  :host([collapsed][dir='rtl']) [part='toggle-button']::before {
    transform: rotate(180deg);
  }

  @media (any-hover: hover) {
    [part='label']:hover [part='toggle-button'] {
      color: var(--lumo-body-text-color);
    }
  }
`;m("vaadin-side-nav",wb,{moduleId:"lumo-side-nav"});/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xb extends il(ne(P(A(ol(bo))))){static get is(){return"vaadin-side-nav"}static get shadowRootOptions(){return{...bo.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{collapsible:{type:Boolean,value:!1,reflectToAttribute:!0},collapsed:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get styles(){return gb}constructor(){super(),this._labelId=`side-nav-label-${ke()}`}get _itemsSlotName(){return""}get focusElement(){return this.shadowRoot.querySelector("button")}firstUpdated(){super.firstUpdated(),this.hasAttribute("role")||this.setAttribute("role","navigation")}render(){return se`
      ${this.collapsible?se`
            <button
              part="label"
              @click="${this._onLabelClick}"
              aria-expanded="${!this.collapsed}"
              aria-controls="children"
            >
              <slot name="label" @slotchange="${this._onLabelSlotChange}"></slot>
              <span part="toggle-button" aria-hidden="true"></span>
            </button>
          `:se`
            <div part="label">
              <slot name="label" @slotchange="${this._onLabelSlotChange}"></slot>
            </div>
          `}
      <ul
        id="children"
        role="list"
        part="children"
        ?hidden="${this.collapsed}"
        aria-hidden="${this.collapsed?"true":"false"}"
      >
        <slot></slot>
      </ul>
    `}_shouldSetFocus(t){return t.composedPath()[0]===this.focusElement}_onLabelClick(){this.collapsible&&this.__toggleCollapsed()}_onLabelSlotChange(){const t=this.querySelector('[slot="label"]');t?(t.id||(t.id=this._labelId),this.setAttribute("aria-labelledby",t.id)):this.removeAttribute("aria-labelledby")}__toggleCollapsed(){this.collapsed=!this.collapsed}}b(xb);m("vaadin-split-layout",_`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      --_handle-size: 4px;
      width: var(--_handle-size);
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: var(--_handle-size);
    }

    /* Hover style */
    @media (any-hover: hover) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-40pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host(:is([theme~='small'], [theme~='minimal'])) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host(:is([theme~='small'], [theme~='minimal'])) > [part='splitter']::after {
      content: '';
      position: absolute;
      inset: -4px;
    }

    :host(:is([theme~='small'], [theme~='minimal'])) > [part='splitter'] > [part='handle'] {
      left: calc(50% - 0.5px);
      top: calc(50% - 0.5px);
    }

    :host(:is([theme~='small'], [theme~='minimal'])) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
      --_handle-size: 5px;
    }

    :host(:is([theme~='small'], [theme~='minimal'])) > [part='splitter']:hover > [part='handle']::after,
    :host(:is([theme~='small'], [theme~='minimal'])) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ab=o=>class extends o{static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this._processChildren(),this.__observer=new MutationObserver(r=>{r.forEach(i=>{this._cleanupNodes(i.removedNodes)}),this._processChildren()}),this.__observer.observe(this,{childList:!0});const e=this.$.splitter;oe(e,"track",this._onHandleTrack.bind(this)),oe(e,"down",this._setPointerEventsNone.bind(this)),oe(e,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(e){e.forEach(r=>{r.parentElement instanceof this.constructor||r.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((e,r)=>{r===0?(this._primaryChild=e,e.setAttribute("slot","primary")):r===1?(this._secondaryChild=e,e.setAttribute("slot","secondary")):e.removeAttribute("slot")})}_setFlexBasis(e,r,i){r=Math.max(0,Math.min(r,i)),r===0&&(r=1e-6),e.style.flex=`1 1 ${r}px`}_setPointerEventsNone(e){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",e.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(e){if(!this._primaryChild||!this._secondaryChild)return;const r=this.orientation==="vertical"?"height":"width";if(e.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[r]-this.$.splitter.getBoundingClientRect()[r],primary:this._primaryChild.getBoundingClientRect()[r],secondary:this._secondaryChild.getBoundingClientRect()[r]};return}const i=this.orientation==="vertical"?e.detail.dy:e.detail.dx,a=this.orientation!=="vertical"&&this.__isRTL?-i:i;this._setFlexBasis(this._primaryChild,this._startSize.primary+a,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-a,this._startSize.container),e.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cb=_`
  :host {
    display: flex;
    overflow: hidden !important;
    transform: translateZ(0);
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
  }

  :host ::slotted(*) {
    flex: 1 1 auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  [part='splitter'] {
    flex: none;
    position: relative;
    z-index: 1;
    overflow: visible;
    min-width: 8px;
    min-height: 8px;
  }

  :host(:not([orientation='vertical'])) > [part='splitter'] {
    cursor: ew-resize;
  }

  :host([orientation='vertical']) > [part='splitter'] {
    cursor: ns-resize;
  }

  [part='handle'] {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  @media (forced-colors: active) {
    [part~='splitter'] {
      outline: 1px solid;
    }

    [part~='handle']::after {
      background-color: AccentColor !important;
      forced-color-adjust: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-split-layout",Cb,{moduleId:"vaadin-split-layout-styles"});class kb extends Ab(P(A(w))){static get template(){return x`
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}}b(kb);m("vaadin-tab",_`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    @media (forced-colors: active) {
      :host([focused]) {
        outline: 1px solid;
        outline-offset: -1px;
      }

      :host([orientation='vertical'][selected]) {
        border-bottom: none;
        border-left: 2px solid;
      }
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--_selection-color-text);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--_selection-color-text);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--_selection-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--_selection-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ib=o=>class extends bt(o){ready(){super.ready(),this.setAttribute("role","tab")}_onKeyUp(e){const r=this.hasAttribute("active");if(super._onKeyUp(e),r){const i=this.querySelector("a");i&&i.click()}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ob=_`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none !important;
  }

  @media (forced-colors: active) {
    :host([focused]) {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([selected]) {
      border-bottom: 2px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-tab",Ob,{moduleId:"vaadin-tab-styles"});class Eb extends P(A(Ib(V(w)))){static get template(){return x`
      <slot></slot>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this._tooltipController=new Q(this),this.addController(this._tooltipController)}}b(Eb);m("vaadin-tabs",_`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tb=o=>class extends Qe(gt(o)){static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),oo(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(e){this.__itemsResizeObserver.disconnect(),(e||[]).forEach(r=>{this.__itemsResizeObserver.observe(r)}),this._updateOverflow()}_scrollForward(){const e=this._getNavigationButtonVisibleWidth("forward-button"),r=this._getNavigationButtonVisibleWidth("back-button"),i=this._scrollerElement.getBoundingClientRect(),a=[...this.items].reverse().find(f=>this._isItemVisible(f,e,r,i)).getBoundingClientRect(),l=20+this.shadowRoot.querySelector('[part="back-button"]').clientWidth;let d;if(this.__isRTL){const f=i.right-l;d=a.right-f}else{const f=i.left+l;d=a.left-f}-this.__direction*d<1&&(d=-this.__direction*(this._scrollOffset-l)),this._scroll(d)}_scrollBack(){const e=this._getNavigationButtonVisibleWidth("forward-button"),r=this._getNavigationButtonVisibleWidth("back-button"),i=this._scrollerElement.getBoundingClientRect(),a=this.items.find(f=>this._isItemVisible(f,e,r,i)).getBoundingClientRect(),l=20+this.shadowRoot.querySelector('[part="forward-button"]').clientWidth;let d;if(this.__isRTL){const f=i.left+l;d=a.left-f}else{const f=i.right-l;d=a.right-f}this.__direction*d<1&&(d=this.__direction*(this._scrollOffset-l)),this._scroll(d)}_isItemVisible(e,r,i,n){if(this._vertical)throw new Error("Visibility check is only supported for horizontal tabs.");const a=this.__isRTL?i:r,s=this.__isRTL?r:i,l=n.right-a,d=n.left+s,f=e.getBoundingClientRect();return l>Math.floor(f.left)&&d<Math.ceil(f.right)}_getNavigationButtonVisibleWidth(e){const r=this.shadowRoot.querySelector(`[part="${e}"]`);return window.getComputedStyle(r).opacity==="0"?0:r.clientWidth}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:Kl(this._scrollerElement,this.getAttribute("dir")),r=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let i=Math.floor(e)>1?"start":"";Math.ceil(e)<Math.ceil(r-this._scrollOffset)&&(i+=" end"),this.__direction===1&&(i=i.replace(/start|end/giu,n=>n==="start"?"end":"start")),i?this.setAttribute("overflow",i.trim()):this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sb=_`
  :host {
    display: flex;
    align-items: center;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    display: block;
  }

  :host([orientation='horizontal']) [part='tabs'] {
    flex-grow: 1;
    display: flex;
    align-self: stretch;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
  @-moz-document url-prefix() {
    :host([orientation='horizontal']) [part='tabs'] {
      overflow: hidden;
    }
  }

  :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
    display: none;
  }

  :host([orientation='vertical']) [part='tabs'] {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  [part='back-button'],
  [part='forward-button'] {
    pointer-events: none;
    opacity: 0;
    cursor: default;
  }

  :host([overflow~='start']) [part='back-button'],
  :host([overflow~='end']) [part='forward-button'] {
    pointer-events: auto;
    opacity: 1;
  }

  [part='back-button']::after {
    content: '\\25C0';
  }

  [part='forward-button']::after {
    content: '\\25B6';
  }

  :host([orientation='vertical']) [part='back-button'],
  :host([orientation='vertical']) [part='forward-button'] {
    display: none;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='back-button']::after {
    content: '\\25B6';
  }

  :host([dir='rtl']) [part='forward-button']::after {
    content: '\\25C0';
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-tabs",Sb,{moduleId:"vaadin-tabs-styles"});class nl extends Tb(P(A(w))){static get template(){return x`
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}}b(nl);const Pb=_`
  :host {
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    font-family: var(--lumo-font-family);
  }

  :host([theme~='bordered']) {
    border: 1px solid var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius-l);
  }

  [part='tabs-container'] {
    box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
    padding: var(--lumo-space-xs) var(--lumo-space-s);
    gap: var(--lumo-space-s);
  }

  ::slotted([slot='tabs']) {
    box-shadow: initial;
    margin: calc(var(--lumo-space-xs) * -1) calc(var(--lumo-space-s) * -1);
  }

  [part='content'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  :host([loading]) [part='content'] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;m("vaadin-tabsheet",[Pb,Wi],{moduleId:"lumo-tabsheet"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Db extends Js{static get is(){return"vaadin-tabsheet-scroller"}}b(Db);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zb extends N{constructor(t){super(t,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this)}__tabsItemsChangedListener(){this.host._setItems(this.tabs.items)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(t){if(!(t instanceof nl))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=t,t.addEventListener("items-changed",this.__tabsItemsChangedListener),t.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=t,this.host.stateTarget=t,this.__tabsItemsChangedListener()}teardownNode(t){this.tabs=null,t.removeEventListener("items-changed",this.__tabsItemsChangedListener),t.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}class Mb extends V(_t(P(A(w)))){static get template(){return x`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: flex;
          flex-direction: column;
        }

        [part='tabs-container'] {
          position: relative;
          display: flex;
          align-items: center;
        }

        ::slotted([slot='tabs']) {
          flex: 1;
          align-self: stretch;
          min-width: 8em;
        }

        [part='content'] {
          position: relative;
          flex: 1;
          box-sizing: border-box;
        }
      </style>

      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}static get is(){return"vaadin-tabsheet"}static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}static get delegateProps(){return["selected"]}static get delegateAttrs(){return["theme"]}ready(){super.ready(),this.__overflowController=new un(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new zb(this),this.addController(this._tabsSlotController);const t=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new ro(t,()=>{this.__panels=Array.from(t.assignedNodes({flatten:!0})).filter(e=>e.nodeType===Node.ELEMENT_NODE)})}__itemsOrPanelsChanged(t,e){!t||!e||t.forEach(r=>{const i=e.find(n=>n.getAttribute("tab")===r.id);i&&(i.role="tabpanel",i.id||(i.id=`tabsheet-panel-${ke()}`),i.setAttribute("aria-labelledby",r.id),r.setAttribute("aria-controls",i.id))})}__selectedTabItemChanged(t,e,r){if(!e||!r||t===void 0)return;const i=this.shadowRoot.querySelector('[part="content"]'),n=e[t],a=n?n.id:"",s=r.find(d=>d.getAttribute("tab")===a);this.toggleAttribute("loading",!s);const l=r.filter(d=>!d.hidden).length===1;s?i.style.minHeight="":l&&(i.style.minHeight=`${i.offsetHeight}px`),r.forEach(d=>{d.hidden=d!==s})}}b(Mb);(function(){let o;customElements.whenDefined("vaadin-text-field").then(()=>{class t extends customElements.get("vaadin-text-field"){static get template(){return o||(o=super.template.cloneNode(!0),o.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),o}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(r,i){this.allowedCharPattern="[-+\\d"+r+"]",this.value&&i&&(this.value=this.value.split(i).join(r))}}customElements.define(t.is,t)})})();/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $b=_`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;m("vaadin-email-field",[he,$b],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bb=_`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-email-field",Bb,{moduleId:"vaadin-email-field-styles"});class Rb extends Ba{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email"),this.pattern="^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9\\-.]+\\.[a-zA-Z0-9\\-]{2,}$"}ready(){super.ready(),this.inputElement&&(this.inputElement.autocapitalize="off")}}b(Rb);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fb=_`
  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;m("vaadin-number-field",[he,Je,Fb],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lb=o=>class extends Ra(o){static get properties(){return{min:{type:Number},max:{type:Number},step:{type:Number},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number"),this.__onWheel=this.__onWheel.bind(this)}get slotStyles(){const e=this.localName;return[`
          ${e} input[type="number"]::-webkit-outer-spin-button,
          ${e} input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          ${e} input[type="number"] {
            -moz-appearance: textfield;
          }

          ${e}[dir='rtl'] input[type="number"]::placeholder {
            direction: rtl;
          }

          ${e}[dir='rtl']:not([step-buttons-visible]) input[type="number"]::placeholder {
            text-align: left;
          }
        `]}get clearElement(){return this.$.clearButton}get __hasUnparsableValue(){return this.inputElement.validity.badInput}ready(){super.ready(),this.addController(new Le(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Pe(this.inputElement,this._labelController))}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("wheel",this.__onWheel)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("wheel",this.__onWheel)}__onWheel(e){this.hasAttribute("focused")&&e.preventDefault()}_onDecreaseButtonTouchend(e){e.cancelable&&(e.preventDefault(),this._decreaseValue())}_onIncreaseButtonTouchend(e){e.cancelable&&(e.preventDefault(),this._increaseValue())}_onDecreaseButtonClick(){this._decreaseValue()}_onIncreaseButtonClick(){this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;const r=this.step||1;let i=parseFloat(this.value);this.value?i<this.min?(e=0,i=this.min):i>this.max&&(e=0,i=this.max):this.min===0&&e<0||this.max===0&&e>0||this.max===0&&this.min===0?(e=0,i=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?i=0:this.min>0?(i=this.min,this.max<0&&e<0&&(i=this.max),e=0):this.max<0&&(i=this.max,e<0?e=0:this._getIncrement(1,i-r)>this.max?i-=2*r:i-=r);const n=this._getIncrement(e,i);(!this.value||e===0||this._incrementIsInsideTheLimits(e,i))&&(this.__keepCommittedValue=!0,this.value=this.inputElement.value=String(parseFloat(n)),this.__keepCommittedValue=!1,this.__commitValueChange())}_getIncrement(e,r){let i=this.step||1,n=this.min||0;const a=Math.max(this._getMultiplier(r),this._getMultiplier(i),this._getMultiplier(n));i*=a,r=Math.round(r*a),n*=a;const s=(r-n)%i;return e>0?(r-s+i)/a:e<0?(r-(s||i))/a:r/a}_getDecimalCount(e){const r=String(e),i=r.indexOf(".");return i===-1?1:r.length-i-1}_getMultiplier(e){if(!isNaN(e))return 10**this._getDecimalCount(e)}_incrementIsInsideTheLimits(e,r){return e<0?this.min==null||this._getIncrement(e,r)>=this.min:e>0?this.max==null||this._getIncrement(e,r)<=this.max:this._getIncrement(e,r)<=this.max&&this._getIncrement(e,r)>=this.min}_isButtonEnabled(e){const r=e*(this.step||1),i=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(r,i)}_stepChanged(e,r){r&&(r.step=e||"any")}_valueChanged(e,r){e&&isNaN(parseFloat(e))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,r),this.__keepCommittedValue||(this.__committedValue=this.value,this.__committedUnparsableValueStatus=!1)}_onKeyDown(e){e.key==="ArrowUp"?(e.preventDefault(),this._increaseValue()):e.key==="ArrowDown"&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}_setHasInputValue(e){const r=e.composedPath()[0];this._hasInputValue=r.value.length>0||this.__hasUnparsableValue}_onInput(e){this.__keepCommittedValue=!0,super._onInput(e),this.__keepCommittedValue=!1}_onChange(e){e.stopPropagation()}_onClearAction(e){super._onClearAction(e),this.__commitValueChange()}_setFocused(e){super._setFocused(e),e||this.__commitValueChange()}_onEnter(e){super._onEnter(e),this.__commitValueChange()}__commitValueChange(){this.__committedValue!==this.value?(this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.__committedUnparsableValueStatus!==this.__hasUnparsableValue&&(this.validate(),this.dispatchEvent(new CustomEvent("unparsable-change"))),this.__committedValue=this.value,this.__committedUnparsableValueStatus=this.__hasUnparsableValue}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nb=_`
  :host([readonly]) [part$='button'] {
    pointer-events: none;
  }

  [part='decrease-button']::before {
    content: '\\2212';
  }

  [part='increase-button']::before {
    content: '+';
  }

  [part='decrease-button'],
  [part='increase-button'] {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-number-field",[Ve,Nb],{moduleId:"vaadin-number-field-styles"});class al extends Lb(A(P(w))){static get is(){return"vaadin-number-field"}static get template(){return x`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_isButtonEnabled(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_onDecreaseButtonClick"
            on-touchend="_onDecreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_isButtonEnabled(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_onIncreaseButtonClick"
            on-touchend="_onIncreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Q(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement)}}b(al);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vb extends al{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(t,e){if(t!==""&&!this.__isInteger(t)){console.warn(`Trying to set non-integer value "${t}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(t,e)}_stepChanged(t,e){if(t!=null&&!this.__hasOnlyDigits(t)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${t}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(t,e)}__isInteger(t){return/^(-\d)?\d*$/u.test(String(t))}__hasOnlyDigits(t){return/^\d+$/u.test(String(t))}}b(Vb);const eo=window;eo.Vaadin=eo.Vaadin||{};eo.Vaadin.setLitRenderer=(o,t,e,r,i,n)=>{const a=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, model, itemKey) => {
      const { item, index } = model;
      ${i.map(l=>`
          const ${l} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${l}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${e}\`, root)
    }
  `)(Ke,se,r),s=(l,d,f)=>{const{item:p}=f;l.__litRenderer!==s&&(l.innerHTML="",delete l._$litPart$,l.__litRenderer=s);const y={};for(const v in p)v.startsWith(n)&&(y[v.replace(n,"")]=p[v]);a(l,{...f,item:y},p.key)};s.__rendererId=n,o[t]=s};eo.Vaadin.unsetLitRenderer=(o,t,e)=>{var r;((r=o[t])==null?void 0:r.__rendererId)===e&&(o[t]=void 0)};m("vaadin-grid-tree-toggle",_`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      transform: translateX(calc(var(--lumo-space-s) * -1));
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});m("vaadin-upload",_`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }
  `,{moduleId:"lumo-upload"});m("vaadin-upload-icon",_`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `,{moduleId:"lumo-upload-icon"});m("vaadin-upload-file-list",_`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload-file-list"});const Hb=_`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  ::slotted([slot='progress']) {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }
`;m("vaadin-upload-file",[Je,Hb],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ub extends A(w){static get is(){return"vaadin-upload-icon"}static get template(){return x`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}b(Ub);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sl=document.createElement("template");sl.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(sl.content);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yb=o=>class extends ne(o){static get properties(){return{complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0,reflectToAttribute:!0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new N(this,"progress","vaadin-progress-bar",{initializer:e=>{this._progress=e}})),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}_errorMessageChanged(e){this.toggleAttribute("error",!!e)}__updateProgress(e,r,i){e&&(e.value=isNaN(r)?0:r/100,e.indeterminate=i)}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wb=_`
  :host {
    display: block;
  }

  [hidden] {
    display: none;
  }

  [part='row'] {
    list-style-type: none;
  }

  button {
    background: transparent;
    padding: 0;
    border: none;
    box-shadow: none;
  }

  :host([complete]) ::slotted([slot='progress']),
  :host([error]) ::slotted([slot='progress']) {
    display: none !important;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-upload-file",Wb,{moduleId:"vaadin-upload-file-styles"});class qb extends Yb(A(V(w))){static get template(){return x`
      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!errorMessage]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[fileName]]</div>
            <div part="status" hidden$="[[!status]]" id="status">[[status]]</div>
            <div part="error" id="error" hidden$="[[!errorMessage]]">[[errorMessage]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!errorMessage]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <slot name="progress"></slot>
    `}static get is(){return"vaadin-upload-file"}}b(qb);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jb=o=>class extends o{static get properties(){return{items:{type:Array},i18n:{type:Object}}}static get observers(){return["__updateItems(items, i18n)"]}__updateItems(e,r){e&&r&&this.requestContentUpdate()}requestContentUpdate(){const{items:e,i18n:r}=this;Ke(se`
          ${e.map(i=>se`
              <li>
                <vaadin-upload-file
                  .file="${i}"
                  .complete="${i.complete}"
                  .errorMessage="${i.error}"
                  .fileName="${i.name}"
                  .held="${i.held}"
                  .indeterminate="${i.indeterminate}"
                  .progress="${i.progress}"
                  .status="${i.status}"
                  .uploading="${i.uploading}"
                  .i18n="${r}"
                ></vaadin-upload-file>
              </li>
            `)}
        `,this)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gb extends jb(A(w)){static get is(){return"vaadin-upload-file-list"}static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `}}b(Gb);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qb extends N{constructor(t){super(t,"add-button","vaadin-button")}initNode(t){t._isDefault&&(this.defaultNode=t),t.addEventListener("touchend",e=>{this.host._onAddFilesTouchEnd(e)}),t.addEventListener("click",e=>{this.host._onAddFilesClick(e)}),this.host._addButton=t}}class Kb extends N{constructor(t){super(t,"drop-label","span")}initNode(t){t._isDefault&&(this.defaultNode=t),this.host._dropLabel=t}}const Xb=o=>class extends o{static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:mr},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[],sync:!0},maxFiles:{type:Number,value:1/0,sync:!0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}},_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached)","__updateDropLabel(_dropLabel, maxFiles, i18n)","__updateFileList(_fileList, files, i18n)","__updateMaxFilesReached(maxFiles, files)"]}get __acceptRegexp(){if(!this.accept)return null;const e=this.accept.split(",").map(r=>{let i=r.trim();return i=i.replace(/[+.]/gu,"\\$&"),i.startsWith("\\.")&&(i=`.*${i}$`),i.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${e.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new Qb(this),this.addController(this._addButtonController),this._dropLabelController=new Kb(this),this.addController(this._dropLabelController),this.addController(new N(this,"file-list","vaadin-upload-file-list",{initializer:e=>{this._fileList=e}})),this.addController(new N(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(e){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(e);const r=this.i18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(r)),n=Math.max(0,Math.min(3,i-1));return`${parseFloat((e/r**i).toFixed(n))} ${this.i18n.units.size[i]}`}_splitTimeByUnits(e){const r=[60,60,24,1/0],i=[0];for(let n=0;n<r.length&&e>0;n++)i[n]=e%r[n],e=Math.floor(e/r[n]);return i}_formatTime(e,r){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(e,r);for(;r.length<3;)r.push(0);return r.reverse().map(i=>(i<10?"0":"")+i).join(":")}_formatFileProgress(e){const r=e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${r})`}__updateMaxFilesReached(e,r){this._setMaxFilesReached(e>=0&&r.length>=e)}__updateAddButton(e,r,i,n){e&&(e.disabled=n,e===this._addButtonController.defaultNode&&(e.textContent=this._i18nPlural(r,i.addFiles)))}__updateDropLabel(e,r,i){e&&e===this._dropLabelController.defaultNode&&(e.textContent=this._i18nPlural(r,i.dropFiles))}__updateFileList(e,r,i){e&&(e.items=[...r],e.i18n=i)}_onDragover(e){e.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([r,i])=>{e.setRequestHeader(r,i)}),this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,r,i,n){e.elapsed=n,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(n*(r/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(r/n/1024),e.totalStr=this._formatSize(r),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e=this.files){e&&!Array.isArray(e)&&(e=[e]),e=e.filter(r=>!r.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const r=Date.now(),i=e.xhr=this._createXhr();let n,a;i.upload.onprogress=f=>{clearTimeout(n),a=Date.now();const p=(a-r)/1e3,y=f.loaded,v=f.total,k=~~(y/v*100);e.loaded=y,e.progress=k,e.indeterminate=y<=0||y>=v,e.error?e.indeterminate=e.status=void 0:e.abort||(k<100?(this._setStatus(e,v,y,p),n=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._renderFileList()},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:i}}))},i.onreadystatechange=()=>{if(i.readyState===4){if(clearTimeout(n),e.indeterminate=e.uploading=!1,e.abort||(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:i},cancelable:!0}))))return;i.status===0?e.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:i}})),this._renderFileList()}};const s=new FormData;if(e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:i},cancelable:!0})))return;s.append(e.formDataName,e,e.name),i.open(this.method,e.uploadTarget,!0),this._configureXhr(i),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:i}})),this._renderFileList()},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:i,formData:s},cancelable:!0}))&&i.send(s)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._removeFile(e))}_renderFileList(){this._fileList&&this._fileList.requestContentUpdate()}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&e.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));return}const r=this.__acceptRegexp;if(r&&!(r.test(e.type)||r.test(e.name))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}));return}e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)}_removeFile(e){this.files.indexOf(e)>-1&&(this.files=this.files.filter(r=>r!==e),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:e},bubbles:!0,composed:!0})))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileReject(e){xe(`${e.detail.file.name}: ${e.detail.error}`,{mode:"alert"})}_onUploadStart(e){xe(`${e.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(e){xe(`${e.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(e){xe(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,r){return e===1?r.one:r.many}_isMultiple(e){return e!==1}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zb extends Xb(P(A(V(w)))){static get template(){return x`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}}b(Zb);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jb=o=>class extends V(o){static get properties(){return{items:{type:Array,sync:!0},renderer:{type:Function,sync:!0},__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}ready(){super.ready(),this.__virtualizer=new Ea({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),this.__overflowController=new un(this),this.addController(this.__overflowController),Ne(this)}scrollToIndex(e){this.__virtualizer.scrollToIndex(e)}__createElements(e){return[...Array(e)].map(()=>document.createElement("div"))}__updateElement(e,r){e.__renderer!==this.renderer&&(e.__renderer=this.renderer,this.__clearRenderTargetContent(e)),this.renderer&&this.renderer(e,this,{item:this.items[r],index:r})}__clearRenderTargetContent(e){e.innerHTML="",delete e._$litPart$}__itemsOrRendererChanged(e,r,i){const n=this.childElementCount>0;(r||n)&&i&&(i.size=(e||[]).length,i.update())}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ey=_`
  :host {
    display: block;
    height: 400px;
    overflow: auto;
    flex: auto;
    align-self: stretch;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([grid])) #items > ::slotted(*) {
    width: 100%;
  }

  #items {
    position: relative;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */m("vaadin-virtual-list",ey,{moduleId:"vaadin-virtual-list-styles"});class ty extends P(A(Jb(w))){static get template(){return x`
      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}}b(ty);window.Vaadin.Flow.virtualListConnector={initLazy:function(o){if(o.$connector)return;const t=20;let e=[0,0];o.$connector={},o.$connector.placeholderItem={__placeholder:!0};const r=function(){const n=[...o.children].filter(f=>"__virtualListIndex"in f).map(f=>f.__virtualListIndex),a=Math.min(...n),s=Math.max(...n);let l=Math.max(0,a-t),d=Math.min(s+t,o.items.length);if(e[0]!=l||e[1]!=d){e=[l,d];const f=1+d-l;o.$server.setRequestedRange(l,f)}},i=function(){o.__requestDebounce=ae.debounce(o.__requestDebounce,ht.after(50),r)};requestAnimationFrame(()=>r),o.patchVirtualListRenderer=function(){if(!o.renderer||o.renderer.__virtualListConnectorPatched)return;const n=o.renderer,a=(s,l,d)=>{s.__virtualListIndex=d.index,d.item===void 0?l.$connector.placeholderElement?s.__hasComponentRendererPlaceholder||(s.innerHTML="",delete s._$litPart$,s.appendChild(l.$connector.placeholderElement.cloneNode(!0)),s.__hasComponentRendererPlaceholder=!0):n.call(l,s,l,{...d,item:l.$connector.placeholderItem}):(s.__hasComponentRendererPlaceholder&&(s.innerHTML="",s.__hasComponentRendererPlaceholder=!1),n.call(l,s,l,d)),i()};a.__virtualListConnectorPatched=!0,a.__rendererId=n.__rendererId,o.renderer=a},o._createPropertyObserver("renderer","patchVirtualListRenderer",!0),o.patchVirtualListRenderer(),o.items=[],o.$connector.set=function(n,a){o.items.splice(n,a.length,...a),o.items=[...o.items]},o.$connector.clear=function(n,a){const s=Math.min(a,o.items.length-n);o.$connector.set(n,[...Array(s)])},o.$connector.updateData=function(n){const a=n.reduce((s,l)=>(s[l.key]=l,s),{});o.items=o.items.map(s=>s&&(a[s.key]||s))},o.$connector.updateSize=function(n){const a=n-o.items.length;a>0?o.items=[...o.items,...Array(a)]:a<0&&(o.items=o.items.slice(0,n))},o.$connector.setPlaceholderItem=function(n={},a){n.__placeholder=!0,o.$connector.placeholderItem=n;const s=Object.entries(n).find(([l])=>l.endsWith("_nodeid"));o.$connector.placeholderElement=s?Vaadin.Flow.clients[a].getByNodeId(s[1]):null}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ll=document.createElement("template");ll.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;Xl.register("lumo",1e3,ll);const ry=o=>Promise.resolve(0);window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.loadOnDemand=ry;window.Vaadin.Flow.resetFocus=()=>{let o=document.activeElement;for(;o&&o.shadowRoot;)o=o.shadowRoot.activeElement;return!o||o.blur()||o.focus()||!0};
