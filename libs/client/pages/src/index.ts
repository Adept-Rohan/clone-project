export * from './lib/Consultant';
export * from './lib/Department';
export * from './lib/components/InputModal';

export const CustomModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(61,61,61,0.5)',
    zIndex: 1000,
  },
};
