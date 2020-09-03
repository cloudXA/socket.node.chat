🔗 [**hooks**]
<br /> <br />
### 1.2 [✔] 钩子初始化
**Tips:**初始化钩子变量name、room。同时监听input的change事件，让value值赋值给state下的name、room;当且晋档name、room不为空的时候，方可去除event的默认事件，点击效果出现：跳转到一个新的组件页面。

```javascript
const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div><input placeholder="Name" type="text" className="joinInput" onChange={(event) => setName(event.target.value)} /></div>
          <div><input placeholder="Room" type="text" className="joinInput mt-20" onChange={(event) => setRoom(event.target.value)} /></div>
          <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className="button mt-20" type="submit">进入</button>
          </Link>
        </div>
      </div>
  )
}

```
