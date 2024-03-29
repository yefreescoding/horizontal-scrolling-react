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
          <img
            className="cover__illustration"
            src="/images/illustrations/coding-ill-bg-2.png"
            alt="Illustration of a person using a laptop."
          />
          <h2>It's not magic... is CSS!!</h2>
          <p>
            Developing with the help of the best front end technologies library
            React, TypeScript and Vite.
          </p>
          <div className="tech">
            <img className="xs" src={cssSvg} alt="" />
            <img className="xs" src={reactSvg} alt="" />
            <img className="xs" src={typescriptSvg} alt="" />
            <img className="xs" src={viteSvg} alt="" />
          </div>
        </div>
        <div className="cover">
          <img
            className="cover__illustration cover__illustration-idea"
            src="/images/illustrations/idea-ill-bg.png"
            alt="Illustration of a person having an idea."
          />
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
        <h2 className="sub_title">From left to right or right to left</h2>
        <p>
          You can use set it in reverse as well, making the content appear from
          the left of the screen scrolling it all the way to the right:
        </p>
        <GalleryDiv direction="left" galleryItemsAspectRatio="video">
          <div className="gallery__card">
            <div className="card__header">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M4.9984 2H2V4.9984H4.9984V2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  stroke-miterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.9978 3.50098H18.998"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  stroke-miterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3.49878 4.99805V19"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  stroke-miterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20.4968 4.99951V19.0015"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  stroke-miterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.9978 20.501H18.998"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  stroke-miterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.9984 19H2V21.9984H4.9984V19Z"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  stroke-miterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21.9964 2.00195H18.998V5.00035H21.9964V2.00195Z"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  stroke-miterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21.9964 19.002H18.998V22.0004H21.9964V19.002Z"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  stroke-miterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                width="30px"
                height="30px"
                strokeWidth="1.9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M14 12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C11.3137 6 14 8.68629 14 12ZM14 12H22M22 12L19 9M22 12L19 15"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p>Super easy just adding the value "left" to the prop direction</p>
          </div>
          <img src="/images/image-2.jpg" alt="test images" />
          <img src="/images/image-3.jpg" alt="test images" />
          <img src="/images/image-6.jpg" alt="test images" />
          <img src="/images/image-4.jpg" alt="test images" />
          <img src="/images/image-5.jpg" alt="test images" />
        </GalleryDiv>
        <h2 className="sub_title">
          Change the aspect ratio of the cards inside the component.
        </h2>
        <p>
          By default there are two options for you to chose: aspect ratio square
          4 x 4, or aspect ratio video 16 x 9. You just have to add the value to
          the `galleryItemsAspectRatio` prop.
        </p>
        <GalleryDiv direction="normal" galleryItemsAspectRatio="square">
          <div className="gallery__card md">
            <div className="card__header">
              <svg
                width="30px"
                height="30px"
                stroke-width="1.9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                  stroke="currentColor"
                  stroke-width="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p> This is the aspect ratio square.</p>
          </div>
          <img src="/images/image-4.jpg" alt="test images" className="md" />
          <img src="/images/square-2.jpg" alt="test images" className="md" />
          <img src="/images/square-1.jpg" alt="test images" className="md" />
          <img src="/images/image-6.jpg" alt="test images 2" className="md" />
        </GalleryDiv>
        <GalleryDiv direction="left" galleryItemsAspectRatio="video">
          <div className="gallery__card md">
            <div className="card__header">
              <svg
                width="30px"
                height="30px"
                stroke-width="1.9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                  stroke="currentColor"
                  stroke-width="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p> This is the aspect ratio video.</p>
          </div>
          <img src="/images/image-4.jpg" alt="test images" className="md" />
          <img src="/images/square-2.jpg" alt="test images" className="md" />
          <img src="/images/square-1.jpg" alt="test images" className="md" />
          <img src="/images/image-6.jpg" alt="test images 2" className="md" />
        </GalleryDiv>
        <h2 className="sub_title">4 different sizes to choose from</h2>
        <p>
          You can also change the size of the images. Default there's two sizes
          available but again you can create your own it is super easy.
        </p>
        <GalleryDiv direction="right" galleryItemsAspectRatio="square">
          <div className="gallery__card xs">
            <div className="card__header">
              <svg
                width="20px"
                height="20px"
                stroke-width="1.9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                  stroke="currentColor"
                  stroke-width="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p> xs: xSmall.</p>
          </div>
          <img src="/images/image-2.jpg" alt="test images" className="xs" />
          <div className="gallery__card sm">
            <div className="card__header">
              <svg
                width="25px"
                height="25px"
                stroke-width="1.9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                  stroke="currentColor"
                  stroke-width="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p> sm: small.</p>
          </div>
          <img src="/images/test-img-3.jpg" alt="test images" className="sm" />
          <div className="gallery__card md">
            <div className="card__header">
              <svg
                width="27px"
                height="27px"
                stroke-width="1.9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                  stroke="currentColor"
                  stroke-width="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p> md: medium.</p>
          </div>
          <img src="/images/test-img-4.jpg" alt="test images" className="md" />
          <div className="gallery__card lg">
            <div className="card__header">
              <svg
                width="30px"
                height="30px"
                stroke-width="1.9"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                  stroke="currentColor"
                  stroke-width="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p> lg: large</p>
          </div>
          <img src="/images/test-img-5.jpg" alt="test images" className="lg" />
        </GalleryDiv>
        <p>Developers that have used this component absolutely loved it xd.</p>
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
