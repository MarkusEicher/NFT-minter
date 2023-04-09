import { useState } from 'react';

export const AddFavs = () => {

    const [favorites, setFavorites] = useState('')
    const [url, setUrl] = useState('')
    const [toExport, settoExport] = useState(false)


  return (
    <form className="add-form">
        <div className="form-control">  
            <label htmlFor="title">Favorite</label>
            <input type="text" placeholder="Add a Favorite" />
        </div>
        <div className="form-control">  
            <label htmlFor="title">URL</label>
            <input type="text" placeholder="Add the URL of the site" />
        </div>
        <div className="form-control">  
            <label htmlFor="title">Set to export</label>
            <input type="checkbox" />
        </div>

        <input className="button" type="submit" value="Submit" />

    </form>
  )
}
