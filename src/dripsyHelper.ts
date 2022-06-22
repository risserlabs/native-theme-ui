/**
 * File: /dripsyHelper.ts
 * Project: -
 * File Created: 14-06-2022 07:52:25
 * Author: Clay Risser
 * -----
 * Last Modified: 21-06-2022 07:28:27
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
import { SxProp, Sx } from 'dripsy';

export type PressableProps = Pick<
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
            any,
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
            any,
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

export type BoxProps = import('@dripsy/core').StyledProps<
  keyof import('@dripsy/core').Theme
> &
  (
    | (import('react-native').ViewProps &
        import('react').RefAttributes<
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
            any,
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

export type DripsyFC<P> = FC<P> & { defaultSx: Sx };
