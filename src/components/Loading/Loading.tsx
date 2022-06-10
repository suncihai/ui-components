import classNames from 'classnames';
import LoadingIcon from './LoadingIcon';

import s from './Loading.module.css';

export type LoadingProps = {
  className?: string;
  height?: number | string;
};

export default function Loading(props: LoadingProps) {
  const { className = '', height } = props;

  return (
    <div className={classNames(s.loading, className)} style={{ height }}>
      <LoadingIcon />
    </div>
  );
}
