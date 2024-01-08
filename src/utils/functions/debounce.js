export function debounce(props) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      props.callback(...args);
    }, props.delay);
  };
}