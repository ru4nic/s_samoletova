import { RefObject, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useScroll from './components/hooks/useScroll';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Portfolio from './components/sections/portfolio';
import Price from './components/sections/price';
// import Gallery from './components/sections/gallery';
import Contact from './components/sections/contact';
import NavBar from './components/sections/navbar';

import sansLightWoff from './assets/fonts/source-sans-3-v10-cyrillic_latin-300.woff';
import sansLightWoff2 from './assets/fonts/source-sans-3-v10-cyrillic_latin-300.woff2';

import sansRegtWoff from './assets/fonts/source-sans-3-v10-cyrillic_latin-regular.woff';
import sansRegWoff2 from './assets/fonts/source-sans-3-v10-cyrillic_latin-regular.woff2';

import sansBoldtWoff from './assets/fonts/source-sans-3-v10-cyrillic_latin-500.woff';
import sansBoldWoff2 from './assets/fonts/source-sans-3-v10-cyrillic_latin-500.woff2';

import GlobalStyles from './components/sections/layout/GlobalStyles';
import { palette } from './assets/misc/vars';
import { useMediaQuery } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: palette.lightAccent,
    },
    secondary: {
      main: palette.darkShades,
    },
  },
  typography: {
    fontFamily: 'Source',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Source Light";
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local("Source Light"), url(${sansLightWoff2}) format('woff2'), url(${sansLightWoff}) format('woff');        }
        @font-face {
          font-family: "Source Regular";
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local("Source Regular"), url(${sansRegWoff2}) format('woff2'), url(${sansRegtWoff}) format('woff');        }
        @font-face {
          font-family: "Source Bold";
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local("Source Bold"), url(${sansBoldWoff2}) format('woff2'), url(${sansBoldtWoff}) format('woff');        }
        body {
          font-weight:400;
        }
        html {
          -webkit-font-smoothing: unset;
          -moz-osx-font-smoothing: unset;
          box-sizing: border-box;
          -webkit-text-size-adjust: unset;
        }
      `,
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: palette.lightShades,
          color: palette.darkShades,
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: palette.darkShades,
          fontWeight: 300,
          lineHeight: 1.3,
          fontSize: 'unset',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.3rem',
          fontFamily: 'Source Bold',
          // lineHeight: 1.2,
          position: 'relative',
          '&::after': {
            content: "''",
            position: 'absolute',
            left: '24px',
            bottom: '16px',
            width: '3.5rem',
            height: '2px',
            backgroundColor: `${palette.darkShades}30`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
        },
      },
    },
  },
});
function App() {
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUpLeave,
    wrapperRef,

    setIsScrolling,
  } = useScroll();
  const isTablet = useMediaQuery('(max-width: 1000px)');

  useEffect(() => {
    if (isTablet) {
      setIsScrolling(false);
    } else {
      setIsScrolling(true);
    }
  }, [isTablet]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <NavBar />
      <div
        className="wrapper"
        ref={wrapperRef as RefObject<HTMLDivElement>}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpLeave}
      >
        <Hero />
        <About setIsScrolling={setIsScrolling} isTablet={isTablet} />
        <Portfolio setIsScrolling={setIsScrolling} isTablet={isTablet} />
        <Price setIsScrolling={setIsScrolling} isTablet={isTablet} />
        {/* <Gallery /> */}
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
