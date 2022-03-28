import React from 'react';

export function ColdIcon({ w, h }) {
  return (
    <img src="https://stgphotostorage.blob.core.windows.net/mocks/cold.png" width={w} height={h} />
  );
}

export function WaitIcon({ w, h }) {
  return (
    <img src="https://stgphotostorage.blob.core.windows.net/mocks/wait.png" width={w} height={h} />
  );
}

export const projectIcons = {
  cold: ColdIcon,
  wait: WaitIcon,
}