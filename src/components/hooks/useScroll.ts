import { RefObject, useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(true);

  const wrapperRef: RefObject<HTMLElement | null> = useRef(null);
  const draggingRef = useRef<boolean>(false);
  const draggedRef = useRef<boolean>(false);
  const distanceRef = useRef<number>(0);
  const startScrollRef = useRef<number>(0);
  const momentumIntervalIdRef = useRef<null | number>(null);
  const velocityIntervalIdRef = useRef<null | number>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const previousXRef = useRef<number>(0);
  const velocityRef = useRef<number | undefined>(0);
  const directionRef = useRef<number>(0);
  // Settings
  const settings = {
    // Keyboard shortcuts.
    keyboardShortcuts: {
      // If true, enables scrolling via keyboard shortcuts.
      enabled: true,

      // Sets the distance to scroll when using the left/right arrow keys.
      distance: 200,
    },
    // Scroll wheel.
    scrollWheel: {
      // If true, enables scrolling via the scroll wheel.
      enabled: true,

      // Sets the scroll wheel factor. (Ideally) a value between 0 and 1 (lower = slower scroll, higher = faster scroll).
      factor: 1,
    },

    dragging: {
      // If true, enables scrolling by dragging the main wrapper with the mouse.
      enabled: true,

      // Sets the momentum factor. Must be a value between 0 and 1 (lower = less momentum, higher = more momentum, 0 = disable momentum scrolling).
      // momentum: 0.875,
      momentum: 0.875,

      // Sets the drag threshold (in pixels).
      threshold: 10,
    },

    excludeSelector:
      'input:focus, select:focus, textarea:focus, audio, video, iframe',

    // linkScrollSpeed: 1000,
  };
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      let scrolled = false;
      // let m = velocityRef.current;
      switch (event.key) {
        // Left arrow.
        case 'ArrowLeft':
          document.documentElement.scrollLeft -=
            settings.keyboardShortcuts.distance;
          scrolled = true;
          break;

        // Right arrow.
        case 'ArrowRight':
          document.documentElement.scrollLeft +=
            settings.keyboardShortcuts.distance;
          scrolled = true;
          break;

        // Page Up.
        case 'ArrowUp':
          document.documentElement.scrollLeft -= window.innerWidth + 100;
          scrolled = true;
          break;

        // Page Down, Space.
        case 'ArrowDown':
        case '':
          document.documentElement.scrollLeft += window.innerWidth - 100;
          scrolled = true;
          break;

        // Home.
        case 'Home':
          document.documentElement.scrollLeft = 0;
          scrolled = true;
          break;

        // End.
        case 'End':
          document.documentElement.scrollLeft =
            document.documentElement.scrollWidth;
          scrolled = true;
          break;
      }

      // Scrolled?
      if (scrolled) {
        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Stop link scroll.
        // document.body.stop();
        // event.preventDefault();
      }
    };

    if (settings.keyboardShortcuts.enabled) {
      document.querySelectorAll(settings.excludeSelector).forEach((element) => {
        element.addEventListener('keypress', handleKeyPress as EventListener);
        element.addEventListener('keyup', handleKeyPress as EventListener);
        element.addEventListener('keydown', handleKeyPress as EventListener);
      });

      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      if (settings.keyboardShortcuts.enabled) {
        document
          .querySelectorAll(settings.excludeSelector)
          .forEach((element) => {
            element.removeEventListener(
              'keypress',
              handleKeyPress as EventListener
            );
            element.removeEventListener(
              'keyup',
              handleKeyPress as EventListener
            );
            element.removeEventListener(
              'keydown',
              handleKeyPress as EventListener
            );
          });

        window.removeEventListener('keydown', handleKeyPress);
      }
    };
  }, []);
  // Scroll
  const normalizeWheel = (event: WheelEvent) => {
    var pixelStep = 10,
      lineHeight = 40,
      pageHeight = 800,
      sX = 0,
      sY = 0,
      pX = 0,
      pY = 0;

    if ('detail' in event) {
      sY = (event as any).detail;
    } else if ('wheelDelta' in event) {
      sY = (event as any).wheelDelta / -120;
    } else if ('wheelDeltaY' in event) {
      sY = (event as any).wheelDeltaY / -120;
    }

    if ('wheelDeltaX' in event) {
      sX = (event as any).wheelDeltaX / -120;
    }

    if ('axis' in event && event.axis === 1 /* event.HORIZONTAL_AXIS */) {
      sX = sY;
      sY = 0;
    }

    pX = sX * pixelStep;
    pY = sY * pixelStep;

    if ('deltaY' in event) {
      pY = event.deltaY;
    }

    if ('deltaX' in event) {
      pX = event.deltaX;
    }

    if (pX || pY) {
      if (event.deltaMode == 1) {
        pX *= lineHeight;
        pY *= lineHeight;
      } else {
        pX *= pageHeight;
        pY *= pageHeight;
      }
    }

    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY,
    };
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!isScrolling) {
        // event.preventDefault();
        // event.stopPropagation();
        return;
      }

      document.documentElement.scrollTop = 0;

      const n = normalizeWheel(event);
      const x = n.pixelX !== 0 ? n.pixelX : n.pixelY;
      const delta = Math.min(Math.abs(x), 150) * settings.scrollWheel.factor;
      const direction = x > 0 ? 1 : -1;

      document.documentElement.scrollLeft += delta * direction;
    };

    if (settings.scrollWheel.enabled) {
      document.body.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (settings.scrollWheel.enabled) {
        document.body.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isScrolling]);

  // Dragging
  const handleMouseUpLeave = (event: React.MouseEvent<HTMLElement>) => {
    // Not dragging? Bail.
    if (!isScrolling) return;
    if (!draggingRef.current) return;
    // Dragged? Re-enable pointer events on all descendents.
    if (draggedRef.current) {
      setTimeout(() => {
        wrapperRef.current!.classList.remove('is-dragged');
      }, 100);

      draggedRef.current = false;
    }
    // Distance exceeds threshold? Prevent default.
    if (distanceRef.current > settings.dragging.threshold) {
      event.preventDefault();
    }
    // End drag.
    draggingRef.current = false;
    if (wrapperRef.current) {
      wrapperRef.current.classList.remove('is-dragging');
    }
    if (velocityIntervalIdRef.current) {
      clearInterval(velocityIntervalIdRef.current);
    }
    if (momentumIntervalIdRef.current) {
      clearInterval(momentumIntervalIdRef.current);
    }
    // Pause scroll zone.
    // wrapperRef.current.dispatchEvent(new CustomEvent('---pauseScrollZone'));
    // Initialize momentum interval.
    if (settings.dragging.momentum > 0) {
      let m = velocityRef.current!;
      momentumIntervalIdRef.current = setInterval(() => {
        // Momentum is NaN? Bail.
        if (isNaN(m) && momentumIntervalIdRef.current) {
          clearInterval(momentumIntervalIdRef.current);
          return;
        }
        // Scroll page.
        document.documentElement.scrollLeft += m * directionRef.current;
        // Decrease momentum.
        m *= settings.dragging.momentum;
        // Negligible momentum? Clear interval and end.
        if (Math.abs(m) < 1) {
          clearInterval(momentumIntervalIdRef.current!);
        }
      }, 15);
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    // Clear momentum interval.
    if (!isScrolling) return;
    if (momentumIntervalIdRef.current) {
      clearInterval(momentumIntervalIdRef.current);
    }
    // Stop link scroll.
    event.preventDefault();
    // Start drag.
    draggingRef.current = true;
    if (wrapperRef.current) {
      wrapperRef.current.classList.add('is-dragging');
    }
    // Initialize and reset vars.
    startScrollRef.current = window.pageXOffset || window.scrollX;
    startXRef.current = event.clientX;
    previousXRef.current = startXRef.current;
    currentXRef.current = startXRef.current;
    distanceRef.current = 0;
    directionRef.current = 0;
    // Initialize velocity interval.
    if (velocityIntervalIdRef.current) {
      clearInterval(velocityIntervalIdRef.current);
    }
    velocityIntervalIdRef.current = setInterval(() => {
      // Calculate velocity, direction.
      velocityRef.current = Math.abs(
        currentXRef.current - previousXRef.current
      );

      directionRef.current =
        currentXRef.current > previousXRef.current ? -1 : 1;
      // Update previous X.
      previousXRef.current = currentXRef.current;
    }, 50);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    // Not dragging? Bail.
    if (!isScrolling) return;
    if (!draggingRef.current) return;
    // Velocity.
    currentXRef.current = event.clientX;
    // Scroll page.
    // window.scrollBy(startXRef.current - currentXRef.current, 0);
    document.documentElement.scrollLeft =
      startScrollRef.current + (startXRef.current - currentXRef.current);
    // Update distance.
    // distanceRef.current = Math.abs(
    //   startScrollRef.current - (window.pageXOffset || window.scrollX)
    // );
    distanceRef.current = Math.abs(
      startScrollRef.current - document.documentElement.scrollLeft
    );
    // Distance exceeds threshold? Disable pointer events on all descendents.
    if (
      !draggedRef.current &&
      distanceRef.current > settings.dragging.threshold &&
      wrapperRef.current
    ) {
      wrapperRef.current.classList.add('is-dragged');
      draggedRef.current = true;
    }
  };
  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUpLeave,
    wrapperRef,
    isScrolling,
    setIsScrolling,
  };
};
export default useScroll;
