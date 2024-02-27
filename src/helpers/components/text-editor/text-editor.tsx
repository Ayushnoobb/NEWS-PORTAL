"use client";

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Callback {
  value: string;
  setValue: (value: string) => void;
}

interface TextEditorProps {
  props: Callback;
}

export default function TextEditor({props}:TextEditorProps) {
  const {value , setValue} = props;

  const modules = {
    toolbar: [
      [{ 'header': '1'}, { 'header': '2'} ,{ 'header': '3'},{'header': '4'},{'header': '5'},{'header': '6'}, { 'font': [] }],
      [{size: ["10px","12px","14px"]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean'],
      [{'color': ["red"]}] // Added color option to the toolbar
    ]
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color' // Added color to formats
  ];

  return (
    <>
      <div className="px-5 sm:px-10 md:px-32 lg:px-[172px] divider-gray-200 w-full flex flex-col gap-3 md:gap-5 divide-y pb-10">
        <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />
      </div>
    </>
  );
}
