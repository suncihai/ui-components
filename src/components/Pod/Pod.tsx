import classNames from 'classnames';

import s from './Pod.module.css';

export type PodProps = React.ComponentPropsWithoutRef<'div'>;

export default function Pod(props: PodProps) {
  const { children, className, ...rest } = props;
  return (
    <div className={classNames(s.container, className)} {...rest}>
      {children}
    </div>
  );
}
