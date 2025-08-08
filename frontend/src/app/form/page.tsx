import React from 'react';
import css from "./page.module.css";

type PageProps = object;

export default function Page({}: PageProps) {
  return (
    <div className={css.wrapper}>
      <h1 className="text-xl">Form page</h1>
    </div>
  );
}