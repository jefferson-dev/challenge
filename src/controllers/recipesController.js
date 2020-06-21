require('dotenv').config()

const axios = require('axios').default

class getController {
  async index(req,res) {
    const { i } = req.query
    const keywords = i.split(",")

    async function getRecipes() {
      const result = await axios.get(`http://www.recipepuppy.com/api/?i=${i}`,
          {timeout: 500})
          .catch(err => { res
            .status(408)
            .json({ message: 'RecipePuppy service unavailable'})
          })

      return result.data.results
    }

    async function getGif(title) {
      const response = await axios
      .get(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}&tag=${title}`, 
          {timeout: 500})
          .catch(err => { res
            .status(408)
            .json({ message: 'Giphy service unavailable'})
          })

      return response.data.data.image_original_url
    }

    const receitas = await getRecipes()

    async function getData() {
      return Promise.all(receitas.map(async receita => {
        let gif = null

        try {
          gif = await getGif(receita.title)
        } catch {}

        return {
          title: receita.title,
          ingredients: receita.ingredients.split(', ').sort(),
          link: receita.href,
          gif: gif
        }
      }));
    }

    const recipes = await getData()

    return res.json({ keywords, recipes })
  }
}

module.exports = new getController
