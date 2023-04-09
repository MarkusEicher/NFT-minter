import { useState } from 'react';

export const AddFavs = ({onAdd}) => {

    const [favorites, setFavorites] = useState('')
    const [url, setUrl] = useState('')
    const [toExport, settoExport] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (!favorites || !url) {
            alert('Please fill in all fields')
            return
        }

        onAdd({favorites, url, toExport})

        setFavorites('')
        setUrl('')
        settoExport(false)

    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">  
            <label htmlFor="title">Favorite</label>
            <input type="text" placeholder="Add a Favorite" value = {favorites} onChange={(e) => setFavorites (e.target.value)}/>
        </div>
        <div className="form-control">  
            <label htmlFor="title">URL</label>
            <input type="text" placeholder="Add the URL of the site" value = {url} onChange={(e) => setUrl (e.target.value)}/>
        </div>
        <div className="form-control">  
            <label htmlFor="title">Set to export</label>
            <input type="checkbox" checked = {toExport} value = {toExport} onChange={(e) => settoExport (e.target.checked)} />
        </div>

        <input className="button" type="submit" value="Save Favorite" />

    </form>
  )
}
