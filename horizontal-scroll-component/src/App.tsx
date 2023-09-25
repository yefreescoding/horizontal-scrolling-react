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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
        dolores ipsam sequi incidunt dignissimos culpa. Debitis, nemo,
        perferendis officiis neque et corrupti voluptas cupiditate itaque autem
        animi ab laborum deleniti nobis ullam aliquam assumenda?
      </p>
      <GalleryDiv>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde
        sunt fugit placeat molestiae quam nesciunt dolorum enim labore quasi sit
        eum, quo assumenda fugiat beatae. Sit, ut corrupti suscipit iusto,
        excepturi dolorum unde magnam repellat totam iure commodi dolor natus
        dignissimos impedit, eos in.
      </p>
      <GalleryDiv>
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
        <img src="/images/test-img-2.jpg" alt="test images" />
      </GalleryDiv>
    </Layout>
  );
}

export default App;
