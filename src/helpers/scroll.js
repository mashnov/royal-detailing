export const lockKeyboardScroll = () => {
  const scrollLocker = ['Space', 'ArrowUp', 'ArrowDown'];
  window.addEventListener('keydown', (event) => {
    const isLock = scrollLocker.includes(event.code);
    const isBody = event.target === document.body;
    if (isLock && isBody) {
      event.preventDefault();
    }
  });
};
