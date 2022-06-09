import { useEffect } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useIsTabletSm } from '../../hooks/useMediaQueries';

import s from './Card.module.css';

export type CardProps = {
  type?: 'default' | 'compact' | 'mobile-nav';
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  onRequestClose?: (event?: any) => void;
  className?: string;
};

export default function Card(props: CardProps) {
  const {
    title,
    children,
    onRequestClose,
    type = 'default',
    className = '',
  } = props;
  const mobile = useIsTabletSm();

  useEffect(() => {
    console.log('mobile', mobile);
    console.log('env', process.env.NODE_ENV);
  }, [mobile]);

  return (
    <div
      className={classNames(
        s.container,
        mobile && s.mobile,
        s[`container-${type}`],
        className
      )}
    >
      <div className={classNames(s.title, s[`title-${type}`])}>
        <h4 className={s.titleText}>
          {type !== 'compact' && title ? title : ''}
        </h4>
        {onRequestClose && (
          <button
            className={classNames(s.icon, s[`icon-${type}`])}
            onClick={onRequestClose}
          >
            <FontAwesomeIcon size="2x" icon={faTimes} />
          </button>
        )}
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
