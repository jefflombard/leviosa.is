// Content: Leviosa price list, valid from 1 April 2026. Monthly prices in ISK, VAT (24%) included.
export const validFrom = "1 April 2026";
export const vatRate = 0.24;

export type RoleId = "doctor" | "clinician" | "psychologist" | "therapist" | "secretary";

export const roles: readonly { id: RoleId; label: string; plural: string; description?: string }[] = [
  { id: "doctor", label: "Doctor", plural: "Doctors" },
  { id: "clinician", label: "Other health professional", plural: "Other health professionals" },
  { id: "psychologist", label: "Psychologist", plural: "Psychologists" },
  {
    id: "therapist",
    label: "Other mental health professional",
    plural: "Other mental health professionals",
    description: "Therapists, counselors, and other behavioral health professionals.",
  },
  { id: "secretary", label: "Secretary", plural: "Secretaries" },
];

export const workplaces = [
  { id: "clinic", label: "Medical clinic" },
  { id: "other", label: "Other workplace" },
] as const;

export type WorkplaceId = (typeof workplaces)[number]["id"];

// The tier is set by the total number of users across all roles.
type Tier = {
  label: string;
  max: number;
  workplace: Record<WorkplaceId, number>;
  seats: Record<RoleId, number>;
};

const priceList: (Omit<Tier, "seats"> & { seats: Omit<Tier["seats"], "therapist"> })[] = [
  {
    label: "1–2",
    max: 2,
    workplace: { clinic: 34900, other: 19900 },
    seats: { doctor: 39900, clinician: 14900, psychologist: 9990, secretary: 5900 },
  },
  {
    label: "3–5",
    max: 5,
    workplace: { clinic: 74900, other: 29900 },
    seats: { doctor: 39900, clinician: 14900, psychologist: 6490, secretary: 4900 },
  },
  {
    label: "6–10",
    max: 10,
    workplace: { clinic: 149000, other: 44900 },
    seats: { doctor: 34900, clinician: 11900, psychologist: 5990, secretary: 3900 },
  },
  {
    label: "11–20",
    max: 20,
    workplace: { clinic: 249900, other: 79900 },
    seats: { doctor: 29900, clinician: 8900, psychologist: 5490, secretary: 2900 },
  },
  {
    label: "21–40",
    max: 40,
    workplace: { clinic: 349900, other: 99000 },
    seats: { doctor: 26900, clinician: 7900, psychologist: 4490, secretary: 2490 },
  },
  {
    label: "41+",
    max: Infinity,
    workplace: { clinic: 449900, other: 149900 },
    seats: { doctor: 24900, clinician: 6900, psychologist: 3990, secretary: 1900 },
  },
];

// Other mental health professionals keep the same ratio to psychologists that other health professionals have to
// doctors, rounded to the nearest 10 kr.
export const tiers: Tier[] = priceList.map((tier) => ({
  ...tier,
  seats: {
    ...tier.seats,
    therapist: Math.round(((tier.seats.psychologist * tier.seats.clinician) / tier.seats.doctor) / 10) * 10,
  },
}));

export const addOns = [
  { title: "SMS messages", detail: "160 characters, or 70 with Icelandic characters", price: 12, unit: "per message" },
  {
    title: "National Registry lookup",
    detail: "Or the full registry directly from Registers Iceland",
    price: 21,
    unit: "per lookup",
  },
  {
    title: "Changes and custom work",
    detail: "Additions outside Leviosa's own development",
    price: 14900,
    unit: "per hour",
  },
  { title: "Attachment storage", detail: "First 1 TB included, then per TB", price: 4000, unit: "per TB a month" },
  {
    title: "Dashboard or API connection",
    detail: "Fixed price per dashboard or API connection",
    price: 93000,
    unit: "a month",
  },
];

export const included = ["Setup", "Training", "Hosting (1 TB)", "Operations", "Authentication costs", "General support"];

export const formatPrice = (value: number) => `${Math.round(value).toLocaleString("en-US")} kr.`;

// Yearly billing: 12 months less this discount.
export const yearlyDiscount = 0.2;

export type Billing = "monthly" | "yearly";

export const billingFactor = (billing: Billing) => (billing === "yearly" ? 12 * (1 - yearlyDiscount) : 1);
