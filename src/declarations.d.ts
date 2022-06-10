// declarations.d.ts
/* eslint-disable */
declare module '*.module.css' {
  const content: { [key: string]: string };
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
  // const content: any;
  // export default content;
}
