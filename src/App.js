import "./styles.css";

export default function App() {
  return (
    <div>
      <header class="header">
        <a href="/">logo</a>
        <nav>
          <ul class="menu">
            <li> <a href="/">sobre</a> </li>
            <li> <a href="/">infromações</a> </li>
            <li> <a href="/">contatos</a> </li>
          </ul>
        </nav>
      </header>
      <h1>sec felx box</h1>  
      <section class='flex'>
        <div>
           <img src='src/img/imaget.jpg' alt='imagem'/>
           <p>imagem 1</p>
        </div> 
        <div>
           <img src='e' alt='imagem'/>
           <p>imagem 2</p>
        </div>      <div>
           <img src='e' alt='imagem'/>
           <p>imagem 3</p>
        </div>      <div>
           <img src='e' alt='imagem'/>
           <p>imagem 4</p>
        </div>      <div>
           <img src='e' alt='imagem'/>
           <p>imagem 5</p>
        </div>      <div>
           <img src='e' alt='imagem'/>
           <p>imagem 6</p>
        </div> 
      </section>
     </div>
  );
}
