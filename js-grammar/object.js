var startTime = null;

function start() {
    startTime = Date.now();
    document.body.onkeydown = stop;
    console.log('スタートしました');
}
function stop() {
    console.log('ストップしました')
}

if (confirm('OKを押して10秒だと思ったら何れかのキーを押して下さい')) {
    start();
}

