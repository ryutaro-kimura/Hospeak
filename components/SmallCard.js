import React from 'react';

export default function SmallCard({ Icon, title, phrase, onTextToSpeech}) {
  return (
    <>
      <a className="card-small" onClick={() => onTextToSpeech(phrase)}>
        <Icon w={50} h={50} />
        <h3>{title}</h3>
      </a>
    </>
  );
}
