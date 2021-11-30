<template>
    <div class="card">
        {{title}}
    </div>
</template>

<script>
import { getDatabase, ref, onValue } from 'firebase/database'
export default {
    name: "ZoneCard",
    props: ["title"],
    mounted() {
        onValue(ref(getDatabase(), this.title), (snapshot) => {
            console.log(snapshot.val())
        })
    }
}

</script>