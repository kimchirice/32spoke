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
        <ul>
          <li><Link to={`${url}/hub`} className="btn btn-primary btn-small"><Hub /></Link></li>
          <li><Link to={`${url}/rim`} className="btn btn-primary btn-small">Rim</Link></li>
          <li><Link to={`${url}/spoke`} className="btn btn-primary btn-small">Spoke</Link></li>
          <li><Link to={`${url}/nipple`} className="btn btn-primary btn-small">Nipple</Link></li>
          <li><Link to={`${url}/lacingPatter`} className="btn btn-primary btn-small">Lacing Pattern</Link></li>
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
