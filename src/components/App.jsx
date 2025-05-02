import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ItemsContextProvider from "../context/ItemsContextProvider";

function App() {
  // const totalNumberOfItems = items.length;

  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;

//children composition for prop drilling its only applicable for small projects
{
  /* <Header>
<Logo />
<Counter
  numberOfItemsPacked={items.filter((item) => item.packed).length}
  totalNumberOfItems={items.length}
/>
</Header> */
}
