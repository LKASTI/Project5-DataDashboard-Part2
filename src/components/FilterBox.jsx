import react from "react"

const FilterBox = (props) => {

    return(
        <label className="">
            <select onChange={props.handleFilterSelect}>
                <option>--Choose a Filter--</option>
                <option>none</option>
                <optgroup label='Gender'>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </optgroup>
                <optgroup label='Species'>
                    <option value="droid">droid</option>
                    <option value="human">human</option>
                    <option value="alien">alien</option>
                </optgroup>
            </select>
        </label>
    )
}

export default FilterBox