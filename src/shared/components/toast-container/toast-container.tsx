import React from 'react';
import { createRoot } from 'react-dom/client';
import Toaster from '../toaster/toaster';
import { IToasterType } from '../../models/toaster';

export const ToastContainer = () => <div id="toast-container" />;

export const toast = (message: string, type: IToasterType) => {
  const container = createRoot(document.getElementById('toast-container')!);

  if (container) {
    container.render(<Toaster message={message} type={type} />);
  }
};
