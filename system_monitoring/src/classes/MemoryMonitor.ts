import os from "os"

export class MemoryMonitor {

    public getMemoryUsage = (): number => {
        const totalMemory = os.totalmem();
        const memoryUsage =totalMemory - os.freemem();
        return (memoryUsage / totalMemory) * 100;
    }
}