export const AddFavs = () => {
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
            <label htmlFor="title">Set Export</label>
            <input type="checkbox" />
        </div>

        <input className="button" type="submit" value="Submit" />

    </form>
  )
}
