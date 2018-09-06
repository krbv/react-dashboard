import React from "react";

const Listing = ({ items, clName }) => (
  <ul className={clName ? clName : ""}>
    {items.map(
      (item, i) =>
        typeof item === "object" ? (
          <li key={i}>
            {item.link ? (
              <a target="_blank" href={item.link}>
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </li>
        ) : (
          <li key={i}>{item}</li>
        )
    )}
  </ul>
);
export default Listing;
