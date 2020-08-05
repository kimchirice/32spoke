import React from 'react'
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom"
import { Hub } from '../Components/Hub/Hub'

export default function Wheel() {
  
  let { path, url } = useRouteMatch();
  
  return (
    <div >
      <h3>This is meat of 32spoke</h3>
      <div id="progressBar" class="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item"><Link to={`${url}/hub`} className="btn btn-lg">Hub </Link></li>
          <li className="nav-item"><Link to={`${url}/rim`} className="nav-link btn btn-lg">Rim</Link></li>
          <li className="nav-item"><Link to={`${url}/spoke`} className="btn btn-lg">Spoke</Link></li>
          <li className="nav-item"><Link to={`${url}/nipple`} className="btn btn-lg">Nipple</Link></li>
          <li className="nav-item"><Link to={`${url}/lacingPatter`} className="btn btn-lg">Lacing Pattern</Link></li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h3>lets fill in parts details</h3>
          </Route>
          <Route path={`${path}/:detailId`}>

            <Detail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Detail() {
  let { detailId } = useParams();
  
  return (
    <div>
      <h4>{ detailId }</h4>
    </div>
  );
}
