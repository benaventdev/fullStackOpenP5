import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Notification from './components/Notification'
import loginService from './services/login'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNetBlog] = useState([])
  const [showAll, setShowAll] = useState([])
  const [errorMessages, setErrorMessages] = useState([])
  const [username, setUsername] = useState('')   
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()        
    try {     
      const user = await loginService.login({        
        username,
        password,
      })      
      
      setUser(user)      
      setUsername('')      
      setPassword('')    
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  
  const handleBlogChange = (event) => {
    event.preventDefault()
    try {
      
    } catch (exception) {
      setErrorMessage('Wrong blog format')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )

  const blogForm = () => (
    <form onSubmit={() => console.log("Hello, adding blog")}>
      <input
        value={newBlog}
        onChange={handleBlogChange}
      />
      <button type="submit">save</button>
    </form>  
  )

  useEffect(() => {
    blogService
      .getAll()
      .then(blogs =>
        setBlogs( blogs )
      )  
  }, [])

  return (
    <div>
      <h1>Blogs</h1>
      <Notification message={console.errorMessages}/>
      
      {user === null 
        ? loginForm()
        : <div>
            <p>{user.name} logged-in</p>
            {blogForm()}
          </div>
      }

      <h2>Blogs</h2>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          important
        </button>
      </div>
      <ul>
        {blogs.map(blog => 
          <Blog blog={blog}/>
        )}
      </ul>
      <Footer />
    </div>
  )
}

export default App