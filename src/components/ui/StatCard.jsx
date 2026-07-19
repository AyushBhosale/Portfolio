import React from "react";

const StatCard = ({
  icon: Icon,
  value,
  label,
  bg_color = "bg-yellow-300",
  font_color = "text-black",
}) => {
  return (
    <div
      className={`${bg_color} ${font_color} border-[3px] border-black px-5 py-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2 justify-center`}
    >
      {Icon && <Icon size={20} strokeWidth={2.5} />}
      <span className="font-inter font-black text-3xl leading-none">{value}</span>
      <span className="font-inter font-bold text-[11px] uppercase tracking-wide leading-tight">
        {label}
      </span>
    </div>
  );
};

export default StatCard;