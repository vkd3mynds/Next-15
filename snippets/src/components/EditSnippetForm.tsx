"use client";
import { Editor } from "@monaco-editor/react";
// import { Snippet } from "@prisma/client";
import { useState } from "react";
import { Button } from "./ui/button";
import type { Snippet } from "@prisma/client";
// import * as actions from "@/actions";
import { saveSnippet } from "@/actions"

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const changeEvenHandler = (value: string = "") => {
    setCode(value);
  };
//   const saveSnippetAction = saveSnippet.bind(null, snippet.id, snippet.code);
const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent full page reload
    await saveSnippet(snippet.id, code); // Send updated code
  };

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between"
      >
        <h1 className="font-bold text-xl">Your Code Editor:</h1>
        <Button type="submit">Save</Button>
      </form>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEvenHandler}
      />
    </div>
  );
};
export default EditSnippetForm;
