function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessage() {
  console.log('开始');
  await delay(1000);
  console.log('1秒后');
  await delay(1000);
  console.log('又1秒后');
}

showMessage();
// delay(3000);

function myFunction() {
                
}