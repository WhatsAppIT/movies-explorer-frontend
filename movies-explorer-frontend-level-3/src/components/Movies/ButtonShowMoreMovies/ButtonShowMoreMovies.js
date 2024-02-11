import "./ButtonShowMoreMovies.css";

function ButtonShowMoreMovies({ addMoreMovies }) {
  return (
    <section className='cards__buttonElse'>
      <button className='cards__else' onClick={addMoreMovies}>
        Ещё
      </button>
    </section>
  );
}

export default ButtonShowMoreMovies;
