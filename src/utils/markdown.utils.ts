
export const useKeyDown = (editerRef: React.RefObject<HTMLTextAreaElement>) => (
  e: React.KeyboardEvent<HTMLTextAreaElement>
) => {
  if (e.keyCode === 9) {
    e.preventDefault();

    const value = editerRef.current!.value;
    const selectionStart = editerRef.current!.selectionStart;
    const selectionEnd = editerRef.current!.selectionEnd;
    editerRef.current!.value =
      value.substring(0, selectionStart) + "  " + value.substring(selectionEnd);
    editerRef.current!.selectionStart =
      selectionEnd + 2 - (selectionEnd - selectionStart);
    editerRef.current!.selectionEnd =
      selectionEnd + 2 - (selectionEnd - selectionStart);

    return false;
  } else if (e.keyCode === 13) {
    // const value = editerRef.current!.value;
    // const selectionStart = editerRef.current!.selectionStart;
    // const selectionEnd = editerRef.current!.selectionEnd;
    // editerRef.current!.value =
    //   value.substring(0, selectionStart) + "<br>" + value.substring(selectionEnd);

  }
};
