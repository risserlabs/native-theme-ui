import { StyleSheet } from 'react-primitives';
import { ThemedOptions } from 'dripsy/lib/typescript/css/types';
import { createStyled as emotionCreateStyled } from '@emotion/primitives-core';
import { createThemedComponent } from 'dripsy';
import {
  Component,
  ComponentClass,
  ComponentProps,
  ComponentType,
  ForwardRefExoticComponent,
  FunctionComponent,
  Props
} from 'react';
import {
  Interpolation,
  StyledOptions as EmotionStyledOptions,
  StyledOtherComponent,
  StyledStatelessComponent,
  Themed
} from '@emotion/primitives';

export interface StyledOptions
  extends Omit<EmotionStyledOptions, 'getShouldForwardProp'> {
  isThemed?: boolean;
  forwardPropsBlacklist?: Set<string>;
  forwardPropsWhitelist?: Set<string>;
  shouldForwardProp?: (name: string) => boolean;
}

export type ThemedComponent<P, T> = ForwardRefExoticComponent<
  Props<P> &
    ComponentProps<typeof Component> &
    T &
    P &
    React.RefAttributes<typeof Component>
>;

export type ThemedStyledComponent<
  InnerProps extends object,
  ExtraProps extends object = any,
  Theme extends object = any
> = (
  | StyledStatelessComponent<ExtraProps, InnerProps, Theme>
  | StyledOtherComponent<ExtraProps, InnerProps, Theme>
) &
  ThemedComponent<ExtraProps & InnerProps, Theme>;

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
