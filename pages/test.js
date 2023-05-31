if (typeof window !== 'undefined') {
    localStorage.removeItem("name")
    document.getElementById("text0").addEventListener("keydown", function (e) {
        console.log(e.code)
        console.log(e.which)
        if (this.selectionStart % this.cols == 0) {
            if (e.code == "Backspace"){
                this.rows = this.rows - 1;
                console.log("back")
            } else {
                var le = this.scrollHeight;
                this.style.height = "auto";
                console.log(e.key)
                this.rows = this.rows + 1;
                console.log(le);
                console.log("the cursor position is ", this.selectionStart);
                console.log("the max is " , this.scrollWidth);
                console.log("the width is ", this.cols);
}}})
}

export default function Search() {
    
    return(
        <textarea placeholder="enter something" id="text0" cols={10} rows={2} style={{width: "auto", height: "auto"}}></textarea>
    )
}