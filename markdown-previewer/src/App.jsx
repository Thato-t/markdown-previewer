import { useState } from 'react'
import { marked } from 'marked'


function App() {
  const [text, setText] = useState(`
# H1
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
  {
    "firstName": "John",
    "lastName": "Smith" ,
    "age": 25   
  }
\`\`\`
- First item
- Second item
- Third item
![alt text](image.jpg)
> blockquote
**bold text**
`);

  const handleChange = (e) => {
    setText(e.target.value)
  }

  marked.setOptions({
    breaks: true
  })
  const bxExpand = document.querySelectorAll('.bx-expand');
  const bxCollapse = document.querySelectorAll('.bx-collapse-alt');
  const wrapper = document.querySelectorAll('.wrapper');
  const preview = document.getElementById('preview');
  const editor = document.getElementById('editor')

  bxExpand[0].addEventListener('click', () => {
    bxCollapse[0].classList.remove('hide');
    bxExpand[0].classList.add('hide');
    wrapper[1].classList.add('hide');
    wrapper[0].classList.add('width')
    editor.classList.add('height')
  })

  bxExpand[1].addEventListener('click', () => {
    bxCollapse[1].classList.remove('hide');
    bxExpand[1].classList.add('hide');
    wrapper[0].classList.add('hide');
    wrapper[1].classList.add('width')
    preview.classList.add('height')
  })

  bxCollapse[0].addEventListener('click', () => {
    bxExpand[0].classList.remove('hide');
    bxCollapse[0].classList.add('hide');
    wrapper[1].classList.remove('hide');
    editor.classList.remove('resize');
    wrapper[0].classList.remove('width')
    editor.classList.remove('height')
  })

  bxCollapse[1].addEventListener('click', () => {
    bxExpand[1].classList.remove('hide');
    bxCollapse[1].classList.add('hide');
    wrapper[0].classList.remove('hide');
    wrapper[1].classList.remove('width')
    preview.classList.remove('height')
  })

  return (
    <>
      <div className="editor-wrapper wrapper">Editor
      <i class='bx bx-expand'></i>
      <i class='bx bx-collapse-alt hide'></i>
        <textarea id="editor" onChange={handleChange} value={text}></textarea>
      </div>
      <div className="preview-wrapper wrapper">Preview
      <i class='bx bx-expand'></i>
      <i class='bx bx-collapse-alt hide'></i>
        <div 
        id="preview"
        dangerouslySetInnerHTML = {{
          __html: marked(text),
        }}
        ></div>
      </div>
    </>
  )
}

export default App
