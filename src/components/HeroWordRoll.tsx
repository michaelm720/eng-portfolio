import { useEffect, useState } from 'react';
import { WordRoll } from 'performative-ui';

const verbs = ['design', 'build', 'integrate', 'test'];

export default function HeroWordRoll() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(preference.matches);

    updatePreference();
    preference.addEventListener('change', updatePreference);

    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  return (
    <span className="hero-word-roll" aria-hidden="true">
      {reduceMotion ? (
        verbs[0]
      ) : (
        <WordRoll
          words={verbs}
          intervalMs={2400}
          transitionMs={460}
          direction="up"
        />
      )}
    </span>
  );
}
