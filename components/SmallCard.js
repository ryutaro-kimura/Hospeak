import React from 'react';

export default function SmallCard({ Icon, title }) {
  return (
    <>
      <a className="card-small">
        <Icon w={100} h={100} />
        <h3>{title}</h3>
      </a>
    </>
  );
}
