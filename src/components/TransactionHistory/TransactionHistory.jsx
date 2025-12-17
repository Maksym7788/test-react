import css from "./TransactionHistory.module.css";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
};

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <TransactionItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
