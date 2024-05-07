const StarRating = ({ rating }) => {
    const totalStars = 5;
    if (typeof rating !== 'number' || isNaN(rating)) { // Check if rating is not a number
      return <span>No rating available</span>;
    }
  
    const filledStars = Math.round((rating / 10) * totalStars);
    if (filledStars < 0 || filledStars > totalStars) { // Ensure filledStars is within range
      return <span>Invalid rating value</span>;
    }
  
    return (
      <div>
        {[...Array(filledStars)].map((_, i) => (
          <span key={i} className="star-filled">&#9733;</span> // Unicode for filled star
        ))}
        {[...Array(totalStars - filledStars)].map((_, i) => (
          <span key={i} className="star-empty">&#9733;</span> // Unicode for empty star
        ))}
      </div>
    );
  };
  
export default   StarRating;