import { useRef } from 'react' ;

function Form() {
  const nameRef = useRef();
  const programRef = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const program = programRef.current.value ;
    console.log("name", name, "program", program);
    // console.log(programRef.current);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program" ref={programRef}>
          <option value="basics">The Basics</option>
          <option value="advanced">Advanced Concepts</option>
          <option value="mastery">Mastery</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
