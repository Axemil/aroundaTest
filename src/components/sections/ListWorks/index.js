import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import style from "./style.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"

const ListWorks = ({ posts }) => {
  return (
    <div className={style.ListWorks}>
      {posts &&
        posts.map(({ id, slug, imageUrl, tags, title, date, author }) => {
          return (
            <div key={id}>
              <Link to={`/blog/${slug}`} className={style.item}>
                <div
                  className={style.thumbnailContainer}
                  // style={{
                  //   height: 300,
                  //   width: "100%",
                  //   backgroundColor: "gray"
                  // }}
                >
                  <LazyLoadImage className={style.thumbnail} src={imageUrl} />
                </div>

                {/* <div
                  style={{
                    height: 300,
                    width: "100%",
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                ></div> */}

                <p className={style.tag}>{tags.join(", ")}</p>
                <h2 className={style.title}>{title}</h2>
                <p className={style.public}>{`${date} by ${author}`}</p>
              </Link>
            </div>
          )
        })}
    </div>
  )
}
export default ListWorks
