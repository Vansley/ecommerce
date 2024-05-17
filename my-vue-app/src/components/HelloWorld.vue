<template>
  <div class="ecommerce">
    <!-- Navbar -->
    <div class="navbar" style="background-color: #fbb922;">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Promoções</a></li>
        <li><a href="#">Produtos</a></li>
        <li>
          <button class="cart-button">
            <i class="pi pi-shopping-cart" style="font-size: 24px;"></i>
            <span style="font-size: 18px;">R$0,00</span>
          </button>
        </li>
        <!-- Adicione mais itens de menu conforme necessário -->
      </ul>
    </div>

    <!-- Card -->
    <div class="hero-card">
      <div class="content">
        <img src="url_da_imagem" alt="Imagem" class="center-image">
        <div class="search-container">
          <input type="text" placeholder="Pesquisar" class="search-input">
          <i class="pi pi-search search-icon"></i>
        </div>
      </div>
    </div>

    <!-- Menu lateral esquerdo -->
    <div class="sidebar">
      <!-- Links para categorias de produtos -->
      <h3>Categorias</h3>
      <ul>
        <li><a href="#">Categoria 1</a></li>
        <li><a href="#">Categoria 2</a></li>
        <!-- Adicione mais categorias conforme necessário -->
      </ul>
    </div>

    <!-- Conteúdo principal -->
    <div class="main-content">
      <!-- Carrossel -->
      <h2>Ofertas Especiais</h2>
      <Carousel :value="images" :autoplayInterval="5000"></Carousel>

      <!-- Produtos -->
      <h2>Produtos</h2>
      <div class="product-cards">
        <!-- Exemplo de card de produto -->
        <div class="product-card" v-for="product in products" :key="product.id">
          <img :src="product.image" alt="Product Image">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
          <button class="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      images: [
        { src: 'url_da_imagem_1', alt: 'Descrição da Imagem 1' },
        { src: 'url_da_imagem_2', alt: 'Descrição da Imagem 2' },
        // Adicione mais imagens conforme necessário
      ],
      products: [
        { id: 1, name: 'Produto 1', price: '$10', image: 'url_da_imagem_do_produto_1' },
        { id: 2, name: 'Produto 2', price: '$20', image: 'url_da_imagem_do_produto_2' },
        // Adicione mais produtos conforme necessário
      ]
    };
  }
}
</script>

<style scoped>
.ecommerce {
  display: flex;
  flex-direction: column; /* Organiza os elementos verticalmente */
}

.navbar {
  background-color: #fbb922; /* Altera a cor de fundo do navbar */
  color: white;
  width: 100%; /* Ocupa toda a largura da tela */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* Ajuste do padding */
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex; /* Exibe os itens horizontalmente */
}

.navbar ul li {
  margin-right: 20px;
}

.navbar ul li:last-child {
  margin-right: 0; /* Remove a margem direita do último item */
}

.navbar ul li a {
  color: white;
  text-decoration: none;
}

.cart-button {
  background-color: purple;
  color: white;
  border: none;
  padding: 20px 40px 20px 40px;
  margin-left: 1450px;
  border-radius: 100px;
  display: flex;
  align-items: center;
}

.cart-button i {
  margin-right: 5px;
}

.hero-card {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

.hero-card .content {
  max-width: 800px;
  margin: 0 auto;
}

.center-image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.search-container {
  position: relative;
}

.search-input {
  width: calc(100% - 40px); /* Subtrai o espaço ocupado pelo ícone de pesquisa */
  padding: 10px;
  margin-top: 20px;
  box-sizing: border-box;
  border-radius: 30px; /* Arredondamento das bordas */
  padding-right: 40px; /* Espaço para o ícone de pesquisa */
}

.search-icon {
  position: absolute;
  right: 30px;
  top: 70%;
  transform: translateY(-50%);
  color: black;
}
</style>