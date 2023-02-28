import { jobType } from "../../data/data"
import styles from "./styles.module.scss"

interface JobCard {
  job: jobType
  filter: string[]
  setFilter: (filter: string) => void
}

export default function JobCard({ job, filter, setFilter }: JobCard) {
  return (
    <div className={styles.main}>
      <span className={styles.leftBorder}></span>
      <div className={styles.content}>
        <div className={styles.imgHolder}>
          <img src={job.logo} alt="company logo" />
          <div className={styles.main_sup}>
            <div className={styles.first_row}>
              <span className={styles.companyTitle}>{job.company}</span>
              <div className={styles.keysHolder}>
                {job.new ? (
                  <div className={styles.new}>
                    <span>New!</span>
                  </div>
                ) : (
                  <></>
                )}
                {job.featured ? (
                  <div className={styles.featured}>
                    <span>Featured</span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <h2>{job.position}</h2>

            <div className={styles.last_row}>
              <span>{job.postedAt}</span>
              <span>•</span>
              <span>{job.contract}</span>
              <span>•</span>
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <div className={styles.main_down}>
          {job.languages.map((language) => {
            return (
              <button
                className={styles.language}
                onClick={() => setFilter(language)}
                disabled={filter.includes(language)}
                style={
                  filter.includes(language)
                    ? {
                        backgroundColor: "var(--desaturated-dark-cyan)",
                      }
                    : {}
                }
              >
                <span
                  style={
                    filter.includes(language)
                      ? {
                          color: "var(--white)",
                        }
                      : {}
                  }
                >
                  {language}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
