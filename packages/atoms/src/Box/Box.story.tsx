import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, select, color } from '@storybook/addon-knobs';
import Box from './Box';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';

// import docs from './Button.docs.mdx';

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Box
        backgroundColor={color('backgroundColor', 'primary')}
        borderRightWidth={number('border-right-width', 0)}
        borderLeftWidth={number('border-left-width', 0)}
        borderBottomWidth={number('border-bottom-width', 0)}
        borderTopWidth={number('border-top-width', 0)}
        borderLeftColor={color('border-left-color', '')}
        borderRightColor={color('border-right-color', '')}
        borderTopColor={color('border-top-color', '')}
        borderBottomColor={color('border-bottom-color', '')}
        borderTopLeftRadius={number('borderTop-leftRadius', 0)}
        borderTopRightRadius={number('borderTop-RightRadius', 0)}
        borderBottomLeftRadius={number('border-left-radius', 0)}
        borderBottomRightRadius={number('border-right-radius', 0)}
        borderColor={color('border-color', '')}
        // borderRadius={number('borderRadius', 0)}
        borderStyle={text('border-style', 'solid')}
        //   borderWidth={number('border-width', 0)}
        height={number('height', 200)}
        marginBottom={number('margin-bottom', 0)}
        marginLeft={number('margin-left', 2)}
        marginRight={number('margin-right', 0)}
        marginTop={number('margin-top', 2)}
        maxHeight={number('max-height', 400)}
        minHeight={number('min-height', 100)}
        onDrag={action('onDrag')}
        onPress={action('onPress')}
        onPressIn={action('onPressIn')}
        onPressOut={action('onPressOut')}
        opacity={number('opacity', 1)}
        padding={number('padding', 2)}
        paddingBottom={number('padding-bottom', 0)}
        paddingLeft={number('padding-left', 2)}
        paddingRight={number('padding-right', 2)}
        paddingTop={number('padding-top', 0)}
        width={number('width', 200)}
        zIndex={number('z-index', 0)}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'A'
        )}
      >
        {text('children', 'data')}
      </Box>
    </Wrapper>
  ));
