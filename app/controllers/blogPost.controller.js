const db = require("../models");
const BlogPost = db.blogPost;
const Op = db.Sequelize.Op;

// Create Blog post
exports.create = (req, res) => {
  const post = {
    title: req.body.title,
    description: req.body.description,
    author: req.body.author 
  };

  // Save BlogPost in the database
  BlogPost.create(post)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log("error");
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    }); 
};

// find Blogpost by ID
exports.findOne = (req, res) => {
  
  const id = req.params.id;
  console.log("intered");
  BlogPost.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log("error",err);
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};
// Delete Blogpost by ID
exports.delete = (req, res) => {

  const id = req.params.id;
  BlogPost.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Post with id=${id}. Maybe Post list was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Blog post with id=" + id
      });
    });
};

// Get all Blogpost 
exports.findAll = (req, res) => {

  BlogPost.findAll()
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving post."
      });
    });
};

// update Blogpost by ID
exports.update = (req, res) => {
  const id = req.params.id;

  BlogPost.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "updated"
        });
      } else {
        res.send({
          message: `Cannot update BlogPost with id=${id}. Maybe BlogPost was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating BlogPost with id=" + id
      });
    });
};