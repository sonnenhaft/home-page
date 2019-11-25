<template>
    <div class="loader">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'loader'
  }
</script>

<style scoped>
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow: hidden;

        & ul {
            display: flex;

            & li {
                width: 20px;
                height: 20px;
                margin: 10px;
                list-style-type: none;
                transition: 0.5s all ease;
            }
        }
    }

    ul li:nth-child(1) {
        animation: right-1 1s infinite alternate;
        background-color: #DDD8B8;
        animation-delay: 100ms;
    }

    ul li:nth-child(2) {
        animation: right-2 1s infinite alternate;
        background-color: #B3CBB9;
        animation-delay: 200ms;
    }

    ul li:nth-child(3) {
        animation: right-3 1s infinite alternate;
        background-color: #84A9C0;
        animation-delay: 300ms;
    }

    ul li:nth-child(4) {
        animation: right-4 1s infinite alternate;
        background-color: #6A66A3;
        animation-delay: 400ms;
    }

    ul li:nth-child(5) {
        animation: right-5 1s infinite alternate;
        background-color: #58548E;
        animation-delay: 500ms;
    }

    @keyframes right-1 {
        0% {
            transform: translateY(-60px);
        }
        100% {
            transform: translateY(60px);
        }
    }

    @keyframes right-2 {
        0% {
            transform: translateY(-70px);
        }
        100% {
            transform: translateY(70px);
        }
    }

    @keyframes right-3 {
        0% {
            transform: translateY(-80px);
        }
        100% {
            transform: translateY(80px);
        }
    }

    @keyframes right-4 {
        0% {
            transform: translateY(-90px);
        }
        100% {
            transform: translateY(90px);
        }
    }


    @keyframes right-5 {
        0% {
            transform: translateY(-100px);
        }
        100% {
            transform: translateY(100px);
        }
    }
</style>
