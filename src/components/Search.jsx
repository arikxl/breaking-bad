import React, {useState } from 'react'

const Search = ({getQuery}) => {

    const [searchWord, setSearchWord] = useState('');

    const onChange = (inputWord) => {
        setSearchWord(inputWord);
        getQuery(inputWord);
    }

    return (
        <section className="search">
            <form >
                <input
                    type="text"
                    className="form"
                    placeholder="Search Characters"
                    value = {searchWord}
                    autoFocus
                    onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    );
};

export default Search;
