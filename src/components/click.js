import  { useEffect } from 'react';

function   useDisableRightClick() {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  
  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
}
export default useDisableRightClick;
; 