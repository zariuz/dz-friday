import SuperButton from "../common/SuperButton/SuperButton";
import {SuperInput} from "../common/SuperInput/SuperInput";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import s from './TestPage.module.css'

export const TestPage = () => {
    return <div className={s.column}>
        <SuperButton>
            button
        </SuperButton>
        <SuperInput/>
        <SuperCheckbox/>
    </div>
}
