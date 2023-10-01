import type { PlasmoCSConfig } from 'plasmo';
import { sendToBackground } from '@plasmohq/messaging';
import { useEffect } from 'react';

export const config: PlasmoCSConfig = {
  matches: ['*://j4a.uk/*'],
  run_at: 'document_start',
  css: ['./style.css'],
};

const tailwindStyledPopup = () => {
  useEffect(() => {
    window.exampleModal.showModal();
  });
  return (
    <dialog id="exampleModal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default tailwindStyledPopup;
