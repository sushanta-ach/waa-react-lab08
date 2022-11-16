
import Posts from '../../components/Dashboard/Posts'
import PostDetail from '../../components/PostDetail/PostDetail';
import {useState} from 'react'
import './Dashboard.css';
const Dashboard=()=>{
    
    const [posts,setPosts]=useState([
        {id:111, title:"Happiness",author:"John"},
        {id:112, title:"MIU",author:"Dean"},
        {id:113, title:"Enjoy Life",author:"Jasmine"}
    ])
    const[selectedState, setSelectedState]=useState(111);
       
    const changeTitle=()=>{

        const post = posts.find(p => p.id === 111);
        post.title=document.getElementById('title').value;
        const copyPosts = [...posts]
        setPosts(copyPosts);

    }
    const setSelected=(id)=>{
        setSelectedState(id);
    }
    return(
        <div>
            <div className='Post'>
                <Posts posts={posts} setSelected={setSelected}/>
            </div>
            <div class='title-change'>
                <input id="title" type="text" name="title" /><br/>
                <button onClick={changeTitle}>change name</button>
            </div>
            <div>
            <PostDetail data={posts.find(p=>p.id===selectedState)} />
            </div>
        </div>
    )
}
export default Dashboard