import { StyleSheet } from 'react-primitives';
import {
  StyledProps as ThemeUIStyledProps,
  ThemedOptions
} from 'dripsy/lib/typescript/css/types';

import { createStyled as emotionCreateStyled } from '@emotion/primitives-core';
import { createThemedComponent } from 'dripsy';
import {
  Component,
  ComponentClass,
  ComponentProps,
  ComponentType,
  ForwardRefExoticComponent,
  FunctionComponent,
  Ref
} from 'react';
import {
  Interpolation,
  StyledOptions as EmotionStyledOptions,
  StyledOtherComponent,
  StyledStatelessComponent,
  StyledStatelessProps,
  StyledOtherProps,
  Themed
} from '@emotion/primitives';

export interface StyledOptions
  extends Omit<EmotionStyledOptions, 'getShouldForwardProp'> {
  isThemed?: boolean;
  forwardPropsBlacklist?: Set<string>;
  forwardPropsWhitelist?: Set<string>;
  shouldForwardProp?: (name: string) => boolean;
}

declare type ThemedProps<
  InnerProps extends object,
  ExtraProps extends object = any,
  Theme extends object = any
> = Omit<
  ThemeUIStyledProps<InnerProps & ExtraProps>,
  | 'theme'
  | ('breakpoint' &
      ComponentProps<typeof Component> &
      Theme &
      InnerProps &
      ExtraProps &
      React.RefAttributes<typeof Component>)
>;

declare type ThemedComponent<
  InnerProps extends object,
  ExtraProps extends object = any,
  Theme extends object = any
> = ForwardRefExoticComponent<ThemedProps<InnerProps, ExtraProps, Theme>>;

declare type StyledProps<
  InnerProps extends object,
  ExtraProps extends object,
  Theme extends object
> =
  | StyledStatelessProps<InnerProps & ExtraProps, Theme>
  | StyledOtherProps<InnerProps & ExtraProps, Theme, Ref<any>>;

declare type StyledComponent<
  InnerProps extends object,
  ExtraProps extends object = any,
  Theme extends object = any
> =
  | StyledStatelessComponent<ExtraProps, InnerProps, Theme>
  | StyledOtherComponent<ExtraProps, InnerProps, Theme>;

export type ThemedStyledProps<
  InnerProps extends object,
  ExtraProps extends object,
  Theme extends object
> = StyledProps<InnerProps, ExtraProps, Theme> &
  ThemedProps<InnerProps, ExtraProps, Theme>;

export type ThemedStyledComponent<
  InnerProps extends object,
  ExtraProps extends object = any,
  Theme extends object = any
> = StyledComponent<InnerProps, ExtraProps, Theme> &
  ThemedComponent<InnerProps, ExtraProps, Theme>;

export type CreateThemedStyledComponent<
  InnerProps extends object,
  ExtraProps extends object = any,
  Theme extends object = any
> = (
  ...args: Array<Interpolation<Themed<ExtraProps, Theme>>>
) => ThemedStyledComponent<InnerProps, ExtraProps, Theme>;

export function styled<
  InnerProps extends object,
  ExtraProps extends object = any,
  Theme extends object = any
>(
  component: FunctionComponent<any> | ComponentClass<any> | ComponentType<any>,
  options?: StyledOptions,
  themedOptions?: ThemedOptions<any>
): CreateThemedStyledComponent<InnerProps, ExtraProps, Theme> {
  const shouldForwardProp =
    options?.shouldForwardProp ||
    ((prop: string): boolean => {
      return (
        prop !== 'theme' &&
        prop !== 'innerRef' &&
        (typeof options?.forwardPropsWhitelist !== 'undefined'
          ? options.forwardPropsWhitelist.has(prop)
          : typeof options?.forwardPropsBlacklist === 'undefined' ||
            !options?.forwardPropsBlacklist.has(prop))
      );
    });
  return emotionCreateStyled(StyleSheet, {
    getShouldForwardProp: () => shouldForwardProp
  })(
    options?.isThemed
      ? component
      : createThemedComponent<InnerProps & ExtraProps, Theme>(
          component,
          themedOptions
        )
  ) as CreateThemedStyledComponent<InnerProps, ExtraProps, Theme>;
}

export * from 'dripsy';
