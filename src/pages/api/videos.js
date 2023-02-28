export default function handler(req, res) {
    res.status(200).json([
      {
        title: "Product 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        view: "109k views - 2 months ago"
      },
      {
        name: "Product 2",
        text: "This is a video about calf workout.",
        view: "109k views - 2 months ago"
    },
      {
        name: "Product 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        view: "109k views - 2 months ago"
    },
    {
      title: "Product 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      view: "109k views - 2 months ago"
    },
    {
      name: "Product 2",
      text: "This is a video about calf workout.",
      view: "109k views - 2 months ago"
  },
    {
      name: "Product 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      view: "109k views - 2 months ago"
  },
  
      
    ])
  }