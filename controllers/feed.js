exports.getPosts = (req, res, next) => {
  res.status(200).json({ abc: "xyz" });
};
exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "post created",
    post: { id: new Date().toISOString(), title, content },
  });
};
