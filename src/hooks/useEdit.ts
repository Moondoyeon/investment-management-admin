import { useState } from 'react';

function useEdit() {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClcik = () => setIsEditMode(true);
  const handleEditCancle = () => setIsEditMode(false);

  return { isEditMode, handleEditCancle, handleEditClcik };
}
export default useEdit;
