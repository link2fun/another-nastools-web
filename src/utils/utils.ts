const Utils = {
  /** 获取上一级文件路径 */
  getPrevPath: (path: string) => {
    // eg: D:/ => / D:/a/b => D:/a
    if (path === '/' || path == '') {
      return path;
    }
    // if path 以字母开头, 则说明是 windows 路径
    if (path[0].match(/[a-zA-Z]/)) {
      const pathArr = path.split('/');
      if (pathArr[pathArr.length - 1] === '') {
        pathArr.pop();
      }
      pathArr.pop();
      return pathArr.join('/');
    }
    // 如果不是 windows 路径, 则是 linux 路径
    const pathArr = path.split('/');
    pathArr.pop();
    return pathArr.join('/');
  },
};

export default Utils;
