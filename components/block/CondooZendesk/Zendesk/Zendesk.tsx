import { FC, useEffect } from 'react';

export const canUseDOM = () => {
  if (typeof window === 'undefined' || !window.document || !window.document.createElement) {
    return false;
  }
  return true;
}

export const ZendeskAPI = (...args) => {
  // console.log('zendeskAPI execution...', args);
  //@ts-ignore
  if (canUseDOM && window.zE) {
    // console.log('apiCall', args);
    //@ts-ignore
    // console.log('this is the zendeskApi!', window.zE);
    //@ts-ignore
    window.zE.apply(null, args);
    //@ts-ignore
    return window.zE;
  } else {
    // console.warn("Zendesk is not initialized yet");
    // throw('Zendesk is not initialized yet');
  }
}

interface IZendeskProp {
  zendeskKey: string,
  defer: boolean,
  zESettings?: any,
  onLoaded: () => void;
}
const Zendesk: FC<IZendeskProp> = ({
  zendeskKey,
  defer,
  zESettings,
  onLoaded,
}) => {
  const scriptId = 'ze-snippet'

  const insertZendeskScript = (zendeskKey, defer) => {
    const script = document.createElement('script');
    if (defer) {
      script.defer = true;
    } else {
      script.async = true;
    }
    script.id = scriptId;
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`;
    script.addEventListener('load', onScriptLoaded);
    document.body.appendChild(script);
  }

  const onScriptLoaded = () => {
    if (typeof onLoaded === 'function') {
      onLoaded();
    }
  }

  useEffect(() => {
    //@ts-ignore
    if (canUseDOM() && !window.zE) {
      insertZendeskScript(zendeskKey, defer);
      //@ts-ignore
      window.zESettings = zESettings;
    }

    // TODO: FIX ME, find a way to close the widget on unMount
    // return () => {
    //   //@ts-ignore
    //   if (canUseDOM() && window.zE) {
    //     // @ts-ignore
    //     window.zE('messenger', 'close');
    //     // @ts-ignore
    //     delete window.zE
    //     // @ts-ignore
    //     delete window.zESettings

    //     let script = document.getElementById(scriptId);
    //     console.log('Deleting script...', { script });
    //     script.remove();
    //   }
    // }
  }, []);

  return null;
}

export default Zendesk;