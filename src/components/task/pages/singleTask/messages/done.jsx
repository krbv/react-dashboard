import React from "react";

import Listing from "../../../../../containers/listing";

export default ({ msg, files }) => {
  return (
    <section className="extrapad ">
      {msg}

      {files && <Listing clName="files" items={files} />}

      {/* <ul class="files">
        <li>
          <a href="" target="_blank">
            загрузки.jpg
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            документы на офис.zip
          </a>
        </li>
      </ul> */}
    </section>
  );
};
