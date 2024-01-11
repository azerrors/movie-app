import React from "react";
import useCloseModalClickByOutside from "../../../hooks/useCloseModalClickByOutside";

function Popout({ isOpen, closePopout, biography, name }) {
  const { ref } = useCloseModalClickByOutside(closePopout);

  if (!isOpen) return null;

  // return (
  //   <div className="fixed  inset-3 mt-5 pt-10  z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
  //     <div className="relative mx-4 my-6 w-full max-w-3xl md:mx-auto md:w-auto">
  //       <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
  //         <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
  //           <h3 className="text-lg font-semibold md:text-3xl">
  //             {name}` biography
  //           </h3>
  //           <button
  //             className="float-right ml-auto border-0 bg-transparent p-1 text-lg font-semibold leading-none text-black opacity-5 outline-none focus:outline-none md:text-3xl"
  //             onClick={closePopout}
  //           >
  //             <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none md:text-3xl">
  //               ×
  //             </span>
  //           </button>
  //         </div>
  //         {/* Content */}
  //         <div className="relative flex-auto p-4 md:p-6">{biography}</div>
  //         {/* Footer */}
  //         <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-4 md:p-6">
  //           <button
  //             className="background-transparent mb-1 mr-1 px-4 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none md:px-6 md:text-lg"
  //             type="button"
  //             style={{ transition: "all .15s ease" }}
  //             onClick={closePopout}
  //           >
  //             Close
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div
      ref={ref}
      className="absolute top-6 z-50  min-h-fit  overflow-y-auto overflow-x-hidden rounded-lg border bg-stone-100 outline-none focus:outline-none md:left-[29rem] md:top-40 md:w-[50rem]"
    >
      <h3 className="border-b border-stone-400/90 p-4 text-lg font-semibold md:text-2xl">
        {name}` biography
      </h3>
      <div className=" flex-auto p-4 md:p-6">{biography}</div>
      <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-4 md:p-6">
        <button
          className="background-transparent mb-1 mr-1 px-4 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none md:px-6 md:text-lg"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={closePopout}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Popout;
