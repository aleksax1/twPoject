import { Card } from "antd";
import React from "react";

export default function CommentCard({ title, content }) {
  return (
    <Card
      title={<span style={{ color: "white" }}>{title}</span>}
      bordered={false}
      style={{ margin: "10px", color: "white" }}
      className="w-96 h-36 bg-slate-500 text-white"
    >
      {content.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Card>
  );
}
