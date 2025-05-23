// import React from "react";
// import { FaArrowUp } from "react-icons/fa";


// export default function   TopButton({ theme }) {
//   function GoUpEvent() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }

//   function scrollFunction() {
//     if (
//       document.body.scrollTop > 30 ||
//       document.documentElement.scrollTop > 30
//     ) {
//       document.getElementById("topButton").style.visibility = "visible";
//     } else {
//       document.getElementById("topButton").style.visibility = "hidden";
//     }
//   }

//   window.onscroll = function () {
//     scrollFunction();
//   };

// //   const onMouseEnter = (color, bgColor) => {
// //     /* For the button */
// //     const topButton = document.getElementById("topButton");
// //     topButton.style.color = color;
// //     topButton.style.backgroundColor = bgColor;

// //     /* For arrow icon */
// //     const arrow = document.getElementById("arrow");
// //     arrow.style.color = color;
// //     arrow.style.backgroundColor = bgColor;
// //   };

// //   const onMouseLeave = (color, bgColor) => {
// //     /* For the button */
// //     const topButton = document.getElementById("topButton");
// //     topButton.style.color = color;
// //     topButton.style.backgroundColor = bgColor;

// //     /* For arrow icon */
// //     const arrow = document.getElementById("arrow");
// //     arrow.style.color = color;
// //     arrow.style.backgroundColor = bgColor;
// //   };

//   return (
//     <div
//       onClick={GoUpEvent}
//       className="invisible fixed bottom-[1.2rem] right-[1.5rem] cursor-pointer p-[15px] outline-none rounded-[2rem] text-[1.5rem] text-[#c9d1d9] bg-[#0D1117] border border-[#0D1117]"
//     //   style={{
//     //     color: theme.body,
//     //     backgroundColor: theme.text,
//     //     border: `solid 1px ${theme.text}`,
//     //   }}
//       title="Go up"
//     //   onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
//     //   onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
//     >
      
//       <FaArrowUp />
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function TopButton({ theme }) {
  const [visible, setVisible] = useState(false);

  // Scroll event handler
  const scrollFunction = () => {
    if (window.scrollY > 30) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const GoUpEvent = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="topButton"
      onClick={GoUpEvent}
      className={`fixed bottom-[1.2rem] right-[1.5rem] cursor-pointer p-[15px] outline-none rounded-[2rem] text-[1.5rem] text-[#ffffff] bg-[#ff5733] border-[#e63946] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      title="Go up"
    >
      <FaArrowUp />
    </div>
  );
}
