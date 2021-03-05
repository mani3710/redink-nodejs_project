module.exports = (sequelize, Sequelize) => {
  const BlogPost = sequelize.define("blogPost", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    }
  });

  return BlogPost;
};
