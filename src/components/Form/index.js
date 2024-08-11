import styles from "./Form.module.css";
import { categories } from "../Category";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

function onSave(e){
    //Impede a pagina de recarregar e limpar os campos
    e.preventDefault()
    console.log(url, category)
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
      </form>
    </section>
  );
}

export default Form;
