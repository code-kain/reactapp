import React from "react";
import * as S from "./style.js";

const DUMMY_PROFILES = [
  "/assets/image/main/dummyUserProfileImg1.svg",
  "/assets/image/main/dummyUserProfileImg2.svg",
  "/assets/image/main/dummyUserProfileImg3.svg",
  "/assets/image/main/dummyUserProfileImg4.svg",
  "/assets/image/main/dummyUserProfileImg5.svg",
  "/assets/image/main/dummyUserProfileImg6.svg",
  "/assets/image/main/dummyUserProfileImg7.svg",
];

const ReviewCard = ({ review, index, variant }) => {
  const profileImg =
    review.img || DUMMY_PROFILES[index % DUMMY_PROFILES.length];

  const Card = variant === "grid" ? S.ReviewCardGrid : S.ReviewCard;

  return (
    <Card>
      <S.StarRow>
        {[...Array(5)].map((_, j) => (
          <img key={j} src="/assets/image/main/starIcon.svg" alt="star" />
        ))}
      </S.StarRow>
      <S.ReviewText>{review.text}</S.ReviewText>
      <S.ProfileRow>
        <S.ProfileImg src={review.img} alt={review.name} />
        <S.ProfileInfo>
          <S.ProfileName>{review.name}</S.ProfileName>
          <S.ProfileSub>{review.sub}</S.ProfileSub>
        </S.ProfileInfo>
      </S.ProfileRow>
    </Card>
  );
};

export default ReviewCard;