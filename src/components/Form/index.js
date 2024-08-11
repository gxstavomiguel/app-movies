import styles from "./Form.module.css";
import { categories } from "../Category";

function Form() {
  return (
    <section className={styles.container}>
      <h2>Cadastro de vídeos</h2>
      <form>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
          />
        </div>
        <div>
          <label>Categoria</label>

          <select>
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
