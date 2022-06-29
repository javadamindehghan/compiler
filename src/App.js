
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
    const [light, setlight] = useState(false)
    const [editortext,seteditortext] = useState('<div style=color:red>سلام دنیا</div>')
    const [check, setcheck] = useState(false)
    const editor= useRef()
    function liverun(){
        
    }
 useEffect(() => {
     run()
   
 }, [])
 useEffect(() => {
    if (check) {
        run()
    }
  
}, [editortext])

    
const run=()=>{
    editor.current.src=`data:text/html;charset=utf-8,${ encodeURI(editortext)}`
}
  return (
    <div classNameName="App">
       <div className="editor-menu">
        <button onClick={()=>setlight(false)} className="btn btn-dark">تاریک</button>
        <button onClick={()=>setlight(true)} className="btn btn-light">روشن</button>
        <button onClick={run} className="btn btn-run"><i className="fa fa-play"></i> اجرا</button>
        <div className="live">
            <label onChange={()=>setcheck(!check)}  htmlFor="live">زنده</label>
            <input onChange={()=>setcheck(!check)}    type="checkbox" id="live"/>
        </div>
    </div>


    <div className="container">
        <div className="left">
            <textarea onChange={(e)=>seteditortext(e.target.value)} value={editortext} ref={editor}  style={light?{backgroundColor:'#fff',color:'#333'}:{backgroundColor:'#333',color:'#fff'}} className="editor" />

        </div>
        <div className="bar"></div>
        <div className="right">
            <iframe ref={editor} src="" frameBorder="0" height="200px" width="50px" className="iframe"></iframe>
        </div>
    </div>
    </div>
  );
  
}

export default App;
