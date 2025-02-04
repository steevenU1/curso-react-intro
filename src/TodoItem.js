function TodoItem (props) {
    return(
       <li>
       <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
  <path d="M9 12l2 2l4 -4"></path>
</svg></span> 
        <p>{props.text}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2" margin-right="15px">
  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
</svg>
       </li>
    );
  }

  export {TodoItem};