const isMacOs = process.platform === 'darwin';
const isWin32 = process.platform === 'win32';
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

function format(s: number): string {
  const h = Math.floor(s / 1000 / 60);
  const second = s % 60;
  if (h !== 0) {
    return `${h}:${second}`;
  }
  return `${s}`;
}

export { isMacOs, isWin32, isDev, isProd, format };
