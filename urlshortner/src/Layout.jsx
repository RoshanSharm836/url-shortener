import React, { useState } from "react";
import Card from "./Component/Card";
import Input from "./Component/Input";
import Main from "./Component/Main";
import Nav from "./Component/Nav";
import Url from "./Component/Url";
import "./layout.css";
function Layout() {
  const [short, setShort] = useState({});

  const [displayBtm, setDisplayBtm] = useState(false);
  console.log("ads", short);
  console.log("s", short.length > 0);
  return (
    <div className="layout">
      <div className="top">
        <nav className="navbar">
          <Nav />
        </nav>
        <main className="main">
          <Main />
        </main>
      </div>
      <div className="down">
        <section className="input">
          <Input
            short={short}
            setShort={setShort}
            setDisplayBtm={setDisplayBtm}
          />
        </section>
        <div className="Url">
          <Url short={short} displayBtm={displayBtm} />
        </div>
        <section className="main-card">
          <div className="card_heading">
            <h1>Advanced Statistics</h1>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              doloribus nobis beatae quae cum officia exercitationem illo
              voluptates excepturi eum, mollitia quo accusantium ea magnam vel
              quidem dolores necessitatibus ad. Numquam, iusto, pariatur
              delectus commodi saepe, reprehenderit laborum voluptas quae fugit
              molestias .
            </p> */}
          </div>
          <Card />
        </section>
        <footer className="footer">
          <div>Boot your links today</div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
