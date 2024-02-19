import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("Type markdown here");

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleInputChange} />

      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

const reverseSentence = (sentence) => {
  const reversed = sentence.split(" ").reverse().join(" ");
  return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};
