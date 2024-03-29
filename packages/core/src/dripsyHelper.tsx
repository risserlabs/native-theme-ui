/**
 * File: /src/dripsyHelper.tsx
 * Project: @native-theme-ui/core
 * File Created: 14-06-2022 07:52:25
 * Author: Clay Risser
 * -----
 * Last Modified: 17-08-2022 06:54:27
 * Modified By: Clay Risser
 * -----
 * Risser Labs LLC (c) Copyright 2021 - 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { ComponentPropsWithRef, ComponentType, FC } from "react";
import {
  DripsyFinalTheme,
  StyledProps,
  SxProp,
  ThemedOptions,
  createThemedComponent as createDripsyThemedComponent,
} from "dripsy";
import { TextInput as RNTextInput } from "react-native";

export type DPProps = import("@dripsy/core").StyledProps<"text"> &
  (
    | (Pick<
        import("@expo/html-elements/build/primitives/Text").TextProps,
        | "testID"
        | "onLayout"
        | "nativeID"
        | "accessible"
        | "accessibilityActions"
        | "accessibilityLabel"
        | "accessibilityState"
        | "accessibilityHint"
        | "accessibilityValue"
        | "onAccessibilityAction"
        | "accessibilityLiveRegion"
        | "importantForAccessibility"
        | "accessibilityElementsHidden"
        | "accessibilityViewIsModal"
        | "onAccessibilityEscape"
        | "onAccessibilityTap"
        | "onMagicTap"
        | "accessibilityIgnoresInvertColors"
        | "onPress"
        | "onLongPress"
        | "key"
        | "allowFontScaling"
        | "ellipsizeMode"
        | "lineBreakMode"
        | "numberOfLines"
        | "onTextLayout"
        | "maxFontSizeMultiplier"
        | "adjustsFontSizeToFit"
        | "minimumFontScale"
        | "suppressHighlighting"
        | "selectable"
        | "selectionColor"
        | "textBreakStrategy"
        | "dataDetectorType"
        | keyof import("@expo/html-elements/build/primitives/Text").WebTextProps
      > &
        import("react").RefAttributes<
          import("react").Component<
            import("@expo/html-elements/build/primitives/Text").TextProps,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any
          >
        >)
    | (Pick<
        Omit<
          import("react-native").TextProps &
            import("react").ClassAttributes<typeof import("react-native").Text>,
          "style" | "accessibilityRole"
        > &
          import("@expo/html-elements/build/primitives/Text").WebTextProps & {
            children?: import("react").ReactNode;
          },
        | "testID"
        | "children"
        | "onLayout"
        | "nativeID"
        | "accessible"
        | "accessibilityActions"
        | "accessibilityLabel"
        | "accessibilityState"
        | "accessibilityHint"
        | "accessibilityValue"
        | "onAccessibilityAction"
        | "accessibilityLiveRegion"
        | "importantForAccessibility"
        | "accessibilityElementsHidden"
        | "accessibilityViewIsModal"
        | "onAccessibilityEscape"
        | "onAccessibilityTap"
        | "onMagicTap"
        | "accessibilityIgnoresInvertColors"
        | "onPress"
        | "onLongPress"
        | "key"
        | "allowFontScaling"
        | "ellipsizeMode"
        | "lineBreakMode"
        | "numberOfLines"
        | "onTextLayout"
        | "maxFontSizeMultiplier"
        | "adjustsFontSizeToFit"
        | "minimumFontScale"
        | "suppressHighlighting"
        | "selectable"
        | "selectionColor"
        | "textBreakStrategy"
        | "dataDetectorType"
        | keyof import("@expo/html-elements/build/primitives/Text").WebTextProps
      > & {
        ref?:
          | ((instance: typeof import("react-native").Text | null) => void)
          | import("react").RefObject<typeof import("react-native").Text>
          | null
          | undefined;
      })
  );

export type DTextInputProps = Omit<
  | (import("@dripsy/core").StyledProps<"forms"> &
      import("react-native").TextInputProps &
      React.RefAttributes<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.Component<import("react-native").TextInputProps, any, any>
      >)
  | (import("@dripsy/core").StyledProps<"forms"> &
      import("react-native").TextInputProps & {
        children?: React.ReactNode;
      })
  | (import("@dripsy/core").StyledProps<"forms"> &
      import("react-native").TextInputProps &
      React.RefAttributes<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.Component<import("react-native").TextInputProps, any, any>
      > & {
        children?: React.ReactNode;
      }),
  "selectionColor" | "placeholderTextColor" | "underlineColorAndroid"
> & {
  // eslint-disable-next-line @typescript-eslint/ban-types
  selectionColor?: (string & {}) | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-types
  placeholderTextColor?: (string & {}) | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-types
  underlineColorAndroid?: (string & {}) | undefined;
} & React.RefAttributes<RNTextInput>;

export type DAProps = import("@dripsy/core").StyledProps<"text"> &
  (
    | (Pick<
        import("react").PropsWithChildren<
          Pick<
            import("react-native").TextProps &
              import("react").ClassAttributes<
                typeof import("react-native").Text
              >,
            | "testID"
            | "ref"
            | "onLayout"
            | "nativeID"
            | "accessible"
            | "accessibilityActions"
            | "accessibilityLabel"
            | "accessibilityState"
            | "accessibilityHint"
            | "accessibilityValue"
            | "onAccessibilityAction"
            | "accessibilityLiveRegion"
            | "importantForAccessibility"
            | "accessibilityElementsHidden"
            | "accessibilityViewIsModal"
            | "onAccessibilityEscape"
            | "onAccessibilityTap"
            | "onMagicTap"
            | "accessibilityIgnoresInvertColors"
            | "onPress"
            | "onLongPress"
            | "key"
            | "allowFontScaling"
            | "ellipsizeMode"
            | "lineBreakMode"
            | "numberOfLines"
            | "onTextLayout"
            | "maxFontSizeMultiplier"
            | "adjustsFontSizeToFit"
            | "minimumFontScale"
            | "suppressHighlighting"
            | "selectable"
            | "selectionColor"
            | "textBreakStrategy"
            | "accessibilityComponentType"
            | "accessibilityTraits"
          > &
            import("@expo/html-elements/build/primitives/Text").WebTextProps & {
              href?: string | undefined;
              target?: string | undefined;
            }
        >,
        | "testID"
        | "children"
        | "onLayout"
        | "nativeID"
        | "accessible"
        | "accessibilityActions"
        | "accessibilityLabel"
        | "accessibilityState"
        | "accessibilityHint"
        | "accessibilityValue"
        | "onAccessibilityAction"
        | "accessibilityLiveRegion"
        | "importantForAccessibility"
        | "accessibilityElementsHidden"
        | "accessibilityViewIsModal"
        | "onAccessibilityEscape"
        | "onAccessibilityTap"
        | "onMagicTap"
        | "accessibilityIgnoresInvertColors"
        | "onPress"
        | "onLongPress"
        | "key"
        | "allowFontScaling"
        | "ellipsizeMode"
        | "lineBreakMode"
        | "numberOfLines"
        | "onTextLayout"
        | "maxFontSizeMultiplier"
        | "adjustsFontSizeToFit"
        | "minimumFontScale"
        | "suppressHighlighting"
        | "selectable"
        | "selectionColor"
        | "textBreakStrategy"
        | keyof import("@expo/html-elements/build/primitives/Text").WebTextProps
        | "accessibilityComponentType"
        | "accessibilityTraits"
        | "href"
        | "target"
      > &
        import("react").RefAttributes<
          import("react").Component<
            import("react").PropsWithChildren<
              Pick<
                import("react-native").TextProps &
                  import("react").ClassAttributes<
                    typeof import("react-native").Text
                  >,
                | "testID"
                | "ref"
                | "onLayout"
                | "nativeID"
                | "accessible"
                | "accessibilityActions"
                | "accessibilityLabel"
                | "accessibilityState"
                | "accessibilityHint"
                | "accessibilityValue"
                | "onAccessibilityAction"
                | "accessibilityLiveRegion"
                | "importantForAccessibility"
                | "accessibilityElementsHidden"
                | "accessibilityViewIsModal"
                | "onAccessibilityEscape"
                | "onAccessibilityTap"
                | "onMagicTap"
                | "accessibilityIgnoresInvertColors"
                | "onPress"
                | "onLongPress"
                | "key"
                | "allowFontScaling"
                | "ellipsizeMode"
                | "lineBreakMode"
                | "numberOfLines"
                | "onTextLayout"
                | "maxFontSizeMultiplier"
                | "adjustsFontSizeToFit"
                | "minimumFontScale"
                | "suppressHighlighting"
                | "selectable"
                | "selectionColor"
                | "textBreakStrategy"
                | "accessibilityComponentType"
                | "accessibilityTraits"
              > &
                import("@expo/html-elements/build/primitives/Text").WebTextProps & {
                  href?: string | undefined;
                  target?: string | undefined;
                }
            >,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any
          >
        >)
    | (Pick<
        Pick<
          import("react-native").TextProps &
            import("react").ClassAttributes<typeof import("react-native").Text>,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          | "testID"
          | "ref"
          | "onLayout"
          | "nativeID"
          | "accessible"
          | "accessibilityActions"
          | "accessibilityLabel"
          | "accessibilityState"
          | "accessibilityHint"
          | "accessibilityValue"
          | "onAccessibilityAction"
          | "accessibilityLiveRegion"
          | "importantForAccessibility"
          | "accessibilityElementsHidden"
          | "accessibilityViewIsModal"
          | "onAccessibilityEscape"
          | "onAccessibilityTap"
          | "onMagicTap"
          | "accessibilityIgnoresInvertColors"
          | "onPress"
          | "onLongPress"
          | "key"
          | "allowFontScaling"
          | "ellipsizeMode"
          | "lineBreakMode"
          | "numberOfLines"
          | "onTextLayout"
          | "maxFontSizeMultiplier"
          | "adjustsFontSizeToFit"
          | "minimumFontScale"
          | "suppressHighlighting"
          | "selectable"
          | "selectionColor"
          | "textBreakStrategy"
          | "accessibilityComponentType"
          | "accessibilityTraits"
        > &
          import("@expo/html-elements/build/primitives/Text").WebTextProps & {
            href?: string | undefined;
            target?: string | undefined;
          } & {
            children?: import("react").ReactNode;
          },
        | "testID"
        | "children"
        | "onLayout"
        | "nativeID"
        | "accessible"
        | "accessibilityActions"
        | "accessibilityLabel"
        | "accessibilityState"
        | "accessibilityHint"
        | "accessibilityValue"
        | "onAccessibilityAction"
        | "accessibilityLiveRegion"
        | "importantForAccessibility"
        | "accessibilityElementsHidden"
        | "accessibilityViewIsModal"
        | "onAccessibilityEscape"
        | "onAccessibilityTap"
        | "onMagicTap"
        | "accessibilityIgnoresInvertColors"
        | "onPress"
        | "onLongPress"
        | "key"
        | "allowFontScaling"
        | "ellipsizeMode"
        | "lineBreakMode"
        | "numberOfLines"
        | "onTextLayout"
        | "maxFontSizeMultiplier"
        | "adjustsFontSizeToFit"
        | "minimumFontScale"
        | "suppressHighlighting"
        | "selectable"
        | "selectionColor"
        | "textBreakStrategy"
        | keyof import("@expo/html-elements/build/primitives/Text").WebTextProps
        | "accessibilityComponentType"
        | "accessibilityTraits"
        | "href"
        | "target"
      > & {
        ref?:
          | ((instance: typeof import("react-native").Text | null) => void)
          | import("react").RefObject<typeof import("react-native").Text>
          | null
          | undefined;
      })
  );

export type DImageProps = import("@dripsy/core").StyledProps<
  keyof import("@dripsy/core").Theme
> &
  (
    | (import("react-native").ImageProps &
        import("react").RefAttributes<
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          import("react").Component<import("react-native").ImageProps, any, any>
        >)
    | (import("react-native").ImageProps & {
        children?: import("react").ReactNode;
      })
  );

export type DViewProps = import("@dripsy/core").StyledProps<
  keyof import("@dripsy/core").Theme
> &
  (
    | (import("react-native").ViewProps &
        import("react").RefAttributes<
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          import("react").Component<import("react-native").ViewProps, any, any>
        >)
    | (import("react-native").ViewProps & {
        children?: import("react").ReactNode;
      })
  );

export type DTextProps = import("@dripsy/core").StyledProps<"text"> &
  (
    | (import("react-native").TextProps &
        import("react").RefAttributes<
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          import("react").Component<import("react-native").TextProps, any, any>
        >)
    | (import("react-native").TextProps & {
        children?: import("react").ReactNode;
      })
  );

export type DripsyFC<P> = FC<P> & { defaultSx: SxProp };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PatchStyledProps<P> = P & any;

export type PatchVariant<P> = Omit<P, "variant"> & { variant?: string };

export function createThemedComponent<
  BaseComponentProps extends {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: any;
  },
  ExtraProps,
  ThemeKey extends keyof DripsyFinalTheme
>(
  Component: ComponentType<BaseComponentProps>,
  options?: ThemedOptions<ExtraProps, ThemeKey>
): ComponentType<
  StyledProps<ThemeKey> &
    ComponentPropsWithRef<ComponentType<BaseComponentProps>> &
    ExtraProps
> {
  const WrappedComponent: FC<BaseComponentProps> = (
    props: BaseComponentProps
  ) => {
    return <Component {...props} />;
  };
  return createDripsyThemedComponent<BaseComponentProps, ExtraProps, ThemeKey>(
    WrappedComponent,
    {
      ...options,
    }
  );
}

export function isText(children: unknown) {
  if (Array.isArray(children)) {
    return (
      children.length > 1 &&
      typeof children[0] === "string" &&
      "_owner" in children[1] &&
      "_store" in children[1] &&
      "key" in children[1] &&
      "props" in children[1] &&
      "ref" in children[1] &&
      "type" in children[1]
    );
  }
  return typeof children === "string";
}
