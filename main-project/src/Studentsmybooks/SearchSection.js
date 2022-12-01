import React from 'react'

function SearchSection() {
  return (
    <div>
    <form className="col-6 ">
    <Form.Control
      type="email"
      placeholder="Search by student name or email "
      onChange={handleallbookSearch}
    />
    </form>
    <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
        </a>

        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </div>
    </div>
  )
}

export default SearchSection