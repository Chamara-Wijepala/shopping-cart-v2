import "./counter.css";

export default function Counter({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  function increment() {
    if (count < 100) setCount(count + 1);
  }

  function decrement() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="counter clr-primary-100">
      <button
        aria-label="decrement"
        type="button"
        onClick={decrement}
        className="btn btn--small btn--dark fs-500"
      >
        -
      </button>

      <p className="bg-secondary-800 flex justify-center align-center">
        {count} <span className="sr-only">items</span>
      </p>

      <button
        aria-label="increment"
        type="button"
        onClick={increment}
        className="btn btn--small btn--dark fs-500"
      >
        +
      </button>
    </div>
  );
}
