import { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css'; 

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
function anotherExample(firstLine, lastLine) {
  if (firstLine === '\\\`\\\`\\\`' && lastLine === '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!  
Or _italic_.  
Or... wait for it... **_both!_**  
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and  
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header    | Crazy Header  | Another Header?    |
| -------------- | ------------- | ------------------ |
| Your content can | be here, and it | can be here.... |
| And here.      | Okay.         | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
<img 
  src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg" 
  alt="freeCodeCamp Logo" 
  style="width: 550px;eight: auto; display: block; margin: 20px auto;"
/>
`;


function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    setMarkdown(defaultMarkdown);
  }, []);

  // Set options for marked
  marked.setOptions({
    breaks: true, // Enable line breaks
  });

  return (
<div className="app">
  <header className="header">
    <h1>Markdown Previewer</h1>
  </header>
  <main className="main-content">
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        rows="10"
        placeholder="Type your Markdown here..."
      ></textarea>
    </div>
    <div className="preview-container">
      <h2>Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  </main>
  <footer className="footer">
    <p>Created by Youssef Ettabaa| © 2025</p>
  </footer>
</div>

  );
}

export default App;
