import { useEffect, useState } from "react";

function useBodyScrollLock() {
  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === "hidden");

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked, bodyStyle]);
  const toggle = () => setIsLocked((locked) => !locked);

  return { isLocked, toggle };
}

export default useBodyScrollLock;
