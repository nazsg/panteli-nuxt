<template>
  <div class="contact">
    <form >
      <li>
        <label for="">Name</label> <input type="text">
      </li>
      <li >
        <label for="">Email</label> <input type="text">
      </li>      
      <li >
        <label for="">Message</label> <textarea name="" id="" cols="30" rows="10"></textarea>
      </li>      
      <li class="actions">
        <DeleteIcon title="Clear" :size=46 /> 
        <EmailIcon title="Send Email" :size=46 />
      </li>
    </form>

    <div class="wave"></div>

  </div>
</template>

<script>
import EmailIcon from 'vue-material-design-icons/EmailSendOutline.vue'
import DeleteIcon from 'vue-material-design-icons/TrashCanOutline.vue'
export default {
  components: { EmailIcon, DeleteIcon },
}
</script>

<style lang="scss" scoped>
svg  {
  // color: red;
}
div.wave {
  // background-image: url("/panteli-nuxt/bubbles2.svg");
  height: 60px;
  background-position: bottom right;
  // background-size: cover;
  width: 100%;
}

$width: 100%;
form {
  // background-image: url('/panteli-nuxt/triangle.svg');
  border: 1px solid #000;
  background-color: rgba(209, 207, 207, 0.733);
  margin: 10px auto;
  font-family: Roboto;
  legend {
    color: red;
    display: block;
    text-align: center;
    width: 200px;
    border: 1px solid #000;
    margin: 0 auto;
  }
  input, textarea {
    border: 1px solid rgb(12, 142, 202);
    flex-basis: 100%;
    margin-left: 10px;
  }
  display: flex;
  flex-direction: column;
  li {
    * {
      padding: 7px;
    }
    display: flex;
    
    // border: 1px solid rgb(170, 25, 25);
    margin: 7px;

    label {
      flex-basis: 100px;
      // background-color: #fff;
    }

  }
  .actions {
    justify-self: center;
  }
  a svg {
    // margin-top: 10px;
    font-size: 5rem;
    transition: .5s;
    &:hover { 
      color: white;
      transition: .5s;
      cursor: pointer;
    }
  }
}

@media (min-width: 700px) {
  form {
    width: 95%;
    li {
      justify-content: center;

      input, textarea {
        flex-basis: 400px;
      }
    }
  }
}
</style>