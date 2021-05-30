import {Chalk} from "chalk";
import {Inquirer} from "inquirer";
import {Cyan, IAutoInquire, IAutoMapper, IExecute,} from "./Typings";

export = async function (folderName: string, chalk: Chalk, inquirer: Inquirer, autoInquirer: IAutoInquire, autoMap: IAutoMapper, execute: IExecute): Promise<Cyan> {
	const question = {
		name: ['kirin', 'Your Name (DNS compatible)']
	}

	const answers = await autoInquirer.InquireInput(question);

	return {
		globs: {root: "./Template", pattern: "**/*.*", ignore: ""},
		variable: answers,
	} as Cyan;
}
