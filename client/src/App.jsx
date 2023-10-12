import useAuth from "./hook/useAuth";
 import MyContext from "./context/context";
 import RoutesProvaider from "./RoutesProvaider/RoutesProvaider";
function App() {
  const data = useAuth()
  const route = RoutesProvaider(data.token)


  return (
    <MyContext.Provaider value = {data}>
    {route}
    </MyContext.Provaider>
  )
}

export default App;
