import React from "react";

export default function useClickOutSide(dom = "button") {
  const [show, setShow] = React.useState(false);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutDropdown = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutDropdown);
    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);

  return {
    show,
    setShow,
    nodeRef,
  };
}
