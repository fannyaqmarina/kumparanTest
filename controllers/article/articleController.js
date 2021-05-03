const controller = {};
const status = require('../../helpers/status_helper');
const service = require('../../service/service');

controller.postArticle = async function (req, res) {
  let dataObject = req.body;
  try {
      let post = await service.articleService.postArticle(dataObject)
      console.log(post)
      if (post) {
          let rs = status.successMessage("Article berhasil dibuat", post);
          res.status(status.statusCode.created).json(rs);
        }
  } catch (error) {
      res.status(status.statusCode.error).json(status.errorMessage(error));
  }
}

controller.getAllArticle = async function (req, res) {
    try {
        let listArticle = await service.articleService.getAllArticle();
        if (listArticle.length > 0) {
            let rs = status.successMessage("Data berhasil ditampilkan", listArticle);
            res.status(status.statusCode.success).json(rs);
          } else {
            res.status(status.statusCode.success).json(status.emptyMessage([]));
          }
    } catch (error) {
        res.status(status.statusCode.error).json(status.errorMessage(error));
    }
}

controller.getDetailArticle = async function (req, res) {
  let article = req.params.articleId;
  try {
      let detailArticle = await service.articleService.getOneArticle(article);
      if (detailArticle) {
          let rs = status.successMessage("Data berhasil ditampilkan", detailArticle);
          res.status(status.statusCode.success).json(rs);
        } else {
          res.status(status.statusCode.success).json(status.emptyMessage([]));
        }
  } catch (error) {
      res.status(status.statusCode.error).json(status.errorMessage(error));
  }
}




module.exports=controller;