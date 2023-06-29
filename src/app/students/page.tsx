import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";

function Students() {
  return (
    
    <section className="studentsPage">

        <Navbar />

      <div className="studentsOverview">

        <Header />

        <div className="studentsPageTop">

          <h1>Students List</h1>
          <div className="studentsPageTopRight">
            <input type="search" id="search" placeholder="Search..." />
            <button className="">ADD NEW STUDENT</button>
          </div>

        </div>

        <div className="studentsPageTable">

          <table className="table">
            
            <thead>

              <tr>
                <th >{/*Picture */}</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company Name</th>
                <th>{/*Icon */}</th>
                <th>{/*Icon */}</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td id="picture">Picture</td>
                <td>John Doe</td>
                <td>john@gmail.com</td>
                <td>7305477760</td>
                <td>karthi.lorem.com</td>
                <td>Deckow-Crist</td>
                <td><GoPencil style={{height:"19px", width:"19px", color:"#FEAF00", marginRight:"1em"}}/></td>
                <td><FiTrash style={{height:"19px", width:"19px", color:"#FEAF00"}}/></td>
              </tr>

            </tbody>

          </table>

        </div>


      </div>

    </section>
  );
}

export default Students;
