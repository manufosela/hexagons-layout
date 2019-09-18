import { LitElement, html, css } from 'lit-element';

/**
 * `div-hexagon`
 * DivHexagon
 *
 * @customElement div-hexagon
 * @polymer
 * @litElement
 * @demo demo/index.html
 */

class DivHexagon extends LitElement {
  static get is() {
    return 'div-hexagon';
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      img: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        /* hexagon */
        --gap: 2vmin;
        --radio: calc(100vmin / 4);
        --width: calc(var(--radio) * .866);
        --height: var(--radio);
        /* colors */
        --negroC: #444448;
        --blancoS: #e1e8ed;

        --main-color: var(--blancoS);
        --main-bg: var(--negroC);
      }
      article {
        color: var(--main-color);
        background: var(--main-bg);
        width: var(--width); 
        height: var(--height);
        overflow: hidden;
        transition: 1s;
        clip-path: url(#hexa-v);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        filter: drop-shadow(0 0 1px #fff);
      }
      figure {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        height: var(--height);
        font-size: calc(1rem + 1vmin);
        line-height: 1.2;
        transition: .75s .05s;
        hyphens: auto;
        text-align: center;
        margin-block-start: 0.2em;
        margin-block-end: 1em;
      }
      img {
        background: #fff;
        min-width: var(--radio);
        min-height: var(--radio);
        max-width: var(--width);
        max-height: var(--height);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: 50% 0%;
        transition: 1s;
        clip-path: url(#hexagono);
        clip-path: inherit;
        z-index:  10;
      }
      article:hover img {
        transform: translate(-50%, -50%) rotateY(.25turn);
      }
      h2 {
        font-size: 100%;
        font-weight: 200;
        font-variant: small-caps;
        padding: 0;
        margin: 0.2em;
      }
      figure p {
        font-size: 0.9rem;
        line-height: 1.2;
        font-weight: 100;
        margin-block-start: 0.2em;
        margin-block-end: 0.2em;
        width: 140%;
        margin-left: -1rem;
      }
      a {
        display: block;
        color: var(--gris);
        text-decoration: none;
      }
      a:hover {
        color: var(--blancoS);
      }
      @media only screen and (max-width: 450px) {
        figure p {display: none;}
        figure h2 {font-size: 1rem;}
      }
    `;
  }

  constructor() {
    super();
    this.title = 'TITULO';
    this.description = 'Loren ipsum y no se qué mas en latín pero si añado mas lo mismo se va el espacio...';
    this.img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADYCAMAAADS+I/aAAABU1BMVEXy5vL////y5vPh1eGCFYLp0OicQJ336/f16/WZkpnc0dx6AHjQps9CQUPJm8j5+fnk2uQAAAA9PT25jrrx8fGAgIDg4ODNzc0zMzNSUlL/8//m5ubY2Nh3d3dgXWDHx8erq6t7AHq2trYiIiJJSUkvLy8YGBg5OTmWlpZmZmZubm6xsbGHh4dOTk6ioqInJyfJv8lvAG6GgIYQEBC6sbp7dXqgmKDSyNKyqbLUsdSQkJCzebORipGrY6vv3vCNKY3gwuDNoM6hU6CtbK2UQ5QfIx7TrtMmMiVha2EpLihQFFCmT6ewWrBxJ3AgFyFgF2FKUEp1P3RjTmNjWmOIAIe8hr2VMZWuc66XS5eiY6ONNI12SnYtAC9nAGhOAE0sJyxEM0U2ITbRvdJrS2s/EkASHRJ7YHy5m7ksCyyqh6pXMVZ9bH2CXINQRFAbABtGI0YSCBKsuxYZAAAbh0lEQVR4nO2d+X+jSnLAUcueRsIymNEBSEISAiGwbuuyRpY99ngS70uyycbzjtm83SSbTbKbzfH//5RudNEIEAhke7Kpz3sz0hhL/aWa6urq6moq8Wcj1Gs34OUkIipbqGApsAGuzeZLlYpyWa12kFQvFaVSKBWD/GJMEhE1q+awzLI+17DFktI01YwuCJogCLrOI0FvLOEzYq5ayGeDIOcLSPIHtzUqKu//86LSzBl8va6pRq5ZxXos5VdSKlSUaqdlikK3IYjmrFrah2uazdnMaB3a1uOhsnmlJTTqervcUfxVUSxUZzKvNepip+DXPcoV/Gezc1BLo6NmilhDOw0sKjlZ18TcZdCnkc3mK02T11Szmff6jSUqK/vdDh+Jiiq2VVXlyRuNOIUr3djfI3ckX2mp9YbcKbn+dImaEIsHNDRxhA5crIr1K8OjsYE+UslpDb1V2P3Jm0JlCy1eE5vh1UlK8bLMd41LJ9Ia9ZU6sG5/U23Xu7NAY+xeKV6KDSFH9o0lail34EdGRc2ZWHLoRpdmeresxOgSlGZq3VBsKix38qVS9dD+G90xZJf/58uCUwnRpVhVu7KyedtS26rYPJQ0Jh+4Ur7KdA5ug4+wFfNCrcbTVaKiFiuFbKncbTeP5swWDCGjoFE3cpeJiFpUG40M/xfKgUYxmJT+8qndbTSqET8mIuqsm8k8/eK7794dU777q7/+mwzPdyM+IRFRTQGh/vLk2NJHqBnt8ElNdNRiufvIC93T48voin9qtC9fC5WtCn/7dz//apSG1LGFpsbmL07+vmtEUezhqPly3eydPC+k45MigdIH5v1lV42g2INRq5qgJO6ZzzQFXgIVwdZupbxxVX5pF6KY66LvXPTfLV4IFHXis9oNfmjUyouilsQG8hnYH/t39EuRUtTiK7NAjplaPzAMcRBqpyFi3+W8/+FFnlNLAEXfMT9in6xVlw/qxAegZlvdHP4u+rb2gkpFDwr8gTnDDajq4iFeYnjUrFFvWi++9N+/YPfFclq7tb45r2sHPLChUQttfvk1C+bTgnop84sEoC6M7u7ydpcb4R/YsKgFIbOK+jz0z19UqfimLj7VFtaXs7lu6HhwSNRq3ViZhDvm/oW7L4UHnP4Pq5Z0GmbI6VQ41I5mrl+evKRN2rJ+qt2tGnCpGeFYQ6FWr8rrGfj1ayiVAvQpc7tuzaUmhooHhEGdNWbrl/TJyeLlSZHQD/3P60ZU+FAhtRCoze42LPnhhW3SFvX0+ZZet6IghFnUCI7auZpt+svi+fnlRhkH63n/y6ZNFT1E/DswatNu3e+Z6xeb0TgF3K4GHCyFELYpKKpSz21twF3//uWcX6fQZ8z9tl0VwYgZVdnaXmSTkMWnX6sDU5T0U//O1rJ60IWNYKgFXrbZ9c8vOaPZFfqu9qOtNUp9ttvgg1GLvGqz6lSthgea11MrfOif2VqX6waLwgRBzcq8PXz1gXmlgWbL+lwDtga1rgLNc4Kglrv2j1rUPr2O97AV+j3zgVCFGiSSGAC1Q0Q42E/917RJqxmOFXvZSFFrBxhy9qNWGsRjf127eeXui1jpa8ZumZArEcAM70UtiqRT/aJRFm+5r13bW9Vs7DdNe1ENjYjjfOl/oXFA4JUF3tWeiWaagkueSDjUTp24XeD562vbpKXQH1axl5UU2+q+Gd0e1LxQJt6/2ozGKfTi9tk+4CQqq+DeoaisyBP36pp5x76m82AT+uMm9rKUZn3P6OqP2hTIX3/3NmySJfD72p29bey+ibovat7hSl/3b17T+SUFucLfE60raP5BRD9U1lCJkZl6rSiLqwD6pk8MOInZlW/Q3w+12lWI91+YL2+m+1I49lK7JZqfbfvGX3xQs45Z76L2alEWd6HPHZap4rtI54Oa40kn+gZHWd6UAHKGg/wd3ket3qglx0B12r9/W0q1gv03ZJsFH8vkjWoKxB1iPzGnb02pFHBapmbd2zJ5ola6ZPbX+duySUtZry5vJCt4T3E8UVVyQkPX3tJAsxH6h/450exq19Pt90KtNBwDzVtxfh1yeluD9nayohgSlTXIsPmi9uNbs0lYAJrhMMQMB03FvNTqgao4IlOfXjSXJajguw+QubS3NNs2PWZz7qis0Sbe39VeY4lxnwArF+TaHuxHUm14qNUdteAIrZ7U8EDz1rqwhYpnOIRaWY2cYu9BNUjza0VZ3qgA5Ao/E62d6e6hUlfUEplRDW7f5ECzFCvvhRhw8rz7yoYr6kwgJrk/9M/ezjTVRU6fT2h7e3N1V0/YDbWoEp7kHfPuzXbfZVT4rP9gb3Cp6zrBcUNVSEfyvvbWZjR2cbFMrOw63rihqjKh1J8f3jCpJfTnGjHgVLtuTr8LakGzGyVw+7x41TWaIAIfiBkOq7k5/S6oTd1+T95YlMVd4Gntq90y5XQXw7SLyqr2IZju32Lr+9bVSiON2Fpd0RQnlhtq4cJ2GXtT+4y77xtHBdTitmZTa7HtEo3YRc0JNvN1yty/Xe/BLo4Bh4DwQs2KtkeafZszGjdZ3NsHnNLFbg/eQS3otovOmA/fCClF3/V/smHwuz7/DmrV5iyzz7enr40QWOgHxuYKt3YXcHZQRZv/8JZnNLtyemKb4Sj6zqzVicpebP1HK8oC3rr13QgxwykJO9tdnaiX9W3/vWfOviGlIkfiq80y7YbTnKitbfjMmtF8KyrFQn9mtsH+2ZVzuHGgZo1N2iT7tbYM5387tNAWUivspKg5UIvbcizn/W9moFkLXoakNyTO3AgHaqmxvhc4w/hbQ8XB/nVmf1YuO3qwA7VzsX710P/8zZEin+l5M8NpOZPxHKjGuvzMgnn3bTi/pNBnG8vUERyBQxKVVdcO8E/9szc/IXcT8P060bLizIwgUUvCygH+3P/hCEHCjTtyvJtIXzNrV/ii6odaWeUp0be14zm/gDom6zb2opf9UDv8Uunn/R+OZ5MglODx4sr0KfNVsiAM0Q91NR8AzNdjDTSAgr2BMeodT7H0h5Ur3OGLPqimYY1FD8zH4yk1JU8nQ2NwtM/HKeDWgKM48mZJVNHas3nKHG/dGI4HqPdCOB8fpw8jy0d/ZKx0poJleEotVc3ld1DZZV74V+Z4URZopK2/OZk71ldQ4J01wynxl8jQGko2q1jb8ElUK5sLjcJHtEnG8m+pnT7ad9Cn/XcJvPTUTLAZ63lVyk7UIg4+0c8nR0xQgsby2ZDE46EC+gZXVcABwYotSEqgFi5KOJH7yxEjv9Cc4IcUpo3jdeDVJlfWMBPVjgeqclFMnD6f4KuPZZfAUAYQGSZjCI/od9LnOLPfNBJK0wO1U88mbo4aZUHD6lRODVPykQzw5ntun08TZTFRXGY6FFpO1KbA3vU/HXPuhsYCmB5Oh+kjTyWsGU5ZZRM57AizcsWJ2lLp72vHT5qER/QL1yLd/3w609kEmxObLVVZdeCSgQW7hDnjrP/wLQWTPARYmf3fDTTce4vr8sUUHmVxjWxcFbX1qxPmRaIsL3AzwU3t109EyAWjrqfjpfY//Hx2jHgoIF9A8BIJMzTzG3KNyoZaFAT+t8P4W+G8dbAnz13+OW6R/vGJJ3L5EWpB7DSbs2yiqWUyGh4EYmrE9mPIZ0Li+Ubv6HqF6YsMz2ccWjVLhUKFTVTrmcxTfOMdGkK5Sdryu9KTBb6DE8tRoiRVX6OubDFc/h2vZQYXmYwuundgVtWEf/pnGFvPQh1VlgdoJB2IstyDcDqcYkI44bvduWS1Zj4a4JvRG43G+PrUOEZvUfpdVyB2jtvNEmv8C/MQm1kClDyR4GgqTUdQ6skUSElSCqvN0DO8bqnVHKd7chpOxEnaHEvJKUzG16noO+aXvyfCoxh1E27KGTEmBFhpYmAwhIMeBMDgYGrSG9JId4+marQNCgAOkUuDnjQfQuT+U8mpFCPq4v75X3cGm+ImXpoT75j7uBZUcVpyyhhAYM1hRhzF9XroBSe2e3xq8Gj1ZQB6BieZE2tSB4e5eVwdGNDXzIeZ4ETdyozPPjBxhrp7PXkKMSoYJbHZwfRP054+59piEn/NwBxwkpzGU/UJBSUppu8F1OKEkXK8N2qnm6WY2xgXMCDkDGqUBACMVvrieJHDqGM8rEEr1pQwkGWONyoB6C/MueXue6FeXmU3iXbRVQsGWI8GNR9KFFiFkuBIGFqoSVXnwBT5TelMYoQ6MxCTkb/QJguciFcmA8EEagVNzanbmOY2AA5SyfRoisacSXo8Wg6gvadRMolQ0R/CALSTEtKqNE1BaTiK03uCN3jx0TS8UUsXBbz1OK7IPpcS5SlinortVf+FZndioXLJ5Eib9OTByORgUhwN1EmM7gN9jZNmWaPsjZq9wBsx4kp1BtjOWF6QJEmWzuC4O+bWqBPBgOnpEBtqMJwm43SU6K84UaAotrxR2S4OxZzWjpLAjl1Enh8mk9azyqG+rU3XrmCcHiFYb+HNqx0fVN5ynG6OsmAOsFLbj/J8OuUHw/GIFzLqcWY3i5MTjFXiFW/UhGwtZNC3z8dYcoSTpwGcDGRd4HVBxfbq8SjBNPpD/6NlZB2VHkjU8nJf+vujJLfAkZZGPZZLDjODdBIPqiP+CNXd6bvarTWeKkLJB3XWtuL+7DEC/LCnDSxvCA2lqeXQk34cxY8K362Sl2aZrA/q5Spt/86yTPE+SaAtcstPXKMiX1+IfY5OX/dXuzNkYmPJToLAupryfewpz3D6OF1hbVABp8pxo4JP60TDessPtaiv7PMp8ylm68iJ8vrlBtXOH5Ns00ezzkRvR96SuPal3secCgwH2qavbrWKpu9irMtU9OnJ8ypHS3EWE3CglrurFzSe4cSnWJgWthZoq1WABpxUXDM363s+bHKCm45UCCcqXotbSpxJLsAaVzZvt6jIMo2eYvN+cWn+TU0Mtuws6OJMp6xvOvh9jGkCWHlbIDsqnPDxZYAAgBq9aj6xs8QNtZjZLEjeMTexLYFyst0HtKNSMPX72AYc+jOz2WyTF5w7Ox2orLndD2kdaxKLwLFmXzUgUClKjS0DZGErX1O5cG7Ddia0N7eFVGnmJK44qWbY35KocKrFNODQX2z1Ocuag2wHtWIrNfDFqqMaQ9HCuUaYHodWofzIRV4+AVYGxHa7I7mJ0RU10dj6GNbW1UgNWKJMdNLyOFF7wjz6tyDUG1uJ5IKws1NsB9Ve/OI6lg3J0qjOET3UgYpGIj0d/XvIsnBVfmdj8g4qkZkXRzE/OH1yPItOVMB1Y3CFl1GWtayyJX1RSxlbxvBd9NgLoESnhd3RqpQSIq7rAkcJR9bltJAdVJzYtJWHftRldDi+GjpW93ZQqaQoRjV+ZGFO5WJ3Y/3uVt1mw+ZQRS6nCib8yHmvdlHhMGrsxVHyw3Q5PmMXtXhlz3mPutnRPqNZyy4qRZmZSKlMuJCLrdX5nf1ErqgJ0154flmU5+BWwMnjfGfm4oKKozGR1HpDFCCtai6FiFxQq0R29HXtBn9UONjNUj8wxOTO77ppFQ66EVxhPKOx60dWd7HcUPOCXfuHbDeHqenSaXB/Bt1QqaRqrG9JOGQcSgef+kQZc9cqlW6FTQziBO8FE9oySRfzofXCPXa0i4pXM8ZW7AXAdLIXalEOWEuM9qoQu7NyT9RCnXCqwh8pIAnLJRg4d40IumqVAiqOvQBpgHNEQqHS4ISoAJ1VXYsZuqFmZcLVoGshZzhAyiydBu5p5ObHu6PCoTaHAKGOpZBWEP5AHCSRUBqu9Z9dS0t1yMo258yHcJP0FSoc6K7Re3dUCuDoP84DCWmekPN7T4yiRibhJq6oWfJUAetQlzA2eImKBpAdJJxTAj1QrTWdQ1CJQ192a9j5ojorqd2FLGwtda04vqw7QSeGLKs9D1RsmYYwNCp9xvxENN5Q3Wt6u6M6K6ndhywNjE2oS3QBzhFGb+CFSnG8jKZ8IVHByYl9oEEjjcf5Nh7VKcsa0ftPDyj4vOAN4IxgSNx0IA+SXqh4wJGm4VJd0IyGKIyWaHY9jkHxQC05BuHw1VXhvLsT4IVTdTDkRp5apYD5xMFQX4R30hPx3lLX66gBr0qyLXIUpm5Pwq0u70RZsEjtiST5dGBkybpeP3IVAOxH5C0b7nnSuxdqydHjr/vhdo9BWed2Hd3RfDJt+2gVXYHGp8DPCg7nO44FKTo36O5HTZgO5yrc4S5w6J5ZnBqN0/OJDyqyTGHUCt/VkkQzcx7m1w/VWQH8jvkUog1AXq8bO5omQSD5aBXnIIawwM5ijTu11gOhJpoNMmbxoW/t3w3Uu2DKPWXdsWru/CH+MV6HDdyDF19rxECTKPtUo/dGLfJkuYwwx2ulVdOnuX5aRZapETj2Qn9gyEreit85aj5HDHQcp6YEj71I890oS1BUQMntgJM4NNCcENpgec9C3v6oCdlR+PA24DIk7F35rg/7oqJhapUJs/97HhhyoOl0/Y608UOtaKQfccYErIthqr568UdFE6LHQOlM9B3zE6HUvP8pL77n2eTIaufsj4HUakVZ/CzLHlQ6zY8CkFKLd32ysrWh+Z4W54vK8uQie7AaNlxG9F9Y24OK814CBPvpc4Y896Sq+R+g5ouaUBxd+D5AZj/cuyqxD5WCqriXlIK1E+LYk3zXTPiKP2qiRS4IgJPaPrXCpLYvYXs/6lDbO+DAB7KCN2u4xs6CoxZFsguf7U20hCNhXxrzXlS8DLnrQdsF0HfPRJncRKfhUjw2DGqickFYtWX+rI/W8LrwPo79qHhRwP8S1nG8S6Hr6eYHRUVjFVG26K7ve64CgGJmbxJHAK3ClLcTgm80/ZE8QyGb2X8U9l5U1iQLb/nnvcBpd38ORwBUkPSc4ViRDfCVLFSec63eHRIV+cLEDTutvfNpJ6ea+0ADoVKS74DjPGDL0fUORU0UNMKK+8Ve4Bzvdds3HAVBpShDTXp9EH36TDi/wU7BDoDqOFaX9qykC2BaHwVwXwOh+mX2k/VxE3k+0DnuQVATM8KQnzNeeS9QDrQgHEyrOPbi/mH0af/W1p5sW98zooZATZi6fcrgdbYYmTQZFRVdZrpftvhkt0mszO89ZTYEalbUbDfO2uTqIkBWA2ULBkRFD75r/ixRMBbNSfb6DqFQE8W2PeXpwbWkDUwtjebeLhwQlaK2OfB2Wdz2bc5vOShpUFT06NuKYy9cM/sD7znwCXkT79Bs0GWQtrambqSp7TtMNzRqoqDbhle30yTgQAiYrx1Yq1B0PhEAb0293R6X1rkKTBocFbHKG7eJ/rpTvRLZpHnAQgsBUQFyhZFD7fhINKPZrhs3vZaioqEmCsJWr+dkSA03Z6QHTWHwWchYfii0vD9g5b2QPQXQ17XtEmPHuZUmLtRERRfXemV/dCxD2p3flR48NeeJClKjQZqmuLE5mCDa6bTHCY5cNmhLmmxeBO+9IVETJV1c22HnniOQkcEKczJJI7Vwk561ejhJr/99c70n6micnMqcNBhw0zYyShNqnBw/Ea4wfb4ZaNiWFqL3hkVFz+tmzPmOUCtcNwlwo9FARY6wYczVIQTj3nAYUKv0RJSgNE0mDVy9cgiHSWmaBqJqV+vieV2sm81d+R2hGxkV+RLr85OpE1sKOExr4jKgCVMpSUob1HQuwbQKuakEpw4key6EvWfA+bQ3HQLYG0Gk0oHEjYdTxGyPvWxKp6KG1P2DZpFRE1ljfVwTskzbNox0VZxgYwmNJFgAjsKpAJSZBONJL6hWpYGRGg7mcIimDNYfFLp7g4zKb8wdvTkmLS/yQT2Hg1FRx7mYWRMoXMVytYcB9oRR2uz2ECuU57JoctCq7jGYQDhcRxPgWF4L316/sgd8pRHqCZKR7q1R8aYrbdjrbraY0esdQxU+oN8bCRWZeG056Nwx71YzNqhmJlxylMFVO7QhssYjsEK17ZiHo3ZqjiU14I3VqxFvcxHw84l+pzdBXj6cYsXDEd/juJG+ulvI+bWiLGynawSay0RGTSi8ak10PmHLBHAVxscUl0ymZRkAKHOAktTFII1bOrE/iqMR4CyZ8PPVqyGBitQJoZEGchJa5Xzg8GmKayvw8vKWrramZnONXJD5aRyo6EmxvJS72o+WXUm2xXQSF0HA1Q9GqJ1ABGNkjygiaR+honZjsap9WEKg4kpTUyMF4FidjrCjz/H4Dia5ZaIlTuTGp8qWdC2k6Y2Cmsi2umYeb3LFsRdp8DhdtnyucughS+NqJun2kBsQIQkClXNDpajetGf9NR5yuEPraeuqtGiV8Tm9fZYSbFMQwz+mEVDxYTC6kpBqtwvsqMqrlk/Q7YfDtoqL7gxlfUCOJQFQt7XSAF4/Hywv46Z4k6uVnV80GoGCK3GiJormlZn/iM+mMvneqj9yhoGesE01E9J7DYJKYPc2nwsMYULf9e8Tne7upqjjoyI7qPOXX5m73uPq5uOnqu3T9L3PquP6sZhMbq4bJW9q/1bumvvDvUdAxcVKH//4m982hDS3liE/ob1EGpVXV0301OZ6zvt6c0StP5caXGj//ku9frhKI6LinWdaJvP4h/dr+cMf3597ycc//W511X88Zv6wvt7z8vOPf/zT5nPf/yef4Ru5AwbT2FATZSGTefrNc42pWcLg/xgPqS2vYmr/pT79vHrjeTG+fP2ptVr/txmeF6KRRkW9bCCt/vevP38+CyHzKzHU9Z+//PF/eJ5XDzW98aCyOYEvG7pZ8jg23UWKpVKlkA9+faLY5NstUVcjWCRLIqIi25RPZBWtbvql0RBSznU6nZy8/8Kl5Gd6o5VPsKWIOo0BdSlV8SqjBGtMznJ2LgPFSthC+UpoeaQyh5VoqLONN5pVRE1sBYHNWfovBFg7yyqGrs9WoK1yuZwL3HXcJBJqVrZ7aYpZ77Yqex9CS6vs/lbnO+qF2NxY3XZHURQzVNzMIZFQq0qTaHG2pWqZ2R6Tk1PFtijvmZwUFVEQyna/3gpWsq6neAeUKKisUXT2w6JiaprZ8TOWuct8Ke87RGaVnNoQm+SHWKhZw/03AkkU1IKYYHcHu2xV1hqZTsHruc35zsHYvGLU65nZzkVi87Jate+DDy1RUGfVYrHl8uVs/rLMd1WzUyi69DfvpzRbvMzJgmY03W6TiJ/VmfNEvzASBVVUMxnV48uLlRxfv9LNTsWJ23LVarZQbYn1hiBWPTr/cmGhEzYiapMIqBUruG54j3rFStPUrhp6GwEX8u4dmi2WCkiXme5Vvd269LFor4paDuALIJLLlinymsa3jXJu1qkqSgWLolx2mq2cKWYETVeNcrPicS/WonbQ7zTNCD5ThKn58gZnA8whEXAFNVPk6w0kV1jwi0ZXlXNVxUvhpChVJJUo3mFMjmFQYbNF5O4jyRezESzMQfLCqK8p/4/6f1H+jFD/F8kUL0mHllXbAAAAAElFTkSuQmCC'
  }

  render() {
    return html`
      <article>
        <figure>
          <h2>${this.title}</h2>
          <p>${this.description}</p>
        </figure>
        <img src="${this.img}" />
      </article>
    `;
  }
}

window.customElements.define(DivHexagon.is, DivHexagon);
export { DivHexagon as default };