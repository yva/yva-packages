import decode from "jwt-decode";
import cookies from "js-cookie";

export const saveCreds = (creds = { userId: null, accessToken: null }) => {
  const { userId, accessToken } = creds;

  if (accessToken) {
    const { exp } = decode(accessToken);
    cookies.set("accessToken", accessToken, {
      expires: new Date(exp * 1000),
    });
  }

  if (userId) {
    cookies.set("userId", userId);
  }
};

export const getCreds = () => {
  return {
    accessToken: cookies.get("accessToken"),
    userId: cookies.get("userId"),
  };
};

export const clearCreds = () => {
  cookies.remove("accessToken");
  cookies.remove("userId");
};
