const model = require('../config/model/index');
const moment = require('moment');
const service = {};

service.postArticle = async (dataObject) => {
    let createdAt = moment(Date.now()).utcOffset(420).format('YYYY-MM-DD HH:mm');
    let result = await model.articleModel.create({
        author:dataObject.authorName,
        title:dataObject.titleArticle,
        body:dataObject.bodyArticle,
        created_date:createdAt
    });
    return result;
  };

  service.getAllArticle = async () => {
    let result = await model.articleModel.findAll();
    return result;
  };

  service.getOneArticle = async (id) => {
    let result = await model.articleModel.findOne({
        where:{
            id:id
        }
    })
    return result;
  };

  module.exports=service