import { createThemedComponent } from "@dripsy/core";
import WebView, { WebViewProps } from "react-native-webview";

export type WebViewThemedProps = WebViewProps;

const WebViewThemed = createThemedComponent(WebView);

export default WebViewThemed;
