export const toggleImage = crop => {
  switch (crop) {
    case "Groundnuts":
      return require("assets/images/groundnuts.jpg");
      break;
    case "Maize":
      return require("assets/images/commodity-maize-yellow.jpg");
      break;
    case "Rice":
      return require("assets/images/commodity-rice.jpg");
      break;
    default:
      return require("assets/images/commodity-soyabean.jpg");
      break;
  }
};
