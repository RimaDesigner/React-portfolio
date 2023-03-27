<<<<<<< HEAD
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
=======
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
>>>>>>> fb05df53ed8046dfb0130053a2b98f8b8e8b78d1
; 