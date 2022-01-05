import ButtonCol from "./ButtonCol";

export const ButtonGrid = ({ grid, onInput }) => {
  return (
    <div className="rounded border border-secondary">
      {grid &&
        grid.map((row) => (
          <ButtonCol key={`row-${row[0].value}}`} onInput={onInput} row={row} />
        ))}
    </div>
  );
};