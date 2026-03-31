import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ventura Builders Group";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d1b2a",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ventura-builders-group.vercel.app/vbg-white.png"
          alt="Ventura Builders Group"
          style={{ width: 600 }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
