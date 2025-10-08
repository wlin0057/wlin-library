<template>
  <div>
    <h1>Book Count API</h1>
    <pre>{{ jsondata }}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CountBookAPI',
  data() {
    return {
      jsondata: null,
      error: null
    }
  },
  mounted() {
    this.getBookCountAPI()
  },
  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get(
          'https://us-central1-week7-wenling.cloudfunctions.net/countBooks'
        )
        this.jsondata = response.data
        this.error = null
      } catch (error) {
        console.error('Error fetching book count:', error)
        this.error = error
        this.jsondata = null
      }
    }
  }
}
</script>
