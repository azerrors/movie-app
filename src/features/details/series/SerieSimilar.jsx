import React, { useState } from "react";
import List from "../../../ui/List";

function SerieSimilar({ serie }) {
  return (
    <ul>
      <List type="list5" data={serie} />
    </ul>
  );
}

export default SerieSimilar;
