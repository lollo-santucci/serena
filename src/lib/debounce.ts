export default function debounce<T extends (arg: string) => Promise<void>>(
  func: T,
  wait: number
): (arg: string) => Promise<void> {
  let timeout: ReturnType<typeof setTimeout>; 
  return function executedFunction(arg: string): Promise<void> {
    return new Promise((resolve) => {
      const later = () => {
        clearTimeout(timeout);
        resolve(func(arg));
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    });
  };
}