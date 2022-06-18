import React, { FC } from 'react';
import { AutoContrast } from '@risserlabs/auto-contrast';
import { P as DP } from 'dripsy';
type ParagraphProps = {
  autoContrast?: AutoContrast;
};
const Paragraph: FC<ParagraphProps> = (props: ParagraphProps) => {
  return (
    <DP
      style={{
        backgroundColor: 'blue',
        color: 'yellow',
        padding: '100',
        borderRadius: 210,
        width: '500'
      }}
    >
      Paragraph
    </DP>
  );
};
Paragraph.defaultProps = {};
export default Paragraph;
