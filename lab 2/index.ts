appStart();

function appStart(): void {
    document.body.addEventListener('keypress', onkeyDown);
}
function onkeyDown(ev: KeyboardEvent): void{
console.log(ev);
const key = ev.key;
const time = ev.timeStamp;
const hihatSound: HTMLAudioElement = document;
hihatSound.currentTime = 0;
hihatSound.play();


}