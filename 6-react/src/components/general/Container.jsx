/**
 * @component Container
 * @description A flexible container component that arranges its children in a specified direction (row or
 * column) with additional CSS classes for styling.
 * @param {React.ReactNode} children - The content to be displayed inside the container
 * @param {string} direction - The direction in which to arrange the children ("row" or "col")
 * @param {string} extraClasses - Additional CSS classes to apply to the container
 * @returns {JSX.Element} The rendered container component
 */
function Container({ children = "", direction = "row", extraClasses = "" }) {
  return (
    <div
      className={`flex flex-${direction} items-center justify-center ${extraClasses}`}
    >
      {children}
    </div>
  );
}

export { Container };
