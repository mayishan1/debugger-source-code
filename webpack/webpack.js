import webpack from "webpack";
import options from "./webpack.config.js";

debugger
const compiler = webpack(options);

debugger
compiler.run((err, stats) => {
  console.log(stats.toJson());
});
