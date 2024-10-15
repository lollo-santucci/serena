export default function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;  // Compatibile sia con browser che con Node.js
  return function executedFunction(...args: Parameters<T>) {  // Usa Parameters<T> per tipizzare args
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
