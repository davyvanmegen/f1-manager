<template>
    <v-navigation-drawer v-model="drawer" bottom>
        <v-list nav>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-forum" title="F1" to="f1"></v-list-item>
            <v-list-item prepend-icon="mdi-phone" title="Contact"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    name: 'NavDrawer',

    data: () => ({
        drawer: true
    }),
}
</script>