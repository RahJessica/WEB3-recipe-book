import { useState } from 'react'
import recipes from './data/recipes.json'
import styles from './App.module.css'
import RecipeList from './components/RecipeList/RecipeList.jsx'

export default function App() {
  const [orderedRecipes, setOrderedRecipes] = useState(recipes)
    const [search, setSearch] = useState('')

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse())
  }

    const filteredRecipes = orderedRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <div className={styles.headerRow}>
                    <h1 className={styles.title}>Recipe Book</h1>
                    <button
                        type="button"
                        className={styles.toggle}
                        onClick={handleToggleOrder}
                    >
                        Reverse order
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Rechercher un plat..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.search}
                />
            </header>

            <main className={styles.main}>
                <RecipeList recipes={filteredRecipes} />
            </main>
        </div>
    )

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>
          <button
            type="button"
            className={styles.toggle}
            onClick={handleToggleOrder}
          >
            Reverse order
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <RecipeList recipes={orderedRecipes} />
      </main>
    </div>
  )
}
