import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ConfirmDialog from '../../components/dialog-box/dialog-box';
import "./teams.css";
import EditIcon from '../../assets/icon/edit';
import DeleteIcon from "../../assets/icon/delete";
import TeamsDataService from "../../service/teams.service";

const Teams = () => {
  const navigate = useNavigate();
  const [teamList, setTeamList] = useState([]);
  const [open, setOpen] = useState(false);
  const [teamId, setTeamId] = useState<number>(0);

  useEffect(() => {
    getTeamsList()
  }, [])

  const getTeamsList = () => {
    TeamsDataService.getAll().then((response) => {
      setTeamList(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  const handlerEditMatch = (id: string) => {
    navigate(`/team/${id}`)
  }

  const handlerDeleteMatch = (id: number) => {
    TeamsDataService.delete(id).then((res) => {
      getTeamsList()
    })
    setOpen(false)
  }

  const handleClickOpen = (id: number) => {
    setOpen(true);
    setTeamId(id)
  };

  return (
    <div className="bottom-section-main">
      <div className="team-container">
        <table>
          <caption>Teams Table</caption>
          <thead>
            <tr>
              <th scope="col">Logo</th>
              <th scope="col">Full Name</th>
              <th scope="col">Short Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {teamList.map((team: any) => (
              <tr key={team.id}>
                <td data-label="Full Name">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={team.icon} alt="team_logo" style={{ width: 60 }} />
                  </div>
                </td>
                <td data-label="Full Name">{team.full_name}</td>
                <td data-label="Short Name">{team.short_name}</td>
                <td className='buttons'>
                  <div id='edit' data-label="">
                    <Button onClick={() => handlerEditMatch(team.id)}>
                      <EditIcon />
                    </Button>
                  </div>
                  <div id='delete' data-label="">
                    <Button onClick={() => handleClickOpen(team.id)}>
                      <DeleteIcon />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDialog id={teamId} open={open} setOpen={setOpen} handlerDeleteMatch={handlerDeleteMatch} />
    </div>
  )
}

export default Teams;