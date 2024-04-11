"use client";
import React, { useState } from "react";
import Link from "next/link";
// import _ from "lodash";
// import moment from "moment";

const AdminDashboard = () => {
  const [isShowingDate, setIsShowingDate] = useState(false);
  return (
    <div>
      <button className="btn mb-5">
        <Link href="/admin"> Go Back</Link>
      </button>
      <h1 className="text-xl">Welcome to Admin Dashboard</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        consectetur dolorum eos, saepe voluptate voluptatem?
      </p>
      <button
        className="btn btn-accent"
        onClick={async () => {
          //   lazy loading lodash
          const _ = (await import("lodash")).default;
          // lazy loading momentjs
          const moment = (await import("moment")).default;
          const arr = [
            {
              name: "e",
            },
            {
              name: "a",
            },
            {
              name: "b",
            },
          ];
          const sorted = _.orderBy(arr, "name", "desc");
          console.log({ sorted });
          console.log(
            `Today's - ${moment().format("MMMM Do YYYY, h:mm:ss a")}`
          );
          setIsShowingDate(true);
        }}
      >
        SHOW
      </button>
    </div>
  );
};

export default AdminDashboard;
