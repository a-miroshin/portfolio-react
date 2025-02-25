import "./button/dark-mode-switch.css"; // Import the styles

export const DarkModeSwitch = ({ handleChange, isChecked }) => {
  return (
    <div className="dark-mode-switch">
      <input
        type="checkbox"
        id="input-dark-mode"
        // className="input-dark-mode"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="input-dark-mode"></label>
    </div>
  );
};
