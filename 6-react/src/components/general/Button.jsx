/**
 * @component Button
 * @description Component used to create personalized buttons using Tailwind CSS.
 * @param {string} text - The text to display on the button
 * @param {string} color - The background color of the button
 * @param {string} textColor - The text color of the button
 * @param {string} extraClasses - Additional CSS classes to apply to the button
 * @author Juan Rodriguez
 * @returns
 */
function Button({
  text = "Click me",
  color = "blue-600",
  textColor = "white",
  extraClasses = "",
}) {
  return (
    <button className={`bg-${color} text-${textColor} ${extraClasses}`}>
      {text}
    </button>
  );
}


export { Button };
