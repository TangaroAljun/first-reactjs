function UserGreeting(props){
return(props.isloggedIn ? <h2>Welcome {props.username}</h2> : <h2>Pag log in daan </h2> )
}
export default UserGreeting