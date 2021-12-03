
import { useEffect, useState } from "react";
import {db} from './firebase';
import './App.css';

function App() {
  const [data, setData] =  useState(null)
  const [name, setName] =  useState(null)
  const [surname, setSurname] =  useState(null)

  const _UploadData = async (e) =>{
    if( name !== null || surname !== null){
        await db
        .collection('Test')
        .add({
          name: name,
          surname: surname,
        })
        .then(() => {
          console.log('User added!');
          setName(null);
          setSurname(null);
        });
      }else{
        alert("please fill in the inputs!")
      }
    }

  useEffect(() => {
    db.collection("Test")
      .onSnapshot((snapshot) =>
       setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  console.log(data)
  return (
    <div className="App">
      <h2>Rysis Database app</h2>
        <form>
          <label for="fname">First Name</label>
          <input type="text" id="fname"  placeholder="Your name.."  value={name} onChange={(e)=> setName(e.target.value)}/>

          <label for="lname">Last Name</label>
          <input type="text" id="lname" placeholder="Your last name.." value={surname} onChange={(e)=> setSurname(e.target.value)}/>
        
          <input type="button" value="Submit" onClick={(e)=> _UploadData(e)}/>
        </form>
      <table id="names">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
          </tr>
          {
            data !== null ?
            <>  
              {
                data.map((item) =>(
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.data.name}</td>
                    <td>{item.data.surname}</td>
                </tr>
                ))
              }  

            </>
            :
            ""
            }
    
        </table>

    </div>
  );
}

export default App;
