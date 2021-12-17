import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"

import Dashboard from "./components/Dashboard"
import CreateTourPage from "./components/tours/CreateTour"
import EditTourPage from "./components/tours/EditTour"
import TicketsSummary from "./components/tickets/TicketsSummary"

import { LocalRoutes } from "../../config.js"

function AdminRouter (props) {
  const { data } = props
  const { tours, tickets } = data
  console.log('blah tours', tours)
  console.log('blah tickets', tickets)

  return (
    <>
      <h2>Admin Pages</h2>
      <nav>
        <ul>
          <li>
            <Link to={LocalRoutes.home}>User Home</Link>
          </li>
          <li>
            <Link to={LocalRoutes.admin}>Admin Dashboard</Link>
          </li>
          <li>
            <Link to={LocalRoutes.adminToursCreate}>Create a Tour</Link>
          </li>
          <li>
            <Link to={LocalRoutes.adminTicketsSummary}>Tickets Summary</Link>
          </li>
        </ul>
      </nav>

      <main>

        <Routes>
          <Route path={LocalRoutes.adminHome} element={<Dashboard tours={tours.data} />} />
          <Route
            path={LocalRoutes.adminToursCreate}
            element={<CreateTourPage tours={tours.data} setTours={tours.setData} />}
          />
          <Route
            path={LocalRoutes.adminToursEditWithId}
            element={<EditTourPage tours={tours.data} setTours={tours.setData} />}
          />
          <Route path={LocalRoutes.adminTicketsSummary} element={<TicketsSummary tickets={tickets.data}/>} />
        </Routes>

      </main>
    </>
  )
}

export default AdminRouter
