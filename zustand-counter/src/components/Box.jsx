import counterStore from "../stores/counterStore.js";

const CountBox = () => {
  const {count} = counterStore()
  
  return (
      <div className={'box'}>
        <h2>CountBox: {count}</h2>
      </div>
  );
};

export default CountBox;

