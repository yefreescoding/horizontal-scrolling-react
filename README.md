# React Horizontal Scroll Gallery Component

This React component allows you to create a horizontal scrolling gallery within a centered max-width container. It's designed to showcase a collection of images or other content that users can scroll through horizontally.

## Installation

To use this component in your React project, follow these steps:

1. Make sure you have React installed in your project. If not, you can create a new React project using [Vite](https://vitejs.dev/guide/).

2. Copy the folder `layout` inside the `components` directory into your project's components folder or a location of your choice.

3. Import the `Layout`, and the `GalleryDiv` components into your desired React component, you need both of them to make the "magic" happen:

   ```tsx
   import Layout from "./path-to-your-components/Layout";
   import GalleryDiv from "./path-to-your-components/GalleryDiv";
   ```

4. Use the `layout` component within your component, providing the content you want to display within the gallery as children:

   ```tsx
   <GalleryDiv>{/* Your gallery content goes here */}</GalleryDiv>
   ```

5. Customize the styles of the gallery by modifying the CSS provided in the `layout.css` file inside the `layout` folder. You can adjust the grid layout, spacing, and appearance to match your project's design.

## Example Usage

Here's an example of how to use the `GalleryDiv` component within your React component:

```tsx
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

The CSS provided in the `layout.css` file defines the layout and styling for the gallery component. You can customize this CSS to match your project's design requirements.

### Change the width of the container

```tsx
function App() {
  return (
    <Layout contentMaxWidth="80ch">
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
```

`contentMaxWidth` it is a prop that takes a value in this case it would be the total size for the container width.

You must write a value that the CSS styles can understand:

- em
- rem
- px
- ch

### Change the direction of the scroll

```tsx
function App() {
  return (
    <Layout contentMaxWidth="80ch">
      {/* Your other content */}
      <GalleryDiv direction="left">
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
```

`direction` is a prop for the gallery component. In regular circumstances the gallery will start in the middle and the content will be displayed from left to right. But you can change this by adding the value "left" to the `direction` prop.

## Features

- Horizontal scrolling gallery within a centered max-width container.
- Responsive design that adapts to different screen sizes.
- Easy integration into your React project.

Feel free to modify and extend this component to suit your specific needs and design preferences.

## THIS CODE IS FREE TO USE.

And remember, you can copy the code and do whatever you want with it. It is all yours.
