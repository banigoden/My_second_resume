import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <VerticalTimeline lineColor="#fff">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2021 - 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Self-employed, Freelance Developer</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
        Backend and frontend development using AWS, including deployment of EC2 instances and Route 53 configuration
        Working as DevOps with Docker and Kubernetes
        Full-stack development with Spring Boot, Security, JPA
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2021 - 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Oracle, Member of Technical Staff</h3>
        <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
        <p>
        Developed and improved tests on Python and Basch scripts to validate Cloud services, Oracle Linux distributions, and Kernel features
        Collaborated with Developers to debug discovered issues in Jira
        Troubleshooting and fixing bugs encountered during testing or test development of network and hard disk driving
        Contributed to QA test framework and workflow improvement for CI type of testing using Jenkins
        Worked in Agile team
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2021"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Kelly Services, System administrator</h3>
        <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
        <p>
        Provided 1st and 2nd line support
        Installed, managed, and configured Windows operating systems, applications, as well as network components
        Assistance in developing user documentation/ installation procedure
        System and computer analysis
        Supported remote desktop services
        Provided conference support for online & offline meetings

        Achievement:
        Developed Java app for AD. I used LDAP to connect to AD and took the data of the user for filling an Excel file. 
        That increased the speed of creating account lists with specific data.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016 - 2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">List, System administrator</h3>
        <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
        <p>
        Technical support for corporate client/server systems of Linux
        Preventative maintenance on laptops, printers, and any other equipment
        Security monitoring
        Worked with My SQL
        Installation and administration of IP cameras, telephony
        Worked with network
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015 - 2016"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Masterskaya Zdoroviya, System administrator</h3>
        <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
        <p>
        Hardware and software systems support
        Administration of Windows Server 2008 (AD)
        Administration of all local and remote servers, backup
        Creating and configuring accounts and access rights in Linux
        Configuration of Cisco and D-Link routers
        Email account administration
        Hyper-V
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Experience;
