const handleFindLink = (text) => {
  const sentences = text?.split("\n");
  const allText = sentences?.join(" ");
  const words = allText?.split(" ");
  const allWords = words?.map((word) => {
    if (word.substr(0, 4) === "http") {
      return (
        <a href={word} target="_blank" key={word} rel="noreferrer">
          {word}
        </a>
      );
    }
    return word + " ";
  });
  return allWords;
};

export default handleFindLink;
