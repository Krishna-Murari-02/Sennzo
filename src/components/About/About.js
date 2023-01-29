import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function About() {
  return (
    <>
      <div className="w-full flex flex-col  items-center  ">
        <Navbar />
        <div className=" space-y-5 w-11/12 mx-auto md:w-2/4 flex flex-col mt-20 ">
          <h1 className="font-quick font-bold dark:text-white md:text-6xl text-3xl">
            In short, about Sennzo.
          </h1>
          <p className="font-medium  font-poppin text-gray-800 dark:text-white ">
            We are a software company, based in Czech Republic. Our aim is to
            simplify decisions you encounter in your everyday life. We achieve
            this with our algorithm that analyzes your answers and then gives
            you the best possible match.
          </p>
          <p className="font-medium font-poppin text-gray-800 dark:text-white">
            Reduce your decision-making to minimum. Use Sennzo.
          </p>
          <p className="font-semibold font-poppin text-gray-800 dark:text-white text-xl">
            Hi, Impact
          </p>
        </div>
        <hr className="w-10/12 border-gray-300 mt-8 mb-12" />

        <div className=" w-11/12 mx-auto md:w-2/4 flex flex-col items-center">
          <h1 className="font-quick font-extrabold text-3xl dark:text-white">
            The people behind Sennzo.
          </h1>
          <p className="font-medium  font-poppin text-gray-800 dark:text-white">
            Currently Sennzo team consist of two people.
          </p>
          <img
            className="border-2 w-56 h-56 mt-20 rounded-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADdCAMAAABzPkXkAAAAWlBMVEX///+enp7d3d3u7u7t7e3s7Oz6+vrz8/Py8vL29vb7+/vHxcWampqbm5vg4ODi4uLV1dWysrLNzc2ioqKrq6u7u7u3t7empqbDw8Ozs7PKysrS0tKSkpLGw8P51KavAAAQkElEQVR4nO1d6XqzKhA2rmhArZqYJqf3f5uHRQURBBFN2uebP6VOEucVZphFIAgIZRGmjDZj3IpT0kpJM6IXAbmYc35hw8/1/GDiA9qMJn6h56c2/JTzBVDBP5T/UP5GlDEmdiHBrYShIE32BaDlR5yfcz6TYs5PlPxBSiU/nvMZSs7POD/W8geUGaGUEm/mpJWrLtrxs8P4uT1fAKXpbNwc+242Qqe+mUagFX8aYcOzF/jkponMj+LZCLXjC0Iv1M40pO31cIU/STnokZWeWulhoRf6H0q5832M2MWIE1Aq+d5H7CHWZ5WPOZiX53utyxbrMzyG42eSgR+F/0F46e9NlQEQnTWTGIe0NMIcvQIw8kF3IYQghF2TgL/k+8RlnUSM38DLSAiie/UnUGIpkmeHYDjwAbqIhOAdnIfyEL3EXJA0LYQI1mDg93OUBOeD6Z3q+970kn8g5R8AuJmsoU7m1mKBeuCnD0gGKPqiUidRsgCJCV5qhop8aQWVwFej4vxkDio+0CtIgxdkSggpjByUrQIk4T9Z353tFXhACZJuNDSQ2hjcsUqM5APfvxQleMGp4yAeUumr1YLEn+jTQ1Gq9dLGGq3pZQzEjkPP5guuYCQfadNUijcXemljbTR6SbyggjlHBWkC3AIpbhYpaWbFyAeUn3J+zvnZyC8GfnCbgUJQrZAzmJnwfdPvpyM/53wuNCjmoCjeFe88Gvtum/cugbQi1E8jcIN3DqQRqvbeA+OQHvRsi1cA9HZmheC9+E2+T/Z0AUnG9XfFBD4IpXZEOoxYbF2dQFKc7Qu4jFhDvBn4jidTPk06Eeyq1Hu86XkmiUBtNqem/mz8zySevYKvXR05dOdXAj7Y9wFKb3w7obYCJ6GMN6OMEo037oCzAttRxltRxgaUsQrlPpDoa/ZvFalQxgaUuhwe+4BNPLkWRZNm/rUL5P0mfh17QqZ4UxlPynzfXkHm4NUJ1JbdHPVXGn2e74OnkB0YUVtX/fwSvILPQ5nswIjDyzAse/li5Rvl7uwWuLkrJUKPEqNs5csd8JbdAoTSAlNKm6SFQzdMOW0q+dmCHzs66AjB/hFikEuUFxgGC6EyvVArQm+sBi1nkoFv7EpEAEGI2OdaTH3fd1+3a10SjCqUl04bb85H8En1yyBb60oEUdt93x7P5lXXdThSyWj6d4kSVh/l4QVXLUqEukcTzgEpaWF9aB7XY3ZrvDBZG8kajSh1ufQ40GGE3TWs1tFNKDvF1zN9rn1EqbI2C1A5JhaF4T+4mY7NMV6bXRyKjhI/D9VdCbuXoQNFlArXCTaFUigudKoXmoNi/bF7JlHbHjpBWFOp+pE+n/ru/fVL9XB9bQEZlg9VDSXR6+HZvo9qskRtuAlkGDaKX2EVFv/ZLReUinQW6rdBJKR6Vo8dKIXslnVfRsuoeeQvNcoFpGLCxF7ehGIZb0b2fanObm2qX0bLma7dDlJpZC8I8JnkvfXLZDnUajOoJUq1+fkU36eSUcJmo+FhVKtQhh+CchE/o3vlAlLl42EjC3x5eE5Z50kvI3kKcFFKilIxZGETKd6n3Zx1downxy9hfiChhJtcHpEUQxY2wXjTXBVP2sWbwfAYdPGkoRpER7BU4nLtSqXDzl6skEboW+qX84G2zXud09L9UaJ8i4cnoXTGqLI/6OoRpTaeXItJxnhzjrJz78qwXNR3h77k8aQ2JlmLN4MpXstzqam8qOAXM5R7BqwqXfksnISaNz3UL8EcpYvbw0nWTPQEn1G/BE8RZb+nK5fOLGy8eAUeUIqBF/rehzIMpRHrx/dRo5TizXU/VgwM96lluDBAW/xYQz6WhW48XhQfC70oxZNivBnNYxL42tmVYTmrndGYhN1UiieNQsv8vfVLf8aHwuwE1URMakM8qY83PeZ9BIvh7t6JMDlInit4t+8jOrJ7fIKJuNeObp+DspxQoi8fKPl0wlyfE+uXK3qZc5Q3LygnP2PMVOr0blf9UhlP6vn5lH3bPZEwmmZgmGyMJ9X83fVLOmzu47NHTy8opxwLlNb0vbN+yb0f2PgAyfuy27By8ej6JfcL4P7pUkSJHp5QLkp9o7XRx5OK+iU6BiU2Pqb6pSHeFOqXe0I32gLjPL4nUaBCWaXuQgn8gD+GzfXLqW+TcKqU+EE5RpkojKz77vD6pRD8+kXZl6VeD0/2fXIsF/LnxnKU6F6GmUeU2qlmkY9VoIzDcHyJzjNKPPsmWpTKfKxl/ZK01KFbzvk83iR3qfhLAa0Xp2BCiS12OY6loX7JhcpthN5Vv4zFOokgl1+UNIfEZxKT33ps/ZIKhrhcvlAStcQoP8P3iYlcQ+TrFSWkTnHyGSgTipIpppcgeupL2vaCUpt1ttbLRBDMK0r2Y8kWvVyrXwYsXiTtId7EzWAIzeZ8HrqNfDpdhkwx/aQKBpRDrIpl4UIJ8WTA4km90Jy/vX65HMEpFYwqJrMXnlAOnr9+hKrmy8PqlwNKoph+EiKDt95W6yjP9fAK/vw9JUQoyuGJlR5RamMOm5hkEA35Q0kyIohl6ekmABvql+qYJN9NbMRSxYRPLyBpSWiYeocIcx/JM4lDriAa3q5/IF+pAvLExmFRRY65At8e3vAO0wv5cmPD8grHrMPHvKGWDAJd4NUTyrDsR//iyBzeajwp52MHlOXdTzKW0TD2y2iG0nVlInEQxtCMNIfHgltDPDnnAxV/AGf/Jr490dz6GE/iFkOhFFrgK4U21y+1fu2Q3TqM2P3d6iSe65fpcSg/aWWi25uiFlR9EsrDhmziFaVNPLm2/vIgkFXEvQAnvZzXL6nUgNtQFk9a8Fm8WRwEMx1uynaeY/GiVqg1vmm+tKlfYv4hmhlbruQ/bf/Y4gCQVWDWw5N32Mi8gywlFJ6yW7bxpHpPGAzTcqWlDVVhyfR+b/2SmVAP0RsjHAem3rTTS1TJKeCPwTlXwPvW27xZufbdGfvHelPOxEIP37a7mDeHFhyCck8+NhDmT18o08AyntyUj+VugxCaKX2hdb4v80P7SunLCPGkgS+A8lAnEfiRJ5Q0pSVbkz11El9eAeN7MrKJtR6+Z2dVPyjjD0fpZchWwDdKr3oZx16GbKbd19n1vQL2AaWNjWY2dDWnN/G9xCY8JyfYUGXObo0v2lh2wdd86WUuqaJphPqdLz35PoEXVzax08N37h8b7Y6+Sktrc9LuYsp4c7/9SaIdNa7D6pcS7Q0yPYeWlPzlCiZ+vg9lruu7PbkCz14B4e/qzGqbHr5v7/xdUWZ6Ikrt/Lm2s+rE32GAhFNZVChd87FecuuUn3O++2wixIs5v+nu3PrwGHbWSeZ+bexsgMDKOXx76iTsgj+vgI0wx7rJpr0M335ukOtsUvwylE7Lo18Ho9y3Lnp5vmVeO8Csf4q18zFX4kl9vDmgJICNaw44Hyj5hcQHSejwrtrPz3iKmWnNAdAKrVmTYJovTfGkmp+E9XUryOv1JzGNUNf3fUxD2sH3oSjDZiPMqw3KD/LwGEos9gaM9fVQlNrs1vYzLYSYhaCsf67Wr1i+rnOUhphEH09qslvGcNGCv/hMSr2C5vpjuYC4uTKUWWH3+xtl9Fy/DMa1tSz4emLJLbqzvo70rNmkIffdZ9UvGR8k38N7n0RyU3fWzwnktYd9Zb3TzXt9H1Bf4Liu5GrCKWK8XrsLgk9wXHZLF08u8rHGeJMcc8VXz4wjUY3x9bz+zFGSA69GL8AmnrTMx6rXBgnbNujWBi359KfAN5ytERr66qeRgdavWTdOKC+oTwK+l4RSKPXaIC2/8FwniZIvKK2EErA8X2Rb+bp+vZolwgnlBbUl+OT6JRiOm5mt92omED9KaAuUZLXeWecGuZyOVF3YYtP5qrbaDE9CSTYV+1SUGOTYF9LaPfX4XEFJYB7v4dnEmwu9nEAuVyi+tqLEMOmPejqXVn4MpLVhjTvvWyAcAaVYh2nVneLOqjCcn6iza407u7ASmlEUpniTTFLCOVeq1aa1GeR1dtgVLIF5/7s1r0CYL41DekRh8n3EY9nUa2rNw3Z+pBfC3t5neXhgtr+kbuWwCae0SWW7Pd70X78UsltAOodWuz66btZQfkvnn3erb+fbxJuz+uXO/X0KaUPU1VXgDKhyCr1L21fDe+AulLi/Dw/N3OPJxb7yhp1HS4UTSw4VKr/lTbphI5wQ4BJvDqB8eAXJYgfxzq6GWTMawat2Ig8/Yv/YCIC4W0jntOe66uSgy6Wa3u/xjtI6nsyaW49UZ1FsX4tZLcYre2D9/RmPKPfVL7fvbZjlRR7eWqg7hhY+Nhbey2/daVkI3+RegyLPnPc25Iq7oX5JHlfTaREymF9bjtQpw+Wwl5C2j2owLNv3qTQO6YW1wXpSPVrD6fNEsNb+eKTyZXEOKoKXG1lce4LvA0B4u1ielgzvdt1ZlrYnhCKIvusB2oEoAe5F+zMgUfu00M6q2XKgLQZ6S9xQ2sWTRd1tPfMadrWhO8t682HhCLZNRr2E/fVL3rcsnqzuyOGQS4RWh20Z3lUTkZEgNm4UVaTquwUo03w5egV173p0Obo8tDir58X1DFTSoelY4VcJvdH3wRPO1aUbuUBto1HPfQeiQ3gjJteHh4eN6pd52jDJo9rEyWr6WCeE9R67mEaU2qzz0PnRdoujFKdbgrx6OQ8d9s04YvVZZ0NoFvZ7u3EgJG9hWT48/fIFtq8sXY03A/4Y+EwynqMHXq0vSRYw/YHEBC/XeMzfbvTwiFn1J4h0wqBXkBeC8+nk+8T77J+ChH3kysaLTooE+8qEchFPFg8fNkcWhAed3n+b/Px3tla/XJzNFpQX3x3JaOxK1SGQ+wnBFwuNF2ezKWeS+zEYpz3uVIezeiHYZcqZROEVJLsnay2xPcNUhyP6ugEM7Xwf+aBHr0KQzlyeTeaT4MOMMgo8m3iJ2mO7khD8WoKa62UUHaWSowjYzB6mlQOhPol09UtmdL1PkrIEX+VBBla8SZuvzpfabKE/OmaunBNq05X6pW2SaQfB19EDlhA5O0rn4SnO8PZ//4fqwGTvBG+a+mUenQASO7Ny+e4YgnUuxCQZIRaFHWvgR+qUNR//BAENMik+odR3xnjF1J/zMIcDz+T6ZXHKQMJ+geJQ+kMIJgrf56SuPI/QXYHypIF0IsF0Ub9M/lpX0hOkpPolODROeA+hO5B8H3A7yficST2QfB+wXgr+nQSXKN8t0gEko0z+KMqxfjn6PocHfW8guPB9/iLK/xZewT+Uv5X+W2S3/ipKsX6ZpX/SxqbZvH75R2cS2cP7myhl36eHf4/+A3I+NqzDihB7+Zi02JvI0kXWLJ35pRW/cuaHIv815WOJchYkB5TnAd1qO8+xLaKcbFo4zd5DIPyC8tl7B+zF94LzcXvJJx8Y+arvG/n4A+t89v2MykeFzsaLGFVBrY/pTZgNK/lX9hWhd+X8SMtfWVmxZyW/xbtbDrsySPxBymjaZ8TA50J93srEfyjfjFKtl07rLwW9TDR6lwx6qeWv6eXu9ZexAZWWb2dt9HwB1VZr9PbdxdjObvY
            jOJr4v2nfrX8o34jSxgsw6GXsXS9jg17aeAli/ZIGYSlv5ryoKV2042eH8XN7vgBq42q2WF7NZsUf+yYaV6OZ+FE8G6F2/PN3FzPo4dlewf9KWFiwU36hhwAAAABJRU5ErkJggg=="
            alt="jhgh"
          />

          <p className="space-x-4 mt-11 flex flex-col items-center font-mono font-light dark:text-white">
            <strong>Tomas Heger </strong>
            <strong>Sennzo Creater </strong>
          </p>
          <p className="font-medium  m-8 mb-14 font-poppin text-gray-800 dark:text-white">
            My aim is to help people in their decision making.
            <br /> Currently I am a student in flight school with a dream to{" "}
            <br /> become a pilot. My passion are movies and sport. If you{" "}
            <br /> can, support Sennzo, lets become something bigger <br />{" "}
            together.
            <br />
            "We can make the world a better place!“
          </p>
          <button className="w-36 rounded-full py-1 bg-[#3a72b9] text-white hover:bg-white hover:border-[#3a72b9] hover:text-[#3a72b9] border-2 font-semibold text-xl">
            Contact
          </button>
        </div>
        <hr className="w-10/12 border-gray-300 mt-12 mb-24" />

        <div className=" space-y-5 w-11/12 mx-auto md:w-2/4 flex flex-col mb-24 ">
          <h1 className="font-quick font-extrabold text-4xl dark:text-white">
            The future of Sennzo: Our Roadmap.
          </h1>
          <p className="font-medium  font-poppin text-gray-800 dark:text-white">
            Our aim is to constantly improve Sennzo. Thus we designed a roadmap
            for you to <br /> See Where Sennzo is heading. For you to be excited
            about further updates. Sennzo <br /> will grow, until our vision is
            not 100% accomplished.
          </p>
        </div>

        <div className=" space-y-5 w-11/12 mx-auto md:w-4/6 flex flex-col ">
          <img className="w-full" src="/img/roadmap.svg" alt="" />
        </div>

        <div className="w-11/12 mx-auto md:w-4/6 space-x-5 flex   mt-20 pb-10   overflow-y-auto">
          <div
            style={{ minWidth: "350px" }}
            className="border-2  p-5 flex flex-col space-y-8 rounded-3xl"
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
          <div
            style={{ minWidth: "350px" }}
            className=" border-2 p-5 flex flex-col space-y-8 rounded-3xl "
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
          <div
            style={{ minWidth: "350px" }}
            className=" border-2 p-5 flex flex-col space-y-8 rounded-3xl"
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
          <div
            style={{ minWidth: "350px" }}
            className=" border-2 p-5 flex flex-col space-y-8 rounded-3xl"
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
          <div
            style={{ minWidth: "350px" }}
            className=" border-2 p-5 flex flex-col space-y-8 rounded-3xl"
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
          <div
            style={{ minWidth: "350px" }}
            className=" border-2 p-5 flex flex-col space-y-8 rounded-3xl"
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
          <div
            style={{ minWidth: "350px" }}
            className=" border-2 p-5 flex flex-col space-y-8 rounded-3xl"
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
          <div
            style={{ minWidth: "350px" }}
            className=" border-2 p-5 flex flex-col space-y-8 rounded-3xl"
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
          <div
            style={{ minWidth: "350px" }}
            className=" border-2 p-5 flex flex-col space-y-8 rounded-3xl"
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
          <div
            style={{ minWidth: "350px" }}
            className="  border-2 p-5 flex flex-col space-y-8 rounded-3xl"
          >
            <h2 className="text-2xl font-quick dark:text-white font-extrabold">
              Electronic Quiz is now avaliable
            </h2>
            <p className=" dark:text-white text-sm font-quick font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              debitis nesciunt animi ipsam consectetur, at deleniti asperiores
              quo suscipit explicabo ea expedita beatae consequatur. Fugiat
              quasi nemo veniam nobis.Lorem ipsum dolor sit amet consectetur
              ipsam consectetur, at deleniti asperiores quo suscipit explicabo
              ea expedita beatae consequatur. Fugiat quasi nemo veniam nobis.
            </p>
          </div>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
