const lengthIdYoutube = [11];

export const isValidYoutubeId = (urlString: string): string | null => {
  try {
    new URL(urlString);
    const v = getParameterByName("v", urlString);
    if (!v || !lengthIdYoutube.includes(v.length)) return null;
    return v;
  } catch (e) {
    if (!lengthIdYoutube.includes(urlString.length)) {
      return null;
    }
    return urlString;
  }
};
export const urlAsset = (path: string): string => {
  return `https://austeread.com/assets/${path}`;
};

function getParameterByName(name: string, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
