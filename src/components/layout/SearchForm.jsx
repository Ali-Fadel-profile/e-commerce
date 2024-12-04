import { useState, useEffect } from "react";
import useShowProductDetails from "@hooks/useShowProductDetails";
import styles from "./SearchForm.module.css";
import { allProducts } from "@products/productsObject";
import useScrollToTop from "@hooks/useScrollToTop";

function SearchForm() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const showProductDeatails = useShowProductDetails();

  useEffect(() => {
    if (searchInput.length > 0) {
      const filtered = allProducts.filter((product) =>
        product.productName.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchInput]);

  const handleSelectProduct = (product) => {
    showProductDeatails(product);
    setSearchInput("");
    setFilteredProducts([]);
    useScrollToTop();
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmitForm} className={styles.searchForm}>
      <input
        type="search"
        placeholder="What are you looking for?"
        aria-label="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {filteredProducts.length > 0 && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} onClick={() => handleSelectProduct(product)}>
              {product.productName}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchForm;
