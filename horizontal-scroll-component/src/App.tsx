import "./App.css";
import Layout from "./components/Layout";
import GalleryDiv from "./components/GalleryDiv";

function App() {
  return (
    <Layout>
      <h1 className="headline">
        Horizontal scrolling in a centered max-width container react component.
      </h1>
      <p>
        This React component allows you to create a horizontal scrolling gallery
        within a centered max-width container. It's designed to showcase a
        collection of images or other content that users can scroll through
        horizontally.
      </p>
      <GalleryDiv galleryItemsAspectRatio="video">
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
      </GalleryDiv>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae
        voluptatibus dolore.
      </p>
      <GalleryDiv direction="left" galleryItemsAspectRatio="square">
        <img src="/images/square-4.jpg" alt="test images" />
        <img src="/images/square-2.jpg" alt="test images" />
        <img src="/images/square-1.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images 2" />
      </GalleryDiv>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae
        voluptatibus dolore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde
        sunt fugit placeat molestiae quam nesciunt dolorum enim labore quasi sit
        eum, quo assumenda fugiat beatae. Sit, ut corrupti suscipit iusto,
        excepturi dolorum unde magnam repellat totam iure commodi dolor natus
        dignissimos impedit, eos in.
      </p>
      <GalleryDiv direction="normal" galleryItemsAspectRatio="video">
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
      </GalleryDiv>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde
        sunt fugit placeat molestiae quam nesciunt dolorum enim labore quasi sit
        eum, quo assumenda fugiat beatae. Sit, ut corrupti suscipit iusto,
        excepturi dolorum unde magnam repellat totam iure commodi dolor natus
        dignissimos impedit, eos in.
      </p>
      <GalleryDiv direction="left" galleryItemsAspectRatio="square">
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-3.jpg" alt="test images" />
        <img src="/images/test-img-4.jpg" alt="test images" />
        <img src="/images/test-img-5.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
      </GalleryDiv>
    </Layout>
  );
}

export default App;
