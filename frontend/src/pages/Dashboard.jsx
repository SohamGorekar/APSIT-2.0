import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import SplitFlex from '../components/SplitFlex'
import QuadFlex from '../components/QuadFlex'
import Footer from '../components/Footer'

const announcementContent = (
  <div className="w-full space-y-6">
    {[...Array(14)].map((_, i) => (
      <div className="bg-white rounded shadow p-4" key={i}>
        <div className="text-xs text-gray-500 mb-1">{28 - i} July 2025, {3 + i}:25 PM</div>
        <div className="font-semibold text-sm text-gray-700 mb-1">Dr. Sangram Savargave</div>
        <div className="text-gray-800">Announcement #{i + 1}: Important update for students regarding academic and exam matters.</div>
      </div>
    ))}
    <div className="text-center text-blue-500 mt-2 cursor-pointer hover:underline">Older topics ...</div>
  </div>
)

const examNotificationContent = (
  <div className="w-full space-y-6">
    {[...Array(14)].map((_, i) => (
      <div className="bg-white rounded shadow p-4" key={i}>
        <div className="text-xs text-gray-500 mb-1">Link</div>
        <div className="font-semibold text-sm text-gray-700 mb-1">Exam Notification #{i + 1}</div>
        <a href="#" className="text-grey-700 underline cursor-pointer">Click here for details of Exam Notification #{i + 1}</a>
      </div>
    ))}
    <div className="text-center text-blue-500 mt-2 cursor-pointer hover:underline">More exam notifications ...</div>
  </div>
)

const officeNotificationContent = (
  <div className="w-full space-y-6">
    {[
      'Enrollment Status link (only FE & DSE)',
      'Migration Pending Student  (Only BE)',
      'Eligibility Status Link (only BE)',
      'Link to refer PRN of University',
      'Archive of Enrollment & Eligibility Notices',
      'Archive of Migration Submission Notices',
      'SOP of University Enrollment & Eligibility',
      'Office Circulars',
      'Document Verification Link',
      'Bonafide Certificate Application',
      'Transcript Application',
      'Provisional Certificate Application',
      'Degree Certificate Application',
      'Convocation Registration',
      'No Objection Certificate (NOC) Link',
      'Anti-Ragging Affidavit Submission',
      'Hostel Application Link',
      'Bus Pass Application',
      'ID Card Reissue Link',
      'Fee Payment Portal',
    ].map((text, i) => (
      <div className="bg-white rounded shadow p-4" key={i}>
        <a href="#" className=" underline cursor-pointer font-semibold text-sm text-gray-700">{text}</a>
      </div>
    ))}
    <div className="text-center text-blue-500 mt-2 cursor-pointer hover:underline">More office notifications ...</div>
  </div>
)

const scholarshipSectionContent = (
  <div className="w-full space-y-6">
    {[
      'Scholarship Notices related to CAST',
      'Scholarship Notices related to EBC',
      'Scholarship Notices related to Minority',
      'Scholarship Form Current Status',
      'Archive of Scholarship Past Notices',
      'Scholarship Form Submission Link (Students)',
      'Scholarship Orientation Notice & Schedule',
      'Scholarship form Not fill Students List',
      'Scholarship Renewal Link',
      'Scholarship Disbursement Status',
      'Scholarship Grievance Redressal',
      'Scholarship FAQ',
      'Scholarship Helpline',
      'Scholarship Application Correction',
      'Scholarship Document Upload',
      'Scholarship Bank Details Update',
      'Scholarship Acknowledgement Download',
      'Scholarship Rejection Reasons',
      'Scholarship Reapply Link',
      'Scholarship Final List',
    ].map((text, i) => (
      <div className="bg-white rounded shadow p-4" key={i}>
        <a href="#" className=" underline cursor-pointer font-semibold text-sm text-gray-700">{text}</a>
      </div>
    ))}
    <div className="text-center text-blue-500 mt-2 cursor-pointer hover:underline">More scholarship notices ...</div>
  </div>
)

// QuadFlex content as anchor links, not scrollable
const applicationFormats = (
  <div className="w-full space-y-6">
    {[
      'Grievance Form',
      'Transcript Application',
      'Provisional Admission',
      'Revaluation Application(SE & TE)',
      'Photocopy Application(SE & TE)',
      'Letter of Recommendation',
      'Duplicate ID Card',
    ].map((text, i) => (
      <div className="bg-white rounded shadow p-4" key={i}>
        <a href="#" className=" underline cursor-pointer font-semibold text-sm text-gray-700">{text}</a>
      </div>
    ))}
  </div>
)

const culturalEvents = (
  <div className="w-full space-y-6">
    {[
      'Antarang Events',
      'Ojus Cultural Events',
      'Ojus Sports Events',
      'NSS Events & Activities',
      'Schedule of Ojus Activities',
      'Ojus Website Link',
    ].map((text, i) => (
      <div className="bg-white rounded shadow p-4" key={i}>
        <a href="#" className=" underline cursor-pointer font-semibold text-sm text-gray-700">{text}</a>
      </div>
    ))}
  </div>
)

const technicalClubs = (
  <div className="w-full space-y-6">
    {[
      'Cybersecurity Club',
      'AI & ML Club',
      'Data Science & Analytics Club',
      'Modified Auto Club',
      'DevOps Club',
      'Coders Club',
    ].map((text, i) => (
      <div className="bg-white rounded shadow p-4" key={i}>
        <a href="#" className=" underline cursor-pointer font-semibold text-sm text-gray-700">{text}</a>
      </div>
    ))}
  </div>
)

const ieeeCsi = (
  <div className="w-full space-y-6">
    {[
      'IEEE Events & Activities',
      'CSI Events & Activities',
      'IEEE Core Committee',
      'IEEE Membership Subscription Link',
      'CSI Core Committee',
    ].map((text, i) => (
      <div className="bg-white rounded shadow p-4" key={i}>
        <a href="#" className=" underline cursor-pointer font-semibold text-sm text-gray-700">{text}</a>
      </div>
    ))}
  </div>
)

const Dashboard = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Navbar/>
      <Carousel/>
      <SplitFlex 
        leftHeading="Latest Announcement" 
        rightHeading="Exam Notifications"
        leftContent={announcementContent}
        rightContent={examNotificationContent}
      />
      <SplitFlex 
        leftHeading="Office Notifications" 
        rightHeading="Scholarship Section"
        leftContent={officeNotificationContent}
        rightContent={scholarshipSectionContent}
      />
      <QuadFlex 
        firstHeading="Application Formats" 
        secondHeading="Cultural Events" 
        thirdHeading="Technical Clubs" 
        fourthHeading="IEEE & CSI" 
        firstContent={applicationFormats}
        secondContent={culturalEvents}
        thirdContent={technicalClubs}
        fourthContent={ieeeCsi}
      />
      <Footer/>
    </div>
  )
}

export default Dashboard
