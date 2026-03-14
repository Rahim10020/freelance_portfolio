export const photoFrameBase = "relative w-full overflow-hidden";

export const mobilePhotoFrame = `${photoFrameBase} rounded-3xl aspect-[9/16] min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]`;

export const webPhotoFrame = `${photoFrameBase} rounded-2xl aspect-[16/9] min-h-[260px] sm:min-h-[360px] lg:min-h-[420px]`;

export const mobilePhotoSizes =
  "(min-width: 1280px) 420px, (min-width: 768px) 380px, 320px";

export const webPhotoSizes =
  "(min-width: 1280px) 70vw, (min-width: 768px) 85vw, 100vw";

export const mobilePhotoMaxWidth =
  "max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]";
