import React, { useEffect, useState } from "react";

export default function Footer() {
  const [date, setDate] = useState();
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    setDate(currentYear);
  })
  return (
    <div className="bg-[#040428] text-white text-center p-4 capitalize font-bold">
      created with{" "}
      <span className=" animate-pulse text-red-500">&hearts; </span>
      by adel abdullah <span>{date}</span>
    </div>
  );
}
