# Learning Next.js

- [Learning Next.js](#learning-nextjs)
  - [Learn React](#learn-react)
    - [React Foundations](#react-foundations)
      - [Prerequisite knowledge](#prerequisite-knowledge)
      - [System requirements](#system-requirements)
    - [Chapter 1: About React and Next.js](#chapter-1-about-react-and-nextjs)
      - [Building blocks of a web application](#building-blocks-of-a-web-application)
      - [What is React?](#what-is-react)
      - [What is Next.js?](#what-is-nextjs)
    - [Chapter 2: Rendering User Interfaces (UI)](#chapter-2-rendering-user-interfaces-ui)
      - [What is the DOM?](#what-is-the-dom)
    - [Chapter 3: Updating UI with Javascript](#chapter-3-updating-ui-with-javascript)
      - [HTML vs. the DOM](#html-vs-the-dom)
      - [Imperative vs. declarative programming](#imperative-vs-declarative-programming)
      - [React: A declarative UI library](#react-a-declarative-ui-library)
    - [Chapter 4: Getting Started with React](#chapter-4-getting-started-with-react)
      - [What is JSX?](#what-is-jsx)
      - [Adding Babel to your project](#adding-babel-to-your-project)
      - [Essential JavaScript for React](#essential-javascript-for-react)
    - [Chapter 5: Building UI with Components](#chapter-5-building-ui-with-components)
      - [React core concepts](#react-core-concepts)
      - [Components](#components)
      - [Creating components](#creating-components)
      - [Nesting components](#nesting-components)
      - [Component trees](#component-trees)
    - [Chapter 6: Displaying Data with Props](#chapter-6-displaying-data-with-props)
      - [Using props](#using-props)
      - [Using variables in JSX](#using-variables-in-jsx)
      - [Iterating through lists](#iterating-through-lists)
    - [Chapter 7: Adding Interactivity with State](#chapter-7-adding-interactivity-with-state)
      - [Listening to events](#listening-to-events)
      - [Handling events](#handling-events)
      - [State and hooks](#state-and-hooks)
      - [Managing state](#managing-state)
    - [Chapter 8: From React to Next.js](#chapter-8-from-react-to-nextjs)
      - [From React to Next.js](#from-react-to-nextjs)
    - [Chapter 9: Installing Next.js](#chapter-9-installing-nextjs)
      - [Creating your first page](#creating-your-first-page)
      - [Running the development server](#running-the-development-server)
      - [Summary](#summary)
    - [Chapter 10: Server and Client Components](#chapter-10-server-and-client-components)
      - [Server and Client Environments](#server-and-client-environments)
      - [Network Boundary](#network-boundary)
      - [Using Client Components](#using-client-components)
      - [Summary](#summary-1)
    - [Chapter 11: Next Steps](#chapter-11-next-steps)
      - [What's next?](#whats-next)
      - [Continue learning React](#continue-learning-react)
      - [Learn Next.js by building a dashboard app](#learn-nextjs-by-building-a-dashboard-app)
  - [Learn Next.js](#learn-nextjs)
    - [What we'll be building](#what-well-be-building)
      - [Overview](#overview)
      - [Prerequisite knowledge](#prerequisite-knowledge-1)
      - [System requirements](#system-requirements-1)
    - [Chapter 1: Getting Started](#chapter-1-getting-started)
      - [Creating a new project](#creating-a-new-project)
      - [Exploring the project](#exploring-the-project)
      - [Folder structure](#folder-structure)
      - [Placeholder data](#placeholder-data)
      - [TypeScript](#typescript)
      - [Running the development server](#running-the-development-server-1)
    - [Chapter 2: CSS Styling](#chapter-2-css-styling)
      - [Global styles](#global-styles)
      - [Tailwind](#tailwind)
      - [CSS Modules](#css-modules)
      - [Using the `clsx` library to toggle class names](#using-the-clsx-library-to-toggle-class-names)
      - [Other styling solutions](#other-styling-solutions)
    - [Chapter 3: Optimizing Fonts and Images](#chapter-3-optimizing-fonts-and-images)
      - [Why optimize fonts?](#why-optimize-fonts)
      - [Adding a primary font](#adding-a-primary-font)
      - [Practice: Adding a secondary font](#practice-adding-a-secondary-font)
      - [Why optimize images?](#why-optimize-images)
      - [The `<Image>` component](#the-image-component)
      - [Adding the desktop hero image](#adding-the-desktop-hero-image)
      - [Practice: Adding the mobile hero image](#practice-adding-the-mobile-hero-image)
      - [Recommended reading](#recommended-reading)

## Learn React

### React Foundations

To effectively learn Next.js, it helps to be familiar with JavaScript, React, and related web development concepts. But JavaScript and React are vast topics. How do you know when you're ready to start using Next.js?

Welcome to the React Foundations course! This beginner-friendly, example-led course will guide you through the prerequisite knowledge for Next.js. You will build a simple project step-by-step; starting with a JavaScript application, then migrating it to React and Next.js.

Each section builds on the previous one, so you can choose where to start depending on what you already know.

#### Prerequisite knowledge

This tutorial assumes knowledge of HTML, CSS, JavaScript, and no knowledge of React. If you're already familiar with React, you can skip to the [From React to Next.js](https://nextjs.org/learn/react-foundations/from-react-to-nextjs) chapter or take [Dashboard App](https://nextjs.org/learn/dashboard-app) course.

#### System requirements

Before you start this course, make sure you have the following installed:

- Node.js 18.17.0 or later installed.
- Operating systems: macOS, Windows (including WSL), or Linux.
- VSCode or another text editor of your choice.

### Chapter 1: About React and Next.js

Next.js is a flexible React framework that gives you building blocks to create fast, full-stack **web applications**.

But what exactly do we mean by this? Let's spend some time expanding on what React and Next.js are and how they can help you build web applications.

#### Building blocks of a web application

There are a few things you need to consider when building modern applications. Such as:

- **User Interface** - how users will consume and interact with your application.
- **Routing** - how users navigate between different parts of your application.
- **Data Fetching** - where your data lives and how to get it.
- **Rendering** - when and where you render static or dynamic content.
- **Integrations** - what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.
- **Infrastructure** - where you deploy, store, and run your application code (serverless, CDN, edge, etc.).
- **Performance** - how to optimize your application for end-users.
- **Scalability** - how your application adapts as your team, data, and traffic grow.
- **Developer Experience** - your team's experience building and maintaining your application.

For each part of your application, you will need to decide whether you will build a solution yourself or use other tools, such as packages, libraries, and frameworks.

#### What is React?

[React](https://react.dev/) is a JavaScript library for building interactive user interfaces.

By user interfaces (UI), we mean the elements that users see and interact with on-screen.

![User Interface example showing a browser window with a navigation, a sidebar, and a list of posts](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-react-components.png&w=1920&q=75&dpl=dpl_CnpaidsuX5uQjRBd3SAiDEdSsFA7)

By library, we mean React provides helpful functions (APIs) to build UI, but leaves it up to the developer where to use those functions in their application.

Part of React's success is that it is relatively unopinionated about the other aspects of building applications. This has resulted in a flourishing ecosystem of third-party tools and solutions, including Next.js.

It also means, however, that building a complete React application from the ground up requires some effort. Developers need to spend time configuring tools and reinventing solutions for common application requirements.

#### What is Next.js?

Next.js is a React framework that gives you building blocks to create web applications.

By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

![Diagram showing how Next.js spans the server and client, and provides additional features such as routing, data fetching, and rendering.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-ecosystem.png&w=1920&q=75&dpl=dpl_CnpaidsuX5uQjRBd3SAiDEdSsFA7)

You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, and caching - all while improving the developer and end-user experience.

Whether you're an individual developer or part of a larger team, you can use React and Next.js to build fully interactive, highly dynamic, and performant web applications.

In the next chapters, we will discuss how you can get started with React and Next.js.

### Chapter 2: Rendering User Interfaces (UI)

To understand how React works, we first need a basic understanding of how browsers interpret your code to create (or render) user interfaces (UI).

When a user visits a web page, the server returns an HTML file to the browser that may look like this:

![Two side-by-side diagrams, left showing the HTML code, and right showing the DOM tree.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-html-and-dom.png&w=1920&q=75&dpl=dpl_CnpaidsuX5uQjRBd3SAiDEdSsFA7)

Two side-by-side diagrams, left showing the HTML code, and right showing the DOM tree.

The browser then reads the HTML and constructs the Document Object Model (DOM).

#### What is the DOM?

The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.

![Two side-by-side diagrams, left showing the DOM tree, and right showing the rendered UI.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-dom-and-ui.png&w=1920&q=75&dpl=dpl_CnpaidsuX5uQjRBd3SAiDEdSsFA7)

Two side-by-side diagrams, left showing the DOM tree, and right showing the rendered UI.

You can use DOM methods and JavaScript, to listen to user events and manipulate the DOM

by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content.

In the next section you'll learn how to use JavaScript and DOM methods.

> **Additional Resources:**
>
> - [Introduction to the DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction)
> - [How to view the DOM in Google Chrome](https://developer.chrome.com/docs/devtools/dom/)
> - [How to view the DOM in Firefox](https://developer.mozilla.org/docs/Tools/Debugger/How_to/Highlight_and_inspect_DOM_nodes)

### Chapter 3: Updating UI with Javascript

In this chapter, we'll start building out our project by using JavaScript and DOM methods to add an `h1` tag to your project.

Open your code editor and create a new `index.html` file. Inside the HTML file, add the following code:

```html
<!-- index.html -->
<html>
  <body>
    <div></div>
  </body>
</html>
```

Then give the `div` a unique `id` so that you can target it later.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
  </body>
</html>
```

To write JavaScript inside your HTML file, add a `script` tag:

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript"></script>
  </body>
</html>
```

Now, inside the `script` tag, you can use a DOM method, [`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById), to select the `<div>` element by its `id`:

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      const app = document.getElementById("app");
    </script>
  </body>
</html>
```

You can continue using DOM methods to create a new `<h1>` element:

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById("app");

      // Create a new H1 element
      const header = document.createElement("h1");

      // Create a new text node for the H1 element
      const text = "Develop. Preview. Ship.";
      const headerContent = document.createTextNode(text);

      // Append the text to the H1 element
      header.appendChild(headerContent);

      // Place the H1 element inside the div
      app.appendChild(header);
    </script>
  </body>
</html>
```

To make sure everything is working, open your HTML file inside your browser of choice. You should see an `h1` tag that says, 'Develop. Preview. Ship.'.

#### [HTML vs. the DOM](https://nextjs.org/learn/react-foundations/updating-ui-with-javascript#html-vs-the-dom)

If you look at the DOM elements inside your [browser developer tools](https://developer.mozilla.org/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools), you will notice the DOM includes the `<h1>` element. The DOM of the page is different from the source code - or in other words, the original HTML file you created.

![Two side-by-side diagrams showing the differences between the rendered DOM elements and Source Code (HTML)](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-dom-and-source.png&w=3840&q=75&dpl=dpl_CnpaidsuX5uQjRBd3SAiDEdSsFA7)

This is because the HTML represents the **initial page content**, whereas the DOM represents the **updated page content** which was changed by the JavaScript code you wrote.

Updating the DOM with plain JavaScript is very powerful but verbose. You've written all this code to add an `<h1>` element with some text:

```html
<!-- index.html -->
<script type="text/javascript">
  const app = document.getElementById("app");
  const header = document.createElement("h1");
  const text = "Develop. Preview. Ship.";
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

As the size of an app or team grows, it can become increasingly challenging to build applications this way.

With this approach, developers spend a lot of time writing instructions to tell the computer **how** it should do things. But wouldn't it be nice to describe **what** you want to show and let the computer figure out **how** to update the DOM?

#### [Imperative vs. declarative programming](https://nextjs.org/learn/react-foundations/updating-ui-with-javascript#imperative-vs-declarative-programming)

The code above is a good example of **imperative** **programming.** You're writing the steps for **how** the user interface should be updated. But when it comes to building user interfaces, a declarative approach is often preferred because it can speed up the development process. Instead of having to write DOM methods, it would be helpful if developers were able to declare **what** they want to show (in this case, an `h1` tag with some text).

In other words, **imperative programming** is like giving a chef step-by-step instructions on how to make a pizza. **Declarative programming** is like ordering a pizza without being concerned about the steps it takes to make the pizza. 🍕

[React](https://react.dev/) is a popular declarative library that you can use build user interfaces.

#### [React: A declarative UI library](https://nextjs.org/learn/react-foundations/updating-ui-with-javascript#react-a-declarative-ui-library)

As a developer, you can tell React what you want to happen to the user interface, and React will figure out the steps of **how** to update the DOM on your behalf.

In the next section, we'll explore how you can get started with React.

> **Additional Resources:**
>
> - [HTML vs. the DOM](https://developer.chrome.com/docs/devtools/dom/#appendix)
> - [How declarative UI compares to imperative](https://react.dev/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative)

### Chapter 4: Getting Started with React

To use React in your newly created project, load two React scripts from an external website called [unpkg.com](https://unpkg.com/):

- **react** is the core React library.
- **react-dom** provides DOM-specific methods that enable you to use React with the DOM.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
      const app = document.getElementById("app");
      const header = document.createElement("h1");
      const text = "Develop. Preview. Ship.";
      const headerContent = document.createTextNode(text);
      header.appendChild(headerContent);
      app.appendChild(header);
    </script>
  </body>
</html>
```

Instead of directly manipulating the DOM with plain JavaScript, remove the DOM methods that you had added previously, and add the [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)

method to target a specific DOM element and create a root to display your React Components in. Then, add the [`root.render()`](https://react.dev/reference/react-dom/client/hydrateRoot#root-render)

method to render your React code to the DOM.

This will tell React to render our `<h1>` title inside our `#app` element.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const app = document.getElementById('app');
      const root = ReactDOM.createRoot(app);
      root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
  </body>
</html>
```

If you try to run this code in the browser, you will get a syntax error:

Terminal

```js
Uncaught SyntaxError: expected expression, got '<'
```

This is because `<h1>...</h1>` is not valid Javascript. This piece of code is **JSX**.

#### [What is JSX?](https://nextjs.org/learn/react-foundations/getting-started-with-react#what-is-jsx)

JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar _HTML-like_ syntax. The nice thing about JSX is that apart from following [three JSX rules](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx), you don't need to learn any new symbols or syntax outside of HTML and JavaScript.

But browsers don't understand JSX out of the box, so you'll need a JavaScript compiler, such as a [Babel](https://babeljs.io/), to transform your JSX code into regular JavaScript.

#### [Adding Babel to your project](https://nextjs.org/learn/react-foundations/getting-started-with-react#adding-babel-to-your-project)

To add Babel to your project, copy and paste the following script in your `index.html` file:

```html
<!-- index.html -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

In addition, you will need to inform Babel what code to transform by changing the script type to `type=text/jsx`.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const domNode = document.getElementById('app');
      const root = ReactDOM.createRoot(domNode);
      root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
  </body>
</html>
```

To confirm it's working correctly, open your HTML file in the browser.

Comparing the **declarative** React code you just wrote:

```html
<!-- index.html -->
<script type="text/jsx">
  const domNode = document.getElementById("app")
  const root = ReactDOM.createRoot(domNode);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

to the **imperative** JavaScript code you wrote in the previous section:

```html
<!-- index.html -->
<script type="text/javascript">
  const app = document.getElementById("app");
  const header = document.createElement("h1");
  const text = "Develop. Preview. Ship.";
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

You can start to see how using React enables you to cut down a lot of repetitive code.

And this is exactly what React does, it's a library that contains reusable snippets of code that perform tasks on your behalf - in this case, updating the UI.

> **Additional Resources:**
>
> You don't need to know exactly how React updates the UI to start using it, but if you'd like to learn more, here are some additional resources:
>
> - [UI trees](https://react.dev/learn/preserving-and-resetting-state#the-ui-tree)
>
> - [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
> - [react-dom/server](https://react.dev/reference/react-dom/server) sections in the React Documentation.

#### Essential JavaScript for React

While you can learn JavaScript and React at the same time, being familiar with JavaScript can make the process of learning React easier.

In the next sections, you will be introduced to some core concepts of React from a JavaScript perspective. Here's a summary of the JavaScript topics that will be mentioned:

- [Functions](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions) and [Arrow Functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Objects](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Arrays and array methods](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Template literals](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals)
- [Ternary Operators](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [ES Modules and Import / Export Syntax](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules)

While this course does not dive into JavaScript, it's good practice to stay up to date with the latest versions of JavaScript. But if you don't feel proficient in JavaScript yet, don't let this hinder you from starting to build with React!

### Chapter 5: Building UI with Components

#### React core concepts

There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:

- Components
- Props
- State

In the next chapters, we will go through these concepts and provide resources where you can continue learning them. After you're familiar with these concepts, we'll then show you how to install Next.js and use newer React features such as Server and Client Components.

#### Components

User interfaces can be broken down into smaller building blocks called **components**.

Components allow you to build self-contained, reusable snippets of code. If you think of components as **LEGO bricks**, you can take these individual bricks and combine them together to form larger structures. If you need to update a piece of the UI, you can update the specific component or brick.

![Example of a Media Component made up of 3 smaller components: image, text, and button](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-components.png&w=3840&q=75&dpl=dpl_C4eFQ3UMNdmnjK2STReJ5KTwdjDo)

This modularity allows your code to be more maintainable as it grows because you can add, update, and delete components without touching the rest of our application.

The nice thing about React components is that they are just JavaScript. Let's see how you can write a React component, from a JavaScript perspective:

#### Creating components

In React, components are **functions.** Inside your `script` tag, create a new function called `header`:

```jsx
// App.jsx
  const app = document.getElementById("app") function header() {}
  const root = ReactDOM.createRoot(app); root.render(<h1>
    Develop. Preview. Ship.
  </h1>);

```

A component is a function that **returns UI elements**. Inside the return statement of the function, you can write JSX:

```jsx
// App.jsx

const app = document.getElementById("app");

function header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

const root = ReactDOM.createRoot(app);
root.render(<h1>Develop. Preview. Ship.</h1>);
```

To render this component to the DOM, pass it as the first argument in the `root.render()` method:

```jsx
// App.jsx

const app = document.getElementById("app");

function header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

const root = ReactDOM.createRoot(app);
root.render(header);
```

But, wait a second. If you try to run the code above in your browser, you'll get an error. To get this to work, there are two things you have to do:

First, React components should be capitalized to distinguish them from plain HTML and JavaScript:

```jsx
// App.jsx
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

const root = ReactDOM.createRoot(app);
// Capitalize the React Component
root.render(Header);
```

Second, you use React components the same way you'd use regular HTML tags, with angle brackets `<>`:

```jsx
// App.jsx
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

const root = ReactDOM.createRoot(app);
root.render(<Header />);
```

If you try to run the code in your browser again, you'll see your changes.

#### Nesting components

Applications usually include more content than a single component. You can **nest** React components inside each other like you would regular HTML elements.

In your example, create a new component called `HomePage`:

```jsx
// App.jsx
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
  return <div></div>;
}

const root = ReactDOM.createRoot(app);
root.render(<Header />);
```

Then nest the `<Header>` component inside the new `<HomePage>`component:

```jsx
// App.jsx
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<Header />);
```

#### Component trees

You can keep nesting React components this way to form component trees.

![Component tree showing how components can be nested inside each other](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-component-tree.png&w=3840&q=75&dpl=dpl_C4eFQ3UMNdmnjK2STReJ5KTwdjDo)

For example, your top-level `HomePage` component could hold a `Header`, an `Article`, and a `Footer` Component. And each of those components could in turn have their own child components and so on. For example, the `Header` component could contain a `Logo`, `Title` and `Navigation` component.

This modular format allows you to reuse components in different places inside your app.

In your project, since `<HomePage>` is now your top-level component, you can pass it to the `root.render()` method:

```jsx
// App.jsx
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
```

> **Additional Resources:**
>
> - [Your first component](https://react.dev/learn/your-first-component)
> - [Importing and exporting components](https://react.dev/learn/importing-and-exporting-components)

### Chapter 6: Displaying Data with Props

So far, if you were to reuse your `<Header />` component, it would display the same content both times.

```jsx
// App.jsx
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
      <Header />
    </div>
  );
}
```

But what if you want to pass different text or you don't know the information ahead of time because you're fetching data from an external source?

Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. For example, changing the `src` attribute of an `<img>` element changes the image that is shown. Changing the `href` attribute of an `<a>` tag changes the destination of the link.

In the same way, you can pass pieces of information as properties to React components. These are called `props`. Take for instance, the possible variations of a button:

![Diagram showing 3 variations of a button component: Primary, Secondary, and Disabled](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-props.png&w=3840&q=75&dpl=dpl_C4eFQ3UMNdmnjK2STReJ5KTwdjDo)

Similar to a JavaScript function, you can design components that accept custom arguments (or props) that change the component's behavior or what is visibly shown when it's rendered to the screen. Then, you can pass down these props from parent components to child components.

> **Note:** In React, data flows down the component tree. This is referred to as _one-way data flow_. State, which will be discussed in the next chapter, can be passed from parent to child components as props.

#### Using props

In your `HomePage` component, you can pass a custom `title` prop to the `Header` component, just like you'd pass HTML attributes:

```jsx
// App.jsx
function HomePage() {
  return (
    <div>
      <Header title="React" />
    </div>
  );
}
```

And `Header`, the child component, can accept those props as its first **function parameter**:

```jsx
// App.jsx
function Header(props) {
  return <h1>Develop. Preview. Ship.</h1>;
}
```

If you `console.log()` props, you can see that it's an **object** with a title property.

```jsx
// App.jsx
function Header(props) {
  console.log(props); // { title: "React" }
  return <h1>Develop. Preview. Ship.</h1>;
}
```

Since props is an object, you can use [**object destructuring**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to explicitly name the values of props inside your function parameters:

```jsx
// App.jsx
function Header({ title }) {
  console.log(title); // "React"
  return <h1>Develop. Preview. Ship.</h1>;
}
```

Then you can replace the content of the `<h1>` tag with your title variable.

```jsx
// App.jsx
function Header({ title }) {
  console.log(title);
  return <h1>title</h1>;
}
```

If you open your file in the browser, you will see that it is displaying the actual word "title". This is because React thinks you're intending to render a plain text string to the DOM.

You need a way to tell React that this is a JavaScript variable.

#### Using variables in JSX

To use the `title` prop, add **curly braces** `{}`. These are a special JSX syntax that allows you to write regular JavaScript directly inside your JSX markup.

```jsx
// App.jsx
function Header({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}
```

You can think of curly braces as a way to enter "JavaScript land" while you are in "JSX land". You can add any **JavaScript expression** (something that evaluates to a single value) inside curly braces. For example:

1. An **object property** with dot notation:

   ```jsx
   // App.jsx
   function Header(props) {
     return <h1>{props.title}</h1>;
   }
   ```

2. A **template literal**:

   ```jsx
   // App.jsx
   function Header({ title }) {
     return <h1>{`Cool ${title}`}</h1>;
   }
   ```

3. The **returned value of a function**:

   ```jsx
   // App.jsx
   function createTitle(title) {
     if (title) {
       return title;
     } else {
       return "Default title";
     }
   }

   function Header({ title }) {
     return <h1>{createTitle(title)}</h1>;
   }
   ```

4. Or **ternary operators**:

   ```jsx
   // App.jsx
   function Header({ title }) {
     return <h1>{title ? title : "Default Title"}</h1>;
   }
   ```

You can now pass any string to your title prop, or, if you used the ternary operator, you could even not pass a title prop at all, since you've accounted for the default case in your component:

```jsx
// App.jsx
function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

Your component now accepts a generic title prop which you can reuse in different parts of your application. All you need to do is change the title string:

```jsx
// App.jsx
function HomePage() {
  return (
    <div>
      <Header title="React" />
      <Header title="A new title" />
    </div>
  );
}
```

#### [Iterating through lists](https://nextjs.org/learn/react-foundations/displaying-data-with-props#iterating-through-lists)

It's common to have data that you need to show as a list. You can use array methods to manipulate your data and generate UI elements that are identical in style but hold different pieces of information.

Add the following array of names to your `HomePage` component:

```jsx
// App.jsx
function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

You can then use the `array.map()` method to iterate over the array and use an **arrow function** to map a name to a list item:

```jsx
// App.jsx
function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

Notice how you've used curly braces to weave in and out of "JavaScript" and "JSX" land.

If you run this code, React will give us a warning about a missing `key` prop. This is because React needs something to uniquely identify items in an array so it knows which elements to update in the DOM.

You can use the names for now since they are currently unique, but it's recommended to use something guaranteed to be unique, like an item ID.

```jsx
// App.jsx
function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

> **Additional Resources:**
>
> - [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
> - [Rendering lists](https://react.dev/learn/rendering-lists)[Conditional rendering](https://react.dev/learn/conditional-rendering)

### Chapter 7: Adding Interactivity with State

Let's explore how React helps us add interactivity with **state** and **event handlers**.

As an example, let's create a "Like" button inside your `HomePage` component. First, add a button element inside the `return()` statement:

```jsx
// App.jsx
function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button>Like</button>
    </div>
  );
}
```

#### Listening to events

To make the button do something when clicked, you can use the `onClick` event:

```jsx
// App.jsx
function HomePage() {
  // ...
  return (
    <div>
      {/* ... */}
      <button onClick={}>Like</button>
    </div>
  );
}
```

In React, event names are camelCased. The `onClick` event is one of many possible events you can use to respond to user interaction. For example, you can use `onChange` for input fields or `onSubmit` for forms.

#### Handling events

You can define a function to "handle" events whenever they are triggered. Create a function before the return statement called `handleClick()`:

```jsx
// App.jsx
function HomePage() {
  // ...

  function handleClick() {
    console.log("increment like count")
  }

  return (
    <div>
      {/* ... */}
      <button onClick={}>Like</button>
    </div>
  )
}
```

Then, you can call the `handleClick` function when the `onClick` event is triggered:

```jsx
// App.jsx
function HomePage() {
  // ...
  function handleClick() {
    console.log("increment like count");
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
```

Try running this in your browser. Notice in your developer tools how the log output increases.

#### State and hooks

React has a set of functions called [hooks](https://react.dev/learn). Hooks allow you to add additional logic such as **state** to your components. You can think of state as any information in your UI that changes over time, usually triggered by user interaction.

![Two different examples of state: 1. A toggle button that can be selected or unselected. 2. A like button that can be clicked multiple times.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-state.png&w=3840&q=75&dpl=dpl_C4eFQ3UMNdmnjK2STReJ5KTwdjDo)

You can use _state_ to store and increment the number of times a user has clicked the "Like" button. In fact, the React hook used to manage state is called: `useState()`

Add `useState()` to your project. It returns an array, and you can access and use those array values inside your component using **array destructuring**:

```jsx
// App.jsx
function HomePage() {
  // ...
  const [] = React.useState();

  // ...
}
```

The first item in the array is the state `value`, which you can name anything. It's recommended to name it something descriptive:

```jsx
// App.jsx
function HomePage() {
  // ...
  const [likes] = React.useState();

  // ...
}
```

The second item in the array is a function to `update` the value. You can name the update function anything, but it's common to prefix it with `set` followed by the name of the state variable you're updating:

```jsx
// App.jsx
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState();

  // ...
}
```

You can also take the opportunity to add the initial value of your `likes` state to `0`:

```jsx
// App.jsx
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);
}
```

Then, you can check the initial state is working by using the state variable inside your component.

```jsx
// App.jsx
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);
  // ...

  return (
    // ...
    <button onClick={handleClick}>Like({likes})</button>
  );
}
```

Finally, you can call your state updater function, `setLikes` in your `HomePage` component, let's add it inside the `handleClick()` function you previously defined:

```jsx
// App.jsx
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
```

Clicking the button will now call the `handleClick` function, which calls the `setLikes` state updater function with a single argument of the current number of likes + 1.

> **Note**: Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component. You can pass the state information to children components as props, but the logic for updating the state should be kept within the component where state was initially created.

#### Managing state

This was only an introduction to state, and there's more you can learn about managing state and data flow in your React applications. To learn more, we recommend you go through the [Adding Interactivity](https://react.dev/learn/adding-interactivity) and [Managing State](https://react.dev/learn/managing-state) sections in the React documentation.

> **Additional Resources:**
>
> - [State: A component's memory](https://react.dev/learn/state-a-components-memory)
> - [Meet your first hook](https://react.dev/learn/state-a-components-memory#meet-your-first-hook)
> - [Responding to Events](https://react.dev/learn/responding-to-events)

### Chapter 8: From React to Next.js

So far, we explored how you can get started with React. This is what the final code looked like. If you're starting from here, paste this code into an `index.html` file in your code editor.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chapter 8: From React to Next.js</title>
  </head>

  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx" src="App.jsx"></script>
  </body>
</html>
```

```jsx
// App.jsx
function Header(props) {
  return <h1>{props.title}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    console.log("increment like count");
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
```

In the last few chapters, you were introduced to three essential React concepts: **components**, **props**, and **state**. Having a strong foundation in these will help you get started building React applications.

When it comes to learning React, **the best way to learn is to build**. You can gradually adopt React by using `<script>` and what you've learned so far to add small components to an existing website. However, many developers have found the user and developer experience React enables valuable enough to dive right in and write their whole frontend application in React.

#### From React to Next.js

While React excels at building UI, it does take some work to independently build that UI into a fully functioning scalable application. There are also newer React features, like Server and Client Components, that require a framework. The good news is that Next.js handles much of the setup and configuration and has additional features to help you build React applications.

Next, we'll migrate the example from React to Next.js, discuss how Next.js works, and introduce you to the differences between Server and Client Components.

### Chapter 9: Installing Next.js

When you use Next.js in your project, you do not need to load the `react` and `react-dom` scripts from [unpkg.com](http://unpkg.com) anymore. Instead, you can install these packages locally using `npm` or your preferred package manager.

> **Note**: To use Next.js, you will need to have Node.js version **18.17.0** or above installed on your machine ([see minimum version requirement](https://nextjs.org/docs/getting-started/installation)), you can [download it here](https://nodejs.org/en/) .

To do so, create a new file in the same directory as your `index.html` file, called `package.json` with an empty object `{}`.

```json
// package.json
{}
```

In your [terminal](https://code.visualstudio.com/docs/terminal/basics)

, run the following command in the root of your project:

Terminal

```bash
npm install react@latest react-dom@latest next@latest
```

Once the installation is complete, you should be able to see your project dependencies listed inside your `package.json` file:

```json
// package.json
{
  "dependencies": {
    "next": "^14.0.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

Don't worry if you're on later versions than the ones shown above, as long as you have the `next`, `react`, and `react-dom` packages installed, you're good to go.

You will also notice a new file called `package-lock.json` file that contains detailed information about the exact versions of each package.

Jumping back to the `index.html` file, you can delete the following code:

1. The `<html>` and `<body>` tags.
2. The `<div>` element with the `id` of `app`.
3. The `react` and `react-dom` scripts since you've installed them with NPM.
4. The `Babel` script because Next.js has a compiler that transforms JSX into valid JavaScript browsers can understand.
5. The `<script type="text/jsx">` tag.
6. The `document.getElementById()` and `ReactDom.createRoot()` methods.
7. The `React.` part of the `React.useState(0)` function

After deleting the lines above, add the following import to the top of your file:

```jsx
// App.jsx
import { useState } from "react";
```

Your code should look like this:

```jsx
// App.jsx
import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
```

The only code left in the HTML file is JSX, so you can change the file type from `.html` to `.js` or `.jsx`.

#### Creating your first page

Next.js uses file-system routing. This means that instead of using code to define the routes of your application, you can use folders and files.

Here's how you can create your first page in Next.js:

1. Create a new folder called [app](https://nextjs.org/docs/app/building-your-application/routing#the-app-router) and move the `index.js` file inside it.
2. Rename your `index.js` file to `page.js`. This will be the main page of your application.
3. Add `export default` to your `<HomePage>` component to help Next.js distinguish which component to render as the main component of the page.

```jsx
// app/page.js;
import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  // ...
}
```

#### Running the development server

Next, let's run your development server so you can see the changes in your new page while developing. Add a `"next dev"` script to your `package.json` file:

```json
// package.json
{
  "scripts": {
    "dev": "next dev"
  },
  "dependencies": {
    "next": "^14.0.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

Check what happens by running `npm run dev` in your terminal. You'll notice two things:

> **Note:** If you receive the error `sh: 1: next: not found` when running `npm run dev`, it indicates that Next.js is not installed globally or not installed at all. To resolve this, you can install Next.js globally by running:
>
> ```sh
> npm install -g next
> ```

1. When you navigate to [localhost:3000](http://localhost:3000), you should see the following error:

   ![Next.js Error Message: You're importing a component that needs useState. It only works in a Client component...](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-usestate-rsc-error.png&w=3840&q=75&dpl=dpl_C4eFQ3UMNdmnjK2STReJ5KTwdjDo)

   This is because Next.js uses React Server Components, a new feature that allows React to render on the server. Server Components don't support `useState`, so you'll need to use a Client Component instead.

   In the next chapter, we'll discuss the main differences between Server and Client Components and fix this error.

2. A new file called `layout.js` was automatically created inside the `app` folder. This is the main layout of your application. You can use it to add UI elements that are shared across all pages (e.g. navigation, footer, etc).

```jsx
// /app/layout.js
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### Summary

Looking at the migration so far, you may already be getting a sense of the benefits of using Next.js:

- You removed the React and Babel scripts; a taste of the complex tooling and configuration you no longer have to think about.
- You created your first page.

> **Additional Reading:**
>
> - [Next.js Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)
> - [Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
> - [Pages and Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

### Chapter 10: Server and Client Components

To understand how Server and Client Components work, it's helpful to be familiar with two foundational web concepts:

- The [environments](https://nextjs.org/learn/react-foundations/server-and-client-components#server-and-client-environments) your application code can be executed in: the server and the client.
- The [network boundary](https://nextjs.org/learn/react-foundations/server-and-client-components#network-boundary) that separates server and client code.

#### Server and Client Environments

In the context of web applications:

![Diagram showing a browser on the left and a server on the right, separated by a network boundary.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-client-and-server-environments.png&w=3840&q=75&dpl=dpl_C4eFQ3UMNdmnjK2STReJ5KTwdjDo)

- The **client** refers to the browser on a user’s device that sends a request to a server for your application code. It then turns the response it receives from the server into an interface the user can interact with.
- The **server** refers to the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.

Each environment has its own set of capabilities and constraints. For example, by moving rendering and data fetching to the server, you can reduce the amount of code sent to the client, which can improve your application's performance. But, as you learned earlier, to make your UI interactive, you need to update the DOM on the client.

Therefore, the code you write for the server and the client is not always the same. Certain operations (e.g. data fetching or managing user state) are better suited for one environment over the other.

#### Network Boundary

The **Network Boundary** is a conceptual line that separates the different environments.

In React, you choose where to place the network boundary in your component tree. For example, you can fetch data and render a user's posts on the server (using Server Components), then render the interactive `LikeButton` for each post on the client (using Client Components).

Similarly, you can create a `Nav` component that is rendered on the server and shared across pages, but if you want to show an active state for links, you can render the list of `Links` on the client.

![A component tree showing a layout that has 3 components as its children: Nav, Page, and Footer. The page component has 2 children: Posts and LikeButton. The Posts component is rendered on the server, and the LikeButton component is rendered on the client.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-client-server-modules.png&w=3840&q=75&dpl=dpl_C4eFQ3UMNdmnjK2STReJ5KTwdjDo)

Behind the scenes, the components are split into two module graphs. The **server module graph (or tree)** contains all the Server Components that are rendered on the server, and the **client module graph (or tree)** contains all Client Components.

After Server Components are rendered, a special data format called the **React Server Component Payload (RSC)** is sent to the client. The RSC payload contains:

1. The rendered result of Server Components.
2. Placeholders (or holes) for where Client Components should be rendered and references to their JavaScript files.

React uses this information to consolidate the Server and Client Components and update the DOM on the client.

Let's see how this works.

#### Using Client Components

As you learned in the last chapter, Next.js uses Server Components by default - this is to improve your application's performance and means you don't have to take additional steps to adopt them.

Looking back at the error in your browser, Next.js is warning you that you're trying to `useState` inside a Server Component. You can fix this by moving the interactive "Like" button to a Client Component.

Create a new file called `like-button.js` inside the `app` folder that exports a `LikeButton` component:

```jsx
// /app/like-button.js
export default function LikeButton() {}
```

Move the `<button>` element and the `handleClick()` function from `page.js` to your new `LikeButton` component:

```jsx
// /app/like-button.js
export default function LikeButton() {
  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
```

Next, move the `likes` state and the import:

```js
// /app/like-button.js

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
```

Now, to make the `LikeButton` a Client Component, add the React `'use client'` directive at the top of the file. This tells React to render the component on the client.

```js
// /app/like-button.js

"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
```

Back in your `page.js` file, import the `LikeButton` component into your page:

```js
// /app/page.js
import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
```

Save both files and view your app in the browser. Now that there are no errors, once you make changes and save, you should notice the browser automatically updates to reflect the change.

This feature is called [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh). It gives you instantaneous feedback on any edits you make and comes pre-configured with Next.js.

#### Summary

To recap, you learned about the server and client environments and when to use each. You also learned that Next.js uses React Server Components by default to improve performance, and how you can opt into Client Components to smaller parts of your UI interactive.

> **Additional Reading**
>
> There's a lot more to learn about Server and Client Components. Here are some additional resources:
>
> - [Server Components Docs](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
> - [Client Component Docs](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
> - [Composition Patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
> - [The "use client" Directive](https://react.dev/reference/react/use-client)
> - [The "use server" Directive](https://react.dev/reference/react/use-server)

### Chapter 11: Next Steps

Congratulations on creating your first Next.js application!

To summarize, you explored the foundational knowledge for React and Next.js, and you migrated from a simple React Application to a Next.js application.

#### What's next?

#### Continue learning React

Over the years, many courses, videos, and articles have been created to help developers learn React. While it's hard to recommend resources that will fit your learning style, one invaluable reference is the [React Documentation](https://react.dev/) which contains interactive sandboxes to help you practice the topics.

#### Learn Next.js by building a dashboard app

Continue learning Next.js by [creating a dashboard app](https://nextjs.org/learn/dashboard-app) - this course will introduce you to the **main** Next.js features and get you practicing by building a more complex project.

## Learn Next.js

Welcome to the Next.js App Router course! In this free interactive course, you'll learn the main features of Next.js by building a full-stack web application.

### What we'll be building

![Screenshots of the dashboard project showing desktop and mobile versions.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fdashboard.png&w=3840&q=75&dpl=dpl_Cy5TnVSfFaNtSYETjzhzL3knHuFd)

For this course, we'll be building a simplified version of the financial dashboard that has:

- A public home page.
- A login page.
- Dashboard pages that are protected by authentication.
- The ability for users to add, edit, and delete invoices.

The dashboard will also have an accompanying database, which you'll set up in [a later chapter](https://nextjs.org/learn/dashboard-app/setting-up-your-database).

By the end of the course, you'll have the essential skills needed to start building full-stack Next.js applications.

#### Overview

Here's an overview of features you'll learn about in this course:

- **Styling**: The different ways to style your application in Next.js.
- **Optimizations**: How to optimize images, links, and fonts.
- **Routing**: How to create nested layouts and pages using file-system routing.
- **Data Fetching**: How to set up a database on Vercel, and best practices for fetching and streaming.
- **Search and Pagination**: How to implement search and pagination using URL Search Params.
- **Mutating Data:** How to mutate data using React Server Actions, and revalidate the Next.js cache.
- **Error Handling:** How to handle general and `404` not found errors.
- **Form Validation and Accessibility:** How to do server-side form validation and tips for improving accessibility.
- **Authentication**: How to add authentication to your application using [`NextAuth.js`](https://next-auth.js.org/) and Middleware.
- **Metadata**: How to add metadata and prepare your application for social sharing.

#### Prerequisite knowledge

This course assumes you have a basic understanding of React and JavaScript. If you're new to React, we recommend going through our [React Foundations](https://nextjs.org/learn/react-foundations) course first to learn the fundamentals of React, such as components, props, state, and hooks, and newer features like Server Components and Suspense.

#### System requirements

Before you start this course, make sure your system meets the following requirements:

- Node.js 18.17.0 or later installed. [Download here](https://nodejs.org/en).
- Operating systems: macOS, Windows (including WSL), or Linux.
  In addition, you'll also need a [GitHub Account](https://github.com/join/) and a [Vercel Account](https://vercel.com/signup).

### Chapter 1: Getting Started

#### Creating a new project

To create a Next.js app, open your terminal, [`cd`](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#basic_built-in_terminal_commands) into the folder you'd like to keep your project, and run the following command:

Terminal

```bash
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

This command uses [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app), a Command Line Interface (CLI) tool that sets up a Next.js application for you. In the command above, you're also using the `--example` flag with the [starter example](https://github.com/vercel/next-learn/tree/main/dashboard/starter-example) for this course.

#### Exploring the project

Unlike tutorials that have you write code from scratch, much of the code for this course is already written for you. This better reflects real-world development, where you'll likely be working with existing codebases.

Our goal is to help you focus on learning the main features of Next.js, without having to write _all_ the application code.

After installation, open the project in your code editor and navigate to `nextjs-dashboard`.

Terminal

```bash
cd nextjs-dashboard
```

Let's spend some time exploring the project.

#### Folder structure

You'll notice that the project has the following folder structure:

![Folder structure of the dashboard project, showing the main folders and files: app, public, and config files.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-folder-structure.png&w=3840&q=75&dpl=dpl_Cy5TnVSfFaNtSYETjzhzL3knHuFd)

- **`/app`**: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
- **`/app/lib`**: Contains functions used in your application, such as reusable utility functions and data fetching functions.
- **`/app/ui`**: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
- **`/public`**: Contains all the static assets for your application, such as images.
- **`/scripts`**: Contains a seeding script that you'll use to populate your database in a later chapter.
- **Config Files**: You'll also notice config files such as `next.config.js` at the root of your application. Most of these files are created and pre-configured when you start a new project using `create-next-app`. You will not need to modify them in this course.

Feel free to explore these folders, and don't worry if you don't understand everything the code is doing yet.

#### Placeholder data

When you're building user interfaces, it helps to have some placeholder data. If a database or API is not yet available, you can:

- Use placeholder data in JSON format or as JavaScript objects.
- Use a 3rd party service like [mockAPI](https://mockapi.io/).

For this project, we've provided some placeholder data in `app/lib/placeholder-data.js`. Each JavaScript object in the file represents a table in your database. For example, for the invoices table:

```js
// /app/lib/placeholder-data.js

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  // ...
];
```

In the chapter on [setting up your database](https://nextjs.org/learn/dashboard-app/setting-up-your-database), you'll use this data to _seed_ your database (populate it with some initial data).

#### TypeScript

You may also notice most files have a `.ts` or `.tsx` suffix. This is because the project is written in TypeScript. We wanted to create a course that reflects the modern web landscape.

It's okay if you don't know TypeScript - we'll provide the TypeScript code snippets when required.

For now, take a look at the `/app/lib/definitions.ts` file. Here, we manually define the types that will be returned from the database. For example, the invoices table has the following types:

```ts
// /app/lib/definitions.ts
export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: "pending" | "paid";
};
```

By using TypeScript, you can ensure you don't accidentally pass the wrong data format to your components or database, like passing a `string` instead of a `number` to invoice `amount`.

> **If you're a TypeScript developer:**
>
> - We're manually declaring the data types, but for better type-safety, we recommend [Prisma](https://www.prisma.io/), which automatically generates types based on your database schema.
> - Next.js detects if your project uses TypeScript and automatically installs the necessary packages and configuration. Next.js also comes with a [TypeScript plugin](https://nextjs.org/docs/app/building-your-application/configuring/typescript#typescript-plugin) for your code editor, to help with auto-completion and type-safety.

#### Running the development server

Run `npm i` to install the project's packages.

Terminal

```bash
npm i
```

Followed by `npm run dev` to start the development server.

Terminal

```bash
npm run dev
```

`npm run dev` starts your Next.js development server on port `3000`. Let's check to see if it's working. Open [http://localhost:3000](http://localhost:3000/) on your browser. Your home page should look like this:

![Unstyled page with the title 'Acme', a description, and login link.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Facme-unstyled.png&w=3840&q=75&dpl=dpl_Cy5TnVSfFaNtSYETjzhzL3knHuFd)

### Chapter 2: CSS Styling

Currently, your home page doesn't have any styles. Let's look at the different ways you can style your Next.js application.

In this chapter...

Here are the topics we’ll cover

> - How to add a global CSS file to your application.
>
> - Two different ways of styling: Tailwind and CSS modules.
>
> - How to conditionally add class names with the `clsx` utility package.

#### Global styles

If you look inside the `/app/ui` folder, you'll see a file called `global.css`. You can use this file to add CSS rules to **all** the routes in your application - such as CSS reset rules, site-wide styles for HTML elements like links, and more.

You can import `global.css` in any component in your application, but it's usually good practice to add it to your top-level component. In Next.js, this is the [root layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required) (more on this later).

Add global styles to your application by navigating to `/app/layout.tsx` and importing the `global.css` file:

```tsx
// /app/layout.tsx
import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

With the development server still running, save your changes and preview them in the browser. Your home page should now look like this:

![Styled page with the logo 'Acme', a description, and login link.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fhome-page-with-tailwind.png&w=1920&q=75&dpl=dpl_Cy5TnVSfFaNtSYETjzhzL3knHuFd)

But wait a second, you didn't add any CSS rules, where did the styles come from?

If you take a look inside `global.css`, you'll notice some `@tailwind` directives:

```css
/* /app/ui/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Tailwind

[Tailwind](https://tailwindcss.com/) is a CSS framework that speeds up the development process by allowing you to quickly write [utility classes](https://tailwindcss.com/docs/utility-first) directly in your TSX markup.

In Tailwind, you style elements by adding class names. For example, adding the class `"text-blue-500"` will turn the `<h1>` text blue:

```html
<h1 className="text-blue-500">I'm blue!</h1>
```

Although the CSS styles are shared globally, each class is singularly applied to each element. This means if you add or delete an element, you don't have to worry about maintaining separate stylesheets, style collisions, or the size of your CSS bundle growing as your application scales.

When you use `create-next-app` to start a new project, Next.js will ask if you want to use Tailwind. If you select `yes`, Next.js will automatically install the necessary packages and configure Tailwind in your application.

If you look at `/app/page.tsx`, you'll see that we're using Tailwind classes in the example.

```tsx
// /app/page.tsx

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
    //  ...
  )
}
```

Don't worry if this is your first time using Tailwind. To save time, we've already styled all the components you'll be using.

Let's play with Tailwind! Copy the code below and paste it above the `<p>` element in `/app/page.tsx`:

```tsx
// /app/page.tsx

<div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
```

If you prefer writing traditional CSS rules or keeping your styles separate from your JSX - CSS Modules are a great alternative.

#### CSS Modules

[CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support) allow you to scope CSS to a component by automatically creating unique class names, so you don't have to worry about style collisions as well.

We'll continue using Tailwind in this course, but let's take a moment to see how you can achieve the same results from the quiz above using CSS modules.

Inside `/app/ui`, create a new file called `home.module.css` and add the following CSS rules:

```css
/* /app/ui/home.module.css */

.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```

Then, inside your `/app/page.tsx` file import the styles and replace the Tailwind class names from the `<div>` you've added with `styles.shape`:

```tsx
// /app/page.tsx

import styles from "@/app/ui/home.module.css";
<div className={styles.shape} />;
```

Save your changes and preview them in the browser. You should see the same shape as before.

Tailwind and CSS modules are the two most common ways of styling Next.js applications. Whether you use one or the other is a matter of preference - you can even use both in the same application!

CSS Modules create unique class names for each component, so you don't have to worry about style collisions.

#### Using the `clsx` library to toggle class names

There may be cases where you may need to conditionally style an element based on state or some other condition.

[`clsx`](https://www.npmjs.com/package/clsx) is a library that lets you toggle class names easily. We recommend taking a look at [documentation](https://github.com/lukeed/clsx) for more details, but here's the basic usage:

- Suppose that you want to create an `InvoiceStatus` component which accepts `status`. The status can be `'pending'` or `'paid'`.
- If it's `'paid'`, you want the color to be green. If it's `'pending'`, you want the color to be gray.

You can use `clsx` to conditionally apply the classes, like this:

```jsx
// /app/ui/invoices/status.tsx

import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}
```

#### [Other styling solutions](https://nextjs.org/learn/dashboard-app/css-styling#other-styling-solutions)

In addition to the approaches we've discussed, you can also style your Next.js application with:

- Sass which allows you to import `.css` and `.scss` files.
- CSS-in-JS libraries such as [styled-jsx](https://github.com/vercel/styled-jsx), [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components), and [emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion).

Take a look at the [CSS documentation](https://nextjs.org/docs/app/building-your-application/styling) for more information.

### Chapter 3: Optimizing Fonts and Images

In the previous chapter, you learned how to style your Next.js application. Let's continue working on your home page by adding a custom font and a hero image.

In this chapter...

Here are the topics we’ll cover

How to add custom fonts with `next/font`.

How to add images with `next/image`.

How fonts and images are optimized in Next.js.

#### Why optimize fonts?

Fonts play a significant role in the design of a website, but using custom fonts in your project can affect performance if the font files need to be fetched and loaded.

[Cumulative Layout Shift](https://web.dev/cls/)

is a metric used by Google to evaluate the performance and user experience of a website. With fonts, layout shift happens when the browser initially renders text in a fallback or system font and then swaps it out for a custom font once it has loaded. This swap can cause the text size, spacing, or layout to change, shifting elements around it.

![Mock UI showing initial load of a page, followed by a layout shift as the custom font loads.](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Ffont-layout-shift.png&w=3840&q=75&dpl=dpl_Cy5TnVSfFaNtSYETjzhzL3knHuFd)

Next.js automatically optimizes fonts in the application when you use the `next/font` module. It downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.

Next.js downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.

#### Adding a primary font

Let's add a custom Google font to your application to see how this works!

In your `/app/ui` folder, create a new file called `fonts.ts`. You'll use this file to keep the fonts that will be used throughout your application.

Import the `Inter` font from the `next/font/google` module - this will be your primary font. Then, specify what [subset](https://fonts.google.com/knowledge/glossary/subsetting) you'd like to load. In this case, `'latin'`:

```ts
// /app/ui/fonts.ts

import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
```

Finally, add the font to the `<body>` element in `/app/layout.tsx`:

```tsx
// /app/layout.tsx

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

By adding `Inter` to the `<body>` element, the font will be applied throughout your application. Here, you're also adding the Tailwind [`antialiased`](https://tailwindcss.com/docs/font-smoothing) class which smooths out the font. It's not necessary to use this class, but it adds a nice touch.

Navigate to your browser, open dev tools and select the `body` element. You should see `Inter` and `Inter_Fallback` are now applied under styles.

#### Practice: Adding a secondary font

You can also add fonts to specific elements of your application.

Now it's your turn! In your `fonts.ts` file, import a secondary font called `Lusitana` and pass it to the `<p>` element in your `/app/page.tsx` file. In addition to specifying a subset like you did before, you'll also need to specify the font **weight**.

Once you're ready, expand the code snippet below to see the solution.

> **Hints:**
>
> - If you're unsure what weight options to pass to a font, check the TypeScript errors in your code editor.
> - Visit the [Google Fonts](https://fonts.google.com/) website and search for `Lusitana` to see what options are available.
> - See the documentation for [adding multiple fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts) and the [full list of options](https://nextjs.org/docs/app/api-reference/components/font#font-function-arguments).

```ts
// /app/ui/fonts.ts

import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
```

```tsx
// /app/page.tsx

import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    // ...
    <p
      className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    >
      <strong>Welcome to Acme.</strong> This is the example for the{" "}
      <a href="https://nextjs.org/learn/" className="text-blue-500">
        Next.js Learn Course
      </a>
      , brought to you by Vercel.
    </p>
    // ...
  );
}
```

Finally, the `<AcmeLogo />` component also uses Lusitana. It was commented out to prevent errors, you can now uncomment it:

```jsx
// /app/page.tsx

// ...

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        {/* ... */}
      </div>
    </main>
  );
}
```

Great, you've added two custom fonts to your application! Next, let's add a hero image to the home page.

#### Why optimize images?

Next.js can serve **static assets**, like images, under the top-level [`/public`](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets) folder. Files inside `/public` can be referenced in your application.

With regular HTML, you would add an image as follows:

```html
<img
  src="/hero.png"
  alt="Screenshots of the dashboard project showing desktop version"
/>
```

However, this means you have to manually:

- Ensure your image is responsive on different screen sizes.
- Specify image sizes for different devices.
- Prevent layout shift as the images load.
- Lazy load images that are outside the user's viewport.

Image Optimization is a large topic in web development that could be considered a specialization in itself. Instead of manually implementing these optimizations, you can use the `next/image` component to automatically optimize your images.

#### The `<Image>` component

The `<Image>` Component is an extension of the HTML `<img>` tag, and comes with automatic image optimization, such as:

- Preventing layout shift automatically when images are loading.
- Resizing images to avoid shipping large images to devices with a smaller viewport.
- Lazy loading images by default (images load as they enter the viewport).
- Serving images in modern formats, like [WebP](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp)

and [AVIF](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image), when the browser supports it.

#### Adding the desktop hero image

Let's use the `<Image>` component. If you look inside the `/public` folder, you'll see there are two images: `hero-desktop.png` and `hero-mobile.png`. These two images are completely different, and they'll be shown depending if the user's device is a desktop or mobile.

In your `/app/page.tsx` file, import the component from [`next/image`](https://nextjs.org/docs/api-reference/next/image). Then, add the image under the comment:

```tsx
// /app/page.tsx

import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
    //...
  );
}
```

Here, you're setting the `width` to `1000` and `height` to `760` pixels. It's good practice to set the `width` and `height` of your images to avoid layout shift, these should be an aspect ratio **identical** to the source image.

You'll also notice the class `hidden` to remove the image from the DOM on mobile screens, and `md:block` to show the image on desktop screens.

This is what your home page should look like now:

![Styled home page with a custom font and hero image](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fhome-page-with-hero.png&w=1920&q=75&dpl=dpl_Cy5TnVSfFaNtSYETjzhzL3knHuFd)

#### Practice: Adding the mobile hero image

Now it's your turn! Under the image you've just added, add another `<Image>` component for `hero-mobile.png`.

- The image should have a `width` of `560` and `height` of `620` pixels.
- It should be shown on mobile screens, and hidden on desktop - you can use dev tools to check if the desktop and mobile images are swapped correctly.

Once you're ready, expand the code snippet below to see the solution.

```tsx
// /app/page.tsx

import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
    </div>
    //...
  );
}
```

Great! Your home page now has a custom font and hero images.

Images without dimensions and web fonts are common causes of layout shift due to the browser having to download additional resources.

#### Recommended reading

There's a lot more to learn about these topics, including optimizing remote images and using local font files. If you'd like to dive deeper into fonts and images, see:

- [Image Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Font Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Improving Web Performance with Images (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia)
- [Web Fonts (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
