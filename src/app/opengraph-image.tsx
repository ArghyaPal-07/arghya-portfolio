import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Arghya Pal — full stack developer";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpenGraphImage() {
  const artwork = await readFile(
    join(process.cwd(), "public/official/opengraphh.jpg"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Preserve the full artwork inside the large Twitter card's 2:1 frame. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/jpeg;base64,${artwork.toString("base64")}`}
          alt={alt}
          width={size.width}
          height={size.height}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}
