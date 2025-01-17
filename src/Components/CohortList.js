

export default function CohortList({displayAllStudents, sortCohort}) {
  return (
    <div className='cohort-list'>
      <aside>
        <h3>Choose a Class by Start Date</h3>
        <hr></hr>
        <h4 onClick={displayAllStudents}>All Students</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Winter 2026")}>Winter 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Fall 2026")}>Fall 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Summer 2026")}>Summer 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Spring 2026")}>Spring 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Winter 2025")}>Winter 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Fall 2025")}>Fall 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Summer 2025")} >Summer 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Spring 2025")}>Spring 2025</h4>
       
      </aside>
    </div>
  )
}
