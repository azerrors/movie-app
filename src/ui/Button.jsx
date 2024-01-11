function Button({ type, onClick, value, children }) {
  const styles = {
    link: "md:px-3 px-2  py-1 md:py-2 mt-5  border hover:translate-y-1  duration-300  rounded-md hover:rounded-lg border-stone-400 hover:border-stone-300 uppercase font-semibold text-stone-300",
    primary:
      "md:px-3 px-2  py-1 md:py-2  border hover:translate-y-1  duration-300  rounded-md hover:rounded-lg border-stone-400 hover:border-stone-300 uppercase font-semibold text-stone-300",
    secondary:
      "md:px-3 px-1  py-1 md:py-2 text-xs md:text-md  border hover:translate-y-1  duration-300  rounded-md hover:rounded-lg border-sky-200 hover:border-sky-300 uppercase font-semibold text-sky-200/50",
    normal:
      "px-3 py-2 mt-5 hover:translate-y-1 border rounded-md duration-300 hover:rounded-lg border-stone-400 hover:border-stone-300 uppercase font-semibold text-stone-300",
    primary_category:
      "p-3 text-xs bg-sky-200/10 hover:bg-sky-200 hover:text-sky-500 hover:translate-y-1 border rounded-md duration-300 hover:rounded-lg border-stone-400 hover:border-stone-300 uppercase font-semibold text-stone-300",
    reset:
      "px-5 py-5 text-xs md:text-xs mt-5 hover:translate-y-1 border rounded-md duration-300 hover:rounded-lg border-yellow-500 hover:border-yellow-300 uppercase font-semibold text-stone-300",
    secondary_smreset:
      "p-3 text-xs mt-5 hover:translate-y-1 border rounded-md duration-300 hover:rounded-lg border-yellow-500 hover:border-yellow-300 uppercase font-semibold text-stone-300",
  };

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }
  if (value) {
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
