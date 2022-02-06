import React from 'react';
import Header from '../../components/Header';

function About() {
  return (
      <div className="px-6">
        <Header />
        <main className="max-w-2xl mx-auto space-y-5">
            <h1>Committed to becoming better all the time.</h1>
            <p>As a first-year teacher, I know very well that I do not have all of the answers. But that's okay. Becoming a teacher isn't about
                learning all of the answers. It's about being better each day than you were before. It's about learning from your mistakes and
                constantly striving to become a better version of yourself.
            </p>
            <p>That's what I intend to do. And I am going to take you on that journey with me.</p>
            <p>Join me, and let's make the world a better place for the future.</p>
        </main>
    </div>
      
  );
}

export default About;
