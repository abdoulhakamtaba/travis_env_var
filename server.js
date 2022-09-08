
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const text_print = process.env.TEXT_PRINT

console.log(process.env)

async function main() {
  while(true) {
    console.log(`${text_print}`);
    await sleep(5000);
  }
}

main();
