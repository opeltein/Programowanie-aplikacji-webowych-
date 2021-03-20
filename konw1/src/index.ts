class StatsApp{
    liczba1Input: HTMLInputElement;
    liczba2Input: HTMLInputElement;
    liczba3Input: HTMLInputElement;
    liczba4Input: HTMLInputElement;
    sumaInput: HTMLInputElement;
    sredniaInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;
    constructor()
    {
        this.startApp();
    }
    startApp() 
    {
        this.getInputs();
        this.watchInputValues();
    }
    getInputs(){
        this.liczba1Input = document.querySelector('#liczba1');
        this.liczba2Input = document.querySelector('#liczba2');
        this.liczba3Input = document.querySelector('#liczba3');
        this.liczba4Input = document.querySelector('#liczba4');
        this.sumaInput = document.querySelector('#suma');
        this.sredniaInput = document.querySelector('#srednia');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }
    showStats(suma: number , srednia: number, min: number, max: number) 
    {
        this.sumaInput.value = suma.toString();
        this.sredniaInput.value = srednia.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
    computeData()
    {
        const liczba1 = +this.liczba1Input.value;
        const liczba2 = +this.liczba2Input.value;
        const liczba3 = +this.liczba3Input.value;
        const liczba4 = +this.liczba4Input.value;
        const suma = liczba1 + liczba2 + liczba3 + liczba4;
        const srednia = suma / 4;
        const min = Math.min(liczba1 , liczba2 , liczba3 , liczba4);
        const max = Math.max(liczba1 , liczba2 , liczba3 , liczba4);
        this.showStats(suma , srednia , min , max);
    }
    watchInputValues()
    {
        this.liczba1Input.addEventListener('input' , () => this.computeData());
        this.liczba2Input.addEventListener('input' , () => this.computeData());
        this.liczba3Input.addEventListener('input' , () => this.computeData());
        this.liczba4Input.addEventListener('input' , () => this.computeData());
    }
}

const statsApp = new StatsApp();