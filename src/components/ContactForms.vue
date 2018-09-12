<template>
    <div class="contact-forms">
        <h1>Learning Forms in VueJs with VeeValidate</h1>
        <!-- Form starts here -->
        <form>
            <div class="contact-forms__general">
                <label class="formfix" 
                       :class="{'validations': errors.has('firstName')}">
                       First Name
                </label>
                <input name="firstName"
                       class="contact-forms__general-firstname" 
                       v-model="contactForm.firstName"
                       :class="{'has-error': errors.has('firstName')}"
                       v-validate="{required: true, min: 3}"
                       type="text" 
                       required
                       placeholder="First Name"/>
                <p class="validations" v-show="errors.has('firstName')">
                    {{ errors.first('firstName') }}
                </p>
            </div>
            <div class="contact-forms__general">
                <label class="formfix" 
                       :class="{'validations': errors.has('lastName')}">
                       Last Name
                </label>
                <input name="lastName"
                       class="contact-forms__general-lastname" 
                       v-model="contactForm.lastName"
                       :class="{'has-error': errors.has('lastName')}"
                       v-validate="{required: true, min: 3}"
                       type="text" 
                       required
                       placeholder="Last Name"/>
                <p class="validations" v-show="errors.has('lastName')">
                    {{ errors.first('lastName') }}
                </p>
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
<style scoped>
    .has-error {
        border: 1px solid red
    }
    .validations {
        color: red;
        margin: 0;
    }
</style>

