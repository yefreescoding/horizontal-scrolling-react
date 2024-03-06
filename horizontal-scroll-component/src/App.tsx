import Layout from "./components/layout/Layout";
import GalleryDiv from "./components/layout/GalleryDiv";
import Header from "./components/header/Header";
import { Testimonial } from "./components/testimonial/Testimonial";

import reactSvg from "/images/icons/react.svg";
import viteSvg from "/images/icons/vite.svg";
import typescriptSvg from "/images/icons/typescript.svg";
import cssSvg from "/images/icons/css.svg";

import testimonials from "./mocks/testmonial.json";

function App() {
  return (
    <>
      <Header />
      <div className="cover">
        <h1 className="headline">
          Horizontal scrolling in a centered max-width container react
          component.
        </h1>
        <p>
          Long title but super useful react component that allows you to create
          a horizontal scrolling gallery within a centered max-width container.
        </p>
      </div>
      <Layout contentMaxWidth="80ch">
        <GalleryDiv galleryItemsAspectRatio="regular">
          <img src="/images/image-2.jpg" alt="test images" className="lg" />
          <img src="/images/image-3.jpg" alt="test images" className="lg" />
          <img src="/images/image-6.jpg" alt="test images" className="lg" />
          <img src="/images/image-4.jpg" alt="test images" className="lg" />
          <img src="/images/image-5.jpg" alt="test images" className="lg" />
        </GalleryDiv>
        {/* <GalleryDiv galleryItemsAspectRatio="regular">
          
        </GalleryDiv> */}
        <div className="cover">
          <h2>It's not magic... is CSS!!</h2>
          <p>
            with the help of the best front end library React, TypeScript and
            Vite.
          </p>
          <div className="tech">
            <img className="xs" src={cssSvg} alt="" />
            <img className="xs" src={reactSvg} alt="" />
            <img className="xs" src={typescriptSvg} alt="" />
            <img className="xs" src={viteSvg} alt="" />
          </div>
        </div>
        <div className="cover">
          <h2>
            Inspired by
            <a className="highlight" href="" target="_blank">
              {" "}
              Ryan Mulligan
            </a>
            's post.
          </h2>
          <a href="https://ryanmulligan.dev/blog/x-scrolling-centered-max-width-container/">
            <img className="xs" src="/images/ryan-post.png" alt="" />
          </a>
        </div>
        <h2 className="second_title">Make it reverse</h2>
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
        <h2>
          Change the aspect ratio of the images or cards inside the{" "}
          {"<GalleryDiv>"} tag
        </h2>
        <p>
          There's two aspect-ratio types to configure this component: square = 1
          x 1; video = 19 x 9.{" "}
          <strong>
            *You can change this settings in the layout.css files to your
            personal preferences.
          </strong>
        </p>
        <p>• This is aspect ratio square:</p>
        <GalleryDiv direction="normal" galleryItemsAspectRatio="square">
          <img src="/images/image-4.jpg" alt="test images" />
          <img src="/images/square-2.jpg" alt="test images" />
          <img src="/images/square-1.jpg" alt="test images" />
          <img src="/images/image-6.jpg" alt="test images 2" />
        </GalleryDiv>
        <p>• And this is aspect ratio video:</p>
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
        <p>Developers that have used this component absolutely loved it</p>
        <GalleryDiv direction="right" galleryItemsAspectRatio="regular">
          {testimonials.map((item) => (
            <Testimonial
              key={item.nombre} // Don't forget to add a unique key prop
              name={item.nombre}
              imagen={item.imagen}
              testimonial={item.testimonio}
              profesion={item.profesion}
            />
          ))}
        </GalleryDiv>
      </Layout>
    </>
  );
}

export default App;
