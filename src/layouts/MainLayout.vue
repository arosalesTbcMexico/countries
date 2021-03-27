<template>
    <div class="container-fluid">
        <the-header></the-header>
        <main class="row bg-light">
            <slot></slot>
        </main>
    </div>
</template>

<script>
    import TheHeader from './../components/Header'
    export default {
        components: {
            TheHeader
        }
    }
</script>