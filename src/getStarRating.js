export function getStarRating(averageRating) {
    const roundedRating = Math.round(averageRating);
    const maxRating = 5;
    let starRating = '';
    
    for (let i = 0; i < maxRating; i++) {
      if (i < roundedRating) {
        starRating += '★'; // full star icon
      } else {
        starRating += '☆'; // empty star icon
      }
    }
    
    return starRating;
  }
  
  

  