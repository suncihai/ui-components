import Button from '../Button/Button';
import { RoomIcon } from '../Icons/RoomIcon';
import s from './PremiumRoomButton.module.css';

export type PremiumRoomButtonProps = {
  room: string;
  target?: string;
  type?: 'link' | 'a';
};

export default function PremiumRoomButton(props: PremiumRoomButtonProps) {
  const { room, target, type = 'a' } = props;
  return (
    <Button
      size="lg"
      type={type}
      style="secondary"
      target={target}
      className={s.premiumRoomButton}
      href={`https://stocktwits.com/r/${room}`}
      onClick={(e) => e.stopPropagation()}
    >
      <RoomIcon className={s.icon} />
      View Premium Room
    </Button>
  );
}
