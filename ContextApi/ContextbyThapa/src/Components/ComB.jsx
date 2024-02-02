import React, { useContext } from "react";
import ComC from "./ComC";
import { fname, lname, id } from "../App";

export default function ComB() {
  const fisrtName = useContext(fname);
  const lastName = useContext(lname);
  const idName = useContext(id);
  return (
    <h1>
      Welcome {fisrtName} {lastName} to my page your id is {idName}
      <ComC />
    </h1>
  );
}
