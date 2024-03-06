export default function ChildComponent({ handleColor }) {
  return (
    <div>
      <h2>Child component</h2>
      <select onChange={(e) => handleColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}
