// function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${title}
  ***

  ## Description
  ***
  ${descript}

  ## Table of Contents
  ***
  ${loopThroughArray(contentsArray)}

  ## Installation
  ***
  ${install}

  ## Usage
  ***
  ${usage}

  ## License
  ***
  ${licence}

  ## Contributors
  ***
  ${loopThroughArray(contrib)}

  ## Tests
  ***
  ${test}

  ## Questions 
  ***
  ${question}`)

`;
}

module.exports = generateMarkdown;
