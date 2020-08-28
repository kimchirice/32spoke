import React from 'react'
import FormContainer from '../components/form/FormContainer'

export default function Home() {

  return (
    <div >
      <h3>Lets build a new wheel</h3>

        <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        <FormContainer />
    </div>
  );
}
