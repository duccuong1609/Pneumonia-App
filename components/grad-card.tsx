"use client";

import { Image, Skeleton } from "@heroui/react";

interface PredictCardProps {
  prediction?: string | null;
  loading?: boolean;
}

const GradPredictCard: React.FC<PredictCardProps> = ({
  prediction,
  loading,
}) => {
  const imageSrc = prediction
    ? `data:image/png;base64,${prediction}`
    : "grad.png";

  return (
    <>
      <Skeleton className="rounded-lg" isLoaded={!loading}>
        <Image
          alt="GradCam"
          className="object-cover"
          src={imageSrc}
          style={{ width: "1500px", height: "450px" }}
        />
      </Skeleton>
    </>
  );
};

export default GradPredictCard;
