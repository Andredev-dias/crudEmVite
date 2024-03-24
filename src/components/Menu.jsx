export default function Menu(){
  return(
    <div>
      <div>
        <a href={`/gallery`}>
          <p>Gallery</p>
        </a>
        <a href={`/list`}>
          <p>List</p>
        </a>
        <a href={`/contact`}>
          <p>Contact</p>
        </a>
        <br />
        <a href={`/`}>
          <p>Sair</p>
        </a>
      </div>
    </div>
  )
}