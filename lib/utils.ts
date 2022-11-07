export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

/** 20글자 자르는 function */
export const sliceText = (text: string) => {
  const slicedText = text.slice(0, 68);
  return slicedText;
};
