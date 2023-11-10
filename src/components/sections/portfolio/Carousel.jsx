import { forwardRef, useEffect, useRef } from 'react';

import { register } from 'swiper/element';
import { Navigation } from 'swiper/modules';
// import { SwiperOptions } from 'swiper/types';
import { images } from './data';
import {
  StyledSwiperContainer,
  ImageWrapper,
  StyledSwiperImage,
} from './styles';
import { palette } from '../../../assets/misc/vars';

// type CarouselProps={
//   currentImg:string,
//   currentDialog:string,
//   loadedImages:string[]
// }
const Carousel = forwardRef(
  ({ currentImg, currentDialog, loadedImages }, ref) => {
    const swiperRef = useRef(null);

    useEffect(() => {
      // Register Swiper web component
      register();

      // Object with parameters
      const params = {
        modules: [Navigation],
        injectStylesUrls: ['./navigation-element.min.css'],
        on: {
          init: function () {
            this.slideTo(currentImg, 0);
          },
        },
        injectStyles: [
          `.swiper-button-next,
          .swiper-button-prev {
            background-color: ${palette.darkShades}80;
            padding: 0.5em 1em;
            border-radius: 50%;
            border: 1px solid #c0c0c089;
            --swiper-navigation-size: 3em;
            --swiper-navigation-color: ${palette.lightAccent};
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
            &:hover{
              background-color: ${palette.darkShades};
              --swiper-navigation-color: ${palette.darkAccent};

            }
          }
          @media (max-width: 736px){
            .swiper-button-next, .swiper-button-prev {
              --swiper-navigation-size: 2em;
            }
          }

          
          `,
        ],
      };

      // Assign it to swiper element
      Object.assign(swiperRef.current, params);
      // initialize swiper
      swiperRef.current.initialize();
      swiperRef.current.activeIndex = currentImg;
    }, [currentImg]);
    return (
      <StyledSwiperContainer>
        <swiper-container init="false" ref={swiperRef} navigation="true">
          {loadedImages.map((image, index) => {
            return (
              <swiper-slide key={index}>
                <ImageWrapper>
                  <StyledSwiperImage
                    $src={image}
                    alt={images[currentDialog].title + index}
                  />
                </ImageWrapper>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </StyledSwiperContainer>
    );
  }
);
export default Carousel;
