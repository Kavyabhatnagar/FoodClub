import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Error() {
    const err =  useRouteError();
  return (
    <div>
    <div>Opps Something went wrong</div>
    <h2>{err.status}</h2>
    <h2>{err.data}</h2>
    </div>
    
  )
}
