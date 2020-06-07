import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const Preview = styled(ReactMarkdown)`
  padding: 2rem;
  /* font-family: "Nanum Myeongjo", serif; */
  font-size: 2rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;

  & h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 1.6rem;
    margin-block-end: 1.6rem;
    margin-block-start: 2.7rem;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }

  & h2 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 1.6rem;
    margin-block-end: 1.6rem;
    margin-block-start: 2.656rem;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }

  & h3 {
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 1.6rem;
    margin-block-end: 1.6rem;
    margin-block-start: 2.4rem;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }

  & h4 {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 1.6rem;
    margin-block-end: 1.6rem;
    margin-block-start: 2.4rem;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }

  & h5 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 1.6rem;
    margin-block-end: 2.5rem;
    margin-block-start: 2.5rem;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }

  & h6 {
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 1.6rem;
    margin-block-end: 2.8rem;
    margin-block-start: 2.8rem;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }

  & p {
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 1.6rem;
    margin-block-end: 1.6rem;
    margin-block-start: 2.7rem;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }

  & blockquote {
    margin-top: 4rem;
    margin-bottom: 4rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-left: 0px;
    margin-right: 0px;
    color: rgb(33, 37, 41);
    border-left: 6px solid rgb(131, 206, 242);
    background: rgb(248, 249, 250);
    padding: 1.5rem 1.5rem 1.5rem 5rem;
  }

  & a {
    color: rgb(131, 206, 242);
  }

  & img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  & p img {
    display: block;
    max-width: 100%;
    margin: 5rem auto;
  }

  & ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 2em;
    margin-block-end: 2em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

    & ul {
      list-style-type: circle;
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  & ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  & li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  & table {
    font-size: 14px;
    line-height: 1.7;
    max-width: 100%;
    overflow: auto;
    border: 1px solid #f6f6f6;
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    & tr {
      border: 1px solid #efefef;
    }

    & th {
      text-align: center;
      font-weight: 700;
      border: 1px solid #efefef;
      padding: 10px 6px;
      background-color: #f5f7fa;
      word-break: break-word;
    }

    & td {
      border: 1px solid #efefef;
      text-align: left;
      padding: 10px 15px;
      word-break: break-word;
      min-width: 60px;
    }
  }

  & thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;

    & tr {
      border: 1px solid #efefef;
    }

    & th {
      padding: 2rem;
    }
  }

  & tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  & pre {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px !important;
    color: rgb(36, 41, 46) !important;
    background: rgb(251, 252, 253) !important;
  }
`;
