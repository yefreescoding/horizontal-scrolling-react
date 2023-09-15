# Horizontal scrolling in a centered max-width container - reusable react component

This project is a reusable React component that implements a horizontal scrolling container with centered max-width content. The inspiration for this component comes from a plain HTML and CSS code created by Ryan Mulligan[1]. The goal of this project is to provide a simple and reusable solution for implementing horizontal scrolling containers in React applications.

## Installation

To use this component in your React application, you can install it using npm:

```
npm install react-horizontal-scrolling-container
```

## Usage

To use the `HorizontalScrollingContainer` component in your React application, you can import it and use it like any other React component:

```jsx
import React from "react";
import HorizontalScrollingContainer from "react-horizontal-scrolling-container";

function MyComponent() {
  return (
    <HorizontalScrollingContainer>
      {/* Add your content here */}
    </HorizontalScrollingContainer>
  );
}
```

You can add any content you want inside the `HorizontalScrollingContainer` component, and it will be horizontally scrollable with centered max-width content.

## References

- [1] Ryan Mulligan, "Horizontal Scrolling in a Centered Max-Width Container," https://ryanmulligan.dev/blog/x-scrolling-centered-max-width-container/
