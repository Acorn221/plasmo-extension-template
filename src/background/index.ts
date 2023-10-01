import { Storage } from '@plasmohq/storage';
import browser from 'webextension-polyfill';
import { AnalyticsEvent } from '@/misc/GA';

const bgString = "hi, I'm a background string";

try {
  const storage = new Storage();
  storage.set('storedString', 'hi, I\'m a stored string');
} catch (err: any) {
  console.error(`Error caught in background.js: ${err.stack}`);
}

export { bgString };

/**
 * When the user first installs the extension, open the main page
 */
browser.runtime.onInstalled.addListener(async (object) => {
  if (chrome) {
    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      const platform = await browser.runtime.getPlatformInfo();
      AnalyticsEvent([
        {
          name: 'install',
          params: {
            platform: platform.os,
          },
        },
      ]);
    }
  }
  // TODO: should probably replace this
  browser.runtime.setUninstallURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
