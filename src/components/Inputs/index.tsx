import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute
};

type TextAreaProps = {
  label: string

};

const Input = ({ id, label, type }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={id} className="font-lato font-bold">{label}</label>
      <input type={type} name={id} id={id} className="border border-slate-400 p-1 rounded-sm focus:border-maincolor focus:border-2 focus:outline-none hover:border-maincolor" />
    </div>
  );
};

const TextArea = ({label}: TextAreaProps) => {
  return(
    <div className="col col-flex mb-4">
      <label htmlFor="msg" className="font-lato font-bold">{label}</label>
      <textarea className="border border-slate-400 p-1 rounded-sm focus:border-maincolor focus:border-2 focus:outline-none hover:border-maincolor w-[100%]" rows={10}/>
    </div>
  )
}

export {Input, TextArea};
