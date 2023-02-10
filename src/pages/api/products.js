
export default (req, res) => {
    res.status(200).json({
        "products": [
            {
              "name": "shirt",
              "text": "something"
            },
            {
              "name": "Pants",
              "text": "something"
             
            },
            {
              "name": "Soaks",
              "text": "something"
            },
            {
              "name": "Tights",
              "text": "something"
            },
            {
              "name": "croptop",
              "text": "something"
            },
            {
              "name": "dumpbell",
              "text": "something"
            },
            {
              "name": "ball",
              "text": "something"
            },
            {
              "name": "rnadom thing",
              "text": "something"
            }
          ]
    });
};