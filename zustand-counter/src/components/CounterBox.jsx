import counterStore from "../stores/counterStore.js";

const CounterBox = () => {
  const {count} = counterStore()

  return (
      <div className={'box'}>
        <h2>CountBox: {count}</h2>
      </div>
  );
};

export default CounterBox;

