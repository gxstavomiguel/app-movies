import styles from "./Form.module.css";
import { categories } from "../Category";
import { useState } from "react";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [ videos, setVideos ] = useState([])
  const [ errors, setErrors ] = useState('')

  function valideUrl(url) {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    
    if(!regex.teste(url) || url.length < 43){
        setErrors('ERRO: URL inválida');
        return false;
    } else {
        return url.substring(32, 43) // pega id do video
    }
}

function onSave(e){
    //Impede a pagina de recarregar e limpar os campos
    e.preventDefault()
    console.log(url, category)

    const urlVideo = valideUrl(url)
    if(urlVideo && category) {
        //salvar dados
        const newVideo = { url, category }
        setVideos([...videos, newVideo])
        localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
        setUrl('')
        setCategory('')
    } else {
        setErrors('ERRO: URL inválida!')
    }
    }


    if(!category || category === '-'){
        console.log('Escolha uma categoria')
        setErrors('ERRO: Escolha uma categoria!')
        return 
    } else {
        setErrors('')
    }

  return (
    <section className={styles.container}>
      <h2>Cadastro de vídeos</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            minLength="43"
            maxLength="43"
          />
        </div>
        <div>
          <label>Categoria</label>

          <select
            required="required"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="-">Selecione uma Categoria</option>
            {categories.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
        <div>
            { errors }
        </div>
      </form>
    </section>
  );
}

export default Form;
