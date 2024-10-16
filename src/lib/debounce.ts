export default function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => Promise<void> {
  let timeout: ReturnType<typeof setTimeout>; 
  return function executedFunction(...args: Parameters<T>): Promise<void> {
    return new Promise((resolve) => {
      const later = () => {
        clearTimeout(timeout);
        resolve(func(...args));
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    });
  };
}
