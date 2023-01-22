import { useRef, useEffect, useState } from 'react';
import { throttle } from 'lodash';

export function useVisibility(offset = 0, throttleMilliseconds = 100) {
  const [isVisible, setIsVisible] = useState(true);
  const currentElement = useRef();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  }, throttleMilliseconds);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return [isVisible, currentElement];
}

export function addPriceToInterviewTypeLabel(interviewType) {
  let price;
  switch (interviewType.toLowerCase()) {
    case 'system design':
      price = '£100';
      break;
    case 'behavioral':
      price = '£50';
      break;
    case 'technical':
      price = '£50';
      break;
  }

  return `${interviewType} (${price})`;
}