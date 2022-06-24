import React, { FC } from 'react';
import { AutoContrast, useAutoContrast } from '@risserlabs/auto-contrast';
import { E as DE } from 'dripsy';
import { DripsyFC, DEProps } from '../../dripsyHelper';

type EmbedProps = DEProps & {
  autoContrast?: AutoContrast;
};
const Embed: DripsyFC<EmbedProps> = (props: EmbedProps) => {
  const sx = useAutoContrast(props, {
    ...Embed.defaultSx,
    ...props.sx
  });
  return (
    <DE {...props} sx={sx}>
      h
    </DE>
  );

  Embed.defaultProps = {};
  Embed.defaultSx = {};
};

export default Embed;
