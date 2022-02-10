import { Menu, MenuItem } from '@mui/material';
import React from 'react';

type Props = {
  contextMenu: { mouseX: number; mouseY: number };
  onClose: () => void;
};

export default function ContextualMenu({ contextMenu, onClose }: Props) {
  return (
    <Menu
      open={contextMenu !== null}
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu !== null
          ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
          : undefined
      }
    >
      <MenuItem onClick={onClose}>Edit</MenuItem>
      <MenuItem onClick={onClose}>Restart</MenuItem>
    </Menu>
  );
}
