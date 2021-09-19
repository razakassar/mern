export const incNumber = () => {
    return { type: "INCREMENT" }
}
export const decNumber = () => {
    return { type: "DECREMENT" }
}
export const incNumberby5 = (x) => {
    return {
        type: "INCREMENTBY5",
        payload: x
    }
}
export const toggle = () => {
    return { type: "toggle" }
}