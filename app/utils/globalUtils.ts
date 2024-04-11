// utils/auth.ts
/**
 * Retrieves the token from the cookies.
 * @returns The token if it exists, otherwise undefined.
 */
export const getTokenFromCookies = (): string | undefined => {
  const cookies = document.cookie.split(";").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=").map((c) => c.trim());
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  const token = cookies.token;

  // Assuming the token is stored directly without JSON string format
  return token || undefined;
};

/**
 * Removes the token from the cookies.
 */
export const removeTokenCookie = (): void => {
  // Set the token to expire immediately
  document.cookie = "token=; path=/; max-age=0; samesite=strict";
};

/**
 * Sets the token in the cookies.
 * @param token The token to be stored.
 */
export const setTokenCookie = (token: string): void => {
  // Store the token
  document.cookie = `token=${token}; path=/; max-age=3600; samesite=strict`; // Expires after 1 hour
};

export const randomUsername = () => {
  const randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "user_";
  for (let i = 0; i < 5; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};
