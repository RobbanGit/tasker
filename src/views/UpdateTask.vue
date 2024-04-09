<template>
  <main>
    <Navbar />
    <div class="my-5">
      <div class="mx-auto w-25" style="max-width: 100">
        <h2 class="text-center mb-3">Update Task</h2>
        <form @submit.prevent="UpdateTask">
          <!-- form for title when adding task-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="title" class="form-label">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                class="form-control"
                placeholder="title"
                required
                v-model="task.title"
              />
            </div>
          </div>

          <!-- form for description when adding task-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="description" class="form-label">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                class="form-control"
                placeholder="description"
                required
                v-model="task.description"
              />
            </div>
          </div>

          <!-- form for author when adding task //Note to self: remove and change so it grabs the author by itself -->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="description" class="form-label">Description</label>
              <input
                type="text"
                name="author"
                id="author"
                class="form-control"
                placeholder="author"
                required
                v-model="task.author"
              />
            </div>
          </div>

          <!-- form for status when adding task //Note to self: Remove and change default to 'Uncompleted' and add a button to toggle it between 'Uncompleted' and 'Completed' -->
          <label for="status" class="form-label">Status</label>
          <div class="form-check">
            <input
              type="radio"
              name="status"
              id="uncompleted"
              value="uncompleted"
              v-model="task.status"
            />
            <label for="uncompleted" class="form-check-label">Uncompleted</label>
          </div>

          <div class="form-check">
            <input
              type="radio"
              name="status"
              id="in progress"
              value="in progress"
              v-model="task.status"
            />
            <label for="in progress" class="form-check-label">In Progress</label>
          </div>

          <div class="form-check">
            <input
              type="radio"
              name="status"
              id="completed"
              value="completed"
              v-model="task.status"
            />
            <label for="completed" class="form-check-label">Completed</label>
          </div>

          <div class="row">
            <div class="col-md-12 form-group">
              <input type="submit" value="Submit" class="btn btn-primary w-100" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'UpdateTask',
  components: {
    Navbar
  },

  data() {
    return {
      task: {
        id: '',
        title: '',
        author: '',
        description: '',
        status: ''
      }
    }
  },

  beforeMount() {
    this.GetTask()
  },

  methods: {
    GetTask() {
      fetch(`http://localhost:8080/tasks/${this.$route.params.id}`)
        .then((res) => res.json)
        .then((data) => {
          console.log('In GetTask')
          this.task = data
          console.log(this.task)
        })
    },

    UpdateTask() {
      fetch(`http://localhost:8080/tasks/${this.$route.params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: /*JSON.stringify(this.task)*/ JSON.stringify({
          id: this.$route.params.id,
          title: this.task.title,
          description: this.task.description,
          author: this.task.author,
          status: this.task.status
        })
      }).then((data) => {
        console.log(data)
        this.$router.push('/')
      })
    }
  }
}
</script>
