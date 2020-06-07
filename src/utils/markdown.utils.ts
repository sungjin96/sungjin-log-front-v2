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

export const toolClick = (
  tag: string,
  editerRef: React.RefObject<HTMLTextAreaElement>
) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  const value = editerRef.current!.value;
  const selectionStart = editerRef.current!.selectionStart;
  const selectionEnd = editerRef.current!.selectionEnd;
  if (tag === "#" || tag === "##" || tag === "###" || tag === "####") {
    if (selectionEnd - selectionStart === 0) {
      editerRef.current!.value =
        value.substring(0, selectionStart) +
        "\n" +
        tag +
        " " +
        value.substring(selectionEnd);
    } else {
      editerRef.current!.value =
        value.substring(0, selectionStart) +
        "\n" +
        tag +
        " " +
        value.substring(selectionStart + 1);
    }

    editerRef.current?.focus();
  } else if (tag === "**") {
    TextHandle(tag, editerRef);
  } else if (tag === "~~") {
    TextHandle(tag, editerRef);
  } else if (tag === "_") {
    TextHandle(tag, editerRef);
  } else if (tag === "```") {
    if (selectionEnd - selectionStart === 0) {
      editerRef.current!.value =
        value.substring(0, selectionStart) +
        "\n" +
        tag +
        "\n" +
        "코드" +
        "\n" +
        tag +
        "\n" +
        value.substring(selectionEnd);

      editerRef.current?.focus();

      editerRef.current!.selectionStart =
        selectionEnd + 5 - (selectionEnd - selectionStart);
      editerRef.current!.selectionEnd =
        selectionEnd + 7 - (selectionEnd - selectionStart);
    } else {
      editerRef.current!.value =
        value.substring(0, selectionStart) +
        "\n" +
        tag +
        "\n" +
        value.substring(selectionStart, selectionEnd) +
        "\n" +
        tag +
        "\n" +
        value.substring(selectionEnd);

      editerRef.current?.focus();

      editerRef.current!.selectionStart =
        selectionEnd + 5 - (selectionEnd - selectionStart);
      editerRef.current!.selectionEnd =
        selectionEnd + 5;
    }

    editerRef.current?.focus();
  }
  return false;
};

const TextHandle = (
  tag: string,
  editerRef: React.RefObject<HTMLTextAreaElement>
) => {
  const value = editerRef.current!.value;
  const selectionStart = editerRef.current!.selectionStart;
  const selectionEnd = editerRef.current!.selectionEnd;
  if (selectionEnd - selectionStart === 0) {
    editerRef.current!.value =
      value.substring(0, selectionStart) +
      tag +
      "텍스트" +
      tag +
      value.substring(selectionEnd);

    editerRef.current?.focus();

    editerRef.current!.selectionStart =
      selectionEnd + 2 - (selectionEnd - selectionStart);
    editerRef.current!.selectionEnd =
      selectionEnd + 5 - (selectionEnd - selectionStart);
  } else {
    editerRef.current!.value =
      value.substring(0, selectionStart) +
      " " +
      tag +
      value.substring(selectionStart, selectionEnd) +
      tag +
      " " +
      value.substring(selectionEnd);

    editerRef.current?.focus();

    editerRef.current!.selectionStart =
      selectionEnd + 3 - (selectionEnd - selectionStart);
    editerRef.current!.selectionEnd = selectionEnd + 3;
  }
};
