import { useRef } from 'react';
import debounce from 'lodash/debounce';

export default function useDebounce(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  method: (...params: any) => any,
  wait: number = 300,
  options?: unknown
) {
  const debounceRef = useRef(debounce(method, wait, options as any));
  return debounceRef.current;
}
