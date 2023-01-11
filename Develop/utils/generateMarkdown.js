// const licenseBadges = [{
//     none: "",
//     MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
//     The_Unlicense: "https://img.shields.io/badge/license-Unlicense-blue.svg",
//     Apache_License_v2: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
//     GNU_GPL_v3: "https://img.shields.io/badge/License-GPLv3-blue.svg",
//     BSD_Clause_Simplified_License: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
//     BSD_3_Clause_New_or_Revised_License:"https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
//     Boost_Software_License_v1: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
//     Eclipse_Public_License_v1: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
//     GNU_AGPL_v3: "https://img.shields.io/badge/License-AGPL_v3-blue.svg", 
//     GNU_GPL_v2: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
//     GNU_LGPL_v3: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
//     Mozilla_Public_License_v2: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"

//   }]
  

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "None"){
    return "";
  } else {
  return `https://img.shields.io/badge/${license}-blue.svg`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {

// module.exports = 
//   generateMarkdown

