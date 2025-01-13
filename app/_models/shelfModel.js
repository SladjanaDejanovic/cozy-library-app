import mongoose from "mongoose";

const shelfSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		books: [
			{ type: String }, // Array of book IDs
		],
	},
	{ collection: "shelves" }
);

// const autorSchema = new mongoose.Schema(
// 	{
// 	  id: { type: mongoose.Schema.Types.ObjectId },
// 	  nome: {
// 		type: String,
// 		required: [true, "O nome do autor é obrigatório"]
// 	  },
// 	  nacionalidade: { type: String },
// 	},
// 	{ versionKey: false }
//   );

//   const autor = mongoose.model("autores", autorSchema);

//   export { autor, autorSchema };

// static async listarAutores(req, res, next) {
//     //static = Possibilita a chamada da função sem precisar criar um classe com 'new'
//     try {
//       const listaAutor = await autor.find({}); //find = método mongoose. Não passei parâmetro então ele vai trazer tudo
//       res.status(200).json(listaAutor);
//     } catch (error) {
//       next(err)
//     }
//   }

export default mongoose.models.Shelf ||
	mongoose.model("Shelf", shelfSchema);
