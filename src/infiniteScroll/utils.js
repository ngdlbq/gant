const isScroll = ele => {
  const {overflowY} = getComputedStyle(ele);
  return /auto|scroll/i.test(overflowY);
};

export const getScrollContainer = ele => {
  let node = ele;
  while (node) {
    if ([window, document, document.documentElement].includes(node)) return window;
    if (isScroll(node)) return node;

    node = node.parentNode;
  }
  return node;
};

export const throttle = (fn, threshhold = 100) => {
  let cur = +new Date();
  let timer = null;
  return (...args) => {
    const ctx = this;
    const now = +new Date();
    clearTimeout(timer);
    if (now - cur >= threshhold) {
      fn.apply(ctx, args);
      cur = now;
    } else {
      timer = setTimeout(() => {
        fn.apply(ctx, args);
      }, threshhold);
    }
  }
}

export const isHidden = ele => {
  return getComputedStyle(ele).display === 'none' || ele.offsetParent === null;
}