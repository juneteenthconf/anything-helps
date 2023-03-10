import express from 'express';
import { faker } from '@faker-js/faker';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req);
    let volunteerOpportunities= [...new Array(5)].map(i=>{
        return {
          title: faker.lorem.words(5),
          provider: faker.company.name(),
          location: faker.address.city(),
          description: faker.lorem.words(20)
        }
      });
    res.send(volunteerOpportunities);
});

export default router;
