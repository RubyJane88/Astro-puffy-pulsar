import React from "react";

const Clock = () => {
  const items = new Array(60).fill(null).map((_, index) => "item " + index);

  return (
    <div>
      <p onClick={() => console.log("test clock")}>
        This is an example of lazy executing code on component when component
        becomes visible.
      </p>
      <p>
        ⬇️ <strong>Scroll down</strong> until the button is in view.
      </p>

      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clock;

export const Clock2 = () => {};
