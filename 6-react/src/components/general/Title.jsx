/**
 * @component Title
 * @description A simple title component that displays a heading with customizable text and additional CSS classes.
 * @param {string} text - The text to display
 * @param {string} extraClasses - Additional CSS classes
 * @returns {JSX.Element} The rendered component
 */
function Title({ text, extraClasses = "" }) {
  return <h1 className={`text-4xl font-bold ${extraClasses}`}>{text}</h1>;
}

export { Title };
