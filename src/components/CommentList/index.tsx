import React from 'react';

export default ({ list, data }: any) => {
  return (
    <div>
      <ul>
        {data && data.map((item: any) => (
          <li key={item.id}>
            {item.content}
          </li>
        ))}
      </ul>

    </div>
  )
}
