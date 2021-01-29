import { StyleSheet } from 'react-primitives';
import { createStyled as emotionCreateStyled } from '@emotion/primitives-core';
import { createThemedComponent } from 'dripsy';
import {
  StyledProps as ThemeUIStyledProps,
  ThemedOptions
} from 'dripsy/lib/typescript/css/types';
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
  ExtraProps extends object = {},
  Theme extends object = {}
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
  ExtraProps extends object = {},
  Theme extends object = {}
> = ForwardRefExoticComponent<ThemedProps<InnerProps, ExtraProps, Theme>>;

declare type StyledProps<
  InnerProps extends object,
  ExtraProps extends object = {},
  Theme extends object = {}
> =
  | StyledStatelessProps<InnerProps & ExtraProps, Theme>
  | StyledOtherProps<InnerProps & ExtraProps, Theme, Ref<any>>;

declare type StyledComponent<
  InnerProps extends object,
  ExtraProps extends object = {},
  Theme extends object = {}
> =
  | StyledStatelessComponent<ExtraProps, InnerProps, Theme>
  | StyledOtherComponent<ExtraProps, InnerProps, Theme>;

export type ThemedStyledProps<
  InnerProps extends object,
  ExtraProps extends object = {},
  Theme extends object = {}
> = StyledProps<InnerProps, ExtraProps, Theme> &
  ThemedProps<InnerProps, ExtraProps, Theme>;

export type ThemedStyledComponent<
  InnerProps extends object,
  ExtraProps extends object = {},
  Theme extends object = {}
> = StyledComponent<InnerProps, ExtraProps, Theme> &
  ThemedComponent<InnerProps, ExtraProps, Theme>;

export type CreateThemedStyledComponent<
  InnerProps extends object,
  ExtraProps extends object = {},
  Theme extends object = {}
> = (
  ...args: Array<Interpolation<Themed<ExtraProps, Theme>>>
) => ThemedStyledComponent<InnerProps, ExtraProps, Theme>;

export function styled<
  InnerProps extends object,
  ExtraProps extends object = {},
  Theme extends object = {}
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

interface StyledStatelessComponent<
  Props extends object,
  InnerProps extends object,
  Theme extends object
> extends ComponentClass<StyledStatelessProps<Props & InnerProps, Theme>>,
    ClassInterpolation,
    StyledComponentMethods<Props, InnerProps, Theme> {}

interface StyledOtherComponent<
  Props extends object,
  InnerProps extends object,
  Theme extends object
> extends ComponentClass<StyledOtherProps<Props & InnerProps, Theme, Ref<any>>>,
    ClassInterpolation,
    StyledComponentMethods<Props, InnerProps, Theme> {}

interface ClassInterpolation extends Function {
  __emotion_real: any;
  __emotion_styles: BaseInterpolation[];
  __emotion_base: ClassInterpolation;
  __emotion_target: string;
  __emotion_forwardProp: undefined | null | ((arg: string) => boolean);
}

interface StyledComponentMethods<
  Props extends object,
  _InnerProps extends object,
  Theme extends object
> {
  withComponent<IP extends object>(
    component: FunctionComponent<IP>,
    options?: StyledOptions
  ): StyledStatelessComponent<Props, IP, Theme>;

  withComponent<IP extends object>(
    component: ComponentClass<IP> | ComponentType<IP>,
    options?: StyledOptions
  ): StyledOtherComponent<Props, IP, Theme>;
}

type StyledStatelessProps<P extends object, T extends object> = P & {
  theme?: T;
};

type StyledOtherProps<
  P extends object,
  T extends object,
  R
> = StyledStatelessProps<P, T> & { innerRef?: R };

type BaseInterpolation = any;
