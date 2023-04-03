import classes from './SearchSummary.module.css';

const SearchSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>O melhor buscador de preço feito pra você.</h2>
      <p>
        Busque o preço do produto desejado nos melhores market places disponíveis atualmente.
      </p>
      <p>
        Atualmente não buscamos em nenhum site porque não estão disponíveis.
      </p>
    </section>
  );
};

export default SearchSummary;
