# React Horizontal Scroll Gallery Component

This React component allows you to create a horizontal scrolling gallery within a centered max-width container. It's designed to showcase a collection of images or other content that users can scroll through horizontally.

## Installation

To use this component in your React project, follow these steps:

1. Make sure you have React installed in your project. If not, you can create a new React project using [Vite](https://vitejs.dev/guide/).

2. Copy the `GalleryDiv.js` file into your project's components folder or a location of your choice.

3. Import the `GalleryDiv` component into your desired React component:

   ```javascript
   import GalleryDiv from "./path-to-your-components/GalleryDiv";
   ```

4. Use the `GalleryDiv` component within your component, providing the content you want to display within the gallery as children:

   ```javascript
   <GalleryDiv>{/* Your gallery content goes here */}</GalleryDiv>
   ```

5. Customize the styles of the gallery by modifying the CSS provided in the `App.css` file. You can adjust the grid layout, spacing, and appearance to match your project's design.

## Example Usage

Here's an example of how to use the `GalleryDiv` component within your React component:

```javascript
import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import GalleryDiv from "./components/GalleryDiv";

function App() {
  return (
    <Layout>
      {/* Your other content */}
      <GalleryDiv>
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
      </GalleryDiv>
      {/* More of your content */}
    </Layout>
  );
}

export default App;
```

## Styling

The CSS provided in the `App.css` file defines the layout and styling for the gallery component. You can customize this CSS to match your project's design requirements.

## Features

- Horizontal scrolling gallery within a centered max-width container.
- Responsive design that adapts to different screen sizes.
- Easy integration into your React project.

Feel free to modify and extend this component to suit your specific needs and design preferences.
