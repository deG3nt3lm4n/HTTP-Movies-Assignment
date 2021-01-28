import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialMovieItems = {
  title: '',
  director: '',
  metascore: '',
  stars: [],
  id: new Date(),
}

const UpdateMovie = ({setMovieList}) => {

  const { push } = useHistory()
  const [item, setItem] = useState(initialMovieItems)
  const params = useParams()

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        let words = res.data
        words.stars = res.data.stars.join(', ')
        setItem(words)
      })
      .catch(err => console.log(err))
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    console.log('p', name, value)
    setItem({
      ...item,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('poop')
  }


  useState(() => {
    fetchMovie(params.id)
  },[])



  return (
    <div>
      <h1>Update Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="title" placeholder="tombstone" onChange={handleFormChange} value={item.title} />
        </label>

        <label>
          Director:
          <input type="text" name="director" placeholder="wllt Bty" onChange={handleFormChange} value={item.director} />
        </label>

        <label>
          MetaScore:
          <input type="number" name="metascore" placeholder="89" onChange={handleFormChange} value={item.metascore} />
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default UpdateMovie
