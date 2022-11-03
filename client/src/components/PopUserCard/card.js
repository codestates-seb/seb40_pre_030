import { useRef } from "react";
import { useEffect } from "react";
import { SImg, SProfileBox, SUserNameH3 } from "./style";

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Card = ({ userOnClick }) => {
  const ref = useRef(null);
  // const handleClickOutside = (event) => {
  //   if (ref.current && !ref.current.contains(event.target)) {
  //     userOnClick();
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, []);
  const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hawaiian_monk_seal_at_French_Frigate_Shoals_07.jpg/1280px-Hawaiian_monk_seal_at_French_Frigate_Shoals_07.jpg";
  return (
    <SProfileBox ref={ref}>
      <SImg src={img} />
      <SUserNameH3>test name</SUserNameH3>
      <p>mame5@gamil.com</p>
      <button>click</button>
    </SProfileBox>
  );
};

export default Card;
