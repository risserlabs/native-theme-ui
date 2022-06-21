import React, { FC } from 'react';
import { AutoContrast } from '@risserlabs/auto-contrast';

type EmbedProps = {
  autoContrast?: AutoContrast;
};
const Embed: FC<EmbedProps> = (props: EmbedProps) => {
  return (
    <div
      style={{
        backgroundColor: 'bisque'
      }}
    >
      Embed component
    </div>
  );
};

export default Embed;
