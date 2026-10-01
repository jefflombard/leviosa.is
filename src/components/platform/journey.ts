// Icons
import Calendar from "@/icons/calendar.svg";
import CheckIn from "@/icons/check-in.svg";
import Pulse from "@/icons/pulse.svg";
import ClipboardCheck from "@/icons/clipboard-check.svg";
import Bell from "@/icons/bell.svg";
// Content
export const overview = {
  title: "Platform Overview",
  description: "One system for the entire patient journey",
};

export const ongoingCare = {
  title: "Ongoing care",
  description: "Chronic conditions and long-term health, across and between every visit",
};

export const closing = "See how Leviosa connects every step of care";

export const stages = [
  {
    id: "pre-visit",
    label: "Pre-visit",
    icon: Calendar,
    heading: "Ready before they walk in.",
    summary: "Patients book, fill in their forms and share their history, so the visit starts with everything in place.",
    highlights: [
      {
        title: "Appointments & Scheduling",
        description:
          "Set up available time slots and allow patients to schedule appointments via the clinic's Patient Portal.",
      },
      {
        title: "Interaction",
        description: "Patients answer questionnaires so that healthcare providers can prepare for the appointment.",
      },
    ],
    items: [
      { title: "Online Booking", description: "Patients pick an open time slot and book it themselves through the patient portal." },
      { title: "Scheduling", description: "Set each provider's hours and appointment types, and see the whole calendar in one view." },
      { title: "Digital Forms", description: "Questionnaires patients fill in before they arrive, so you can prepare for the visit." },
      { title: "Health History", description: "Medications, allergies and past conditions, collected once and kept up to date." },
      { title: "Reminders", description: "Automatic reminders before each appointment, so fewer visits are missed." },
    ],
  },
  {
    id: "check-in",
    label: "Check-in",
    icon: CheckIn,
    heading: "Arrivals without the clipboard.",
    summary:
      "Patients check themselves in, confirm their details and sign consent, while the team sees who is waiting and where.",
    highlights: [],
    items: [
      { title: "Self Check-in", description: "Patients confirm their arrival themselves, without queuing at the front desk." },
      { title: "Registration", description: "Personal and contact details confirmed and updated on arrival." },
      { title: "Consent", description: "Consent forms signed digitally and stored with the patient's record." },
      { title: "Payments", description: "Take deposits or co-payments before the appointment starts." },
      { title: "Rooms & Queues", description: "See who is waiting, who is in which room and who is next." },
    ],
  },
  {
    id: "care",
    label: "Care",
    icon: Pulse,
    heading: "More time with the patient.",
    summary: "Documentation that keeps up with the conversation, so providers can focus on the person in front of them.",
    highlights: [
      {
        title: "Clinical Documentation",
        description:
          "Seamless documentation experience, allowing the healthcare provider to utilize smart features, giving them additional time to focus on patient care.",
      },
    ],
    items: [
      { title: "Charting", description: "Record findings in a structured chart that follows the patient from visit to visit." },
      { title: "Clinical Notes", description: "Templates and shortcuts that make writing notes quicker." },
      { title: "AI Scribe", description: "Turns the conversation into a draft note for the provider to review and sign." },
      { title: "Assessment", description: "Scores, measurements and screening tools recorded alongside the visit." },
      { title: "Shared Decisions", description: "Walk through treatment options with the patient and record what you agreed." },
    ],
  },
  {
    id: "check-out",
    label: "Check-out",
    icon: ClipboardCheck,
    heading: "A clear end to every visit.",
    summary: "Prescriptions, referrals and instructions sent before the patient leaves, and the invoice ready with them.",
    highlights: [
      {
        title: "Discharging & Invoicing",
        description:
          "Smart features and template based billing to easily manage and streamline financials for both the clinic and patients.",
      },
    ],
    items: [
      { title: "Prescriptions", description: "Write and send prescriptions electronically from the visit." },
      { title: "Referrals", description: "Refer patients to specialists with the relevant history attached." },
      { title: "Orders", description: "Order lab tests and imaging, and track them until results arrive." },
      { title: "Care Instructions", description: "Send patients home with clear written instructions for what comes next." },
      { title: "Billing", description: "Template-based invoices created from the visit, for the clinic and the patient." },
    ],
  },
  {
    id: "follow-up",
    label: "Follow-up",
    icon: Bell,
    heading: "Care that continues after the visit.",
    summary: "Results, messages and recalls handled automatically, with the patient kept in the loop.",
    highlights: [
      {
        title: "Task Management & Automation",
        description: "Automate routine tasks such as appointment reminders, prescription requests, follow-ups and more.",
      },
      {
        title: "Patient Portal",
        description:
          "Allowing the clinic to take control of patients' journey by giving access to appointments, messaging, medical records, test results, invoices and much more.",
      },
    ],
    items: [
      { title: "Results", description: "Test results routed to the right provider and shared with the patient when ready." },
      { title: "Messaging", description: "Secure messages between patients and the care team." },
      { title: "Tasks & Recalls", description: "Automated follow-ups, prescription requests and recall reminders." },
      { title: "Monitoring", description: "Keep track of symptoms and measurements between visits." },
      { title: "Patient Portal", description: "Appointments, messages, records, results and invoices in one place for the patient." },
    ],
  },
];
