import React from 'react';
import Header from '../../components/Header';

function Contact() {
  return (
      <div className="px-6">
        <Header />
        <main className="max-w-2xl mx-auto space-y-5">
            <h1>Contact Me</h1>
            <div className="flex flex-col">
                <p><strong>Email</strong></p>
                <p>tylerhbaker99@gmail.com</p>
            </div>
        </main>
      </div>
  );
}

export default Contact;
