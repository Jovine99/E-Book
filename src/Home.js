import {useState} from 'react';
import BlogList from './BlogList';
import bk from './assets/images/bk2.png';
import bk2 from './assets/images/bk3.png'


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'My website', body:'lorem ipsum....', author:'renson', id:1},
        {title:'latest trends', body:'lorem ipsum....', author:'talia', id:2},
        {title:'software development', body:'lorem ipsum....', author:'cindy', id:3}
    ]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);

    }
    return (  
       <div className="Home">
        <div className="hero-section">
           <div className="content">
            <h2>Browse & Select E-books</h2>
            <p>Find the best E-books from your favorite writers,
                explore hundred of books with all possible categories, take advantage
                of 50% discount and much more
            </p>
            
                <button className="btn">
                    <a href="#">Explore Now</a>
                </button>
                
            </div>
            <div className="books">
            <img src={bk} alt="book image" style={{marginTop:100}}/>
            <img src={bk} alt="book image" style={{height:350}}/>
            <img src={bk} alt="book image" style={{marginTop:100}}/>
                </div> 
        </div>
       {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> */}
       </div>
    );
}
 
export default Home;