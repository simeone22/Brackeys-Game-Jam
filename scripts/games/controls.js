class controls{
    constructor (){
        this.up = false;
        this.down = false; 
        this.left = false;
        this.right = false;

        this.#addEventListeners();
    }

    #addEventListeners(){
        document.onkeydown = (e) =>{
            switch(e.key){
                case "ArrowUp":
                    this.up = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.down = true;
                    break;
                case "ArrowLeft":
                    this.left = true;
                    break;
            }
        }

        document.onkeyup = (e) =>{
            switch(e.key){
                case "ArrowUp":
                    this.up = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowDown":
                    this.down = false;
                    break;
                case "ArrowLeft":
                    this.left = false;
                    break;
            }
        }
    }
}