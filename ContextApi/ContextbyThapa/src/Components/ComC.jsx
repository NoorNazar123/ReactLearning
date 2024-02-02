import React from "react";
import { fname, lname, id } from "../App";

function ComC() {
  return (
    <div>
      <fname.Consumer>
        {(fname) => {
          return (
            <lname.Consumer>
              {(lname) => {
                return (
                  <id.Consumer>
                    {(id) => {
                      return (
                        <h1>
                          Welcome {fname} {lname} to my page your id is {id}
                        </h1>
                      );
                    }}
                  </id.Consumer>
                );
              }}
            </lname.Consumer>
          );
        }}
      </fname.Consumer>
    </div>
  );
}

export default ComC;
