
import React,{useState} from 'react'

const ImageSearch = ({ searchText}) => {
    const [text,setText] = useState('')

   //onsubmitform
   const onSubmit = (e) => {
       e.preventDefault();
       searchText(text);

   }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form className="w-full max-w-sm" onSubmit={onSubmit}>
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value) } type="text" className="apperance-none bg-transparent border-solid w-full text-green-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-purple-700 " placeholder="search Image"/>

                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-blue-500 hover:border-teal-700 text-sm border-4 py-1 px-2 rounded">Search</button> 
        

                </div>
                
            </form>
            
        </div>
    )
}

export default ImageSearch;
