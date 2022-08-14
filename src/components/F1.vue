<template>
    <div class="ml-4 mt-4">
        <h1>F1 standings</h1>
    </div>
    <v-list :items="standings" item-title="Driver.familyName" item-value="position"></v-list>
</template>

<script>
import axios from 'axios';

export default {
    name: 'F1',

    data: () => ({
        items: [],
        standings: []
    }),

    async mounted() {
        const response = await axios.get('https://ergast.com/api/f1/current/driverStandings.json');
        this.standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    },
}
</script>