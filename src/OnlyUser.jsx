function OnlyUser({friend}) {
    console.log(friend);
  const { name, email } = friend;

  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
    </div>
  )
}

export default OnlyUser;
