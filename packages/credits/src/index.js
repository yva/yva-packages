import cookies from "js-cookie";
import decode from "jwt-decode";

export const saveCreds = ({ userId = null, accessToken = null }) => {
  const { exp } = decode(accessToken);

  cookies.set("accessToken", accessToken, {
    expires: new Date(exp * 1000),
  });

  cookies.set("userId", userId);
};

export const getCreds = () => {
  return {
    accessToken: cookies.get("accessToken"),
    userId: cookies.get("userId"),
  };
};

export const cleanCreds = () => {
  cookies.remove("accessToken");
  cookies.remove("userId");
};
