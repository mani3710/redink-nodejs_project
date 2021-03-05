module.exports = (sequelize, Sequelize) => {
    const BlodPostModel = sequelize.define("BlogPost", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      authorName: {
        type: Sequelize.STRING
      }
    });
  
    return BlodPostModel;
  };