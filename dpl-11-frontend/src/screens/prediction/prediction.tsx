import { useParams } from "react-router";
import "./prediction.css";
import { useEffect, useState } from "react";
import MatchesDataService from "../../service/matches.service";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import PredictionDataService from "../../service/prediction.service";

const Prediction = () => {
  const { id }: any = useParams();
  const getData: any = localStorage.getItem('isLogin')
  let user = JSON.parse(getData)
  const user_id = JSON.stringify(user.id)
  const [predictionId, setPredictionId] = useState('');
  const [matchDetails, setMatchDetails] = useState<any>({});
  const [defaultTeamId, setDefaultTeamId] = useState<any>('');
  const [selectedTeam, setSelectedTeam] = useState<string>('')

  useEffect(() => {
    PredictionDataService.getAll(user_id, id).then((res) => {
      const data = res.data[0];
      if (data !== undefined) {
        let pId: string = JSON.stringify(data.id);
        setPredictionId(pId)
        let id = JSON.stringify(data.team_id)
        setSelectedTeam(id);
        setDefaultTeamId(id);
      }
    }).catch((error) => console.error(error))
  }, [id, user_id])

  useEffect(() => {
    MatchesDataService.getPredictionDetailsById(id).then((response) => {
      setMatchDetails(response.data[0]);
    }).catch((error) => console.error(error))
  }, [id])

  const handlerChange = (e: any) => {
    setSelectedTeam(e.target.value);
  }

  const submitPrediction = () => {
    let prediction_data = {
      "match_id": id,
      "user_id": user_id,
      "team_id": selectedTeam,
    }
    if (defaultTeamId) {
      console.log("update", defaultTeamId)
      PredictionDataService.update(selectedTeam, predictionId).then((res) => {
        console.log(res)
      }).catch((error: any) => console.error(error))
    } else {
      console.log("create", defaultTeamId)
      PredictionDataService.create(prediction_data).then((res) => {
        console.log(res)
      }).catch((error: any) => console.error(error))
    }
  }
  const teamOne = JSON.stringify(matchDetails.team_1_id)
  const teamTwo = JSON.stringify(matchDetails.team_2_id)
  return (
    <div className="bottom-section-main">
      <div className="prediction_container">
        <div className="prediction_header">
          <div className="box_left_section">
            <label className="custom-radio">
              <input
                type="radio"
                name="radio"
                value={teamOne}
                checked={selectedTeam === teamOne}
                onChange={handlerChange} />
              <span className="radio-btn">
                <div className="hobbies-icon">
                  <img className="prediction_icon" src={matchDetails.team_1_icon} alt="team_logo" style={{ width: 90 }} />
                  <div className="prediction_team" style={{ paddingLeft: 8 }}>{matchDetails.team_1}</div>
                </div>
              </span>
            </label>
          </div>
          <div className="box_center_section">
            <div className="prediction_match">Match {matchDetails.match_no}</div>
          </div>
          <div className="box_right_section">
            <label className="custom-radio">
              <input
                type="radio"
                name="radio"
                value={teamTwo}
                checked={selectedTeam === teamTwo}
                onChange={handlerChange} />
              <span className="radio-btn">
                <div className="hobbies-icon">
                  <div className="prediction_team" style={{ paddingRight: 8 }}>{matchDetails.team_2}</div>
                  <img className="prediction_icon" src={matchDetails.team_2_icon} alt="team_logo" style={{ width: 90 }} />
                </div>
              </span>
            </label>
          </div>
        </div>
        <div className="prediction_footer">
          <span>{matchDetails.venue}</span>
          <span>{dayjs(matchDetails.date).format('D MMM YYYY')}</span> &nbsp;&nbsp;
          <span>{dayjs(matchDetails.date).format('h:mm A')}</span>
        </div>
      </div>
      <div className="btn-box">
        <Button variant="contained" color="success" onClick={submitPrediction}>Submit</Button>
      </div>
    </div>
  )
}

export default Prediction;