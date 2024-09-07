/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

const AnimatedItem = ({ children }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: [0,1] } 
    );

    //when item is on screen start observing
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className="item">
      {children}
    </div>
  );
};

export default AnimatedItem;
