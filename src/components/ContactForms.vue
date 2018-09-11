<template>
    <div class="contact-forms">
        <h1>Learning Forms in VueJs with VeeValidate</h1>
        <!-- Form starts here -->
        <form class="contact-forms__general">
            <div class="contact-forms__general">
                <label class="formfix">First Name</label>
                <input class="contact-forms__general-firstname" v-model="contactForm.firstName" type="text" placeholder="First Name"/>
            </div>
            <div class="contact-forms__general">
                <label class="formfix">Last Name</label>
                <input class="contact-forms__general-lastname" v-model="contactForm.lastName" type="text" placeholder="Last Name"/>
            </div>
            <div class="contact-forms__general">
                <label class="formfix">
                    <input type="checkbox" v-model="contactForm.terms">
                    I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
             <div class="contact-forms__general">
                <label><strong>Is VueJS awesome?</strong></label>
                <label class="radio">
                    <input v-model="contactForm.isAwesome" type="radio" value="Yes">
                        Yes
                </label>
                <label class="radio">
                    <input v-model="contactForm.isAwesome" type="radio" value="No">
                        No
                </label>
            </div>
            
        </form>
        <div>
            <ul>          
          <!-- loop through all the `form` properties and show their values -->
          <li v-for="(item, k) in contactForm" :key="k">
            <strong>{{ k }}:</strong> {{ item }}
          </li>
        </ul>
        </div>

        
    </div>

</template>
<script>
export default {
    name: 'ContactForms',
    data: function () {
        return {
            contactForm: {
                firstName: '',
                lastName: '',
                terms: ''
            }
        }
    }
    
}
</script>
