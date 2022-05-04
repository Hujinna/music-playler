/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useRef, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CloseOutlined } from '@ant-design/icons';
import styles from './Modal.scss';
import BaseButton from '../baseButton/BaseButton';

interface ModalProps {
  visible?: boolean;
  title?: React.ReactNode | string;
  body?: JSX.Element;
  footer?: React.ReactNode;
  width?: number;
  closeIcon?: string;
  closable?: boolean;
  okText?: string;
  okType?:
    | 'default'
    | 'primary'
    | 'ghost'
    | 'dashed'
    | 'link'
    | 'text'
    | 'danger';
  cancelText?: ReactNode;
  keyboard?: boolean;
  maskClosable?: boolean;
  onCancel?: (e?: React.MouseEvent<HTMLElement>) => void;
  onOk?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const Modal = (props: ModalProps) => {
  const {
    // 对话框是否可见
    visible,
    // 标题
    title,
    // modal body
    body,
    // 自定义底部内容
    footer,
    // 关闭图标
    closeIcon,
    // 是否显示右上角关闭按钮
    closable,
    // 是否支持ESC关闭
    keyboard,
    // 确认按钮文字
    okText,
    // 确认按钮类型
    okType,
    // 关闭按钮文字
    cancelText,
    // 点击蒙层是否允许关闭
    maskClosable,
    // 宽度
    width,
    // 点击确定回调
    onOk,
    // 点击取消回调
    onCancel,
  } = props;

  // console.log('Modal width:', props);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleCancel = () => {
    onCancel?.();
  };

  const handleOk = () => {
    onOk?.();
  };

  const onKeyPressed = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (keyboard && event.keyCode === 27) {
      event.stopPropagation();
      handleCancel();
    }
  };

  const defaultFooter = (
    <div className={styles['btn-group']}>
      <BaseButton type="default" onClick={handleCancel} width={68} height={34}>
        {cancelText}
      </BaseButton>
      <BaseButton type="primary" onClick={handleOk} width={68} height={34}>
        {okText}
      </BaseButton>
    </div>
  );

  useEffect(() => {
    if (modalRef.current) modalRef.current.focus();
  }, [visible]);

  const footerNode = (
    <div className={styles['modal-footer']}>
      {footer === undefined ? defaultFooter : footer}
    </div>
  );

  const maskClick = () => {
    // console.log(maskClosable);
    if (maskClosable) {
      handleCancel();
    }
  };

  const children = (
    <div className={styles['modal-containers']}>
      <div
        className={styles['modal-mask']}
        ref={modalRef}
        onClick={() => maskClick()}
      />
      <div
        className={styles.modal}
        onKeyDown={onKeyPressed}
        // 排除在tab键序列之外
        tabIndex={-1}
        style={{ width: `${width}px` }}
      >
        <div className={styles['modal-title']}>
          <div className={styles['modal-title-wrapper']}>
            {typeof title !== 'string' ? <>{title}</> : <span>{title}</span>}
          </div>
          {closable && (closeIcon || <CloseOutlined onClick={handleCancel} />)}
        </div>
        <div className={styles['modal-body']}>{body}</div>
        {footerNode}
      </div>
    </div>
  );

  return visible ? (
    ReactDOM.createPortal(
      children,
      document.getElementById('modal-root') as HTMLElement
    )
  ) : (
    <></>
  );
};

Modal.defaultProps = {
  title: '',
  body: <span />,
  width: 400,
  visible: false,
  closeIcon: '',
  closable: true,
  okType: 'primary',
  okText: '确认',
  cancelText: '取消',
  keyboard: true,
  maskClosable: false,
  onCancel: () => {},
  onOk: () => {},
};

export default Modal;
