import React from 'react'
import { members } from '../data.js'

export default function Team() {
    return (
        <div>
            <ul>
                {members.map(({ name, avatar }) => {
                    return (
                        <li key={name}>
                            {name}
                            <img src={avatar} />
                        </li>

                    )
                }
                )}
            </ul>
        </div>
    )
}