import React from 'react'
import { Link } from "react-router-dom";
import './Single.css';
import Menu from '../components/Menu/Menu';


const Single = () => {


  return (
    <div className='singlePostPage'>
     
    <div className='content'>
     
      <img src='https://picsum.photos/300/300'></img>
     <div className='user'>
        <img src = 'https://picsum.photos/10/10'></img>
        
        <div className='info'>
          <span>John</span>
          <p>Posted 2 days ago</p>
          </div>
          
          <div className='deletePost'>
           <Link to = {"/write?=edit2"}>  <img src='https://picsum.photos/10/10'></img>  </Link>
           <Link to = {"/write?=edit2"}>  <img src='https://picsum.photos/10/10'></img> </Link>   
          </div>
          
         
         
        </div>
        <h2>LOREM IPSUM DOLAR SIT AMET</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at suscipit odio. Vivamus laoreet euismod mauris, at elementum eros egestas nec. Aliquam molestie augue sit amet elit lobortis, non mollis risus euismod. Morbi consequat sollicitudin elit eget varius. Aenean quis fermentum odio. Cras luctus leo et purus blandit, facilisis varius mauris aliquet. Mauris pharetra, dolor nec molestie accumsan, est tortor fermentum sapien, sit amet vehicula orci mauris eu nunc. 
          Integer non enim odio. Integer vestibulum ullamcorper tortor, interdum lacinia justo molestie a. Vivamus id tellus in turpis ullamcorper mollis quis ut massa. Ut sagittis sapien turpis, vitae imperdiet libero molestie ut. Aliquam erat volutpat. Integer et vulputate odio.
        Suspendisse vitae tortor eget magna gravida congue.
        Nunc scelerisque, nisi vitae pulvinar posuere, nibh quam blandit arcu, et lobortis lorem eros eu magna. Vestibulum non mauris non arcu aliquam tincidunt eu a arcu. Phasellus pellentesque, magna sit amet rutrum suscipit, tellus orci varius orci, in tincidunt ex justo ullamcorper est. Nunc ut egestas diam. Sed cursus laoreet eros quis luctus. Donec justo metus, congue ut justo in, ultrices interdum risus. Aliquam convallis sed sapien sed accumsan. Nam aliquam, arcu sit amet eleifend lobortis, nibh enim interdum mauris, vitae egestas sem metus vitae mi.</p>
    </div>
 
 <Menu />



  </div>
  )
}

export default Single