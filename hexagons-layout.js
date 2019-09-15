import { LitElement, html, css } from 'lit-element';
import DivHexagon from './div-hexagon';

/**
 * `hexagons-layout`
 * HexagonsLayout
 *
 * @customElement hexagons-layout
 * @polymer
 * @litElement
 * @demo demo/index.html
 */

class HexagonsLayout extends LitElement {
  static get is() {
    return 'hexagons-layout';
  }

  static get properties() {
    return {
      title: { type: String },
      elems: { type: Array }
    };
  }

  static get styles() {
    return css`
      *, *:after, *:before {
        box-sizing: inherit;
      }
      * { margin:0;padding:0;border: 0 none; position: relative; }
      :host {
        /* font */
        --sinSerif: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        /* colors */
        --negroC: #444448;
        --negroM: #292f33;
        --negroO: #1d1f20;
        --gris: #999;
        
        box-sizing: border-box;
        font-family: var(--sinSerif);
        font-size: 1rem;
        color: var(--gris);
        background: var(--negroO);
        overflow-x: scroll;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        color: var(--gris);
      }
      /* Making the grid */
      section {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        margin: .5rem auto;
      }
      header {
        background: var(--negroM);
        font-size: calc(1rem + 2vmin);
        font-variant: small-caps;
      }
      h1 {
        font-size: inherit;
        font-weight: 100;
        letter-spacing: 3px;
        line-height: 1.5;
        text-align: center;
        box-shadow: inset 0 0 1px 1px var(--negroC);
      }
    `;
  }

  constructor() {
    super();
    this.elems = [];
    this.property2 = 2019;
  }

  getHexagon(el) {
    return html`
      <article>
        <figure>
          <h2>${el.title}</h2>
          <p>${el.description}</p>
        </figure>
        <img src="${el.img}" />
      </article>`;
  }

  getBloque() {
    let bloques = Math.ceil(this.elems.length / 7);
    let bloque = '/* posicionando la colmena */';
    for (let i = 1; i <= bloques; i++) {
      bloque += `
      article:nth-of-type(${i * 7 - 6}), article:nth-of-type(${i * 7 - 5}), article:nth-of-type(${i * 7 - 4}) {	grid-row: ${i * 2 - 1};}
      
      article:nth-of-type(${i * 7 - 6}) { grid-column: 2 / span 2; }
      article:nth-of-type(${i * 7 - 5}) { grid-column: 4 / span 2; }
      article:nth-of-type(${i * 7 - 4}) { grid-column: 6 / span 2; }
      
      article:nth-of-type(${i * 7 - 3}), article:nth-of-type(${i * 7 - 2}), article:nth-of-type(${i * 7 - 1}), article:nth-of-type(${i * 7}) { grid-row: ${i * 2}; }

      article:nth-of-type(${i * 7 - 3}) { grid-column: 1 / span 2; }
      article:nth-of-type(${i * 7 - 2}) { grid-column: 3 / span 2; }
      article:nth-of-type(${i * 7 - 1}) { grid-column: 5 / span 2; }
      article:nth-of-type(${i * 7}) { grid-column: 7 / span 2; }
      `;
    }
    bloque += `
      /* ajuste vertical */
      article:nth-of-type(-n+3) {
        margin-bottom: calc(var(--height) * -.2);
      }
      article:nth-of-type(n+8):nth-of-type(-n+${this.elems.length}) {
        margin-top: calc(var(--height) * -.2);
      }
    `;
    return html`${bloque}`;
  }

  render() {
    return html`
      <style>
        ${this.getBloque()}
      </style>
      <header id='follows'>
        <h1>${this.title}</h1>
      </header>
      <section class='tl'>	
        ${this.elems.map(element => {
    return this.getHexagon(element);
  })}
      </section>
    `;
  }
}

window.customElements.define(HexagonsLayout.is, HexagonsLayout);