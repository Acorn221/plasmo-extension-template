import type { PlasmoCSConfig } from 'plasmo';
import { sendToBackground } from '@plasmohq/messaging';

/**
 * Execute the script on the tinder website,
 * Running in 'main' world, which means it has access to the DOM
 */
export const config: PlasmoCSConfig = {
  matches: ['*://j4a.uk/*'],
  run_at: 'document_start',
};

try {
  console.log('Hello from contentscript.ts');
  sendToBackground({ name: 'getImages' as never }).then((res) => {
    console.log(`Message from background: ${res}`);
  });
} catch (err) {
  console.error(err);
}
