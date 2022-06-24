/**
 * File: /dripsyHelper.ts
 * Project: -
 * File Created: 14-06-2022 07:52:25
 * Author: Clay Risser
 * -----
 * Last Modified: 24-06-2022 06:27:54
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

import { FC } from 'react';
import { SxProp } from 'dripsy';
import { TextInput as RNTextInput } from 'react-native';

export type DPressableProps = Pick<
  Omit<
    | (import('@dripsy/core').StyledProps<keyof import('@dripsy/core').Theme> &
        Pick<
          import('react-native').PressableProps &
            React.RefAttributes<import('react-native').View>,
          keyof import('react-native').PressableProps | 'key'
        > &
        React.RefAttributes<
          React.Component<
            import('react-native').PressableProps &
              React.RefAttributes<import('react-native').View>,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any
          >
        > & {
          showCursor: boolean;
        })
    | (import('@dripsy/core').StyledProps<keyof import('@dripsy/core').Theme> &
        import('react-native').PressableProps &
        React.RefAttributes<import('react-native').View> & {
          children?: React.ReactNode;
        } & {
          showCursor: boolean;
        })
    | (import('@dripsy/core').StyledProps<keyof import('@dripsy/core').Theme> &
        Pick<
          import('react-native').PressableProps &
            React.RefAttributes<import('react-native').View>,
          keyof import('react-native').PressableProps | 'key'
        > &
        React.RefAttributes<
          React.Component<
            import('react-native').PressableProps &
              React.RefAttributes<import('react-native').View>,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any
          >
        > & {
          showCursor: boolean;
        } & {
          children?: React.ReactNode;
        }),
    'showCursor'
  >,
  | 'testID'
  | 'pointerEvents'
  | 'variant'
  | 'children'
  | 'style'
  | 'themeKey'
  | 'sx'
  | 'variants'
  | 'as'
  | 'hitSlop'
  | 'onLayout'
  | 'removeClippedSubviews'
  | 'nativeID'
  | 'collapsable'
  | 'needsOffscreenAlphaCompositing'
  | 'renderToHardwareTextureAndroid'
  | 'focusable'
  | 'shouldRasterizeIOS'
  | 'isTVSelectable'
  | 'hasTVPreferredFocus'
  | 'tvParallaxProperties'
  | 'tvParallaxShiftDistanceX'
  | 'tvParallaxShiftDistanceY'
  | 'tvParallaxTiltAngle'
  | 'tvParallaxMagnification'
  | 'onStartShouldSetResponder'
  | 'onMoveShouldSetResponder'
  | 'onResponderEnd'
  | 'onResponderGrant'
  | 'onResponderReject'
  | 'onResponderMove'
  | 'onResponderRelease'
  | 'onResponderStart'
  | 'onResponderTerminationRequest'
  | 'onResponderTerminate'
  | 'onStartShouldSetResponderCapture'
  | 'onMoveShouldSetResponderCapture'
  | 'onTouchStart'
  | 'onTouchMove'
  | 'onTouchEnd'
  | 'onTouchCancel'
  | 'onTouchEndCapture'
  | 'accessible'
  | 'accessibilityActions'
  | 'accessibilityLabel'
  | 'accessibilityRole'
  | 'accessibilityState'
  | 'accessibilityHint'
  | 'accessibilityValue'
  | 'onAccessibilityAction'
  | 'accessibilityLiveRegion'
  | 'importantForAccessibility'
  | 'accessibilityElementsHidden'
  | 'accessibilityViewIsModal'
  | 'onAccessibilityEscape'
  | 'onAccessibilityTap'
  | 'onMagicTap'
  | 'accessibilityIgnoresInvertColors'
  | 'onPress'
  | 'onPressIn'
  | 'onPressOut'
  | 'onLongPress'
  | 'delayLongPress'
  | 'disabled'
  | 'pressRetentionOffset'
  | 'android_disableSound'
  | 'android_ripple'
  | 'testOnly_pressed'
  | 'key'
> &
  React.RefAttributes<import('react-native').View>;

export type DBoxProps = import('@dripsy/core').StyledProps<
  keyof import('@dripsy/core').Theme
> &
  (
    | (import('react-native').ViewProps &
        import('react').RefAttributes<
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          import('react').Component<import('react-native').ViewProps, any, any>
        >)
    | (import('react-native').ViewProps & {
        children?: import('react').ReactNode;
      })
  );

export type DPProps = import('@dripsy/core').StyledProps<'text'> &
  (
    | (Pick<
        import('@expo/html-elements/build/primitives/Text').TextProps,
        | 'testID'
        | 'onLayout'
        | 'nativeID'
        | 'accessible'
        | 'accessibilityActions'
        | 'accessibilityLabel'
        | 'accessibilityState'
        | 'accessibilityHint'
        | 'accessibilityValue'
        | 'onAccessibilityAction'
        | 'accessibilityLiveRegion'
        | 'importantForAccessibility'
        | 'accessibilityElementsHidden'
        | 'accessibilityViewIsModal'
        | 'onAccessibilityEscape'
        | 'onAccessibilityTap'
        | 'onMagicTap'
        | 'accessibilityIgnoresInvertColors'
        | 'onPress'
        | 'onLongPress'
        | 'key'
        | 'allowFontScaling'
        | 'ellipsizeMode'
        | 'lineBreakMode'
        | 'numberOfLines'
        | 'onTextLayout'
        | 'maxFontSizeMultiplier'
        | 'adjustsFontSizeToFit'
        | 'minimumFontScale'
        | 'suppressHighlighting'
        | 'selectable'
        | 'selectionColor'
        | 'textBreakStrategy'
        | 'dataDetectorType'
        | keyof import('@expo/html-elements/build/primitives/Text').WebTextProps
      > &
        import('react').RefAttributes<
          import('react').Component<
            import('@expo/html-elements/build/primitives/Text').TextProps,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            any
          >
        >)
    | (Pick<
        Omit<
          import('react-native').TextProps &
            import('react').ClassAttributes<typeof import('react-native').Text>,
          'style' | 'accessibilityRole'
        > &
          import('@expo/html-elements/build/primitives/Text').WebTextProps & {
            children?: import('react').ReactNode;
          },
        | 'testID'
        | 'children'
        | 'onLayout'
        | 'nativeID'
        | 'accessible'
        | 'accessibilityActions'
        | 'accessibilityLabel'
        | 'accessibilityState'
        | 'accessibilityHint'
        | 'accessibilityValue'
        | 'onAccessibilityAction'
        | 'accessibilityLiveRegion'
        | 'importantForAccessibility'
        | 'accessibilityElementsHidden'
        | 'accessibilityViewIsModal'
        | 'onAccessibilityEscape'
        | 'onAccessibilityTap'
        | 'onMagicTap'
        | 'accessibilityIgnoresInvertColors'
        | 'onPress'
        | 'onLongPress'
        | 'key'
        | 'allowFontScaling'
        | 'ellipsizeMode'
        | 'lineBreakMode'
        | 'numberOfLines'
        | 'onTextLayout'
        | 'maxFontSizeMultiplier'
        | 'adjustsFontSizeToFit'
        | 'minimumFontScale'
        | 'suppressHighlighting'
        | 'selectable'
        | 'selectionColor'
        | 'textBreakStrategy'
        | 'dataDetectorType'
        | keyof import('@expo/html-elements/build/primitives/Text').WebTextProps
      > & {
        ref?:
          | ((instance: typeof import('react-native').Text | null) => void)
          | import('react').RefObject<typeof import('react-native').Text>
          | null
          | undefined;
      })
  );

export type DTextInputProps = Omit<
  | (import('@dripsy/core').StyledProps<'forms'> &
      import('react-native').TextInputProps &
      React.RefAttributes<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.Component<import('react-native').TextInputProps, any, any>
      >)
  | (import('@dripsy/core').StyledProps<'forms'> &
      import('react-native').TextInputProps & {
        children?: React.ReactNode;
      })
  | (import('@dripsy/core').StyledProps<'forms'> &
      import('react-native').TextInputProps &
      React.RefAttributes<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.Component<import('react-native').TextInputProps, any, any>
      > & {
        children?: React.ReactNode;
      }),
  'selectionColor' | 'placeholderTextColor' | 'underlineColorAndroid'
> & {
  // eslint-disable-next-line @typescript-eslint/ban-types
  selectionColor?: (string & {}) | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-types
  placeholderTextColor?: (string & {}) | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-types
  underlineColorAndroid?: (string & {}) | undefined;
} & React.RefAttributes<RNTextInput>;

export type DAProps = import('@dripsy/core').StyledProps<'text'> &
  (
    | (Pick<
        import('react').PropsWithChildren<
          Pick<
            import('react-native').TextProps &
              import('react').ClassAttributes<
                typeof import('react-native').Text
              >,
            | 'testID'
            | 'ref'
            | 'onLayout'
            | 'nativeID'
            | 'accessible'
            | 'accessibilityActions'
            | 'accessibilityLabel'
            | 'accessibilityState'
            | 'accessibilityHint'
            | 'accessibilityValue'
            | 'onAccessibilityAction'
            | 'accessibilityLiveRegion'
            | 'importantForAccessibility'
            | 'accessibilityElementsHidden'
            | 'accessibilityViewIsModal'
            | 'onAccessibilityEscape'
            | 'onAccessibilityTap'
            | 'onMagicTap'
            | 'accessibilityIgnoresInvertColors'
            | 'onPress'
            | 'onLongPress'
            | 'key'
            | 'allowFontScaling'
            | 'ellipsizeMode'
            | 'lineBreakMode'
            | 'numberOfLines'
            | 'onTextLayout'
            | 'maxFontSizeMultiplier'
            | 'adjustsFontSizeToFit'
            | 'minimumFontScale'
            | 'suppressHighlighting'
            | 'selectable'
            | 'selectionColor'
            | 'textBreakStrategy'
            | 'accessibilityComponentType'
            | 'accessibilityTraits'
          > &
            import('@expo/html-elements/build/primitives/Text').WebTextProps & {
              href?: string | undefined;
              target?: string | undefined;
            }
        >,
        | 'testID'
        | 'children'
        | 'onLayout'
        | 'nativeID'
        | 'accessible'
        | 'accessibilityActions'
        | 'accessibilityLabel'
        | 'accessibilityState'
        | 'accessibilityHint'
        | 'accessibilityValue'
        | 'onAccessibilityAction'
        | 'accessibilityLiveRegion'
        | 'importantForAccessibility'
        | 'accessibilityElementsHidden'
        | 'accessibilityViewIsModal'
        | 'onAccessibilityEscape'
        | 'onAccessibilityTap'
        | 'onMagicTap'
        | 'accessibilityIgnoresInvertColors'
        | 'onPress'
        | 'onLongPress'
        | 'key'
        | 'allowFontScaling'
        | 'ellipsizeMode'
        | 'lineBreakMode'
        | 'numberOfLines'
        | 'onTextLayout'
        | 'maxFontSizeMultiplier'
        | 'adjustsFontSizeToFit'
        | 'minimumFontScale'
        | 'suppressHighlighting'
        | 'selectable'
        | 'selectionColor'
        | 'textBreakStrategy'
        | keyof import('@expo/html-elements/build/primitives/Text').WebTextProps
        | 'accessibilityComponentType'
        | 'accessibilityTraits'
        | 'href'
        | 'target'
      > &
        import('react').RefAttributes<
          import('react').Component<
            import('react').PropsWithChildren<
              Pick<
                import('react-native').TextProps &
                  import('react').ClassAttributes<
                    typeof import('react-native').Text
                  >,
                | 'testID'
                | 'ref'
                | 'onLayout'
                | 'nativeID'
                | 'accessible'
                | 'accessibilityActions'
                | 'accessibilityLabel'
                | 'accessibilityState'
                | 'accessibilityHint'
                | 'accessibilityValue'
                | 'onAccessibilityAction'
                | 'accessibilityLiveRegion'
                | 'importantForAccessibility'
                | 'accessibilityElementsHidden'
                | 'accessibilityViewIsModal'
                | 'onAccessibilityEscape'
                | 'onAccessibilityTap'
                | 'onMagicTap'
                | 'accessibilityIgnoresInvertColors'
                | 'onPress'
                | 'onLongPress'
                | 'key'
                | 'allowFontScaling'
                | 'ellipsizeMode'
                | 'lineBreakMode'
                | 'numberOfLines'
                | 'onTextLayout'
                | 'maxFontSizeMultiplier'
                | 'adjustsFontSizeToFit'
                | 'minimumFontScale'
                | 'suppressHighlighting'
                | 'selectable'
                | 'selectionColor'
                | 'textBreakStrategy'
                | 'accessibilityComponentType'
                | 'accessibilityTraits'
              > &
                import('@expo/html-elements/build/primitives/Text').WebTextProps & {
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
          import('react-native').TextProps &
            import('react').ClassAttributes<typeof import('react-native').Text>,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          | 'testID'
          | 'ref'
          | 'onLayout'
          | 'nativeID'
          | 'accessible'
          | 'accessibilityActions'
          | 'accessibilityLabel'
          | 'accessibilityState'
          | 'accessibilityHint'
          | 'accessibilityValue'
          | 'onAccessibilityAction'
          | 'accessibilityLiveRegion'
          | 'importantForAccessibility'
          | 'accessibilityElementsHidden'
          | 'accessibilityViewIsModal'
          | 'onAccessibilityEscape'
          | 'onAccessibilityTap'
          | 'onMagicTap'
          | 'accessibilityIgnoresInvertColors'
          | 'onPress'
          | 'onLongPress'
          | 'key'
          | 'allowFontScaling'
          | 'ellipsizeMode'
          | 'lineBreakMode'
          | 'numberOfLines'
          | 'onTextLayout'
          | 'maxFontSizeMultiplier'
          | 'adjustsFontSizeToFit'
          | 'minimumFontScale'
          | 'suppressHighlighting'
          | 'selectable'
          | 'selectionColor'
          | 'textBreakStrategy'
          | 'accessibilityComponentType'
          | 'accessibilityTraits'
        > &
          import('@expo/html-elements/build/primitives/Text').WebTextProps & {
            href?: string | undefined;
            target?: string | undefined;
          } & {
            children?: import('react').ReactNode;
          },
        | 'testID'
        | 'children'
        | 'onLayout'
        | 'nativeID'
        | 'accessible'
        | 'accessibilityActions'
        | 'accessibilityLabel'
        | 'accessibilityState'
        | 'accessibilityHint'
        | 'accessibilityValue'
        | 'onAccessibilityAction'
        | 'accessibilityLiveRegion'
        | 'importantForAccessibility'
        | 'accessibilityElementsHidden'
        | 'accessibilityViewIsModal'
        | 'onAccessibilityEscape'
        | 'onAccessibilityTap'
        | 'onMagicTap'
        | 'accessibilityIgnoresInvertColors'
        | 'onPress'
        | 'onLongPress'
        | 'key'
        | 'allowFontScaling'
        | 'ellipsizeMode'
        | 'lineBreakMode'
        | 'numberOfLines'
        | 'onTextLayout'
        | 'maxFontSizeMultiplier'
        | 'adjustsFontSizeToFit'
        | 'minimumFontScale'
        | 'suppressHighlighting'
        | 'selectable'
        | 'selectionColor'
        | 'textBreakStrategy'
        | keyof import('@expo/html-elements/build/primitives/Text').WebTextProps
        | 'accessibilityComponentType'
        | 'accessibilityTraits'
        | 'href'
        | 'target'
      > & {
        ref?:
          | ((instance: typeof import('react-native').Text | null) => void)
          | import('react').RefObject<typeof import('react-native').Text>
          | null
          | undefined;
      })
  );

export type DImageProps = import('@dripsy/core').StyledProps<
  keyof import('@dripsy/core').Theme
> &
  (
    | (import('react-native').ImageProps &
        import('react').RefAttributes<
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          import('react').Component<import('react-native').ImageProps, any, any>
        >)
    | (import('react-native').ImageProps & {
        children?: import('react').ReactNode;
      })
  );

export type DViewProps = import('@dripsy/core').StyledProps<
  keyof import('@dripsy/core').Theme
> &
  (
    | (import('react-native').ViewProps &
        import('react').RefAttributes<
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          import('react').Component<import('react-native').ViewProps, any, any>
        >)
    | (import('react-native').ViewProps & {
        children?: import('react').ReactNode;
      })
  );

export type DripsyFC<P> = FC<P> & { defaultSx: SxProp };
