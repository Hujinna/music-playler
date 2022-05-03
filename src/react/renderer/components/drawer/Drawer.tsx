import React from 'react';
import { Drawer } from 'antd';

interface DrawerProps {
  visible: boolean;
  onClose: () => void;
}

const Drawe = (props: DrawerProps) => {
  const { onClose, visible } = props;
  return (
    <Drawer
      title="Basic Drawer"
      placement="bottom"
      onClose={onClose}
      visible={visible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default Drawe;
