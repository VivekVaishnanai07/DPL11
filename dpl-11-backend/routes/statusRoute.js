const express = require('express');
const db = require('../config/db.config');

const router = express.Router();

// particular user prediction team list get
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query(`SELECT p.id,p.user_id,m.match_no,t1.full_name as team_1,t2.full_name as team_2,m.venue,m.date,t.full_name as predict_team,t3.full_name as winner_team FROM prediction p inner join matches m on m.id = p.match_id inner join teams t1 on t1.id = m.team_1 inner join teams t2 on t2.id = m.team_2 inner join teams t on t.id = p.team_id inner join teams t3 on t3.id = m.winner_team where p.user_id = ${id};`,
    (err, result) => {
      if (err) {
        console.error(err)
      }
      res.send(result)
    }
  );
})

module.exports = router;