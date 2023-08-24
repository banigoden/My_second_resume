import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <VerticalTimeline lineColor="#aaa">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2021 - 2022"
        contentStyle={{ background: '#869cd5'}}
        iconStyle={{ background: '#869cd5', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Self-employed, Freelance Developer</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>Backend and frontend development using AWS, including deployment of EC2 instances and Route 53 configuration</p>
        <p>Working as DevOps with Docker and Kubernetes</p>
        <p> Full-stack development with Spring Boot, Security, JPA</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2021 - 2022"
        contentStyle={{ background: '#869cd5'}}
        iconStyle={{ background: '#869cd5', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Oracle, Member of Technical Staff</h3>
        <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
        <p>Developed and improved tests on Python and Basch scripts to validate Cloud services, Oracle Linux distributions, and Kernel features</p>
        <p>Collaborated with Developers to debug discovered issues in Jira</p>
        <p>Troubleshooting and fixing bugs encountered during testing or test development of network and hard disk driving</p>
        <p> Contributed to QA test framework and workflow improvement for CI type of testing using Jenkins</p>
        <p> Worked in Agile team</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2017 - 2021"
        contentStyle={{ background: '#869cd5'}}
        iconStyle={{ background: '#869cd5', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Kelly Services, System administrator</h3>
        <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
        <p>Provided 1st and 2nd line support</p>
        <p>Installed, managed, and configured Windows operating systems, applications, as well as network components</p>
        <p>Assistance in developing user documentation/ installation procedure</p>
        <p>System and computer analysis</p>
        <p>Supported remote desktop services</p>
        <p>Provided conference support for online & offline meetings</p>
        <p>Achievement:</p>
        <p>Developed Java app for AD. I used LDAP to connect to AD and took the data of the user for filling an Excel file. </p>
        <p>That increased the speed of creating account lists with specific data.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2016 - 2017"
        contentStyle={{ background: '#869cd5'}}
        iconStyle={{ background: '#869cd5', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">List, System administrator</h3>
        <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
        <p> Technical support for corporate client/server systems of Linux</p>
        <p> Preventative maintenance on laptops, printers, and any other equipment</p>
        <p> Security monitoring</p>
        <p> Worked with My SQL</p>
        <p> Installation and administration of IP cameras, telephony</p>
        <p> Worked with network</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2015 - 2016"
        contentStyle={{ background: '#869cd5'}}
        iconStyle={{ background: '#869cd5', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Masterskaya Zdoroviya, System administrator</h3>
        <h4 className="vertical-timeline-element-subtitle">Saint Petersburg, Russia</h4>
        <p>Hardware and software systems support</p>
        <p>Administration of Windows Server 2008 (AD)</p>
        <p>Administration of all local and remote servers, backup</p>
        <p>Creating and configuring accounts and access rights in Linux</p>
        <p>Configuration of Cisco and D-Link routers</p>
        <p>Email account administration</p>
        <p>Hyper-V</p>   
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Experience;
