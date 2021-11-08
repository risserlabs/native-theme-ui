import React from 'react';
import { Document, getInitialProps } from '@expo/next-adapter/document';
import { flush } from 'react-native-media-query';

export default class WebDocument extends Document {
  static getInitialProps: typeof getInitialProps = async ({ renderPage }) => {
    const initialProps = await getInitialProps({ renderPage });
    const styles = [initialProps.styles, flush()];
    return { ...initialProps, styles: React.Children.toArray(styles) };
  };
}
