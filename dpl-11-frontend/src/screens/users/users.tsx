import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ConfirmDialog from '../../components/dialog-box/dialog-box';
import EditIcon from '../../assets/icon/edit';
import DeleteIcon from "../../assets/icon/delete";
import UserDataService from "../../service/users.service";
import "./users.css";

const Users = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    getUsersList()
  }, [])

  const getUsersList = () => {
    UserDataService.getAll().then((response) => {
      setUserList(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  const handlerEditMatch = (id: string) => {
    navigate(`/user/${id}`)
  }

  const handlerDeleteMatch = (id: number) => {
    UserDataService.delete(id).then((res) => {
      getUsersList()
    })
    setOpen(false)
  }

  const handleClickOpen = (id: number) => {
    setOpen(true);
    setUserId(id)
  };

  return (
    <div className="bottom-section-main">
      <div className="user-container">
        <table>
          <caption>Users Table</caption>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: any, index: number) => (
              <tr key={index + 1}>
                <td data-label="ID">{index + 1}</td>
                <td data-label="First Name">{user.first_name}</td>
                <td data-label="Last Name">{user.last_name}</td>
                <td data-label="Email">{user.email}</td>
                <td className='buttons'>
                  <div id='edit' data-label="">
                    <Button onClick={() => handlerEditMatch(user.id)}>
                      <EditIcon />
                    </Button>
                  </div>
                  <div id='delete' data-label="">
                    <Button onClick={() => handleClickOpen(user.id)}>
                      <DeleteIcon />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDialog id={userId} open={open} setOpen={setOpen} handlerDeleteMatch={handlerDeleteMatch} />
    </div>
  )
}

export default Users;