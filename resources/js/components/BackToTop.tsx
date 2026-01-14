import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useBackToTop } from '@/hooks/useScrollAnimation';

const BackToTop: React.FC = () => {
  const { isVisible, scrollToTop } = useBackToTop();

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
