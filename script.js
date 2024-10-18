function toggleReview(reviewId) {
    const review = document.getElementById(reviewId);
    review.style.display = review.style.display === 'none' ? 'block' : 'none';
}