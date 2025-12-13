export const getLocalLikes = (): number[] => {
  return JSON.parse(localStorage.getItem("likedProducts") || "[]");
};

export const setLocalLikes = (likes: number[]) => {
  localStorage.setItem("likedProducts", JSON.stringify(likes));
};
