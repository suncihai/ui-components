import classNames from 'classnames';
import { DefaultAvatar } from '../Icons/DefaultAvatar';

import s from './Avatar.module.css';

type AvatarProps = {
  size?: number | '100%';
  src?: string;
  type?: 'outline' | 'default';
};

export default function Avatar(props: AvatarProps) {
  const { size = 18, src, type = 'default' } = props;
  if (!src) return <DefaultAvatar size={size} />;

  const style = {
    backgroundImage: `url(${src || ''})`,
    height: size || 18,
    width: size || 18,
  };

  return (
    <div
      className={classNames(s.avatarContainer, type === 'default' && s.default)}
      style={style}
      data-testid="avatar"
    />
  );
}
