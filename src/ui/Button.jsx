function Button({ type, onClick, value, children }) {
  const styles = {
    link: "md:px-3 px-2  py-1 md:py-2 mt-5  border hover:translate-y-1  duration-300  rounded-md hover:rounded-lg border-stone-400 hover:border-stone-300 uppercase font-semibold text-stone-300",
    normal:
      "px-3 py-2 mt-5 hover:translate-y-1 border rounded-md duration-300 hover:rounded-lg border-stone-400 hover:border-stone-300 uppercase font-semibold text-stone-300",
    category:
      "px-5 py-5  text-sm mt-5 hover:translate-y-1 border rounded-md duration-300 hover:rounded-lg border-stone-400 hover:border-stone-300 uppercase font-semibold text-stone-300",
    reset:
      "px-5 py-5 text-sm mt-5 hover:translate-y-1 border rounded-md duration-300 hover:rounded-lg border-yellow-500 hover:border-yellow-300 uppercase font-semibold text-stone-300",
    smreset:
      "px-2 py-2 text-sm mt-5 hover:translate-y-1 border rounded-md duration-300 hover:rounded-lg border-yellow-500 hover:border-yellow-300 uppercase font-semibold text-stone-300",
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
