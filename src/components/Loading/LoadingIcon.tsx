import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/pro-light-svg-icons';

import s from './Loading.module.css';

export default function LoadingIcon() {
  return (
    <span className={s.loadingIcon}>
      <FontAwesomeIcon icon={faSpinnerThird} />
    </span>
  );
}
