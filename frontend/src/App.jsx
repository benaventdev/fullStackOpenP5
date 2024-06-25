import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Notification from './components/Notification'
import loginService from './services/login'
import blogService from './services/blog'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlogTitle, setNewBlogTitle] = useState([])
  const [newBlogAuthor, setNewBlogAuthor] = useState([])
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

  const handleBlogTitleChange = (event) => {
    event.preventDefault()
    try {
      setNewBlogTitle(event.target.value)
      console.log("El valor del title es ", event.target.value)
      addNote(newBlog)
    } catch (exception) {
      setErrorMessages('Wrong blog format')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleBlogAuthorChange = (event) => {
    event.preventDefault()
    try {
      setNewBlogAuthor(event.target.value)
      console.log("El valor del author es ", event.target.value)
      addNote(newBlog)
    } catch (exception) {
      setErrorMessages('Wrong blog format')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const blogForm = () => (
    <form onSubmit={() => console.log("Hello, adding blog")}>
      Blog title: <br/>
      <input
        value={newBlogTitle}
        onChange={handleBlogTitleChange}
      /><br/><br/>
      Author name:<br/>
      <input
        value={newBlogAuthor}
        onChange={handleBlogAuthorChange}
      /><br/>
      <button type="submit">Save Blog</button>
    </form>  
  )

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newBlogTitle,
      author: newBlogAuthor
    }

    setBlogs(blogs.concat(blogObject))
    setNewBlogAuthor('')
    setNewBlogTitle('')
  }

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
      <Notification message={errorMessages}/>
      
      {user === null 
        ? loginForm()
        : <div>
            <p>{user} Fake-login</p>
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
          <Blog key={blog.id} blog={blog}/>
        )}
      </ul>
      <Footer />
    </div>
  )
}

export default App