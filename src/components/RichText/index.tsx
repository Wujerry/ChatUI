import React from 'react';
import clsx from 'clsx';

export interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  className?: string;
  options?: any;
}

export const RichText = React.forwardRef<HTMLDivElement, RichTextProps>((props, ref) => {
  const { className, content, options = {}, ...other } = props;
  const html = {
    __html: content,
  };

  return (
    <div
      className={clsx('RichText', className)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={html}
      ref={ref}
      {...other}
    />
  );
});
