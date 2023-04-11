import { useState } from 'react';

export const AddFavs = ({onAdd}) => {

    const [title, setTitle] = useState('')
    const [uri, setUri] = useState('')
    const [toExport, settoExport] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (!title || !uri) {
            alert('Please fill in all fields')
            return
        }

        onAdd({title, uri, toExport})

        setTitle('')
        setUri('')
        settoExport(false)

    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">  
            <label htmlFor="title">Favorite</label>
            <input type="text" placeholder="Add a Favorite" value = {title} onChange={(e) => setTitle (e.target.value)}/>
        </div>
        <div className="form-control">  
            <label htmlFor="title">uri</label>
            <input type="text" placeholder="Add the uri of the site" value = {uri} onChange={(e) => setUri (e.target.value)}/>
        </div>
        {/* <div className="form-control">  
            <label htmlFor="title">Set to export</label>
            <input type="checkbox" checked = {toExport} value = {toExport} onChange={(e) => settoExport (e.target.checked)} />
        </div> */}

        <input className="button" type="submit" value="Save Favorite" />

    </form>
  )
}
