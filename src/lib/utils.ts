
export const getScrollPercent = (node: Node, speed = 100, offset = 0) => {
  const scrollPercent = window.scrollY - (node as HTMLElement).getBoundingClientRect().top;
  return (scrollPercent + offset) / speed;
}
