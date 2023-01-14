import React from "react";
import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>Welcome to Repair Store!</h1>
      </header>
      <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>&nbsp;</p>
        <address>
          Repair Store <br />
          555 Foo Dive
          <br />
          Foo City, CA 12345 <br />
          <a href="tel:+8801732955937"> (+88) 01732 955937</a>
        </address>
      </main>
      <footer>
        <Link to="/login"> Employee</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
