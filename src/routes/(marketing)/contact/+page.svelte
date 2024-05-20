<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	let errors: { [fieldName: string]: string } = {};
	let loading = false;
	let showSuccess = false;

	const formFields = [
		{
			id: 'first_name',
			label: 'First Name *',
			inputType: 'text',
			autocomplete: 'given-name',
		},
		{
			id: 'last_name',
			label: 'Last Name *',
			inputType: 'text',
			autocomplete: 'family-name',
		},
		{
			id: 'email',
			label: 'Email *',
			inputType: 'email',
			autocomplete: 'email',
		},
		{
			id: 'phone',
			label: 'Phone Number',
			inputType: 'tel',
			autocomplete: 'tel',
		},
		{
			id: 'company',
			label: 'Company Name',
			inputType: 'text',
			autocomplete: 'organization',
		},
		{
			id: 'message',
			label: 'Message',
			inputType: 'textarea',
			autocomplete: 'off',
		},
	];

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		errors = {};
		return async ({ update, result }) => {
			await update({ reset: false });
			await applyAction(result);
			loading = false;
			if (result.type === 'success') {
				showSuccess = true;
			} else if (result.type === 'failure') {
				errors = result.data?.errors ?? {};
			} else if (result.type === 'error') {
				errors = { _: 'An error occurred. Please check inputs and try again.' };
			}
		};
	};
</script>

<div
	class="mx-auto my-4 flex min-h-[70vh] flex-col place-content-center place-items-center lg:flex-row lg:place-items-start"
>
	<div
		class="flex max-w-[400px] flex-col place-content-center p-4 lg:mb-8 lg:mr-8 lg:min-h-[70vh] lg:max-w-[500px]"
	>
		<div class="px-6">
			<h1 class="mb-4 text-2xl font-bold lg:text-4xl">Contact Us</h1>
			<p class="text-lg">Talk to one of our service professionals to:</p>
			<ul class="list-outside list-disc space-y-1 py-4 pl-6">
				<li class="">Get a live demo</li>
				<li class="">Discuss your specific needs</li>
				<li>Get a quote</li>
				<li>Answer any technical questions you have</li>
			</ul>
			<p>Once you complete the form, we'll reach out to you! *</p>
			<p class="pt-8 text-sm">
				*Not really for this demo page, but you should say something like that
				😉
			</p>
		</div>
	</div>

	<div
		class="stdphone:min-w-[360px] m-4 flex min-w-[300px] max-w-[400px] flex-grow flex-col place-content-center lg:ml-10 lg:min-h-[70vh]"
	>
		{#if showSuccess}
			<div class="flex flex-col place-content-center lg:min-h-[70vh]">
				<div
					class="card card-bordered mx-2 mb-10 px-6 py-6 shadow-lg lg:mx-0 lg:p-6"
				>
					<div class="mb-4 text-2xl font-bold">Thank you!</div>
					<p class="">We've received your message and will be in touch soon.</p>
				</div>
			</div>
		{:else}
			<div class="card card-bordered mx-2 p-4 pt-6 shadow-lg lg:mx-0 lg:p-6">
				<form
					class="form-widget flex flex-col"
					method="POST"
					action="?/submitContactUs"
					use:enhance={handleSubmit}
				>
					{#each formFields as field}
						<label for={field.id}>
							<div class="flex flex-row">
								<div class="text-base font-bold">{field.label}</div>
								{#if errors[field.id]}
									<div class="ml-2 flex-grow text-right text-sm text-red-600">
										{errors[field.id]}
									</div>
								{/if}
							</div>
							{#if field.inputType === 'textarea'}
								<textarea
									id={field.id}
									name={field.id}
									autocomplete={field.autocomplete}
									rows={4}
									class="{errors[field.id]
										? 'input-error'
										: ''} input-sm input input-bordered mb-3 mt-1 h-24 w-full py-4 text-base"
								></textarea>
							{:else}
								<input
									id={field.id}
									name={field.id}
									type={field.inputType}
									autocomplete={field.autocomplete}
									class="{errors[field.id]
										? 'input-error'
										: ''} input-sm input input-bordered mb-3 mt-1 w-full py-4 text-base"
								/>
							{/if}
						</label>
					{/each}

					{#if Object.keys(errors).length > 0}
						<p class="mb-2 text-sm text-red-600">
							Please resolve above issues.
						</p>
					{/if}

					<button class="btn btn-primary {loading ? 'btn-disabled' : ''}"
						>{loading ? 'Submitting' : 'Submit'}</button
					>
				</form>
			</div>
		{/if}
	</div>
</div>
