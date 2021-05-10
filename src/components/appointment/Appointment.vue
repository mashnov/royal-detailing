<template>
  <div class="appointment">
    <div class="row">
      <div class="d-none col-5 d-md-flex col-md-4">
        <AppointmentDetails />
      </div>
      <div class="col-12 col-md-7 offset-md-1">
        <AppointmentForm />
      </div>
    </div>
  </div>
</template>

<script>
import AppointmentDetails from './AppointmentDetails';
import AppointmentForm from './AppointmentForm';

export default {
  name: 'Appointment',
  components: {
    AppointmentDetails,
    AppointmentForm,
  },
};
</script>
