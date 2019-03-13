import React, {Component} from 'react'
import {render} from 'react-dom'

import {faUser, faComments, faUpload, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import Example from '../../src'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Demo extends Component {

  render() {
      const data = [
          {
              icon: <FontAwesomeIcon icon={faUser}/>,
              sublabel: "Updated profile",
              date: "23 jan",
              iconClassName: "green",
          },
          {
              icon: <FontAwesomeIcon icon={faSignOutAlt}/>,
              sublabel: "Logged during 6 minutes",
              date: "23 jan",
              iconClassName: "violet",
          },
          {
              icon: <FontAwesomeIcon icon={faUser}/>,
              sublabel: "Read research paper",
              date: "23 jan",
              iconClassName: "black",
          },
          {
              icon: <FontAwesomeIcon icon={faSignOutAlt}/>,
              sublabel: "Logged during 6 minutes",
              date: "23 jan",
              iconClassName: "violet",
          },
          {
              icon: <FontAwesomeIcon icon={faComments}/>,
              sublabel: "Appointment request",
              date: "23 jan",
              iconClassName: "blue",
          },
          {
              icon: <FontAwesomeIcon icon={faUpload}/>,
              sublabel: "Upload document",
              date: "23 jan",
              iconClassName: "orange",
          },
          {
              icon: <FontAwesomeIcon icon={faSignOutAlt}/>,
              sublabel: "Logged during 20 minutes",
              date: "23 jan",
              iconClassName: "violet",
          },
      ]

    return <div>
      <Example events={data} horizontal={true} mode="alternate"/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
