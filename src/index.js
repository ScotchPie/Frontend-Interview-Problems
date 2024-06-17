class Scheduler {
  constructor(tasks, limit) {
    this.tasks = tasks;
    this.limit = limit;
  }

  async run() {
    const pool = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      const p = task();
      p.finally(() => {
        const index = pool.findIndex((t) => t === p);
        pool.splice(index, 1);
      });
      pool.push(p);
      if (pool.length === this.limit) {
        await Promise.race(pool);
      }
    }
  }
}

const task1 = () => fetch("https://www.baidu.com/");
const task2 = () => fetch("https://www.baidu.com/");
const task3 = () => fetch("https://www.baidu.com/");
const task4 = () => fetch("https://www.baidu.com/");
const task5 = () => fetch("https://www.baidu.com/");
const task6 = () => fetch("https://www.baidu.com/");

const s = new Scheduler([task1, task2, task3, task4, task5, task6], 6);

s.run();
