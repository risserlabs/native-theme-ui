import React, { FC } from 'react';
import { AutoContrast } from '@risserlabs/auto-contrast';

type EmbedProps = {
  autoContrast?: AutoContrast;
};
const Embed: FC<EmbedProps> = (props: EmbedProps) => {
  return <div>Embed component</div>;
};
