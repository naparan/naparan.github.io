import './style.css'

export const test = () => {
    
    let user:{
        count: number;
        id: number;
    };

    user = {
        count: 10,
        id: 1

    };

    console.log(user.count);

    const button_count = document.getElementById("countDown") as HTMLButtonElement

    button_count.addEventListener("click", (event: MouseEvent) => {
        if (user.count == 0) {
            alert("使用上限に達しました");
            console.log(user.count);
        } else {
            user.count -= 1;
            alert("クーポンを使用しました。残り" + user.count + "回");
            console.log(user.count);
        }
        return event;
    })
}