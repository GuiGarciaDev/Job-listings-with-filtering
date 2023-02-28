import { useMemo, useState } from "react"
import styles from "../styles/App.module.scss"
import mobileSvg from "../assets/bg-header-mobile.svg"
import desktopSvg from "../assets/bg-header-desktop.svg"
import JobCard from "../components/job-card/JobCard"
import { jobs, jobType } from "../data/data"
import { AnimatePresence, motion } from "framer-motion"
import { IoMdClose } from "react-icons/io"

export default function App() {
  const [filterSec, setFilterSec] = useState<boolean>(false)
  const [query, setQuery] = useState<string[]>([])

  function checkSubset(parentArray: any[], subsetArray: any[]) {
    return subsetArray.every((el) => {
      return parentArray.includes(el)
    })
  }

  function addQuery(filter: string) {
    setQuery((prev) => [...prev, filter])
  }

  function removeQuery(filter: string) {
    setQuery((prev) =>
      prev.filter((target) => {
        return target !== filter
      })
    )
  }

  const filteredJobs = useMemo(() => {
    if (query.length > 0) {
      setFilterSec(true)
      return jobs.filter((job) => {
        return checkSubset(job.languages, query)
      })
    } else {
      setFilterSec(false)
      return jobs
    }
  }, [query])

  return (
    <div className={styles.app}>
      <div className={styles.app_content}>
        <div className={styles.header}>
          <img
            className={styles.mobileImg}
            src={mobileSvg}
            alt="header background mobile"
          />
          <img
            className={styles.desktopImg}
            src={desktopSvg}
            alt="header background desktop"
          />
        </div>

        <AnimatePresence>
          {filterSec && (
            <motion.div
              className={styles.filter}
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
            >
              <div className={styles.filter_content}>
                {query.map((filter) => {
                  return (
                    <motion.div
                      key={filter}
                      className={styles.keys}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <span>{filter}</span>
                      <button onClick={() => removeQuery(filter)}>
                        <IoMdClose fontSize={15} />
                      </button>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.elements}>
          {filteredJobs.map((job) => {
            return (
              <JobCard
                job={job}
                key={job.company}
                filter={query}
                setFilter={addQuery}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
