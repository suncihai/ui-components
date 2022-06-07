import classNames from 'classnames';

import s from './Card.module.css';

type CardProps = {
  type?: 'default' | 'compact' | 'mobile-nav';
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export default function Card(props: CardProps) {
  const { title, children, type = 'compact', className = '' } = props;

  return (
    <div className={classNames(s.container, s[`container-${type}`], className)}>
      <div className={classNames(s.title, s[`title-${type}`])}>
        <h4 className={s.titleText}>
          {type !== 'compact' && title ? title : ''}
        </h4>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
