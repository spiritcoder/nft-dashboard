import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default function MyDocument() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='modalPortal'></div>
          <NextScript />
        </body>
      </Html>
    )
  }