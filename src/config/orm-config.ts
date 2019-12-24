import {Stock} from "../entities/stock";
import {ConnectionOptions} from "typeorm";

const MODELS = [Stock];

/**
 * @TODO: This is used instead of a static `ormconfig.json` file as there was an issue importing all files in a
 *        specified directory through the file. Instead, this is provided as a JS literal to the createServer function.
 *        The same options can be specified here.
 */
export default {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "indices_viewer",
    /** Exported models are in a separate variable for convenience. */
    entities: MODELS,
    synchronize: true,
    logging: false
} as ConnectionOptions;
