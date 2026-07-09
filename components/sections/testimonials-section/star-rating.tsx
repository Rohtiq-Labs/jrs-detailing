type StarRatingProps = {
  count: number;
};

export const StarRating = ({ count }: StarRatingProps) => (
  <div
    className="testi-stars"
    role="img"
    aria-label={`${count} out of 5 stars`}
  >
    {Array.from({ length: count }, (_, index) => (
      <span key={index} className="testi-stars__star" aria-hidden="true">
        ★
      </span>
    ))}
  </div>
);
