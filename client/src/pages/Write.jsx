import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const[value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder="Title" />
          <div className='editorContainer'> 
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
          </div>
        
      </div>
      <div className="menu">
        <div className="item"> 
        <h1>Publish</h1>
        <span>
          <b>Status:</b> Draft
        </span>
        <span>
          <b>Visibility:</b> Public
        </span>
        <input style={{display:"none"}} type="file" id="file" name=""/>
        <label className="file" htmlFoe="file">Upload Image</label>
        <div className='buttons'>
          <button>Save as a draft</button>
          <button>Update</button>
        </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-1</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-2</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-3</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-4</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-5</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-6</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-7</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-8</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-9</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-10</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-11</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-12</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-13</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-14</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-15</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-16</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-17</label>
          </div>
          <div className="cat">
          <input type="radio" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">All</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write