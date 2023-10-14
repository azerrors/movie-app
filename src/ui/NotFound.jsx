function NotFound({ type , text}) {
  if (type === "img")
    return (
      <div className="flex justify-center text-center  items-center uppercase tracking-widest text-red-700">
        <h2 className="w-72 border text-center rounded-full p-2 bg-red-200">OPPS , images not found</h2>
      </div>
    );
  if (type === "video")
    return (
      <div className="flex justify-center text-center  items-center uppercase tracking-widest text-red-700">
        <h2 className="w-72 border text-center rounded-full p-2 bg-red-200">OPPS , videos not found</h2>
      </div>
    );
  if (type === "text")
    return (
      <div className="flex md:h-[36.1rem]  justify-center text-center  items-center uppercase tracking-widest text-red-700">
        <h2 className="w-72 border text-center rounded-full p-2 bg-red-200">OPPS , `{text}` not found </h2>
      </div>
    );
}

export default NotFound;
