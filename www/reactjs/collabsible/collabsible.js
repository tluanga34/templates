
function Collabsible({ state, children }) {

  const domEl = useRef(null);

  useEffect(() => {
    if (state) {
      domEl.current.style.height = domEl.current.scrollHeight + "px";
      setTimeout(() => {
        domEl.current.style.height = "auto"
      }, 300)
    } else {
      domEl.current.style.height = domEl.current.scrollHeight + "px";
      setTimeout(() => {
        domEl.current.style.height = "0px";
      }, 0)
    }
  }, [state])


  return (
    <div className="collabsible" ref={domEl}>
      {children}
    </div>
  )
}