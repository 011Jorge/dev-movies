import api from '../../services/api'

function Home() {
  async function getMovies() {
    const data = await api.get('/movie/popular')

    console.log(data)
  }

  getMovies()

  return (
    <div>
      <h1>I am Home</h1>
    </div>
  )
}

export default Home
