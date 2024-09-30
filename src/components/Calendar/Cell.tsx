type CellProps = {
  day: number;
};

function Cell({ day }: CellProps) {
  return (
    <div className="cell">
      <div className="cell-content">
        <div className="span cell-value">{day}</div>
      </div>
    </div>
  );
}

export default Cell;
