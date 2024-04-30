import css from "data-text:~src/contents/style.css";
import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["*://j4a.uk/*"],
  run_at: "document_start"
};

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = css;
  return style;
};

const tailwindStyledPopup = () => (
  <div className="fixed bottom-0 right-0 w-96 h-96 bg-white flex justify-center align-middle z-50">
    <div className="m-auto text-2xl text-black">hi</div>
  </div>
);

export default tailwindStyledPopup;
