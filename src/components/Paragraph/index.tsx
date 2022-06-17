import React, { FC } from 'react';
type ParagraphProps = {
  autoContrast: string;
};
const Paragraph: FC<ParagraphProps> = () => {
  return (
    <div>
      <h1>Paragraph123</h1>
    </div>
  );
};

Paragraph.defaultProps = {};
export default Paragraph;
