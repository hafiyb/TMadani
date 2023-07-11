'use client'
import { malayLang } from "@/data/language";
import React, { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

const LangContextProvider = (props) => {
  const [lang, setLang] = useState("bm");
  const [text, setText] = useState(malayLang);

  const changeLang = (val) => {
    console.log(val)
    setLang(val);
    localStorage.setItem("lg", val);
  };

  useEffect(() => {
    const lg = localStorage.getItem("lg");


    if (lg === null) {
      localStorage.setItem("lg", "bm");
    } else {
      if (lg === "bm") {
        changeLang("bm");
        setText(malayLang);
      } else if (lg === "eng") {
        changeLang("eng");
      }
    }
  }, [lang]);

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
        changeLang,
        text
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
