/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import './style.css';

import { AnalyticsEvent } from '@/misc/GA';

const IndexPopup = () => {
  useEffect(() => {
    AnalyticsEvent([
      {
        name: 'pageview',
        params: {
          path: '/popup',
        },
      },
    ]);
  }, []);

  return (
    <div className="App text-center min-w-[280px] font['Roboto', sans-serif] text-2xl font-light bg-slate-900 text-white p-5 select-none gap-2 flex flex-col">
      <h1>hi</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          AnalyticsEvent([
            {
              name: 'button_click',
              params: {
                path: '/popup',
              },
            },
          ]);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default IndexPopup;
