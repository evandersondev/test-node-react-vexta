const server = require("./app");
const PORT = process.env.PORT || 3001;

server.listen(PORT, err => {
  if (err) console.log(err);

  console.log(`Server is running on http://localhost:${PORT}`);
});
