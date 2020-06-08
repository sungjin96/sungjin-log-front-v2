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
        "\n" +
        tag +
        " " +
        value.substring(selectionEnd);
    } else {
      editerRef.current!.value =
        value.substring(0, selectionStart) +
        "\n" +
        "\n" +
        tag +
        " " +
        value.substring(selectionStart);
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
        "\n" +
        tag +
        "\n" +
        "코드" +
        "\n" +
        tag +
        "\n" +
        "\n" +
        value.substring(selectionEnd);

      editerRef.current?.focus();

      editerRef.current!.selectionStart =
        selectionEnd + 6 - (selectionEnd - selectionStart);
      editerRef.current!.selectionEnd =
        selectionEnd + 8 - (selectionEnd - selectionStart);
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
      editerRef.current!.selectionEnd = selectionEnd + 5;
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
      selectionEnd + tag.length - (selectionEnd - selectionStart);
    editerRef.current!.selectionEnd =
      selectionEnd + tag.length+3 - (selectionEnd - selectionStart);
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
      selectionEnd + tag.length+1 - (selectionEnd - selectionStart);
    editerRef.current!.selectionEnd = selectionEnd + tag.length+1;
  }
};

export const formatHtml = (text: string) => {
  let value = "";
  let markdown = "";

  // ============= 엔터를 BR 태그로 변환 로직 시작
  text.split("\n\n").forEach((line) => {
    return (value += line.replace(/\n/g, "<br/>") + "\n\n");
  });
  // ============= 엔터를 BR 태그로 변환 로직 끝

  // ============= H 태그들 id추가 용 로직 시작
  // eslint-disable-next-line no-useless-escape
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
  value.split(/\n\n/g).map((data) => {
    if (data.indexOf("\n") === -1 && data.indexOf("#") !== -1) {
      let level = data.split("#").length;
      let result = data.replace(regExp, "");
      result = result.replace(/\s/g, "-");
      result = result.substring(1);
      result =
        `<h${level-1} id='${result}'>` + data.substring(level) + `</h${level-1}>`;
      markdown += result + "\n\n";
      return result;
    } else {
      markdown += data + "\n\n";
      return data;
    }
  });
  // ============= H 태그들 id추가 용 로직 끝

  return markdown;
};
