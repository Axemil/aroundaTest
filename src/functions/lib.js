const composeDate = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  let d = new Date(date)
  const formattedDate = `${d.getDate()} ${
    monthNames[d.getMonth()]
  }, ${d.getFullYear()}`
  return formattedDate
}

const getRandVal = (n) => Math.round(Math.random() * n)

const editMailchimpResponse = (text) => {
  if (!text) {
    return text
  }

  if (text.includes("already")) {
    text = "You've allready subscribed to our email list"
  }
  if (text.includes("0 - ")) {
    text = text.replace("0 - ", "")
  }
  return text
}
export { composeDate, editMailchimpResponse }
