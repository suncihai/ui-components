import classNames from 'classnames';
import { useRef, useEffect } from 'react';
import Modal from 'react-modal';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

import { useIsTabletMd } from '../../hooks/useMediaQueries';
import Card from '../Card';

import s from './Modal.module.css';

type ModalProps = {
  className?: string;
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  type?: 'no-wrapper' | 'default' | 'compact' | 'mobile-nav';
} & ReactModal.Props;

export default function _Modal(props: ModalProps) {
  const {
    className,
    title,
    children,
    isOpen = false,
    type = 'default',
    onAfterOpen,
    onRequestClose,
    ...modalProps
  } = props;

  const mobile = useIsTabletMd();

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen && ref.current && !mobile) {
      enableBodyScroll(ref.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen, mobile]);

  const handleAfterOpen = () => {
    if (!mobile) {
      disableBodyScroll(ref.current as HTMLElement | Element);
    }
    if (typeof onAfterOpen === 'function') {
      onAfterOpen();
    }
  };

  return (
    <Modal
      className={classNames(
        type === 'no-wrapper' ? s.content : s.cardContent,
        mobile && s.mobile,
        className
      )}
      contentRef={(contentRef) => {
        ref.current = contentRef;
      }}
      isOpen={isOpen}
      overlayClassName={s.overlay}
      onAfterOpen={handleAfterOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      {...modalProps}
    >
      {type === 'no-wrapper' ? (
        children
      ) : (
        <Card
          title={title}
          type={type as 'default' | 'compact'}
          onRequestClose={onRequestClose}
          className="max-h-screen"
        >
          {children}
        </Card>
      )}
    </Modal>
  );
}
