<template>
    <h1>job</h1>
    <div v-if="jobs.length">
        <div v-for="job in jobs" :key="job.id" class="job">
            <router-link :to="{ name: 'jobsDetails', params: { id: job.id } }">
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>
    </div>
    <div v-else>
        <p v-if="error">{{ error }}</p>
        <p v-else>loading jobs...</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [],
            error: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(err => {
                console.error(err);
                this.error = 'Failed to load jobs.';
            });
    }
}
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover {
    background-color: #ddd;
}

.job a {
    text-decoration: none;
}
</style>
