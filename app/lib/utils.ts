import mongoose from "mongoose";

const connection: { isConnected?: mongoose.ConnectionStates } = {};

export const connectToDB = async () => {
	try {
		if (connection.isConnected) return;
		const db = await mongoose.connect(process.env.MONGO as string);
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
		console.log(error);
		throw new Error("something failed" || error);
	}
};
