import React from 'react';

export default function SmallCard({ Icon, title }) {
  return (
    <>
      <a className="card-small">
        <Icon w={50} h={50} />
        <h3>{title}</h3>
      </a>
    </>
  );
}
