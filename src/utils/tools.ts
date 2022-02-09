const isMacOs = process.platform === 'darwin';
const isWin32 = process.platform === 'win32';
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export { isMacOs, isWin32, isDev, isProd };
