/* eslint no-param-reassign: 0 */
/* eslint no-control-regex: 0 */
/* eslint no-restricted-syntax: 0 */
/* eslint no-prototype-builtins: 0 */
/* eslint no-continue: 0 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if ((`${time}`).length === 10) time = parseInt(time, 10) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = `0${value}`;
    }
    return value || 0;
  });
  return timeStr;
}

export function formatTime(time, option) {
  time = +time * 1000;
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) { // less 1 hour
    return `${Math.ceil(diff / 60)}分钟前`;
  } else if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)}小时前`;
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  }
  return `${d.getMonth() + 1}月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分`;
}

// 格式化url参数
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 *get getByteLen
 * @param {Sting} val input value
 * @returns {number} output value
 */
export function getByteLen(val) {
  let len = 0;
  for (let i = 0; i < val.length; i += 1) {
    if (val[i].match(/[^\x00-\xff]/ig) != null) {
      len += 1;
    } else { len += 0.5; }
  }
  return Math.floor(len);
}

export function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i += 1) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

export function param(json) {
  if (!json) return '';
  return cleanArray(Object.keys(json).map((key) => {
    if (json[key] === undefined) return '';
    return `${encodeURIComponent(key)}=${
      encodeURIComponent(json[key])}`;
  })).join('&');
}

export function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(`{"${decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`);
}

export function html2Text(val) {
  const div = document.createElement('div');
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

export function objectMerge(target, source) {
  /* Merges two  objects,
     giving the last one precedence */

  if (typeof target !== 'object') {
    target = {};
  }
  if (Array.isArray(source)) {
    return source.slice();
  }
  for (const property in source) {
    if (source.hasOwnProperty(property)) {
      const sourceProperty = source[property];
      if (typeof sourceProperty === 'object') {
        target[property] = objectMerge(target[property], sourceProperty);
        continue;
      }
      target[property] = sourceProperty;
    }
  }
  return target;
}

export function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perTick = (difference / duration) * 10;
  setTimeout(() => {
    element.scrollTop += perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

export function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  let classString = element.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += `${className}`;
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - (3600 * 1000 * 24 * 90);
  }
  return new Date(new Date().toDateString());
}

export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone');
  }
  const targetObj = source.constructor === Array ? [] : {};
  for (const keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}

export function debounce(func, wait, isImmediate) {
  let timeout;
  return (...rest) => {
    const arg = rest;
    clearTimeout(timeout);
    if (isImmediate) {
      const isTrigger = !timeout;
      timeout = setTimeout(() => { timeout = null; }, wait);
      if (isTrigger) {
        func.apply(this, arg);
      }
    } else {
      timeout = setTimeout(() => func.apply(this, arg), wait);
    }
  };
}

export function throttle(func, wait) {
  let timeout;
  let arg;
  let previous = 0;
  const later = () => {
    previous = +new Date();
    timeout = null;
    func.apply(this, arg);
  };
  return (...rest) => {
    const now = +new Date();
    // 下次触发func剩余时间
    const remaining = wait - (now - previous);
    arg = rest;
    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, arg);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
}

export function subCurry(fn, ...rest) {
  return (...args) => fn.apply(this, rest.concat(args));
}

export function curry(fn, length) {
  length = length || fn.length;
  return (...args) => {
    if (args.length < length) {
      const argLength = args.length;
      const combined = [fn].concat(args);
      return curry(subCurry.apply(this, combined), length - argLength);
    }
    return fn.apply(this, args);
  };
}

export function compose(...rest) {
  return (...args) => {
    let i = rest.length - 1;
    let result = rest[i].apply(this, args);
    while (i) {
      i -= 1;
      result = rest[i].call(this, result);
    }
    return result;
  };
}
