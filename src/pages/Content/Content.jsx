import React, { useState, useEffect } from "react";
import BlockOfContent from "../../components/BlockOfContent/BlockOfContent";
import classes from "./Content.module.css";
import "../../style/style.css";
import ModalForOrder from "../../allPart/ModalForOrder/ModalForOrder";

import Header from "../../allPart/Header/Header";
import Sorting from "../../allPart/Sorting/Sorting";
import { useSortingContent } from "../../customHooks/useSortingContent";
import Menu from "../../allPart/Menu/Menu";
import { useFetching } from "../../customHooks/useFetching";
import Loader from "../../components/UI/Loader/Loader";
import { ContentServies } from "../../API/ContentServies";
import { useParams } from "react-router-dom";

function Content() {
  const [visibMod, setVisibMod] = useState(false);
  const [PosOrder, setPosOrder] = useState([]);
  const [goodBye, setGoodBye] = useState(true);
  const [filter, setFilter] = useState("");
  const [somethingContent, setSomethingContent] = useState([]);

  const Content = useSortingContent(somethingContent, filter);

  const params = useParams();

  const [fetching, isLoading, error] = useFetching(async (ind) => {
    setFilter("");

    const res = await ContentServies.GetQuery();

    setSomethingContent(res[ind]);
  }, params.chapter);

  useEffect(() => {
    fetching(params.chapter);
  }, [params.chapter]);


  return (
    <div className={classes.App}>
      <Header
        QualPosOrder={PosOrder.length}
        setVisibMod={setVisibMod}
      />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className={classes.Error}>Произошла ошибка ${error}</h1>
      ) : (
        <main>
          <div className={classes.Filter}>
            <div className={classes.TitleMenu}>Каталог</div>
            <Sorting
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          <Menu />

          <main className={classes.Allcontent}>
            {Content.map((content) => (
              <BlockOfContent
                value={content}
                addThingForOrder={setPosOrder}
                quantityThingForOrder1={PosOrder}
              />
            ))}

            <ModalForOrder
              visibMod={visibMod}
              setVisibMod={setVisibMod}

              PosOrder={PosOrder}
              setPosOrder={setPosOrder}
              QualPosOrder={PosOrder.length}

              setGoodBye={setGoodBye}
              goodBye={goodBye}
            >
            </ModalForOrder>
          </main>
        </main>
      )}
    </div>
  );
}

export default Content;
