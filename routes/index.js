
/*var router = express.Router();

  import express from 'express'
  import {get} from '../controllers/index.controller'
  import{post} from '../controllers/index.controller'
  import{deletePost} from '../controllers/index.controller'
  import{update} from '../controllers/index.controller'
  import{getOne} from '../controllers/index.controller'  

  router.get('/',get)
  router.post('/',post)
  router.delete('/',deletePost)
  router.patch('/:userId',update)
  router.get('/:userId',getOne)
  export default router*/
exports.index = function(req, res){
  res.render('index', { title: '간단한 ToDo 리스트 예제 실습' });
};