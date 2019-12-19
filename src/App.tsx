import React from "react";
import "./App.scss";

import { ReactComponent as Cactus } from "./images/cactus.svg";
import { ReactComponent as Cup } from "./images/cup.svg";
import { ReactComponent as Desktop } from "./images/desktop.svg";
import { ReactComponent as GitHub } from "./images/github.svg";
import { ReactComponent as Headphones } from "./images/headphones.svg";
import { ReactComponent as LinkedIn } from "./images/linkedin.svg";
import { ReactComponent as Smartphone } from "./images/smartphone.svg";

const App: React.FC = () => {
  return (
    <>
      <header>
        <section className="coming-soon-image">
          <figure className="coming-soon-image__cactus">
            <Cactus />
            <figcaption
              className="coming-soon-image__caption--hidden"
              aria-hidden="true"
            >
              A cactus
            </figcaption>
          </figure>
          <figure className="coming-soon-image__desktop">
            <Desktop />
            <figcaption
              className="coming-soon-image__caption--hidden"
              aria-hidden="true"
            >
              A computer desktop
            </figcaption>
          </figure>
          <figure className="coming-soon-image__headphones">
            <Headphones />
            <figcaption
              className="coming-soon-image__caption--hidden"
              aria-hidden="true"
            >
              Headphone
            </figcaption>
          </figure>
          <figure className="coming-soon-image__smartphone">
            <Smartphone />
            <figcaption
              className="coming-soon-image__caption--hidden"
              aria-hidden="true"
            >
              A smartphone
            </figcaption>
          </figure>
          <figure className="coming-soon-image__cup">
            <Cup />
            <figcaption
              className="coming-soon-image__caption--hidden"
              aria-hidden="true"
            >
              A cup
            </figcaption>
          </figure>
        </section>
        <section
          className="coming-soon__title-group"
          data-itemscope=""
          data-itemtype="https://schema.org/Person"
        >
          <h1 className="coming-soon__name">
            <span data-itemprop="givenName">Roman</span>
            <span>&nbsp;</span>
            <span data-itemprop="familyName">Baran</span>
          </h1>
          <span className="coming-soon__decorator">aka</span>
          <h2 className="coming-soon__nickname" data-itemprop="additionalName">
            <span className="coming-soon__nickname--blue">A</span>
            <span className="coming-soon__nickname--red">r</span>
            <span className="coming-soon__nickname--yellow">e</span>
            <span className="coming-soon__nickname--blue">k</span>
            <span className="coming-soon__nickname--green">s</span>
            <span className="coming-soon__nickname--red">b</span>
            <span className="coming-soon__nickname--yellow">i</span>
          </h2>
          <h3 className="coming-soon__role" data-itemprop="jobTitle">
            Lead Web Developer
          </h3>
        </section>
      </header>
      <main>
        <header>
          <h2 className="coming-soon__main-title">Coming Soon</h2>
        </header>
      </main>
      <footer className="footer">
        <p className="copyright">Roman Baran © 2019</p>
        <div className="footer__icons">
          <figure className="footer__icon footer__icon-linkedin">
            <a
              href="https://linkedin.com/in/baran-roman/"
              aria-label="Go to my LinkedIn profile!"
            >
              <LinkedIn />
            </a>
            <figcaption className="footer__icon-caption--hidden">
              LinkedIn link
            </figcaption>
          </figure>
          <figure className="footer__icon footer__icon-github">
            <a
              href="https://github.com/Areksbi/"
              aria-label="Go to my GitHub profile!"
            >
              <GitHub />
            </a>
            <figcaption className="footer__icon-caption--hidden">
              Github link
            </figcaption>
          </figure>
        </div>
      </footer>
    </>
  );
};

export default App;
