export const LAYOUT_CHANGE_INDEX = 'LAYOUT_CHANGE_INDEX';
export function changeIndex(index) {
    return{
        type:LAYOUT_CHANGE_INDEX,
        index:index
    }
}