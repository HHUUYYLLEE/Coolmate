declare module 'react-outside-click-handler'
declare module 'react-slick'
declare global {
    namespace JSX {
      interface IntrinsicElements {
        marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }