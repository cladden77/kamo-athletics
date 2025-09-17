// GROQ queries for fetching data from Sanity

export const heroQuery = `*[_type == "hero"] | order(_updatedAt desc)[0]{
  title,
  subtitle,
  buttonText,
  backgroundImage{
    asset->,
    alt
  },
  titleColor,
  subtitleColor,
  buttonColor
}`

export const aboutQuery = `*[_type == "about"][0]{
  badgeText,
  heading,
  description,
  backgroundColor,
  textColor,
  badgeColor
}`

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc){
  firstName,
  lastName,
  role,
  image{
    asset->,
    alt
  },
  description,
  phone,
  email,
  order
}`

export const scheduleQuery = `*[_type == "schedule"][0]{
  badgeText,
  heading,
  description,
  weekdaySchedule,
  weekendSchedule,
  buttonText,
  scheduleImage{
    asset->,
    alt
  },
  backgroundColor,
  textColor,
  buttonColor
}`

export const contactQuery = `*[_type == "contact"][0]{
  heading,
  coOwnersTitle,
  address,
  mapPlaceholder,
  backgroundColor,
  textColor,
  cardBackgroundColor,
  cardTextColor
}`

export const footerQuery = `*[_type == "footer"][0]{
  companyName,
  address,
  hours,
  followTitle,
  socialLinks,
  contactTitle,
  phone,
  email,
  copyrightText,
  backgroundColor,
  textColor
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  title,
  description,
  logo{
    asset->,
    alt
  },
  navigation,
  ctaButtonText,
  primaryColor,
  secondaryColor
}`
