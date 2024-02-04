import { useState } from "react";

const themeObj = localStorage.getItem('theme') ?JSON.parse(localStorage.getItem('theme')): {};
const useTheme = (id) => {
    const [themes, setThemes] = useState(() => {
        const storedTheme =localStorage.getItem('theme');
        return storedTheme? JSON.parse(storedTheme) : {};
      });

      const changeTaskTheme = (nColor, cId, taskId) => {
        const newTheme = { color: nColor, cIndex: cId, tId: taskId};
        if(Object.hasOwn(themeObj,taskId)){
                    themeObj[taskId] = {...themeObj[taskId], cIndex: cId, color:nColor};
            }else if(!Object.hasOwn(themeObj, taskId)){
                    themeObj[taskId] = newTheme;
                }
                localStorage.setItem('theme', JSON.stringify(themeObj));
                setThemes(themeObj)
    }
    const theme = themes[id] || { color: "", cIndex: null, tId: null};
    return {changeTaskTheme, theme}
}

export default useTheme