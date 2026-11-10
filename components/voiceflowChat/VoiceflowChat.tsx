"use client";

import Script from "next/script";

export default function VoiceflowChat() {
  return (
    <Script
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
      strategy="afterInteractive"
      onLoad={() => {
        (window as any).voiceflow.chat.load({
          verify: {
            projectID: "6af2cc692324a6ca887810ca",
          },
          url: "https://general-runtime.voiceflow.com",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
          environmentID: "main",
          versionVariant: "published",
        });
      }}
    />
  );
}
