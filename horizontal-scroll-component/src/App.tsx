import Layout from "./components/layout/Layout";
import GalleryDiv from "./components/layout/GalleryDiv";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Layout contentMaxWidth="80ch">
        <h1 className="headline">
          Horizontal scrolling in a centered max-width container react
          component.
        </h1>
        <p>
          This React component allows you to create a horizontal scrolling
          gallery within a centered max-width container. It's designed to
          showcase a collection of images or other content that users can scroll
          through horizontally.
        </p>
        <p>
          This would be the normal configuration "out of the box" we can say:
        </p>
        <GalleryDiv galleryItemsAspectRatio="video">
          <img src="/images/image-2.jpg" alt="test images" />
          <img src="/images/image-3.jpg" alt="test images" />
          <img src="/images/image-6.jpg" alt="test images" />
          <img src="/images/image-4.jpg" alt="test images" />
          <img src="/images/image-5.jpg" alt="test images" />
        </GalleryDiv>
        <p>
          You can use set it in reverse as well, making the content appear from
          the left to the right:
        </p>
        <GalleryDiv direction="left" galleryItemsAspectRatio="video">
          <img src="/images/image-2.jpg" alt="test images" />
          <img src="/images/image-3.jpg" alt="test images" />
          <img src="/images/image-6.jpg" alt="test images" />
          <img src="/images/image-4.jpg" alt="test images" />
          <img src="/images/image-5.jpg" alt="test images" />
        </GalleryDiv>
        <p>
          There's two aspect-ratio types to configure this component: square = 1
          x 1; video = 19 x 9.{" "}
          <strong>
            *You can change this settings in the layout.css files to your
            personal preferences.
          </strong>
        </p>
        <p>This is aspect ratio square:</p>
        <GalleryDiv direction="normal" galleryItemsAspectRatio="square">
          <img src="/images/image-4.jpg" alt="test images" />
          <img src="/images/square-2.jpg" alt="test images" />
          <img src="/images/square-1.jpg" alt="test images" />
          <img src="/images/image-6.jpg" alt="test images 2" />
        </GalleryDiv>
        <p>And this is aspect ratio video:</p>
        <GalleryDiv direction="left" galleryItemsAspectRatio="video">
          <img src="/images/square-4.jpg" alt="test images" />
          <img src="/images/square-2.jpg" alt="test images" />
          <img src="/images/square-1.jpg" alt="test images" />
          <img src="/images/image-6.jpg" alt="test images 2" />
        </GalleryDiv>
        <p>
          You can also change the size of the images. Default there's two sizes
          available but again you can create your own it is super easy.
        </p>
        <GalleryDiv direction="right" galleryItemsAspectRatio="square">
          <img src="/images/image-2.jpg" alt="test images" className="sm" />
          <img src="/images/test-img-3.jpg" alt="test images" className="lg" />
          <img src="/images/test-img-4.jpg" alt="test images" className="sm" />
          <img src="/images/test-img-5.jpg" alt="test images" className="lg" />
        </GalleryDiv>
      </Layout>
    </>
  );
}

export default App;
