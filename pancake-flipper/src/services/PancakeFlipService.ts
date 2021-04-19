
class PancakeFlipServiceTask {
    panSize: number = NaN;
    pancakeState: Array<Boolean> = new Array<Boolean>(0);
}

class PancakeFlipService {
    static tasksFromInput(text: String): Array<PancakeFlipServiceTask> | Error {
        let result = new Array<PancakeFlipServiceTask>();

        let position = 0;
        while (position <= text.length - 1) {
            let output = this.taskFromInput(text, position);
            if (output instanceof Error) {
                return output;
            }

            result.push(output[0]);
            position = output[1];
        }

        return result
    }

    static taskFromInput(text: String, startPosition: number): [PancakeFlipServiceTask, number] | Error {
        let result = new PancakeFlipServiceTask();

        let position = startPosition;
        let panSizeText: string = "";
        while (position <= text.length - 1) {
            let currentSym = text[position];
            if (currentSym === " ") {
                result.panSize = Number.parseInt(panSizeText, 10);
                position++;
                break;
            }

            panSizeText += currentSym;
            position++;
        }

        while (position <= text.length - 1) {
            let currentSym = text[position];
            if (currentSym === "+") {
                result.pancakeState.push(true);
            } else if (currentSym === "-") {
                result.pancakeState.push(false);
            } else if (currentSym === " ") {
                position++;
                break;
            } else {
                return new Error("Invalid symbol");
            }

            position++
        }

        if (isNaN(result.panSize)) {
            return new Error("Invalid pan size")
        } else if (result.pancakeState.length === 0) {
            return new Error("Invalid pancake state")
        }

        return [result, position];
    }

    processTask(task: PancakeFlipServiceTask): number | string {
        let totalMutations = 0;
        var pancakeState = task.pancakeState;
        let panSize = task.panSize;
        for( let i = 0; i < pancakeState.length; i++ ) {
            if( pancakeState[i] ) {
               continue;
            }

            if( i + panSize <= pancakeState.length ) {
                for( let j = i; j < i + panSize; j++ ) {
                    pancakeState[j] = !pancakeState[j];
                }
                totalMutations++;
            } else {
                return "IMPOSSIBLE";
            }
        }

        return totalMutations
    }

    processPancakeInput(inputData: string): Array<string | number> | Error {
        let tasks = PancakeFlipService.tasksFromInput(inputData);
        if (tasks instanceof Error) {
            return tasks
        }

        return tasks.map(task => this.processTask(task))
    }


}

export default PancakeFlipService;
