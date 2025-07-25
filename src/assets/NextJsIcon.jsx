import React from "react";

const NextJsIcon = ({ color = "#000000", className = "", style = {} }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        padding: "2px",
        ...style
      }}
      className={className}
    >
      <g>
        <path
          d="M380,480c-1.9,1-1.7,1.3,0.1,0.4l1.5-1C381.6,479.1,381.6,479.1,380,480z M383.8,477.9l0.2,0.3l1.1-0.8L383.8,477.9z
             M386.3,476.4l0.2,0.3l1.1-0.8L386.3,476.4z M388.8,474.9l0.1,0.2l1.1-0.8L388.8,474.9z M392.2,472.7c-1.7,1.2-2.4,1.9-0.8,1.1
            l2.6-2.1L392.2,472.7L392.2,472.7z M239.2,0.1c-1.2,0.1-4.7,0.4-7.7,0.7c-72.8,6.6-140.8,45.8-184,106.1
            C23.6,139.9,8.2,178.4,2.3,218.7C0.3,232.8,0,236.9,0,256c0,19.1,0.3,23.2,2.3,37.2c13.9,96.2,82.3,176.9,175.1,206.8
            c16.7,5.3,34.2,9,54.1,11.3c7.7,0.8,41.2,0.8,49,0c34.4-3.8,63.5-12.3,92.3-27c4.4-2.2,5.2-2.8,4.7-3.3
            c-14.1-18.6-27.9-37.2-41.7-55.9l-40.9-55.2l-51.2-75.9c-17.1-25.4-34.2-50.7-51.7-75.9c-0.2,0-0.4,33.7-0.5,74.9
            c-0.2,72.1-0.2,75-1.1,76.7c-0.9,2-2.4,3.7-4.4,4.6c-1.6,0.7-3,0.9-10.6,0.9h-8.7l-2.3-1.4c-1.4-0.9-2.6-2.2-3.3-3.7l-1.1-2.3
            l0.1-100.3l0.2-100.3l1.6-2l3.7-3c2.1-1,2.9-1.2,11.6-1.2c10.2,0,11.8,0.4,14.5,3.3c20.7,30.9,41.4,61.9,61.7,93
            c33.3,50.4,78.7,119.2,101,153l40.6,61.4l2-1.3c19.5-13,37.2-28.5,52.6-46.2c32.3-36.9,53.2-82.3,60.3-130.8
            c2.1-14.1,2.3-18.2,2.3-37.3c0-19.1-0.3-23.2-2.3-37.2C495.7,122.6,427.3,41.9,334.6,12c-17.3-5.5-35.2-9.2-53.2-11.1
            C276.5,0.3,243.4-0.3,239.2,0.1L239.2,0.1z M344,155c2.4,1.1,4.2,3.3,5.1,5.8c0.4,1.3,0.5,29.2,0.4,91.8l-0.2,90l-15.8-24.3
            l-15.9-24.3v-65.3c0-42.4,0.2-66.1,0.4-67.3c0.7-2.7,2.6-4.9,5-6.3c2-1,2.7-1.1,10.7-1.1C341.1,153.9,342.3,154,344,155L344,155z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default NextJsIcon; 