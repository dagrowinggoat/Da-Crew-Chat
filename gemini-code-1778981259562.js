// Use da port Render gives us, or default to 3000
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Da server is running on port ' + PORT);
});