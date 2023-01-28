export const getNodeId = (nodeName: string) => {
  let a = nodeName?.split(" ");
  return a && a.map((word) => word[0].toLowerCase()).join("");
};

export const getAvatar = (avatar: string) => {
  return avatar !== ""
    ? avatar
    : "https://spng.pngfind.com/pngs/s/676-6764065_default-profile-picture-transparent-hd-png-download.png";
};
