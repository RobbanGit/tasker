<template>
  <main>
    <Navbar />

    <!-- table-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">View Tasks</h1>
          <a href="/tasks" class="btn btn-primary">Add Task</a>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Author</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task in tasks" :key="task.title">
                <th scope="row">{{ task.id }}</th>
                <td>{{ task.title }}</td>
                <td>{{ task.description }}</td>
                <td>{{ task.author }}</td>
                <td>{{ task.status }}</td>
                <td>
                  <a class="btn btn-primary" :href="`/tasks/${task.id}`">Edit</a>
                  <button class="btn btn-danger mx-2" onclick="$event => deleteTasks(task.id)">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'ViewTasks',
  components: {
    Navbar
  },
  data() {
    return {
      tasks: []
    }
  },

  beforeMount() {
    this.getTasks()
  },

  methods: {
    getTasks() {
      fetch('http://localhost:8080/tasks', {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((data) => {
          this.tasks = data
          console.log(data)
        })
    },

    deleteTasks(id) {
      fetch(`http://localhost:8080/tasks/${id}`, {
        method: 'DELETE'
      }).then((data) => {
        console.log(data)
        this.getTasks()
      })
    }
  }
}
</script>
