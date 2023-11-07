import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div class="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="main">
        <h2>REACT</h2>
        <p>Intro</p>
        <p>Scroll down the page to see the result.</p>
        <p>
          React is a popular JavaScript library for building user interfaces,
          particularly for single-page applications where UI updates can occur
          frequently without requiring a full page reload. Developed and
          maintained by Facebook, React allows developers to create reusable UI
          components and manage their state efficiently.
        </p>
        <p>
          React applications are built using components. A component is a
          self-contained, reusable module that represents a part of the user
          interface. Components can be nested, allowing complex UIs to be built
          from simple building blocks.
        </p>
        <p>
          React uses a virtual DOM to improve performance. When a component's
          state changes, React first updates a virtual DOM representation of the
          UI. It then compares the current virtual DOM with a snapshot of the
          previous virtual DOM. By identifying the differences (or "diffing"),
          React determines the minimal number of updates needed to apply to the
          actual DOM, reducing the amount of manipulation and rendering
          required, which improves the application's performance.
        </p>
        <p>
          React uses JSX, a syntax extension for JavaScript that looks similar
          to XML or HTML, to describe the structure of UI components. JSX makes
          it easier to visualize t
        </p>
      </div>
    </>
  );
}

export default Sidebar;
